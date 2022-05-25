module.exports = {
    name: 'progress',
    aliases: ["time"],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nada a tocar,presico que me useim(isto souo meio errado) sei que ta mal estrito ent por favor me avisem e digam a correçao pls ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Ja estou a ser usado, ent espera ou ouve no spotify ou mesmo se querem ter uma nova esperesem pessao do edu para cantar (mas aviso que vcs nunca mais var ouvir na vida). 🎧`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};