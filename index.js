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
                  .addField(prefix + "ban" + " <@никнейм> <причина>", "Бан участника (НЕ РАБОТАЕТ!)")
                  .addField(prefix + "tempban" + " <@никнейм> <время> <причина>", "Забанить участника на время (НЕ РАБОТАЕТ!)")
                  .addField(prefix + "tempmute" + "<@никнейм> <время> <причина>", "Замутить участника на время (НЕ РАБОТАЕТ!)")
                  .addField(prefix + "warn" + " <@никнейм> <причина>", "Выдать предупреждение (НЕ РАБОТАЕТ!)")
                  .addField(prefix + "kick" + " <@никнейм> <причина>", "Кикнуть участника (ТЕСТИРУЕТСЯ)")
                  .addField("»»»»»Развлечение«««««", "Команды для веселья")
                  .addField(prefix + "kiss" + " <@никнейм>", "Поцеловать участника/участницу (НЕ РАБОТАЕТ!)")
                  message.channel.send(hembed)
                  
                  break;
                  
         case prefix + "kick":
                  
let kUser = message.mentions.users.first() || message.guild.members.get(args[0])
if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Нет")
if (!kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Нельзя кикнуть админа")

if (!kUser) return message.channel.send("Не найден участник")

let kReason = args.join(" ").slice(22)

message.guild.member(kUser).kick(kReason)
                  break;
                  
}
         
         if (cmd === ${prefix}kick) {
                  
let kUser = message.mentions.users.first() || message.guild.members.get(args[0])
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Нет")
if (!kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Нельзя кикнуть админа")

if (!kUser) return message.channel.send("Не найден участник")

let kReason = args.join(" ").slice(22)

message.guild.member(kUser).kick(kReason)
         }
});
