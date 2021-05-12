const api = require("imageapi.js");
const Discord = require("discord.js");

module.exports = (client) => {
    client.on("message", async message => {
        if (message.content === "!nsfw") {    
            if (message.channel.nsfw) {
                let nsfwSubreddits = [
                    "GirlsFinishingTheJob",
                    "RealGirls",
                    "gonewild",
                    "ass",
                    "GirlsinStripedSocks",
                    "lingerie",
                    "cumontongue",
                    "gangbang"
                ];
                let options = {
                    allowNSFW: true
                };
                let nsfwSubreddit = nsfwSubreddits[Math.floor(Math.random()*(nsfwSubreddits.length))];   //randomizer redditů
                let img = await api(nsfwSubreddit);
                
                const nsfwEmbed = new Discord.MessageEmbed()
                .setTitle("Some NSFW goodies for you")
                .setURL("https://linktr.ee/krisp1k")
                .setColor("RANDOM")
                .setImage(img)
                .setFooter("*Krisp2k is still in development*")
                
                message.channel.send(nsfwEmbed);
                console.log([message.author.id + " : " + message.content])
            }
                
            else {
                message.reply("This command can only be used in NSFW channels.")
                console.log([message.author.id + " : " + message.content])
            }        
        }
    })
  
    //hentai subreddity : "ahegao" 
}
