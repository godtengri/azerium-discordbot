const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle('Atatürk')
    .setImage(Azerify()));

    function Azerify() {
        var rand = ['https://i.pinimg.com/736x/74/09/ae/7409aeffe413d5d638530897cc0d197f.jpg', 'https://i.pinimg.com/originals/05/61/d5/0561d5930d772b9f9464a9af2b3d670d.jpg', 'https://img.ednews.net/news/2019/05/photo_367542.jpg', 'https://listelist.com/wp-content/uploads/2017/10/DNNYETjWsAEx6kI.jpg', 'https://www.gercekgundem.com/images/galleries/gallery_14140/cf28c6f12b5c7a1d.jpg', 'https://pbs.twimg.com/media/D67xI2NWsAAaH83.jpg'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['ataturk','ata','atam'],
  guildOnly: false,
  kategori: 'Əyləncə',
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atatürkün şəkillərini atar.',
  usage: 'az!atatürk'
};