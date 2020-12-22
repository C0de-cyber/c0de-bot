const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require('../botconfig.json');
const colors = require('../colors.json');

module.exports.run = async (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: botconfig.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefix;
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Você não pode trocar o prefixo deste servidor, pois vc não tem a permissão necessária `MANAGE_GUILD`");
  if(!args[0]) return message.reply(`Erro de Sintaxe: ${botconfig.prefix}setprefix <seu prefixo>`)

  prefixes[message.guild.id] = {
    prefix: args[0]
  }

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let embed = new Discord.MessageEmbed()
  .setTitle("PREFIXO SETADO!")
  .setColor("RANDOM")
  .setDescription(`Setado para **${args[0]}**`)
  message.channel.send(embed)
}

module.exports.help = {
  name: "prefix",
  aliases: []
}