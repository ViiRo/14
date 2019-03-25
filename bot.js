const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552164815640985639")
setInterval(function() {
channel.send(`**Fares spam , Fares spam , Fares spam , Fares spam Fares spamFares spamFares spamFares spamFares spamFares spamFares spamFares spamFares spamFares spam , Fares spam , Fares spam , Fares spam , Fares spam , Fares spam , Fares spam , Fares spam , Fares spam , Fares spam , Fares spam , Faresspam , Fares, Fares,Fares** ,`);
}, 30)
})

client.on('message', message => {
 if(message.author.id !== "544394910183194628" )return;

let command = "14say"

if (!message.content.startsWith(command) || message.author.bot ) return;
const args = message.content.slice(command.length).split(/ +/g).join(" ");
var array = [`${args}`];
var str = array.join(' ');
if (message.content.startsWith(command)) {
message.channel.send(`${args}`);
}
  
});
client.login(process.env.BOT_TOKEN);
