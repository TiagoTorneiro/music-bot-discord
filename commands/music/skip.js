module.exports = {
    name: 'skip',
    aliases: [],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nada encontrado ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, Musica skipada✅` : `${message.author}, Algo deu errado ❌`);
    },
};