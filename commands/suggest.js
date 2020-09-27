const Discord = require('discord.js')
const suggestionModel = require('../models/suggest')

module.exports.run = async (bot, message, args) => {
    const suggestion = args.join(" ")

    if (!suggestion) return message.channel.send('Please specify a suggestion.')

    let newData = new suggestionModel({
        Suggestion: suggestion,
        GuildID: message.guild.id,
        UserID: message.author.id
    })

    message.channel.send('Suggestion sent successfully!')

    newData.save();
}

module.exports.config = {
    name: "suggest",
    description: "placeholder",
    usage: "++suggest",
    aliases: []
};