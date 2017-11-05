const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

var name = "gif-warrior";
client.on("message", (message) => 
{
  if(!message.author.bot && message.toString().startsWith(name))
  {
    message.channel.send("You typed: " + message.content.toString().replace(name, ""));
  }
});

client.login("Mzc2NTY2MTg0NTU4MTk4Nzg0.DOAQTQ.dzRy06BWnr2Ol8HyVDkTruTbeo8");