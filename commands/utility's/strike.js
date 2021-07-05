const { MessageEmbed } = require('discord.js');
const DESTINATION = '795646843832500244';
module.exports = {
  name: "strike",
  category: "utils",
  description: "Strikes a user",
    run: async (client, message, args) => {
      message.delete()
      if (!message.member.hasPermission('KICK_MEMBERS')) {
          return message.channel.send(`You are unable to stirke members`)
      }
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!member) {
        return message.channel.send('Please mention a user')
      }

      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "strike-logs");

      const reason = args.slice(1).join(" ")
      if(!reason) {
        return message.channel.send('Please provide a reason')
      }
      member.send(`**If you are recieving this message you have been striked in ${message.guild.name} A embed will be sent next to explain why**`)

      const embed = new MessageEmbed()
      .setTitle('Member Striked')
      .setColor('RED')
      .setThumbnail('https://cdn.sanity.io/images/0vv8moc6/drugtopics/dd6556ec3fcd3e3c80bc7a2caa5f4d146f4e507c-1000x500.png?auto=format')
      .addFields(
            {
          "name": "> Member Striked:",
          "value": member
        },
        {
          "name": "> Striked by:",
          "value": `<@${message.author.id}>`
        },
        {
          "name": "> Striked Reaoson:",
          "value": "```yaml\n" + reason + "\n```"
        })

        Channel.send(embed)
        member.send(embed)
        message.channel.send(`<@${member.id}> Strike and DMed`)
 }
}