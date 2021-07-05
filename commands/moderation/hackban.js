module.exports = {
  name: 'hack-ban', 
  command: ['ban', 'b', 'burn'],
  category: "moderation",
  run: async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) {

        return message.channel.send("Something went wrong: No permission. (BAN_MEMBERS)");

    }



    let userID = args[0];

    let reason = args.slice(1).join(" ");



    if (!userID) return message.channel.send("Please insert a valid user ID.");

    if (isNaN(userID)) return message.channel.send("User ID must be a number.");

    if (userID === message.author.id) return message.channel.send("You can't ban yourself.");

    if (userID === client.user.id) return message.channel.send("You can't ban me. Why?");



    if (!reason) reason = "No reason provided";



    client.users.fetch(userID).then(async user => {

        await message.guild.members.ban(user.id, {reason: reason});

        return message.channel.send(`**${user.tag}** has been banned, from outside this server.`);

        userID.send(`You have been banned in ${message.guild.name}`)

        let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "logs");

        const embed = new MessageEmbed()
        .setTitle('Banned Logs')
        .addFields(
		     { name: '**User Banned**', value: `${member.tag}` },
         {name: '**User Id**', value: `${member.id}`},
		     { name: '**Banned Reason**', value: `${reason}` },
		     { name: '**Staff Member**', value: `${message.author.tag}`,},
         )
         .setColor('RANDOM')
         Channel.send(embed)

    }).catch(error => {

        // If the user is unavailable, return some errors. (Recommended)

        return message.channel.send(`An error occurred: **${error}**`);

    })

}}