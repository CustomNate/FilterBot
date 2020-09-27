const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const prefix = require('../models/prefix');

module.exports.run = async (bot, message, args) => {

  const data = await prefix.findOne({
    GuildID: message.guild.id
});

  if (args[0] === 'fun') {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('**😂 Fun Commands**')
    embed.setDescription('``meme``, ``frickword``')
    embed.setColor('RANDOM')
    if (!data) {
      embed.setFooter('use ++ before each command')
    }
else if (data) {
  embed.setFooter(`use ${data.Prefix} before each command!`)
}
    
    message.channel.send(embed)
  }

  if (args[0] === 'utility') {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('**🛠️ Utility Commands**')
    embed.setDescription('``help``, ``invite``, ``suggest <suggestion>``')
    embed.setColor('RANDOM')
    if (!data) {
      embed.setFooter('use ++ before each command')
    }
else if (data) {
  embed.setFooter(`use ${data.Prefix} before each command!`)
}
    
    message.channel.send(embed)
  }

  if (args[0] === 'config') {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('**⚙️ Config Commands**')
    embed.setDescription('``setprefix <new prefix>``')
    embed.setColor('RANDOM')
    if (!data) {
      embed.setFooter('use ++ before each command')
    }
else if (data) {
  embed.setFooter(`use ${data.Prefix} before each command!`)
}
    
    message.channel.send(embed)
  }

  if (args[0] === 'xp') {
    const embed = new Discord.MessageEmbed()
    embed.setTitle('**🔵 XP Commands**')
    embed.setDescription('``rank / rank @user``, ``leaderboard``')
    embed.setColor('RANDOM')
    if (!data) {
      embed.setFooter('use ++ before each command')
    }
else if (data) {
  embed.setFooter(`use ${data.Prefix} before each command!`)
}
    
    message.channel.send(embed)
  }

  if (!args.length) {
    const messages = ["Want to invite this bot to your server? Invite it here http://bit.ly/discordchadbot !", "We have a discord server! Join maybe? https://discord.gg/vs9DDa9"]
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const embed = new Discord.MessageEmbed()
    embed.setTitle('**Chad Bot Command List**')
    embed.setDescription(randomMessage)
    embed.setColor('RANDOM')
    if (!data) {
      embed.addField("😂 **Fun**", "``++help fun``", true)
      embed.addField("🛠️ **Utility**", "``++help utility``", true)
      embed.addField("⚙️ **Config**", "``++help config``", true)
      embed.addField("🔵 **XP**", "``++help xp``", true)
    }
    else if (data) {
      embed.addField("😂 **Fun**", "``" + data.Prefix + "help fun``", true)
      embed.addField("🛠️ **Utility**", "``" + data.Prefix + "help utility``", true)
      embed.addField("⚙️ **Config**", "``" + data.Prefix + "help config``", true)
      embed.addField("🔵 **XP**", "``" + data.Prefix + "help xp``", true)
    }
    message.channel.send(embed)
  }
}

module.exports.config = {
    name: "help",
    description: "Here you can find a full list of the commands you can use along with some cool tips!",
    usage: "++help",
    aliases: ['cmds']
}