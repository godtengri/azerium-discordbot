const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/AzerbaijanJerky/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments} - Rəsim yüklənmirsə tezdən işlət`);

			message.channel.send(embed);
		})
		.catch(console.error);
};

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Meme", "memeş", "MEME", 'espri', 'gülmeli'],
  permLevel: 0,
  kategori: "Əyləncə"
};

exports.help = {
 name: 'meme',
  description: 'Meme atar API: AzerbaijanJerky',
  usage: 'az!meme',
};