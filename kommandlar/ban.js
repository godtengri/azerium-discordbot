const Discord = require('discord.js');
const parametrler = require('../parametrler.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = parametrler.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu kommandı istifadə etmək üçün **Üzvləri Qadağanla** icazəsinə sahib olmalısan!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`Qadağan etmək istifadəçiyi yazın; \`${prefix}ban @AzerBot Səbəb\` `);
  if (user.id === message.author.id) return message.channel.send('Özünü qadağan edə bilməzsən.');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu istifadəçinin sənin rolundan daha yüksək bir rolu var.`);
    if (!reason) reason = 'Qeyd olunmayıb.'
    if (!user) return message.channel.send(`Bu istifadəçiyi serverdə tapa bilmədim.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`Bu istifadəçini serverdə tapa bilmədim.`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu istifadəçiyi qadağan edə bilmirəm çünkü \`botdan daha yüksək bir rola sahib\` ya da \`mənə "üzvləri qadağanla" icazəsini vermədin!\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Serverdəki idarəçiləri qadağan edə bilmərəm!');

  message.guild.members.ban(user.id)

const embed11 = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`<:azeriumSucces:853602816936509452> <@${user.id}> **qadağan edildi!**`)
message.channel.send(embed11) 
};

exports.conf = {
  aliases: ['qadagan', 'qadaganla', 'qadağan', 'qadağanla', 'yasakla'],
  permLevel: 0,
  kategori: 'Moderasiya'
};

exports.help = {
  name: 'ban',
  description: 'İstifadəçini serverdən qadağan edər.',
  usage: 'ban <@istifadəçi> <səbəb>',

};
