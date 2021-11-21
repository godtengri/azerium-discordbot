const Discord = require('discord.js');

const cavablar = [
    "Hə",
    "Yox",
    "Bəlkə",
    "Ola bilər",
    "Tezdən soruş",
    "İmkansız!",
    "Ola bilməz",
];

exports.run = function(client, message, args) {
    var sual = args.join(' ');

    var cavab = cavablar[Math.floor(Math.random() * cavablar.length)];

    if(!sual) return message.reply('Sualını yaz. **Məs**: az!8ball <sual>')
    else message.channel.send(cavab)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0,
  kategori: 'Əyləncə'
};

exports.help = {
  name: '8ball', 
  description: 'Möcüzəvi 8ball sualınızı cavablayacaq!',
  usage: 'az!8ball <sual>'
};
