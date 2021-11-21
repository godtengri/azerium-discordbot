const Discord = require('discord.js')
const parametrler = require('../parametrler.json') 

exports.run = async (client, message, args) => {
    var prefix = parametrler.prefix;

//GENEL KOMUTU
    if(args[0] === "Ümumi" || args[0] === "ümumi" || args[0] === "General" || args[0] === "general") {
              let Ümumi = new Discord.MessageEmbed()
  .setAuthor('Ümumi', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Ümumi').map(cmd => `:white_small_square: **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)
              return message.channel.send(Ümumi)
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Server" || args[0] === "server") {
              let Server = new Discord.MessageEmbed()
  .setAuthor('Server', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Server').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)
              return message.channel.send(Server)
         
      

       return;
    }
//EĞLENCE KOMUTU
  if(args[0] === "Əyləncə" || args[0] === "əyləncə" || args[0] === "eylence" || args[0] === "Eğlence") {
   let Eğlence = new Discord.MessageEmbed()
  .setAuthor('Əyləncə', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Əyləncə').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)
   return message.channel.send(Eğlence)
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasiya" || args[0] === "moderasiya" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasiya = new Discord.MessageEmbed()
  .setAuthor('Moderasiya', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
  .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Moderasiya').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)
   return message.channel.send(Moderasiya)
             
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.MessageEmbed()
   .setAuthor('Moderasyon', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
   .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)
    return message.channel.send(Sahip)
              

       
               return;
  }
     //SAHİP KOMUTU
 
                return;
   }

  if(args[0] === "ServerQur" || args[0] === "Server Qur" ) {
    let ServerQur = new Discord.MessageEmbed()
   .setAuthor('Server Qur', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
   .setColor('#2667FF')
  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
   .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'ServerQur').map(cmd => `:white_small_square: - **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)
    return message.channel.send(ServerQur)
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('Kommandlar', message.author.displayAvatarURL())
.setThumbnail("https://i.imgur.com/MPr0urM.gif")
  .setColor('#FFFB05')
  .setDescription(`**Nümunə istifadə:** \`${prefix}kommand Kategoriya\``)
  .addField('Kategoriyalar:', `
  **[${prefix}kommand Ümumi](https://discord.gg/z6BaQJs7W4)** 
  **[${prefix}kommand Əyləncə](https://discord.gg/z6BaQJs7W4)**
  **[${prefix}kommand Moderasiya](https://discord.gg/z6BaQJs7W4)**
  **[${prefix}kommand Server](https://discord.gg/z6BaQJs7W4)**
  **[${prefix}kommand ServerQur](https://discord.gg/z6BaQJs7W4)**
  `)
        .addField("» Linklər", ` [Dəvət](https://discord.com/oauth2/authorize?client_id=816241400185487410&scope=bot&permissions=8)` + "** | **" + `[Dəstək Serveri](https://discord.gg/z6BaQJs7W4)`  + "", false)

  .setFooter('Bu kommandı istifadə edən  ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)

  
}
    

  exports.conf = {
    aliases: ['help', 'cmds', 'yardım','kömək', 'komutlar', 'kömek', 'yardim', 'help', 'kommand'],
    permLevel: 0, 
    kategori: "Ümumi" 

  };

  exports.help = {
    name: 'kommandlar', 
    description: 'Kommandlar haqqında məlumat.', 
    usage: 'kommandlar', 
  };
