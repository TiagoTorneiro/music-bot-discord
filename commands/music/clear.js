module.exports = {
    name: 'clear',
    aliases: [],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nada esta a dar❌`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, There is already no music in queue after the current one ❌`);

        await queue.clear();

        message.channel.send(`KKOOOBBE a musica fui direta para o lixo 🗑️`);
    },
};