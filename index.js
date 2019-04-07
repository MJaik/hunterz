const Discord = require("discord.js");

const bot = Discord.Client({disableEveryone = true});

client.login(process.env.BOT_TOKEN)

bot.on("ready", async () => {
  bot.user.setActivity("Привет!", {type: "STREAMING"});
})

bot.on("message", async message => {
  if(message.author.bot || message.channel.type = "dm") return;
  
  let prefix = %;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd === '%hello') {
    return message.channel.send("Привет!");
  }
})
