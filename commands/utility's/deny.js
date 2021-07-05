const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "deny",
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
      return message.channel.send('Please mention a user to deny')
    }

    const embed = new MessageEmbed()
    .setTitle('Application Denied')
    .setThumbnail('https://w0.pngwave.com/png/490/44/denied-png-clip-art.png')
    .setColor('RED')
    .addFields(
            {
        "name": "> Member Denied:",
        "value": member
      },
      {
        "name": "> Denied by:",
        "value": `<@${message.author.id}>`
      },
      {
        "name": "> Message:",
        "value": "```yaml\n" + msg + "\n```"
      }
    )
    message.channel.send('Member denied and DMed')
    member.send(embed)
 }
}