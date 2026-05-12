import { SlashCommandBuilder } from "discord.js";
import music from "../../utils/musicPlayer.js";
import play from "play-dl";

export default {
  data: new SlashCommandBuilder()
    .setName("music")
    .setDescription("Music player")
    .addSubcommand(sub =>
      sub
        .setName("play")
        .setDescription("Play a song")
        .addStringOption(opt =>
          opt.setName("query").setDescription("URL or search").setRequired(true)
        )
    )
    .addSubcommand(sub =>
      sub.setName("skip").setDescription("Skip the current song")
    )
    .addSubcommand(sub =>
      sub.setName("stop").setDescription("Stop and clear queue")
    )
    .addSubcommand(sub =>
      sub.setName("queue").setDescription("Show the queue")
    ),

  async execute(interaction) {
    const sub = interaction.options.getSubcommand();

    if (!interaction.member.voice.channel) {
      return interaction.reply({
        content: "You must be in a voice channel.",
        ephemeral: true,
      });
    }

    if (sub === "play") {
      const query = interaction.options.getString("query");
      await interaction.reply(`🔍 Searching for **${query}** ...`);

      const result = await play.search(query, { limit: 1 });
      if (!result.length) return interaction.followUp("No results found.");

      const song = {
        title: result[0].title,
        url: result[0].url,
      };

      await music.playSong(interaction, song);
      return;
    }

    if (sub === "skip") {
      const ok = music.skip(interaction);
      return interaction.reply(ok ? "⏭️ Skipped." : "Nothing to skip.");
    }

    if (sub === "stop") {
      const ok = music.stop(interaction);
      return interaction.reply(ok ? "🛑 Stopped." : "Nothing is playing.");
    }

    if (sub === "queue") {
      const q = music.getQueue(interaction);
      if (!q.length) return interaction.reply("Queue is empty.");

      return interaction.reply(
        "📜 **Queue:**\n" +
          q.map((s, i) => `${i + 1}. ${s.title}`).join("\n")
      );
    }
  },
};
