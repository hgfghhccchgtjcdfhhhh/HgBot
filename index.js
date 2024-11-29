const Discord = require("discord.js");
const client = new Discord.Client();

const token = "MTMxMTM3MDE5Nzg4OTk3ODQ3OA.GjeKxw.XsD3uwZOPIfKRa8oh-b88uSVvrvDDpH1hjsQwc ";
client.on("ready", () => {
 console.log("Ready!");
});

client.on("message", (message) => {
 // Handle messages here
});

client.login("MTMxMTM3MDE5Nzg4OTk3ODQ3OA.GjeKxw.XsD3uwZOPIfKRa8oh-b88uSVvrvDDpH1hjsQwc");
