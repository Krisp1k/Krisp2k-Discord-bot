const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports = (client) => {
    client.on("message", async message => {
    
        let tokens = message.content.split(" ");
    
        if (tokens[0] == "!gif") { 

            let keywords = "meme"

            if (tokens.length > 1) {
                // možnost víc slov za !gif 
                keywords = tokens.slice(1, tokens.length).join(" ");
            }

            let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}`
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            
            message.channel.send(json.results[index].url);
            message.channel.send("**GIF from Tenor:** " + '`'+ keywords +'`');

            console.log([message.author.id + " : " + message.content]);
        }
    })  
}  
    

