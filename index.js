const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey I\'m Online :)'))

app.listen(port, () => 
console.log(`Your app is listening att https://localhost:${port}`)
);

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    disableEveryone: true,
  });
const config = require("./config.json");
const token = config.token;
const db = require('quick.db')
const mongoose = require('mongoose');



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");
client.prefix = config.prefix;


["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });
 
  client.on('guildMemberAdd', async message => {
    require(".levents/guild/memberAdd")(message)
  });
  
  client.on('guildMemberRemove', async (message) => {
    require("./events/guild/memberRemove")(message)
  })

  client.on("message", async (message) => {
    if(message.content === "<@799318292405420082>" || message.content === "<@!799318292405420082>"){
  message.channel.send(`<@${message.author.id}> My Prefix Is \`${client.prefix}\``)}
  });


  client.prefix = config.prefix;

  client.login(token);