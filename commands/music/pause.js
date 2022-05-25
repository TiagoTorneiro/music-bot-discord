module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nada por aqui ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Esta a tocar **${queue.current.title}** foi parada ✅` : `${message.author}, Algo de certo nao esta errado.ha espera ❌`);
    },
};