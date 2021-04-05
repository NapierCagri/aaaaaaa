const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
let kisi = message.guild.members.cache.get(message.author.id)
let rol = "730824384826310687"
if(kisi.roles.cache.has(rol)) {
  

 

 let tabukontrol = await db.fetch("tabukontrol")
  if(tabukontrol === 0) {
    db.set("tabu", 1)
    message.channel.send("Tabu oyununa izin açıldı.")
  } 
  else if(tabukontrol === 1) {
    db.set("tabu", 0)
    message.channel.send("Tabu oyununa izin kapandı.")
  } 
  else {
    db.set("tabu", 0)
    message.channel.send("Tabu oyununa izin kapandı.")
  }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["settabu"],
  permLevel: 0
};

exports.help = {
  name: 'tabuayar',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
