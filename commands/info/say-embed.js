const { MessageFlags, MessageEmbed } = require("discord.js");

module.exports = {
    name: "say-embed",
    desciption: "say command",

    async run (client, message, args) {
        
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            const nembed = new MessageEmbed()
            nembed.setAuthor(`${message.author.username}`)
            .setDescription(msg)
            .setColor('RANDOM')
            await textChannel.send(nembed) 
        } else {
            msg = args.join(" ");
            const membed = new MessageEmbed()
            membed.setAuthor(`${message.author.username}`)
            .setDescription(msg)
            .setColor('RANDOM')
            message.channel.send(membed)
        }
    }
}