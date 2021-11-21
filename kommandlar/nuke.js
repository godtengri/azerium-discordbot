const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  const onayembed = new Discord.MessageEmbed()
  .setColor("RED")
  .setTimestamp()
  .setAuthor("Atom bombası yoldadır!")
  .setFooter("Qəbul etmək üçün 👍 emojisine, dayandırmaq üçün 👎 emojisinə basın!")
  .setDescription("**Qeyd!** \n\nQəbul etsəniz kanal silinəcəq ama klonu açılacaq!\n")
  message.channel.send(onayembed).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
		} else {
			message.reply('Nuke ləğv edildi!');
      msg.delete({timeout:3000})
		}
	})
	.catch(collected => {
		message.reply('Xəta! Xahiş edirik botun icazələrində kanal silmə və açmanın olduğuna əmin olun.');
	});
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
  kategori: "Server"
};

exports.help = { 
	name: 'nuke', 
  description: "Bot olduğunuz kanalı silər və tezdən açar.",
  usage: 'nuke'
}
