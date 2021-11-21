const Discord = require('discord.js');

exports.run = async(client, msg) => {

function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " əvvəl";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Yoxdur", "Aşağı - E-posta təsdiqlənməlidir.", "Orta - Discord serverinə 5 dəqiqədən çox qalmalı", "Yüksək -  Serverdə 10 dəqiqədən çox üzv olmalıdır", "Çox Yüksək - Telefon nömrəsi təsdiqlənmiş olmalıdır"];
	let region = {
			"us-central": "ABŞ :flag_us:",
			"us-east": "Şərqi Amerika :flag_us:",
			"us-south": "Cənubi Amerika :flag_us:",
			"us-west": "Qərbi Amerika :flag_us:",
			"eu-west": "Qərbi Avropa :flag_eu:",
			"eu-central": "Avropa :flag_eu:",
			"singapore": "Sinqapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Yaponiya :flag_jp:",
			"russia": "Rusiya :flag_ru:",
			"hongkong": "Honq Konq :flag_hk:",
			"brazil": "Braziliya :flag_br:",
			"singapore": "Sinqapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Cənubi Afrika :flag_za:",
   		    "amsterdam": "Hollandiya :flag_nl:",
			"europe": "Avropa :flag_eu:"

	}

	
			const yukleniyor = await msg.channel.send(`Server bilgiləri yüklənir...`);

let sunucu = new Discord.MessageEmbed()
.setAuthor('Server Haqqında Məlumat', msg.guild.iconURL())
.setThumbnail(msg.guild.iconURL())
.addField('Server Məlumatı', `Server adı: **${guild.name}** \nServer ID: **${msg.guild.id}** \nServerin Sahibi: **${guild.owner}** \nBölgə: **${region[msg.guild.region]}** \nYaranış Tarixi: **${checkDays(msg.guild.createdAt)}** 
`)
.addField(`Üzv Məlumatı `, `Üzvlər: **${humanCount}** \nBotlar: **${botCount}** \nRollar: **${guild.roles.cache.size}**`)
.addField(`Kanallar`, ` Yazı: **${msg.guild.channels.cache.filter(c => c.type === 'text').size}** \n Səs: **${msg.guild.channels.cache.filter(c => c.type === 'voice').size}** \n Kategoriya: **${msg.guild.channels.cache.filter(c => c.type === 'category').size}**`)
.setTimestamp()
.setColor('#D2EE07')
.setFooter('Server Məlumatı', msg.guild.iconURL())
        return yukleniyor.edit('', sunucu);

}; 

module.exports.conf = {
aliases: ['servermelumat','sm','server','serverinfo','sunucubilgi'],
permLevel: 0, 
kategori: 'Server'
};

module.exports.help = {
    name: 'server-melumat',
    description: 'Server haqqında məlumat verər.',
    usage: 'server-melumat'
};