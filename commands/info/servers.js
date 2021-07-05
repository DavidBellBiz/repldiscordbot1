const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "servers",
  category: "info",
  description: "Shows how many servers the bot is in",
    run: async (client, message, args) => {
      if(!message.member.user.id == "748353838850768906") {
        return message.channel.send('You can not use this command')
      } 
      client.guilds.cache.find((guild) => {
      
      const embed = new MessageEmbed()
      .setTitle('Lets see how many servers I am in')
      .setDescription(`**${guild.name}** With **${guild.memberCount} members**`)
      message.channel.send(`**${guild.name}** With **${guild.memberCount} members**`)
  })
 }
}