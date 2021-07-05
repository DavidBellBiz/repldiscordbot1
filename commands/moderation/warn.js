// const { MessageEmbed } = require("discord.js")
// const db = require("../warns")
// module.exports = {
// config: {
//   name: "warn",
//   usage: "$warn <user> <reason>",
//   description: "Somebody misbehaving? Try warning them",
//   permissions: "administrator"
// },
//   run: async (bot, message, args) => {
//     if(!message.member,hasPermission("MANAGE_MESSAGES")){
//       return message.channel.send('You do not have permissions to use this command')
//     }

//     const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
//     if(!user){
//       return message.channel.send('You did not mention a user to warn')
//     }
//     const reason = args.slice(1).join(" ")
//     db.findOne({guildid: message.guild.id, user: user.user.id}, async(err, data) => {
//       if(err) throw err;
//       if(!data) {
//         data = new db({
//           guildid: message.guild.id
//           user: user.user.id
//           content: [
//             moderator : message.author.id,
//             reason : reason
//           ]
//         })
//       } else {
//         const obj = {
//           moderator: message.author.id,
//           reason : reason
//         }
//         data.content.push(obj)
//       }
//       data.save()
//     });
//     user.send(new MesssageEmbed()
//     .setTitle('You Were Warned')
//     .setDescription(`Server: ${message.guild.name}\nActioned By: <@${message.author.id}>\nReason: ${reason}`)
//     .setColor("RED")
//     )
//     message.channel.send(`<@${user.user.id}}> Has Been Warned`)
// }}