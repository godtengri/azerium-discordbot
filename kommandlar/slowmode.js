const Discord = require('discord.js');
const parametrler = require('../parametrler.json'); 
const prefix = parametrler.prefix;

exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(`Bu kommandı istifadə etmək üçün **Kanalları idarə et** icazəsinə sahib olmalısan!`);

      if (!args[0])
      return message.channel.send(
        `Bir rəqəm yazın (1-1000 arasında)!`
      );
  if (args[0] > 1000) return message.channel.send("Slowmode ən çox 1000 saniyə ola bilər.")
    if (isNaN(args[0])) return message.channel.send(`Whoops-Oops bu bir rəqəm deyil!`);
    let reason = message.content.slice(
      parametrler.prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "Azerium!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Artıq bu kanala üzvlər **${args[0]}** saniyədə bir yaza bilər.`
    );
};
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["slow-mode", "Slowmode", "yavaşmod", 'Yavaşmod', 'yavasmod'],
  permLevel: 3,
  kategori: "Moderasiya"
};

exports.help = {
 name: 'slowmode',
  description: 'Kanala yazmaq üçün gözləmə vaxtı əlavə edər.',
  usage: 'az!slowmode',
};
