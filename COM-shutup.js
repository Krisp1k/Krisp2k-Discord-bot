module.exports = (client) => {
    client.on("message", message => {  
        if (message.content === "shut up <@!744492489473261621>" && message.content !== "!shut up <@!744492489473261621>") {
            if (message.author.id == "653608166927368213")  {
                message.reply("I'm really sorry..."); 
                console.log([message.author.id + " : " + message.content]);

            }   else {
                message.reply("No you shut the fuck up you useless bitch.");
                console.log([message.author.id + " : " + message.content]);
            }
        }
        
        if (message.content === "!spank <@!744492489473261621>") {
            if (message.author.id == "653608166927368213")  {
                message.reply("Pwease don't spank me daddy, I'm sowwyy...");
                console.log([message.author.id + " : " + message.content])
            
            }   else {
                message.reply("How dare YOU spank me, bitch!")
                console.log([message.author.id + " : " + message.content]);
            
            }
        }
    })
}