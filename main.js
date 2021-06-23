const Discord = require("discord.js");
const client = new Discord.Client();
const keepAlive = require("./server")

const gifs = require("./COM-gifs");
const replies = require("./COM-replies");
const reddit = require("./COM-reddit");
const randomizer = require("./COM-random");
const shutup = require("./COM-shutup");
const basiccommands = require("./COM-basic");
const help = require("./COM-help");

//const translate = require("./COM-translate");
//const nsfw = require("./COM-nsfw")

require("dotenv").config();

client.on("ready", async () => { 
    
    console.log(["KRISP2K IS UP AND RUNNING!"])
    
    client.user.setPresence({
        activity: {
            name: "!help",
            type: 0,
        },
    })
    
    gifs(client);

    replies(client);

    reddit(client);

    randomizer(client);

    shutup(client);

    basiccommands(client);

    help(client);

    //translate(client);

    //nsfw(client);
})

keepAlive()
client.login(process.env.BOTTOKEN);



