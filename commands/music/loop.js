const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

 
if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nao esta nada a correr. ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, O meu grande amigo tens primeiro de desativar o loop **(${client.config.px}loop)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, O modo loop vai O modo loop vai ...🔁` : `${message.author}, Something went wrong. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, Para ativar o modo loop tens de tirar as musicas da fila **(${client.config.px}loop queue)** ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Loop Mode: **${queue.repeatMode === 0 ? 'Inactive' : 'Active'}**, A música atual será repetida sem parar (todas as musicas da lista **${client.config.px}fila de loop**  Requeres repetir isto? e que foi brutal.) 🔂` : `${message.author}, Algo de errado nao esta certo ❌`);
};
    },
};