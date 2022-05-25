module.exports = {
    name: 'save',
    aliases: [],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);

  if (!queue || !queue.playing) return message.channel.send(`${message.author}, Nada a tocar zecas ❌`);

        message.author.send(`Musica salva: **${queue.current.title}** | ${queue.current.author}, servidor salvado: **${message.guild.name}** ✅`) .then(() => {
            message.channel.send(`No teu dm esta a musica que salvaste. ✅`);
        }).catch(error => {
            message.channel.send(`${message.author}, Nao te consigo enviar messagem ❌`);
        });
    },
};