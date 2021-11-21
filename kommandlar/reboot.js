const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../parametrler.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "764508211947503626") if(message.author.id !== "764508211947503626") return message.channel.send("no") // buraya öz ID'nizi yazın
    
    message.channel.send(`Rebooting...`).then(msg => {
    console.log(`BOT: Rebooting...`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 4,
  kategori: "Sahip"
};

module.exports.help = {
  name: 'reboot',
  description: 'Şşş!',
  usage: 'reboot'
};
