const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "react",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    message.delete()
    let msg = args.join(" ");;
  message.channel.send(msg) 
  message.react("👍")
  }};