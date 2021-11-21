const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const parametrler = require('./parametrler.json');
const fs = require('fs');
const moment = require('moment');
const express = require('express');
const app = express();
require('./util/eventLoader')(client);

var prefix = parametrler.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require('discord-buttons')(client);
fs.readdir("./kommandlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} kommand yüklenir.`);
  files.forEach(f => {
    let props = require(`./kommandlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./kommandlar/${command}`)];
      let cmd = require(`./kommandlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./kommandlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./kommandlar/${command}`)];
      let cmd = require(`./kommandlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {

  // Oynuyor Kısmı
  
  client.user.setPresence({
    status: "online",
    activity: {
        name: "Azerium - az!kommandlar",
        type: "LISTENING"
    }
});
    
  
      console.log ('_________________________________________');
      console.log (`Botun adı          : ${client.user.username}`);
      console.log (`Serverlər          : ${client.guilds.cache.size}`);
      console.log (`İstiafəçilər       : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      console.log (`Prefix             : ${parametrler.prefix}`);
      console.log (`Durum              : Bot açıqdır!`);
      console.log ('_________________________________________');
    
    });

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === parametrler.sahib) permlvl = 4;
  return permlvl;
};

client.on("message", msg => {
var dm = client.channels.cache.get("827910259632635914")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`🔔 Tezə mesaj var`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("Göndərən", msg.author.tag)
.addField("Göndərənin ID", msg.author.id)
.addField("Göndərdiği mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});

client.on("ready", () => {
  client.channels.cache.get("840622983512064050").join();
})

client.on('message', async msg => {
const Database = require("plasma-db");
const db = new Database("./soyus.json");
let engin = db.fetch(`soyuslog_${msg.guild.id}`)
let enginn = db.fetch(`soyusmesaj_${msg.guild.id}`)
let enginar = db.fetch(`soyusblok_${msg.guild.id}`)
if(enginar === "aktif") {
const kufurler = ["siktir", "oğraş", "qəhbə", "anavı sikim", "petux", "qehbe", "anavi sikim", "seks", "döl", "göt", "götəş", "faişə", "fahişə", "sik", "penis", "amcıq", "seks", "gijdıllaq", "sikimi ye", "qancıq", "qancığ", "siktirdə", "anavı",];
if (kufurler.some(word => msg.content.includes(word))) {
  try {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          msg.delete();
          const embed = new Discord.MessageEmbed()
          .setTitle('Bir söyüş tutdum!')
          .setDescription(`<@${msg.author.id}> adlı üzvün söyüşdən istifadə etdiğini gördüm! \n İstifadəçinin söyüşünü sildim!`)
          client.channels.cache.get(engin).send(embed)
          return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
 
        }              
      } 
      catch(err) {
        console.log(err);
      }
}
}
else return;
});

client.on('messageDelete', message => {
  const emirhan = require("quick.db")
  emirhan.set(`snipe.mesaj.${message.guild.id}`, message.content)
  emirhan.set(`snipe.id.${message.guild.id}`, message.author.id)

})
client.on('message', async msg => {
const db = require('quick.db');
const i = await db.fetch(`ssaass_${msg.guild.id}`);
	if(i === "acik") {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'salam') {
          try {

                  return msg.reply('Salam! Xoşgəldin. ')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });


const guildInvites = new Map();

client.on("ready", () => {
  client.guilds.cache.forEach(guild => {
    guild.fetchInvites()
    .then(invites => guildInvites.set(guild.id, invites))
    .catch(err => console.log(err));
    });
});
client.on('inviteCreate', async invite => {
  guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
});
client.on('guildMemberAdd', async member => {
  const cachedInvites = guildInvites.get(member.guild.id);
  const newInvites = await member.guild.fetchInvites();
  guildInvites.set(member.guild.id, newInvites);
  try {
    console.log("Dəvət əlavə edildi")
    const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);
    const currentInvites = await db.get(`inv.${usedInvite.inviter.id}.total`)
    if(currentInvites) {
      db.set(`inv.${member.id}.inviter`, usedInvite.inviter.id)
      db.add(`${usedInvite.inviter.id}`, 1)
    } else {
      db.set(`inv.${usedInvite.inviter.id}.total`, 1)
      db.set(`inv.${member.id}.inviter`, usedInvite.inviter.id)
    }
  }
  catch(err) {
    console.log(err);
  }
});

client.on('guildMemberRemove', async member => {
  const inviter = await db.get(`inv.${member.id}.inviter`)
  const userinviter = await member.guild.members.fetch(`${inviter}`);
  const currentInvites = await db.get(`inv.${inviter}.total`)
  try {
    console.log("Dəvət silindi")
    db.add(`inv.${inviter}.total`, -1)
    db.delete(`inv.${member.id}.inviter`)
  } catch(err) {
    console.log(err);
  }
});

const kontrol = require('node-fetch');
setInterval(() => {
kontrol("https://editeybot.glitch.me")
}, 3000)

const db = require('quick.db');
client.on("guildCreate", guild => {
  let log = client.channels.cache.get("821737700348133416");
  const embed = new Discord.MessageEmbed()
    .setAuthor("Bir serverə əlavə edildim!")
    .setColor("GREEN")
         .addField("» Server adı:", `**${guild.name}**`)
    .addField("» Server ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Server info:",
      `**Sahib ID: \`${guild.owner}\`\nBölgə: \`${guild.region}\`\nÜzvlər: \`${guild.members.cache.size}\`\nKanallar: \`${guild.channels.cache.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
client.on("guildDelete", guild => {
  let log = client.channels.cache.get("821737700348133416");
  const embed = new Discord.MessageEmbed()
    .setAuthor("Bir serverdən atıldım!")
    .setThumbnail(
      guild.iconURL() ||
        "https://cdn.discordapp.com/attachments/808737793135869972/819966291284590602/discord-avatar-128-animated.gif"
    )
    .setColor("RED")
       .addField("» Server adı:", `**${guild.name}**`)
    .addField("» Server ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Server info:",
      `**Sahib ID: \`${guild.owner}\`\nBölgə: \`${guild.region}\`\nÜzvlər: \`${guild.members.cache.size}\`\nKanallar: \`${guild.channels.cache.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
 
           
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});


  client.on('guildCreate', guild => {
  if(guild.memberCount < 5) return
  let DestekSunucusu = client.guilds.cache.get("661096922144178176");
  DestekSunucusu.members.cache.get(guild.owner.user.id).roles.add("848664290968731700");
  });

  client.on('guildDelete', guild => {
  let DestekSunucusu = client.guilds.cache.get("661096922144178176");
  DestekSunucusu.members.cache.get(guild.owner.user.id).roles.remove("848664290968731700");
  });


client.login(""); // tokeninizi yazin

