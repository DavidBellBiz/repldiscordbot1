const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "gban",
  category: "moderation",
  description: "Bans user from all servers",
    run: async (client, message, args) => {
      if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`You are unable to ban members`)
        }
      const member = message.mentions.members.first()
      
      if (!member) {
          return message.channel.send(`Please mention a user!`)
        }
      
      client.guilds.cache.forEach((guild) => {
        member.ban()
        message.channel.send(`User banned from ${guild.name}`)
      }).catch(error => {

        // If the user is unavailable, return some errors. (Recommended)

        return message.channel.send(`An error occurred: **${error}**`)})
    }}