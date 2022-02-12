const { Player } = require('discord-player');
const { Client, Intents, Collection } = require('discord.js');
const { readdirSync } = require('fs');

let client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});





client.config = require('./config');
client.player = new Player(client, client.config.opt.discordPlayer);
client.commands = new Collection();
const player = client.player

const events = readdirSync('./events/').filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    console.log(`-> Loaded event ${file.split('.')[0]}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
};
console.log(`-> Loaded commands...`);
readdirSync('./commands/').forEach(dirs => {
    const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`${command.name.toLowerCase()} Load Command!`);
        client.commands.set(command.name.toLowerCase(), command);
        delete require.cache[require.resolve(`./commands/${dirs}/${file}`)];
    };
});

player.on('error', (queue, error) => {
    console.log(`Ha um problema com a fila de músicas=> ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Nao me estou a conseguir conectar => ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`🎵 Começas te a ouvir: **${track.title}** -> No canal: **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** adicionado a playlist ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Alguém do canal onde estou conectado me desconectou QUE MALDITO :(, toda a playlist foi apagada! ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Sai do canal porque estava sozinho e triste ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('A musicas que colocaram acabaram entao coloquem mais musicas para eu ficar feliz (e para eu nao vos ter de matar )  ✅');
});

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);

if(process.env.TOKEN){
client.login(process.env.TOKEN).catch(e => {
console.log("O token do bot que você coloco em mi está incorreto ou as minhas Premisoes estão DESATIVADAS!")
})
} else {
console.log("Escreva o meu token de bot no arquivo .env em mi seu retardado!!!")
}
