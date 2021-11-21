const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç ya da bağla yazmalısan! Məs: **az!salam aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' Bu kommandı istifadə etmək üçün \`MESAJLARI İDARƏ ET\` icazəsinə sahib olmalısan!')

  if (args[0] == 'aç') {
    db.set(`ssaass_${message.guild.id}`, 'acik')
      message.channel.send(`Açıldı!`)
   
  }
  if (args[0] == 'bağla') {
    db.set(`ssaass_${message.guild.id}`, 'kapali')
      message.channel.send(`Bağlandı!`)
    
  }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as'],
  permLevel: 0,
  kategori: "Server"
};

exports.help = {
  name: 'salam',
  description: 'Salam yazan istifadəçilərə qarşılıq.',
  usage: 'az!salam'
};
