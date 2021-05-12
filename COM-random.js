module.exports = (client) => {
    client.on("message", message => {
        if (message.mentions.users.size) {
            if (message.mentions.users.first().id == "744492489473261621" && message.content.slice(-1) == "?") {
                if (Math.floor(Math.random() * 2) == 0) {
                    message.reply("Yes");        
                    console.log([message.author.id + " : " + message.content])      
                } else {
                    message.reply("No");
                    console.log([message.author.id + " : " + message.content])
                }
            }
        }
    })
}