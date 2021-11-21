const Discord = require("discord.js");
const moment = require("moment")
require('moment-duration-format');

exports.run = async(client, message, args) => {

  if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;

  var user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author; message.author;
  const member = message.guild.member(user)
  let kisi = client.users.cache.get(member.id);

moment.locale('az-AZ');
      var userRoles
        if (member.roles.size > 1) {
            userRoles = `${member.roles.array().sort((a, b) => a.comparePositionTo(b)).slice(1).reverse().map(role => `**\`${role.name}\`**`)}`
          } else {
            userRoles = '`Yoxdur`'
              }
              
  function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " əvvəl";
        };

  if (!member) return message.reply('Bir istifadəçi adı yaz! az!profil @AzerBot vəya az!profil <ID> ')

        let serverSize = message.guild.memberCount;

  const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL() || user.defaultavatarURL())
      .setThumbnail(user.avatarURL() || user.defaultavatarURL())
      .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
      .addField('İstifadəçi məlumatı:',`**İstifadəçi Adı:** ${member.displayName}\n**Serverə giriş tarixi:** ${moment.utc(member.joinedAt).format('Do MMMM YYYY')} - ${checkDays(member.joinedAt)} \n**Rollar:** ${member.roles.cache.sort((b, a) => { return a.position - b.position }).map(role => `${role}`).join(" | ")}`, false)        .addField('İstifadəçi məlumatı:',  `\n**Tag**: ${member.user.tag}\n**ID:** ${member.user.id}\n**Yaranış Tarixi**: ${moment.utc(user.createdAt).format('Do MMMM YYYY')} - ${checkDays(user.createdAt)}`, false)
      .setFooter('Bu kommandı istifadə edən istifadəçi ' + message.author.tag, message.author.avatarURL())
      .setTimestamp()
     return message.channel.send(embed)
                                
        }

exports.conf = {
  aliases: ['profilim','kullanıcıbilgi','istifadəçi-məlumat','kullanıcı bilgi','kb','bilgi'],
  permLevel: 0,
  kategori: 'Ümumi'
};

exports.help = {
  name: 'profil',
  description: 'İstifadəçi haqqında məlumat.',
  usage: 'profil @üzv',

};
