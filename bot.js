const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("540468130435170314")
setInterval(function() {
channel.send(`ana bot kmt hh ana bot kmt hh ana bot kmt hh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);