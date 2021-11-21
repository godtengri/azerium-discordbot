const Discord = require('discord.js');
const parametrler = require('../parametrler.json')

exports.run = async (bot, message, args) => {
var prefix = parametrler.prefix;             
    
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu kommandı istifadə etmək üçün **Üzvləri At** icazəsinə sahib!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (message.mentions.users.size < 1) return message.channel.send(`Atmaq istədiğiniz istifadəçinin adını və səbəbini yazın; \`${prefix}at @AzerBot Səbəb\` `);
  if (user.id === message.author.id) return message.channel.send('Özünü niyə atırsan?');
if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu istifadəçinin səndən daha yüksək rolu var.`);
			    if (!reason) reason = 'Bildirilmədi.'
    if (!user) return message.channel.send(`Bu istifadəçi serverdə yoxdur.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Bu istifadəçi serverdə yoxdur.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu istifadəçiyi atabilmirəm çünkü \`məndən yüksək rola sahib\` və ya \`mənə "Üzvləri At" icazəsini vermədin! \`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Serverdəki idarəçiləri ata bilmərəm!');
    message.guild.member(user).kick(reason);
message.channel.send(`<@${user.id}> **adlı istifadəçi serverdən atıldı!** **Səbəb: \`${reason}\``)


};

exports.conf = {
  aliases: ['at', 'qov'],
  permLevel: 0,
  kategori: "Moderasiya",
};

exports.help = {
  name: 'kick',
  description: 'Serverdə olan bir istifadəçiyi atar.',
  usage: 'kick <@istifadəçi> <səbəb>',
 
};
