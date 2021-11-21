const Discord = require("discord.js");

exports.run = (client, message, args) => {

  const destek = new Discord.MessageEmbed()
    .setFooter('Dəstək serverimiz', message.author.avatarURL())
    .setColor("GREEN");
  message.channel.send("Dəstək serverimiz: \n- http://gg.gg/azerium"); //
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek','Dəstək'],
  permLevel: 0,
  kategori: 'Ümumi'
};

exports.help = {
  name: "dəstək",
  description: "Dəstək Serverimiz",
  usage: "destek"
};
