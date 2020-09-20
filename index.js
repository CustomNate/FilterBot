


// ██╗░░░██╗██╗░░░░░████████╗██╗███╗░░░███╗░█████╗░████████╗███████╗  ███████╗██╗██╗░░░░░████████╗███████╗██████╗░
// ██║░░░██║██║░░░░░╚══██╔══╝██║████╗░████║██╔══██╗╚══██╔══╝██╔════╝  ██╔════╝██║██║░░░░░╚══██╔══╝██╔════╝██╔══██╗
// ██║░░░██║██║░░░░░░░░██║░░░██║██╔████╔██║███████║░░░██║░░░█████╗░░  █████╗░░██║██║░░░░░░░░██║░░░█████╗░░██████╔╝
// ██║░░░██║██║░░░░░░░░██║░░░██║██║╚██╔╝██║██╔══██║░░░██║░░░██╔══╝░░  ██╔══╝░░██║██║░░░░░░░░██║░░░██╔══╝░░██╔══██╗
// ╚██████╔╝███████╗░░░██║░░░██║██║░╚═╝░██║██║░░██║░░░██║░░░███████╗  ██║░░░░░██║███████╗░░░██║░░░███████╗██║░░██║
// ░╚═════╝░╚══════╝░░░╚═╝░░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝  ╚═╝░░░░░╚═╝╚══════╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝

// ██████╗░░█████╗░████████╗░░░  ░█████╗░░█████╗░██████╗░███████╗██████╗░  ██████╗░██╗░░░██╗
// ██╔══██╗██╔══██╗╚══██╔══╝░░░  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗  ██╔══██╗╚██╗░██╔╝
// ██████╦╝██║░░██║░░░██║░░░░░░  ██║░░╚═╝██║░░██║██║░░██║█████╗░░██║░░██║  ██████╦╝░╚████╔╝░
// ██╔══██╗██║░░██║░░░██║░░░██╗  ██║░░██╗██║░░██║██║░░██║██╔══╝░░██║░░██║  ██╔══██╗░░╚██╔╝░░
// ██████╦╝╚█████╔╝░░░██║░░░╚█║  ╚█████╔╝╚█████╔╝██████╔╝███████╗██████╔╝  ██████╦╝░░░██║░░░
// ╚═════╝░░╚════╝░░░░╚═╝░░░░╚╝  ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░  ╚═════╝░░░░╚═╝░░░

// ░█████╗░██╗░░░██╗░██████╗████████╗░█████╗░███╗░░░███╗███╗░░██╗░█████╗░████████╗███████╗░░░██╗░██╗░░█████╗░░░██╗██╗░█████╗░░░██╗██╗
// ██╔══██╗██║░░░██║██╔════╝╚══██╔══╝██╔══██╗████╗░████║████╗░██║██╔══██╗╚══██╔══╝██╔════╝██████████╗██╔══██╗░██╔╝██║██╔══██╗░██╔╝██║
// ██║░░╚═╝██║░░░██║╚█████╗░░░░██║░░░██║░░██║██╔████╔██║██╔██╗██║███████║░░░██║░░░█████╗░░╚═██╔═██╔═╝██║░░██║██╔╝░██║╚██████║██╔╝░██║
// ██║░░██╗██║░░░██║░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║██║╚████║██╔══██║░░░██║░░░██╔══╝░░██████████╗██║░░██║███████║░╚═══██║███████║
// ╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║██║░╚███║██║░░██║░░░██║░░░███████╗╚██╔═██╔══╝╚█████╔╝╚════██║░█████╔╝╚════██║
// ░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝░╚═╝░╚═╝░░░░╚════╝░░░░░░╚═╝░╚════╝░░░░░░╚═╝

const Discord = require('discord.js')
const client = new Discord.Client();
const config = require("./config.json"); //Defining the place where we will store our swears

client.once("ready", () => {
  console.log('Filter Bot Online! Created by CustomNate#0494')
  client.user.setActivity(`christ help`, {
    type: "PLAYING"
  })
});

client.on('message', message => {
    if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){ //Detecting if the message includes any of the words from the swears table
      message.channel.send(`${message.author}, Don't say that word!`)
      message.delete()
    };
})

client.on('message', message => {
  if (message.content.toLowerCase() === "christ list") {
    message.channel.send(`${message.author}, http://www.mediafire.com/file/8zt6uu2bpmefg3a/list.txt/file`)
  }
})

client.on('message', message => {
  if (message.content.toLowerCase() === "christ help") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Commands')
    .setColor("#1261d1")
    .addField('christ help', 'shows a list of commands', true)
    .addField('christ list', 'gives you a list of the filtered words', true)
    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))

    message.channel.send(embed)
  }
})

client.on('guildMemberAdd', guildMember => {
  let epicRole = message.guild.roles.cache.get('757241153207795812')
  guildMember.roles.add(epicRole)
})

client.login(process.env.token);