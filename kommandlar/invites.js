const Discord = require("discord.js");
const config = require("../parametrler.json");
const db = require("quick.db");
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let inv =  db.fetch(`inv.${user.id}.total`) || 0;  
    message.channel.send(new Discord.MessageEmbed().addField("Dəvətlərin:",inv)) 
    message.channel.send(new Discord.MessageEmbed().addField("Botu dəvət etmək istəyirsinizsə:","https://azerium.team/")) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invites", "dəvətlər", "davetler", "invitem", "devetler", "dəvət", "devet"],
  kategori: 'Əyləncə',
  permLevel: 0
};

exports.help = { 
  name: 'invite', 
  description: "Dəvətləriniz.",
  usage: "az!invite"
}
