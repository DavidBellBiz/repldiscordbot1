const { MessageEmbed, DiscordAPIError } = require('discord.js');
let days = 0
let week = 0

module.exports = {
    name: "uptime",
  category: "info",
  description: "Shows how lung the bot has been up",
  run: async (bot, message, args) => {
      message.delete()
      let uptime = ``;
      let totalseconds = (bot.uptime / 1000)
      let hours = Math.floor(totalseconds / 3600)
      totalseconds %= 3600
      let minutes = Math.floor(totalseconds / 60)
      let seconds = Math.floor(totalseconds % 60)

      if (hours > 23) {
          days = days + 1
          hours = 0
      }

      if(week > 0) {
          uptime += `${week} weeks, `
      }
      if(minutes > 60) {
          minutes = 0;
      }

      uptime += `${days } days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

      let uptimeembed = new MessageEmbed()
      .setColor(`#228B22`)
      .addField('Uptime', uptime)
      await message.channel.send(uptimeembed)
    } 
}