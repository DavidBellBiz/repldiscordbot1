const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "accept",
  category: "utils",
  description: "Shows how many servers the bot is in",
    run: async (client, message, args) => {
    const roleName = message.guild.roles.cache.find(r => (r.name ===   'Staff App Reviewer'))
    const member = message.mentions.members.first()
    const msg = args.slice(1).join(" ");

    if(!roleName) {
      return message.channel.send('You do not have permission to use this command')
    }

    if(!member) {
      return message.channel.send('Please mention a user to accept')
    }

    const embed = new MessageEmbed()
    .setTitle('Application Approved')
    .setThumbnail('https://copdnewstoday.com/wp-content/uploads/2020/01/shutterstock_570636568-1400x480@2x.jpg')
    .setColor('GREEN')
    .addFields(
            {
        "name": "> Member Approved:",
        "value": member
      },
      {
        "name": "> Approved by:",
        "value": `<@${message.author.id}>`
      },
      {
        "name": "> Message:",
        "value": "```yaml\n" + msg + "\n```"
      }
    )
    message.channel.send('Member approved and DMed')
    member.send(embed)
 }
}