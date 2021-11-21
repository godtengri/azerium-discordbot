const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "764508211947503626") return message.reply('bunu sahibim işlədə bilər');
      
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bunu dmdə işlətmə.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Nə yazıcam?');
  if (message.mentions.users.size < 1) return message.reply('Kimə yazıcam onuda yaz.').catch(console.error);
  message.delete();
  message.reply('Mesaj göndərildi.')
  var embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(`**Hey! Sahibimdən mesaj!**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pm','öm'],
  permlevel: 4,
  kategori: "Sahip"
};

exports.help = {
  name: 'mesajat',
  description: 'Bir kullanıcıya özelden mesaj atar.',
  usage: 'mesajat'
};