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
                  .setDescription("Команды на сервере")
                  .addField("»»»»»Moderator«««««", "Модерация")
                  .addField(prefix + "tempban" + " <@никнейм> <время> <причина>", "Забанить участника на время")
                  .addField(prefix + "tempmute" + "<@никнейм> <время> <причина>", "Замутить участника на время")
                  .addField(prefix + "warn" + "<@никнейм> <причина>", "Выдать предупреждение")
                  .addField(prefix + "kick" + "<@никнейм> <причина>", "Кикнуть участника")
                  .addField("»»»»»Развлечение«««««", "Команды для веселья")
                  .addField(prefix + "kiss" "<@никнейм>", "Поцеловать участника/участницу")
                  message.channel.send(hembed)
                  
                  break;
                  
         case prefix + "tempban":
                  break;
}
});
