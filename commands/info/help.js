const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Page 1')
        .addField('`8ball`', 'Ask a question and get a responce')
        .addField('`avatar`', 'Gets a user avatar')
        .addField('`dm`', 'DMs a user')
        .addField('`meme`', 'Give a meme (Use at your own risk)')
        .addField('`poll`', 'Gives a poll to your question')
        .addField('`trivia`', 'Gives you a random question')
        .addField('`help`', 'Help command')
        .addField('`ping`', 'Gives the bot ping')
        .addField('`say-embed`', 'Puts your message in a embed')
        .addField('`say`', 'Repeats your message')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Page 2')
        .addField('`servers`', 'Shows what servers the bot is in')
        .addField('`uptime`', 'shows how long the bot has been up')
        .addField('`whois`', 'Get information about a user')
        .addField('`ban`', 'Bans a user')
        .addField('`hackban`', 'Bans a user that isn\'t in the server')
        .addField('`kick`', 'Kicks a user')
        .addField('`total-bans`', 'Shows how many bans')
        .addField('`unban`', 'Unbans a user')
        .addField('`accept`', 'Secret command')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Page 3')
        .addField('`announce`', 'Sends a announcemnt')
        .addField('`clear`', 'Purges a chat')
        .addField('`deny`', 'Secret command')
        .addField('`lock`', 'Locks a specified channel')
        .addField('`report`', 'Reports a user')
        .addField('`slowmode`', 'Puts a slowmode on a chat')
        .addField('`timer`', 'Gives you a timer')
        .addField('`unlock`', 'UNlocks the specified channel')
        .setTimestamp()


        const pages = [
                moderation,
                fun,
                utility,
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '520000';

        pagination(message, pages, emojiList, timeout)
    }
}