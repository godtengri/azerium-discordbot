const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle('Dədəng! Ehtiras həbsxanasına get')
    .setImage(Azerify()));

    function Azerify() {
        var rand = ['https://i.imgur.com/ydUaXNc.jpg'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['sex','nsfw','porno'],
  guildOnly: false,
  kategori: 'Əyləncə',
  permLevel: 0
};

exports.help = {
  name: 'porn',
  description: 'Nə ola bilər?.',
  usage: 'az!porn'
};
