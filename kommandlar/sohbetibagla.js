const Discord = require("discord.js");
exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone"); 
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(`Bu kommandı istifadə etmək üçün **Kanalları idarə et** icazəsinə sahib olmalısan!`);

message.channel.createOverwrite(every, {
    SEND_MESSAGES: false
  });

  message.channel.send("Söhbət bağlandı. Açmaq üçün az!aç və ya az!söhbəti-aç");
};

exports.conf = {
  aliases: ['söhbeti-bağla', 'sohbəti-bagla', 'söhbəti-bağla', 'bagla', 'söhbəti bağla'],
  permLevel: 3,
  kategori: 'Server'
};

exports.help = {
  name: 'bağla',
  description: 'Kanalın söhbətini bağlayar.',
  usage: 'az!bağla',

};
