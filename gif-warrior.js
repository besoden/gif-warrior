const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("Mzc2NTY2MTg0NTU4MTk4Nzg0.DOAQTQ.dzRy06BWnr2Ol8HyVDkTruTbeo8");