const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ajuda",
  aliases: ["h", "help"],
  showHelp: false,
  utilisation: "{prefix}help",

  execute(client, message, args) {
    const embed = new MessageEmbed();

    embed.setColor("pink");
    embed.setTitle(client.user.username);
    embed.setThumbnail(client.user.displayAvatarURL());
    const commands = client.commands.filter((x) => x.showHelp !== false);

    embed.setDescription("Espero que estejas a gostar ❤️❤️❤️");
    embed.addField(
      `Available - ${commands.size} Command Available`,
      commands
        .map(
          (x) =>
            `\`${x.name}${
              x.aliases[0] ? ` (${x.aliases.map((y) => y).join(", ")})\`` : "`"
            }`
        )
        .join(" | ")
    );

    embed.setTimestamp();
    embed.setFooter(
      "Music Bot Comman- Edited by tadar ❤️",
      message.author.avatarURL({ dynamic: true })
    );
    message.channel.send({ embeds: [embed] });
  },
};
