exports.getBotGuilds = async(client) => {
    try {
        const guilds = client.guilds.cache.map(guild => ({
            id: guild.id,
            name: guild.name,
            icon: guild.iconURL(),
            members: guild.memberCount
        }));

        return guilds;
    } catch (error) {
        console.log(error);

        return [];
    }
};
