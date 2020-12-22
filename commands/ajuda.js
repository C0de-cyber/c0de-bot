const Discord = require('discord.js');
const config = require('./config.json')

module.exports.run = async (client, message, args) => {
  message.delete()

  const erros = new Discord.MessageEmbed()
    .setAuthor("Equipe ATSYSTEM - Erro, client.user.avatarURL")

  setDescription(`${message.author}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setFooter(message.author.tag, message.author.avatarURL)
    .setColor('RANDOM')



}

const yes = new Discord.MessageEmbed()
  .setAuthor(`${message.guild.name} - Ajuda`)
  .setDescription(` ${message.author}, enviei meus comandos em seu privado!`)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL)
message.channel.send(yes).then(msg => msg.delete(12000))

const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.guild.name} - Ajuda`)
  .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria!
        E Meu Prefixo é "a!"`)
  .addField(`⭐ **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`...')
  .addField(`👦 **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
  .addField(`😂 **Diversão**`, '• `lenny`, `coinflip`, `dados`...')
  .addField(`🔧 **Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
  .setFooter(`© Código de C0de.exe#2897`)
  .setTimestamp()
  .setColor('RANDOM')
message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
  await msg.react('⭐')
  await msg.react('👦')
  await msg.react('😂')
  await msg.react('🔧')
  await msg.react("↩")


  const informacao = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
  const usuario = (reaction, user) => reaction.emoji.name === '👦' && user.id === message.author.id;
  const diversao = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
  const staff = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;

  const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

  const informacaoL = msg.createReactionCollector(informacao)
  const usuarioL = msg.createReactionCollector(usuario)
  const diversaoL = msg.createReactionCollector(diversao)
  const staffL = msg.createReactionCollector(staff)

  const backL = msg.createReactionCollector(back)


  backL.on('collect', r => {
    const embedd = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - Ajuda`)
      .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
      .addField(`⭐ **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`, ...')
      .addField(`👦 **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
      .addField(`😂 **Diversão**`, '• `lenny`, `coinflip`, `dados`...')
      .addField(`🔧 **Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
      .setColor("RANDOM")
    msg.edit(embedd)
  })

  informacaoL.on('collect', r => {

    const embedinformacao = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - Ajuda`)
      .setDescription(`⭐ **UTEIS**
                a!ajuda - Exibe o menu de ajuda.
                a!ping - Mostra o delay bot-servidor
                a!uptime - o horário em que eu acordei!`)
      .setColor("RANDOM")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
    msg.edit(embedinformacao)
  })

  usuarioL.on('collect', r => {
    const embedusuario = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - Ajuda`)
      .setDescription(`👦 **USUARIO**
                sem nada por enquanto
        `)
      .setColor("RANDOM")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
    msg.edit(embedusuario)
  })

  diversaoL.on('collect', r => {
    const embeddiversao = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - Ajuda`)
      .setDescription(`😂 **DIVERSÃO**)
                        
  (`a!say <Mensagem>`) - Faz com que eu repita uma frase.`)
      .setColor("RANDOM")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
    msg.edit(embeddiversao)
  })

  staffL.on('collect', r => {
    const embeddiversao = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name} - Ajuda`)
      .setDescription(`🔧 **Staff**
                a!clear <1-99>- Limpa as mensagens!`)
      .setColor("RANDOM")
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
    msg.edit(embeddiversao)
  })

  const Discord = require("discord.js")
  exports.run = async (bot, message, argumentos, arg_texto, chat) => {

    const ajuda = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("**Lista de comandos!**")
      .setDescription("Reaja abaixo para mostrar o devido comando!")
      .addField('Reaja com:'
        , `🔍-Informações
     ,🔧-Staff 
     ,😆-Diversão
     ,↩-Voltar`)
      .setTimestamp()
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({ Size: 32 }))

    message.channel.send(ajuda).then(msg => {
      msg.react('🔍').then(r => {
        msg.react('🔧').then(r1 => {
          msg.react('😆').then(r2 => {
            msg.react('↩').then(r3 => {
            })
          })
        },

          exports.help = {
            name: "ajuda",
            aliases: ['help']
          }
        )

        const infosFilter = (reaction, user) => reaction.emoji.name === '🔍' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const funFilter = (reaction, user) => reaction.emoji.name === '😆' && user.id === message.author.id;
        const backFilter = (reaction, user) =>
          reaction.emoji.name === '↩' && user.id ===
          message.author.id;

        const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
        const fun = msg.createReactionCollector(funFilter);
        const back = msg.createReactionCollector(backFilter);

        infos.on('collect', r => {
          const infoembed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle("Comandos informativos!")
            .setDescription("Meu Prefixo **a!**")
            .addField('Meus Comandos', `a!ajuda - Exibe o menu de ajuda.
a!ping - Mostra o delay bot-servidor.
a!uptime - o horário em que eu acordei!`)
          msg.edit(infoembed)

        })

        adm.on('collect', r1 => {
          const embedd = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle("Comandos de administração!")
            .setDescription("Meu Prefixo **a!**")
            .addField('Meus Comandos', `a!clear <1-99>- Limpa as mensagens!`)
          msg.edit(embedd)

        })

        fun.on('collect', r2 => {
          const embeddiversao = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle("Comandos de diversão!")
            .setDescription("Meu Prefixo **a!**")
            .addField('Meus Comandos:', `
h!say <mensagem> - Faz com que eu repita uma frase.`)
          msg.edit(embeddiversao)

        })
        back.on('collect', r3 => {
          const backembed = new Discord.MessageEmbed()

            .setColor("RANDOM")
            .setTitle("**Lista de comandos!**")
            .setDescription("Reaja abaixo para mostrar o devido comando!")
            .addField('Reaja com:'
              , `🔍-Informações
     ,🔧-Staff 
     ,😆-Diversão
     ,↩-Voltar`)
            .setTimestamp()
            .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({ Size: 32 }))
          msg.edit(backembed)
        }

      }