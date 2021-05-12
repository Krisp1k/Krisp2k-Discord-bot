module.exports = (client) => {
    client.on("message", message => { 
        if (message.content === "!ping" || message.content === "!PING") {
            message.channel.send("Pinging...").then((resultMessage) => {
                
                const ping = resultMessage.createdTimestamp - message.createdTimestamp
                
                resultMessage.edit(`Pong! [${ping}ms]`)
                console.log([message.author.id + " : " + message.content + ` [${ping}ms]`])
            })     
        } 
        if (message.content === "!kys" || message.content === "!KYS") { 
            if (message.author.id == "653608166927368213") {
                console.log(["KRISP2K IS TURNING OFF..."]);
                client.destroy(process.env.BOTTOKEN);  
                
            }  
            else { 
                message.channel.send("Nah, only papa Krisp1k can do dat");
                console.log([message.author.id + " : " + message.content])
            }
        }
        if (message.content === "!prefix" || message.content === "!PREFIX") {
            message.channel.send("Its obviously `!` you dumbass...");
            console.log([message.author.id + " : " + message.content])
        }
    })  
}
