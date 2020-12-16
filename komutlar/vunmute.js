const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if(!ayarlar.vmutelog) return;
if(!ayarlar.vmuteyetkili) return;

const errorEmbed = new Discord.MessageEmbed()
.setColor('#00001');
const errorEmbed2 = new Discord.MessageEmbed()
.setTitle('Bir hata oldu!');

if(!message.member.roles.cache.get(ayarlar.vmuteyetkili) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(errorEmbed.setDescription(`${message.guild.roles.cache.get(ayarlar.vmuteyetkili)} | Rolüne sahip olman gerekiyor.`));
if(!args[0]) return message.channel.send(errorEmbed.setDescription(`Bir Kullanıcı Belirt`));

let member;
if(message.mentions.members.first()) {
member = message.mentions.members.first();
} else if(args[0]) {
member = message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send( errorEmbed
.setDescription(`Bir Kullanıcı Belirt.`));
}



member.voice.setMute(false);


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vunmute","unvmute"],
  permLevel: 0
}

exports.help = {
  name: 'unvmute'
};