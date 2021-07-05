const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "members",
  category: "info",
  description: "Shows how many servers the bot is in",
    run: async (client, message, args) => {
    try {
    const embed = new MessageEmbed()
    .setDescription('**There are ' + message.guild.memberCount + ' members in this server!**')
    .setColor('RANDOM')
    message.channel.send(embed)
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
 }
}