const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dəqiqə], s [saniyə]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("© 2021 Azerium", client.user.avatarURL())
    .addField("» **Botun Sahibi**", "<@764508211947503626>")
    .addField("» **Ping**","Mesaj Pingi: {ping1} ms \nBot Pingi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **RAM**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Uptime**", seksizaman, true)
    .addField("» **İstifadəçilər**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Serverlər**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS**", "v" + Discord.version, true)
    .addField("» **Node.JS**", `${process.version}`, true)
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField("» **OS**", `\`\`${os.platform()}\`\``, true)
    .addField("**» Bot Dəvət**"," [Dəvət Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s", "Statistika", "istatistik", "S"],
  permLevel: 0,
  kategori: 'Ümumi'
};

exports.help = {
  name: "statistika",
  description: "Bot istatistikası",
  usage: "istatistik"
};
