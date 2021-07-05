const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unlock",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('You Do Not Have Permission To UnLock Channels')
        if(!args[0]) return message.channel.send('You did not mention any channels.');

        const role = message.guild.roles.everyone;

        await message.mentions.channels.forEach(async channel => {
            if(!channel.name.startsWith('🔒')) return message.channel.send(`,#${channel.id}> is Already unlocked`);
            await channel.setName(channel.name.substring(1));
            try {
                await channel.updateOverwrite(role, {
                    SEND_MESSAGES: true
                });
                message.channel.send(`<#${channel.id}> has been unlocked!`);
            } catch (err) {
                console.log(err);
                message.channel.send('I could not unlock this channel.');
            }
        });
    }
}