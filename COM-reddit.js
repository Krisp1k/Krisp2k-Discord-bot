const api = require("imageapi.js");
const Discord = require("discord.js");

module.exports = (client) => {
    client.on("message", async message => {
        if (message.content === "!meme") {
            let subreddits = [
                "memeEconomy",
                "dankmemes",
                "memes",
                "arabfunny",
                "me_irl",
                "meirl",
                "dndmemes",
                "2meirl4meirl"
            ];
            let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];   //randomizer redditů
            let img = await api(subreddit);
        
            const Embed = new Discord.MessageEmbed()
            .setTitle("A reddit meme for you")
            .setURL("https://linktr.ee/krisp1k")
            .setColor("RANDOM")
            .setImage(img)
            .setFooter("*Krisp2k is still in development*")
           
            message.channel.send(Embed);
            console.log([message.author.id + " : " + message.content])
        } 
    })
}