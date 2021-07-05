const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "total-bans",
    category: "extra",
    run: async (client, message, args) => {
        message.delete()
        message.guild.fetchBans().then(bans => {
            const embed = new MessageEmbed()
            .setTitle(`Total Bans`)
            .setColor(0x0faf024)
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setDescription(`This Server has a total of ${bans.size} bans`)
            .setFooter(`${message.author.username}`)
            .setTimestamp()
            message.channel.send(embed)
        }) 

    }
}