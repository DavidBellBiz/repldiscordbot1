const { MessageFlags, MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    desciption: "say command",

    async run (client, message, args) {
        
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            await textChannel.send(`${msg}\n\n-${message.author.tag}`) 
        } else {
            msg = args.join(" ");
            message.channel.send(`${msg}\n\n-${message.author.tag}`)
        }
    }
}