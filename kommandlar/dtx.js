const Discord = require("discord.js")


exports.run = async (client, message, args) => {
 
const Discord = require("discord.js")


  const fbi = new Discord.MessageEmbed()


  .setColor("RED")
  .setImage("https://media.giphy.com/media/Ij16PZlUGa596s0rMR/giphy.gif")
  .setTitle("DTX QAPIYI AÇ!")
  message.channel.send(fbi)
}


        
          //

exports.conf = {
  enabled: true, 
  guildOnly: true, 
   aliases: ['fbi'],
  permLevel: `0`,
  kategori: "Əyləncə" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

};

exports.help = {
  name: "dtx",
  description: "DTX",
  usage:"az!dtx"
}