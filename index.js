const Discord = require('discord.js')
const client = new Discord.Client
let prefix = '*'


client.login(process.env.BOT_TOKEN)



client.on("message", async message => {   
client.user.setActivity('*help | @HunterZ',{ type: 'PLAYING' }) 
if(message.author.bot) return;
if(message.channel.type === "dm") return;

const args = message.content.split(" ");


switch(args[0]) {    
         case prefix + "help":
                  let hembed = new Discord.RichEmbed()
                  .setColor('#66ff66')
                  .addField("»»»»»Moderator«««««")
                  .addField(prefix + "tempban" + " <@nickname> <time> <причина>")
                  
                  message.channel.send(hembed)
                  
                  break;
                  
         case prefix + "tempban":
                  break;
}
});
