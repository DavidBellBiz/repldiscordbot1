const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    aliases: ['k'],
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`You are unable to kick members`)
        }
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const reason = args.slice(1).join(" ")

        if(!reason) {
          return message.channel.send('Please provide a reason for the kick')
        }
        
        let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "logs");

        const embed = new MessageEmbed()
        .setTitle('Banned Logs')
        .addFields(
		     { name: '**User Kicked**', value: `<@${member.id}>` },
         {name: '**User Id**', value: `${member.id}`},
		     { name: '**Kicked Reason**', value: `${reason}` },
		     { name: '**Staff Member**', value: `${message.author.tag}`,},
         )
         .setColor('RANDOM')


        const bembed = new MessageEmbed()
         .setDescription(`**Server:** ${message.guild.name}\n**Actioned By:** ${message.author.username}\n**Action:** Ban\n**Reason:** ${reason}`)
         .setTimestamp()
         .setColor('RANDOM')

        try {
            await member.kick();
            await message.channel.send(`${member} has been kicked!`)
            member.send(bembed)
            Channel.send(embed)
        } catch (e) {
            return message.channel.send(`User isn't in this server!`)
        }
      

    }
}