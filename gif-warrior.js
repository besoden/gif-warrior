const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => 
{
  if (message.content.startsWith("ping")) 
  {
    message.channel.send("pong!");
  }
});

var substring = "gif-warrior";
client.on("message", (message) => 
{
  if(!message.author.bot && message.toString().startsWith(substring))
  {
    message.channel.send("You typed: " + message.content);
  }
});

client.login("Mzc2NTY2MTg0NTU4MTk4Nzg0.DOAQTQ.dzRy06BWnr2Ol8HyVDkTruTbeo8");