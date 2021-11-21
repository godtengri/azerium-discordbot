const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("quick.db")
const parametrler = require('../parametrler.json')

exports.run = async(client, message, params) => {

          let prefix =  parametrler.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu kommandı istifadə etmək üçün `Admin` icazəsinə sahib olmalısan.")
  message.channel.send("Serverin qurulumunu qəbul edirsinizsə `bəli` yazın! \nEtmirsinizsə `xeyr` yazın. \n\n⚠️**Diqqət**!: bəli/xeyr sözlərini balaca hərflə yazın, bəli yazarsanız bütün kanallar silinəcəq!").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'xeyr') {
        return message.reply("Ləğv edildi.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'bəli') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
                    let every = message.guild.roles.cache.find(r => r.name === '@everyone')

    message.author.send(` Salam! ${message.author}, mən ${client.user.username}. **${message.guild.name}** adlı server indi qurulur.`)
                                message.guild.channels.create('Bilgiləndirmə', { type: 'category', reason: 'Bilgi Kanalları!' }).then(kategori => {

    message.guild.channels.create("qaydalar", "text").then(kurallar => {
                    kurallar.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("anonslar", "text").then(duyurular => {
                          duyurular.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      kurallar.setParent(kategori.id)  
      duyurular.setParent(kategori.id)  

  
                          message.guild.channels.create('Ümumi', { type: 'category', reason: 'Ümumi!' }).then(kategor => {

  message.guild.channels.create("söhbət", "text").then(sohbet => {
  message.guild.channels.create('media', "text").then(medya => {
  message.guild.channels.create('bot-kommand', "text").then(bot => {
    sohbet.setParent(kategor.id)
    medya.setParent(kategor.id)
    bot.setParent(kategor.id)
      
 
                      message.guild.channels.create('Ses Otaqları', { type: 'category', reason: 'Ses Otaqları' }).then(kategori => {

  message.guild.channels.create("Söhbət 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan => {
      message.guild.channels.create("Söhbət 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan2 => {
  message.guild.channels.create("Söhbət 3", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare3 => {
  message.guild.channels.create("Oyun 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare62 => {
      message.guild.channels.create("Oyun 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emmmirrrhaaann=> {
  message.guild.channels.create('Mahnı 1', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music => {
      message.guild.channels.create('Mahnı 2', { type: 'voice', reason: 'Bilgi kanalı!' }).then(musicc => {
  message.guild.channels.create('AFK', { type: 'voice', reason: 'Bilgi kanalı!' }).then(afkk => {
    emirhan.setParent(kategori.id)  
        emirhan2.setParent(kategori.id)  
    codare3.setParent(kategori.id)  
    codare62.setParent(kategori.id)  
    emmmirrrhaaann.setParent(kategori.id)  
    music.setParent(kategori.id)  
        musicc.setParent(kategori.id)  
    afkk.setParent(kategori.id)

       message.guild.roles.create({
        name: 'Sahib',
        color: 'RED',

        permissions: [
            "ADMINISTRATOR",

    ]
      })

      

      message.guild.roles.create({
        name: 'Admin',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })


      message.guild.roles.create({
        name: 'Moderator',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.roles.create({
        name: 'Dost',
        color: '00ffff',
      })

      message.guild.roles.create({
        name: 'Üzv',
        color: 'WHITE',
      })

      message.guild.roles.create({
        name: 'Bot',
        color: 'ORANGE',
        

})
})
})

})
})

})
})
})
})
})

})
})

})
})
})

})




      })

}})})
                    .catch(error => {
                    message.channel.send(`Oh Whoops-Oops! Bir xəta başverdi! Xahiş edirik təzdən kommandı istifadə edin və yaxud dəstək serverimizə gəlib problemi bizə yazın.`);
                    console.error('Xəta:', error);
                });



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server-quremojisiz','emojisiz','Serverqur-emojisiz'],
  permLevel: 0,
  kategori: 'ServerQur'
};

exports.help = {
  name: 'serverqur-emojisiz',
  description: 'Emojisiz klasik server.',
  usage: 'az!serverqur-emojisiz'
};
