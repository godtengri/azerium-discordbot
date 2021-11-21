const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var Random = [
    "**caaart**",
    "**zart**",
    "**auYe JizN vArM 😎😎**",
    "**men voram auye 😎**",
    "**Düzünə rövşən 😎**",
    "**Düzünə quli vecna 😎😎😎**",
    "**tesbeh firlatiram**",
    "**a.y.e ✵😎**"
  ];
  var ergensozuver = Math.floor(Math.random() * Random.length); // burda random sözler zad atır yadımnan çıxmasın
  const ergensozu = new Discord.MessageEmbed()
    .setDescription(`${Random[ergensozuver]}`)
    .setFooter('Tezə söz gəlməsini istəyirsinizsə tengri#7983-yə yazın', message.author.avatarURL())
    .setColor("RANDOM");
  message.channel.send(ergensozu);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ərgən','Ergen'],
  permLevel: 0,
  kategori: 'Əyləncə'
};

exports.help = {
  name: "ergen",
  description: "Ərgən sözləri",
  usage: "ergen"
};
