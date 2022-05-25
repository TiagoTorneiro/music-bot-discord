module.exports = {
    name: 'stop',
    aliases: ['st'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nada a tocar. ❌`);

        queue.destroy();

        message.channel.send(`a música que toca neste servidor foi desativada, até a próxima ✅`);
    },
};