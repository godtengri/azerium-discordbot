const Discord = require("discord.js");


exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(`Bu kommandı istifadə etmək üçün **Kanalları idarə et** icazəsinə sahib olmalısan!`);

 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send("Söhbət açıldı! Bağlamaq üçün: az!bağla");
};

exports.conf = {
  aliases: ['söhbeti-aç', 'söhbəti-aç', 'söhbətaç', 'sohbetac', 'söhbəti-ac'],
  permLevel: 3,
  kategori: 'Server'
};

exports.help = {
  name: 'aç',
  description: 'Kanalın söhbətini açar.',
  usage: 'az!aç',

};
