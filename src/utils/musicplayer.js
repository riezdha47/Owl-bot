import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  AudioPlayerStatus,
  NoSubscriberBehavior,
  getVoiceConnection
} from "@discordjs/voice";

import play from "play-dl";

class MusicPlayer {
  constructor() {
    this.queue = new Map(); // guildId → { songs: [], player, connection }
  }

  async playSong(interaction, song) {
    const guildId = interaction.guild.id;

    if (!this.queue.has(guildId)) {
      this.queue.set(guildId, {
        songs: [],
        player: createAudioPlayer({
          behaviors: { noSubscriber: NoSubscriberBehavior.Pause },
        }),
        connection: null,
      });
    }

    const server = this.queue.get(guildId);
    server.songs.push(song);

    if (!server.connection) {
      server.connection = joinVoiceChannel({
        channelId: interaction.member.voice.channel.id,
        guildId: guildId,
        adapterCreator: interaction.guild.voiceAdapterCreator,
      });

      server.connection.subscribe(server.player);
    }

    if (server.player.state.status !== AudioPlayerStatus.Playing) {
      this._playNext(interaction);
    }
  }

  async _playNext(interaction) {
    const guildId = interaction.guild.id;
    const server = this.queue.get(guildId);

    const next = server.songs.shift();
    if (!next) {
      server.connection.destroy();
      this.queue.delete(guildId);
      return;
    }

    const stream = await play.stream(next.url);
    const resource = createAudioResource(stream.stream, {
      inputType: stream.type,
    });

    server.player.play(resource);

    interaction.followUp(`🎶 Now playing: **${next.title}**`);

    server.player.once(AudioPlayerStatus.Idle, () => {
      this._playNext(interaction);
    });
  }

  skip(interaction) {
    const guildId = interaction.guild.id;
    const server = this.queue.get(guildId);
    if (!server) return false;

    server.player.stop();
    return true;
  }

  stop(interaction) {
    const guildId = interaction.guild.id;
    const server = this.queue.get(guildId);
    if (!server) return false;

    server.songs = [];
    server.player.stop();

    const conn = getVoiceConnection(guildId);
    if (conn) conn.destroy();

    this.queue.delete(guildId);
    return true;
  }

  getQueue(interaction) {
    const guildId = interaction.guild.id;
    const server = this.queue.get(guildId);
    return server?.songs || [];
  }
}

export default new MusicPlayer();
