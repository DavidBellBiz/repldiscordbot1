const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban', 
    command: ['ban', 'b', 'burn'],
    category: "moderation",
    run: async (client, message, args) => {
      message.delete()
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`You are unable to ban members`)
        }
        if (!args[0]) {
            return message.channel.send(`Please mention a user!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const reason = args.slice(1).join(" ")

        let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "logs");

        const embed = new MessageEmbed()
        .setTitle('Banned Logs')
        .addFields(
		     { name: '**User Banned**', value: `${member.user.username}` },
         {name: '**User Id**', value: `${member.id}`},
		     { name: '**Banned Reason**', value: `${reason}` },
		     { name: '**Staff Member**', value: `${message.author.tag}`,},
         )
         .setColor('RANDOM')

         const bembed = new MessageEmbed()
         .setDescription(`**Server:** ${message.guild.name}\n**Actioned By:** ${message.author.username}\n**Action:** Ban\n**Reason:** ${reason}`)
         .setTimestamp()
         .setColor('RANDOM')

        try {
            await member.ban();
            await message.channel.send(`${member} has been banned!`)
            await member.send(bembed)
            Channel.send(embed)
        } catch (e) {
            return message.channel.send(`User is not in the server!`)
        }

    }
}
