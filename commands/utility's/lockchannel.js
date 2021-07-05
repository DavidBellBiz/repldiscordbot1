const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lock",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('You Do Not Have Permission To Lock Down Channels')
        if(!args[0]) return message.channel.send('You did not mention any channels.');

        const role = message.guild.roles.everyone;

        await message.mentions.channels.forEach(async channel => {
            if(channel.name.startsWith('🔒')) return message.channel.send(`,#${channel.id}> is Already locked`);
            await channel.setName(`🔒${channel.name}`);
            try {
                await channel.updateOverwrite(role, {
                    SEND_MESSAGES: false
                });
                message.channel.send(`<#${channel.id}> has been locked!`);
            } catch (err) {
                console.log(err);
                message.channel.send('I could not lock this channel.');
            }
        });
    }
}