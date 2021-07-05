const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "dm",
  category: "fun",
  description: "DMs a user",
    run: async (client, message, args) => {
      message.delete()
      let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
      if(!user) return message.channel.send('Please mention a valid user!')
      if(!args.slice(1).join(" ")) return message.channel.send('You did not provide a message to send!')

      const embed = new MessageEmbed()
      .setTitle('New DM Recieved :calling:')
      .setDescription(args.slice(1).join(" "))
      .setFooter(`Direct Message Sent By: ${message.author.tag}`)
      .setTimestamp()


      let LChannel = message.guild.channels.cache.find(
        (ch) => ch.name === "logs");

        const lembed = new MessageEmbed()
        .setTitle('DM Logs')
        .addFields(
		     { name: '**User DMed Name**', value: `${user.tag}` },
         {name: '**User DMed Id**', value: `${user.id}`},
		     { name: '**What was DMed**', value: `${args.slice(1).join(" ")}` },
		     { name: '**Who DMed**', value: `${message.author.tag}`,},
         )
         .setTimestamp()

      const nembed = new MessageEmbed()
      .setDescription(`${message.author.tag} I could not DM this user!`)
      
      const ymbed = new MessageEmbed()
      .setDescription(`${message.author.tag} I have successfully DMed ${user.user.tag}`)

      user.user.send(embed).catch((error) => message.channel.send(nembed)).then(() => message.channel.send(ymbed))
      LChannel.send(lembed)
}}