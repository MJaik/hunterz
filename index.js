const Discord = require('discord.js')
const client = new Discord.Client
let prefix = '1'


client.login(process.env.BOT_TOKEN)



client.on("message", async message => {   
client.user.setActivity('наконец-то запустился',{ type: 'PLAYING' }) 
if(message.author.bot) return;
if(message.channel.type === "dm") return;

const args = message.content.split(" ");


switch(args[0]) {

case prefix + "ping":
 message.channel.send("секунду...").then(m => {

let ping = m.createdTimestamp - message.createdTimestamp

let choices = ["мой ping", "это плохо?" , "наверное это хорошо", "Pong"]

let response = choices[Math.floor(Math.random() * choices.length)]


m.edit(`${response}: ${ping}, DISCORD API ping: ${Math.round(client.ping)}`)

          })

             break;
         case prefix + "help":
                  let hembed = new Discord.RichEmbed()
                  .setColor('#66ff66')
                  .addField(prefix + "ping","узнать пинг бота")
                  
                  message.channel.send(hembed)
                  
                  break;
}
});
