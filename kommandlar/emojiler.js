const Discord = require("discord.js");

exports.run = async(client, msg, args) => {

        let animEmotes = [],
            staticEmotes = [];
  var guild = msg.guild

        guild.emojis.cache.forEach((e) => {
            e.animated ? animEmotes.push(`<a:${e.name}:${e.id}>`) : staticEmotes.push(`<:${e.name}:${e.id}>`);
        });
        staticEmotes = staticEmotes.length !== 0 ? `__**[${staticEmotes.length}] Normal Emoji**__\n${staticEmotes.join('')}` : '\n**Bu serverdə normal emoji yoxdur.**';
        animEmotes = animEmotes.length !== 0 ? `\n\n__**[${animEmotes.length}] Hərəkətli Emoji**__\n${animEmotes.join('')}` : '\n**Bu serverdə hərəkətli emoji yoxdur.**';
        try {     
  let botembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setDescription(staticEmotes + animEmotes)
            .setAuthor(`${msg.guild.name} serverinin emojiləri`, msg.guild.iconURL())
    .setFooter('Bu kommandı istifadə edən istifadəçi ' + msg.author.tag, msg.author.avatarURL())
            .setTimestamp()
        return msg.channel.send(botembed)
      } catch (err) {
        const embed = new Discord.MessageEmbed()
            .addField(`Serverdəki emojilər`, 'Serverinizdə ya çox emoji var, ya da heç emoji yoxdur. Əgər çox emoji varsa bunu göstərməmə Discord icazə vermir!')
            .setColor('RED')
          .setFooter('Bu kommandı istifadə edən istifadəçi ' + msg.author.tag, msg.author.avatarURL())
            .setTimestamp()
        msg.channel.send(embed)
                              
    }
}
exports.conf = {
 aliases: ['emojiler'],
 permLevel: 0,
 kategori: 'Server',
};

exports.help = {
 name: 'emoji',
 description: 'Serverdə olan emojiləri göstərər.',
 usage: 'emoji'
};
