// this is where you add your stuff for when a users joins
const { MessageEmbed } = require('discord.js')
module.exports = async (member) => {
  
    // this is finding the welcome channel
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
    if (!channel) return;
    const embed = new MessageEmbed()
    .setTitle('Welcome')
    .setDescription(`Welcome <@${member.id}> to ${message.guild.name} Please make sure to read our <#794544848270000179> and verify your community in <#794544998061965313> If you have any question please create a ticket and have fun meeting other people from other communites`)
    .setFooter(`${member.user.username}`)
    .setTimestamp()
    
    // this is sendint the message
    channel.send(embed); 
  
  };
