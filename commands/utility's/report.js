const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    message.delete()
    let User = message.mentions.users.first();

    if (!User) {
      return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = args.slice(1).join(" ")
      if (!Reason) {
        return message.channel.send(
          `You did not specify a reason for the report!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `There is no channel in this guild which is called \`reports\``
        );
      let Embed = new MessageEmbed()
        .setTitle(`New report!`)
        .setDescription(
          `\`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "**Reporter ID**", value: `${message.author.id}`, inline: true },
          { name: "**Reporter Tag**", value: `${message.author.tag}`, inline: true },
          { name: "**Reported ID**", value: `${User.id}`, inline: true },
          { name: "**Reported Tag**", value: `${User.tag}`, inline: true },
          { name: "**Reason**", value: `\`${Reason}\``, inline: true },
          {
            name: "**Report Filed Date**",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      message.channel.send(`You have succesfully reported ${User.tag}`)
      Channel.send(Embed);
      User.send(`You have been reported in ${message.guild.name} please wait for staff to contact you`)
    }
  },
};
