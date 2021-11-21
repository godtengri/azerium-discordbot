const Discord = require("discord.js");


exports.run = async (client, message, args) => {


    var aktiflik;
    const fetch = require('node-fetch')
    let ulke = message.content.split(" ").slice(1).join(" ")
    if (!ulke) return message.reply('**Bir ad gir!**')



    if (ulke.includes('ç' || 'Ç' || 'ğ' || 'Ğ' || 'İ' || 'ö' || 'Ö' || 'ş' || 'Ş' || 'ü' || 'Ü' || 'ı')) {
        return message.channel.send('**İstifadəçi adları UTF-8 xarakterli ola bilməz!**')
    }




    fetch(`http://api.roblox.com/users/get-by-username?username=${ulke}`)
        .then(res => res.json()).then(body => {
            let { Id, IsOnline } = body;



            if (body.success === false) return message.reply('**Belə bir istifadəçi yoxdur!**')



            if (ulke.length < 3) return message.reply(`**İstifadəçi adları ən az 3 hərfdən ibarət olur!**`)


            if (IsOnline === false) {
                aktiflik = ":x:"
            } else {
                aktiflik = ":white_check_mark:"
            }



            fetch(`https://friends.roblox.com/v1/users/${Id}/friends/count`)
                .then(res => res.json()).then(body => {
                    let { } = body;

                    let arkadas = body.count


                    fetch(`https://users.roblox.com/v1/users/${Id}/status`)
                        .then(res => res.json()).then(body => {
                            let { status } = body;

                            if (status === "") {
                                status = "Status yazılmayıb..."
                            }

                            fetch(`https://friends.roblox.com/v1/users/${Id}/followers/count`)
                                .then(res => res.json()).then(body => {
                                    let { count } = body;



                                    fetch(`https://users.roblox.com/v1/users/${Id}`)
                                        .then(res => res.json()).then(body => {
                                            let { isBanned, created } = body;


                                            if (isBanned === true) {
                                                isBanned = "Qadağanlanmış istifadəçi"
                                            }
                                            if (isBanned === false) {
                                                isBanned = "Bu istifadəçi qadağanlanmayıb"
                                            }


                                            fetch(`https://friends.roblox.com/v1/users/${Id}/followings/count`)
                                                .then(res => res.json()).then(body => {
                                                    let { } = body;

                                                    let takipedilen = body.count

                                                    var newStr = created.substring(0, created.length - 14);
                                                    console.log(newStr)
                                                    const splituras = newStr.split("-")
                                                    console.log(splituras.reverse())
                                                    const tarih = splituras.reverse()


                                                    const embed = new Discord.MessageEmbed()
                                                        .setAuthor(`${ulke} adlı istifadəçinin informasiyaları`, `https://www.roblox.com/Thumbs/Avatar.ashx?x=420&y=420&username=${ulke}`)
                                                        .setColor(`RANDOM`)
                                                        .setThumbnail(`https://www.roblox.com/Thumbs/Avatar.ashx?x=420&y=420&username=${ulke}`)
                                                        .addField(` İstifadəçi Adı`, `${ulke}`, true)
                                                        .addField(` ID`, `${Id}`, true)
                                                        .addField(` Aktivlik`, `${aktiflik}`, true)
                                                        .addField(` Status`, `${status}`, true)
                                                        .addField(` Dost Siyahısı`, `${arkadas}`, true)
                                                        .addField(`Abunələr`, `${count}`, true)
                                                        .addField(`Abunə etdikləri`, `${takipedilen}`, true)
                                                        .addField(`Qadağanlanıb?`, `${isBanned}`, true)
                                                        .addField(`Hesabın Yaranış Tarixi`, `${tarih[2]}-${tarih[1]}-${tarih[0]}`, true)
                                                        .setFooter("Bilgilər 100% doğru deyil!")
                                                    message.channel.send(embed)


                                                })

                                        })

                                })

                        })




                })

        })
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: 'Əyləncə'
};

exports.help = {
    name: 'roblox',
    description: 'İstifadəçinin roblox informasiyaları.'
};
