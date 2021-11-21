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

    message.guild.channels.create("📌qaydalar", "text").then(kurallar => {
                    kurallar.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("📢anonslar", "text").then(duyurular => {
                          duyurular.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("🎉çəkiliş", "text").then(cekilis => {
                          cekilis.createOverwrite(every, {
        SEND_MESSAGES: false
      })

      kurallar.setParent(kategori.id)  
      duyurular.setParent(kategori.id)  
      cekilis.setParent(kategori.id)  


  
                          message.guild.channels.create('Ümumi', { type: 'category', reason: 'Ümumi!' }).then(kategor => {

  message.guild.channels.create("💬söhbət", "text").then(sohbet => {
  message.guild.channels.create('📷media', "text").then(medya => {
  message.guild.channels.create('🐸memes', "text").then(memes => {
  message.guild.channels.create('🤖bot-kommand', "text").then(bot => {
  message.guild.channels.create('🎮oyun', "text").then(games => {
  message.guild.channels.create('🎮oyunçu-axtar', "text").then(game => {
    sohbet.setParent(kategor.id)
    medya.setParent(kategor.id)
    memes.setParent(kategor.id)
    bot.setParent(kategor.id)
    games.setParent(kategor.id)
    game.setParent(kategor.id)
//codare
 
                      message.guild.channels.create('Səs Otaqları', { type: 'category', reason: 'Ses Otaqları' }).then(kategori => {

  message.guild.channels.create("🔊 Söhbət 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan => {
      message.guild.channels.create("🔊 Söhbət 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan2 => {
  message.guild.channels.create("🔊 Söhbət 3", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare3 => {
  message.guild.channels.create("🎮 Oyun 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare62 => {
      message.guild.channels.create("🎮 Oyun 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emmmirrrhaaann=> {
  message.guild.channels.create('🎵 Mahnı 1', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music => {
      message.guild.channels.create('🎵 Mahnı 2', { type: 'voice', reason: 'Bilgi kanalı!' }).then(musicc => {
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
        name: '👑Sahib',
        color: 'RED',

        permissions: [
            "ADMINISTRATOR",

    ]
      })


                      message.guild.channels.create('Oyunlar', { type: 'category', reason: 'Oyun' }).then(kategoriya => {

message.guild.channels.create("🎮 VALORANT", { type: 'voice', reason: 'Bilgi kanalı!' }).then(valo => {
      message.guild.channels.create("🎮 GTA", { type: 'voice', reason: 'Bilgi kanalı!' }).then(gta => {
  message.guild.channels.create("🎮 MINECRAFT", { type: 'voice', reason: 'Bilgi kanalı!' }).then(minecraft => {
  message.guild.channels.create("🎮 PUBG", { type: 'voice', reason: 'Bilgi kanalı!' }).then(pubg => {
      message.guild.channels.create('🎮 Başqa Oyunlar', { type: 'voice', reason: 'Bilgi kanalı!' }).then(diger => {

    valo.setParent(kategoriya.id)  
        gta.setParent(kategoriya.id)  
    minecraft.setParent(kategoriya.id)  
    pubg.setParent(kategoriya.id)  
    diger.setParent(kategoriya.id)  



      

      message.guild.roles.create({
        name: '🛡️Admin',
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
        name: '🛡️Moderator',
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
        name: '😊Dost',
        color: '00ffff',
      })

      message.guild.roles.create({
        name: '🎮Oyunçu',
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
})
})
})
})
})
})

})

})


      })})

}})})
                    .catch(error => {
                    message.channel.send(`Oh Whoops-Oops! Bir xəta başverdi! Xahiş edirik təzdən kommandı istifadə edin və yaxud dəstək serverimizə gəlib problemi bizə yazın.`);
                    console.error('Xəta:', error);
                });


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['serverquroyun','Server-quroyun','Serverquroyun'],
  permLevel: 0,
  kategori: 'ServerQur'
};

exports.help = {
  name: 'serverqur-oyun',
  description: 'Oyun serverləri üçün.',
  usage: 'az!serverqur'
};
