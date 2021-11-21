const Discord = require('discord.js');
const qdb = require('quick.db');
const ms = require("ms");

exports.run = async (client, message, args) => {  

var muterole1 = qdb.fetch(`muteroluid_${message.guild.id}`);
var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
if (!muterole2) {
    try {
     muterole2 = await message.guild.roles.create({ 
            data: {
                name: "Susduruldun",
                color: "#A0A0AA",
                permissions: []
              },
            reason: 'Susdurulma Rolu!' 
            })

        qdb.set(`muteroluid_${message.guild.id}`, muterole2.id);
        message.guild.channels.cache.forEach(async (channel) => {
            await channel.createOverwrite(muterole2, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
              });
          });
} catch (err) {
    console.log(err);
}
};
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`Bu kommand -dan istifadə etmək üçün \`Mesajları İdarə Et\` icazən olmalıdı!`).then(x => x.delete({timeout: 5000}));
var kisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!kisi) return message.reply("**Bir istifadəçi adı yaz!**").then(x => x.delete({timeout: 7500}));

var time = args[1];
var reason = args.slice(2).join(" ")

if (!time) {
    if(reason){
        await kisi.roles.add(muterole2.id);
const embed1 = new Discord.MessageEmbed()
.setDescription(`${kisi} **sonsuza** qədər \`${reason}\` səbəbi ilə susduruldu!`)
message.channel.send(embed1)   
    } else {
        await kisi.roles.add(muterole2.id);
const embed2 = new Discord.MessageEmbed()
.setDescription(`${kisi} **sonsuza** qədər susduruldu!`)
message.channel.send(embed2)  
    };
} else {
    if(reason){
        await kisi.roles.add(muterole2.id);
const embed3 = new Discord.MessageEmbed()
.setDescription(`${kisi} **${time}** vaxtına qədər susduruldu! Səbəb \`${reason}\`!`)
message.channel.send(embed3)  

           setTimeout(function() {
            if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                kisi.roles.remove(muterole2.id)
const embed4 = new Discord.MessageEmbed()
.setDescription(`${kisi} adlı istifadəçinin susdurulma vaxtı bitdiyindən susdurulması silindi.`)
message.channel.send(embed4)   
            }
           }, ms(time));

    } else {
        await kisi.roles.add(muterole2.id);
const embed5 = new Discord.MessageEmbed()
.setDescription(`${kisi} **${time}** vaxtına qədər
${message.author} tərəfindən susduruldu!`)
message.channel.send(embed5)   

        setTimeout(function() {
            if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                kisi.roles.remove(muterole2.id)
const embed6 = new Discord.MessageEmbed()
.setDescription(`${kisi} adlı istifadəçinin susdurulması bitdiyindən susdurulması silindi.`)
message.channel.send(embed6)   
            }
           }, ms(time));
    }
};

};

exports.conf = {
  enabled: true,
  aliases: ['susdur','tempmute','m'],
  guildOnly: false,
  kategori: 'Moderasiya',
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'İstifadəçiyi susdurar.',
  usage: 'az!mute'
};

