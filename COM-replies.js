module.exports = (client) => {
    client.on("message", message => {
        if (message.author.id !== "744492489473261621") {
            if (message.content.includes("hi <@!744492489473261621>") || message.content.includes("Hi <@!744492489473261621>") 
                || message.content.includes("hello <@!744492489473261621>") || message.content.includes("Hello <@!744492489473261621>")
                    || message.content.includes("hey <@!744492489473261621>") || message.content.includes("Hey <@!744492489473261621>")) {
                message.reply("Hi!");
                console.log([message.author.id + " : " + message.content]);
            }
            
            if (message.author.id !== "653608166927368213") {
                if (message.content.includes("no u") || message.content.includes("no you")
                    || message.content.includes("No you") ||message.content.includes("No u")) {
                        message.reply("no u");
                        console.log([message.author.id + " : " + message.content]);
                }       
            }
            //if (message.author.id == "368947795417104393") {
            //    message.reply("Shut up you clown");
            //    console.log([message.author.id + " : " + message.content]);
            //}
        }
    })  
}
