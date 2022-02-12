module.exports = {
        px: '-',
        playing: 'The dojo bot',

    opt: {
        DJ: {
            enabled: false, 
            roleName: 'DJ do Dojo', 
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] 
        },
        maxVol: 250,
        loopMessage: false, 
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', 
                highWaterMark: 1 << 25 
            }
        }
    }
};