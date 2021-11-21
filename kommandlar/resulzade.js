const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle('Məmməd Əmin Rəsulzadə')
    .setImage(Azerify()));

    function Azerify() {
        var rand = ['https://i.imgur.com/SsfyAn7.jpg', 'https://i.imgur.com/uyY0So9.jpeg', 'https://i.imgur.com/jPkWXuQ.jpg', 'https://i.imgur.com/mASrq82.jpeg', 'https://i.imgur.com/RtfhjqW.jpg'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['resulzade','memmedeminresulzade','rəsulzadə'],
  guildOnly: false,
  kategori: 'Əyləncə',
  permLevel: 0
};

exports.help = {
  name: 'rəsulzade',
  description: 'Məmməd Əmin Rəsulzadə-nin şəkillərini atar.',
  usage: 'az!rəsulzade'
};