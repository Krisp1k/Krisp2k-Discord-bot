const Discord = require("discord.js");

module.exports = (client) => {
    client.on("message", message => {
        
        if (message.content === "!help") {

            const attachmentHelp = new Discord.MessageAttachment("./help.png", "help.png")
            const helpEmbed = new Discord.MessageEmbed()

                .setColor("#F9F9F9")
                .setTitle("Krisp2k's commands")
                .setDescription("List of commands starting with my prefix '!'.")
                .addFields(
                    {name: "!help", value: "Displays this list of commands."},
                    {name: "!prefix", value: "Isn't it obvious?"},
                    {name: "!gif", value: "Sends a random Tenor GIF (Use !gif <something> for specific search."},
                    {name: "!meme", value: "Sends a random meme from Reddit, including a linkrt.ee url with subreddits I use."},
                    {name: "!ping", value: "Test command - I'll send Pong! + latency back."},
                    {name: "!kys", value: "Test command - Turns off the bot - don't even try it."}, 
                    {name: "!eastereggs | !eggs", value: "?"}
                )
                .attachFiles(attachmentHelp)
                .setImage("attachment://img/help.png")
                .setFooter("*Krisp2k is still in development*")

            message.channel.send(helpEmbed);
            console.log([message.author.id + " : " + message.content])
        }

        else if (message.content === "!eastereggs" || message.content === "!eggs") {

            const attachmentEggs = new Discord.MessageAttachment("./eggs.png", "eggs.png")
            const eggsEmbed = new Discord.MessageEmbed()

                .setColor("#F9F9F9")
                .setTitle("Krisp2k's 'Easter Eggs'")
                .setDescription("Use these within chat without the '!' prefix.")
                .addFields(
                    {name: "shut up <@Krisp2k#1731>", value: "You tell me to shut up."},
                    {name: "<@Krisp2k#1731> <your text> ?", value: "I'll answer your question using Yes/No."},
                    {name: "Hi/Hey/Hello <@Krisp2k#1731>", value: "I'll tell you Hi back."},
                )
                .attachFiles(attachmentEggs)
                .setImage("attachment://img/eggs.png")
                .setFooter("*Krisp2k is still in development*")

            message.channel.send(eggsEmbed);
            console.log([message.author.id + " : " + message.content])
        }
    })    
}