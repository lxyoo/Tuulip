const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = class BirthdaycheckCommand extends BaseCommand {
  constructor() {
    super('birthdaycheck', 'misc', []);
  }

  async run(client, message, args) {
    const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    if (args[0]) {
      var checking = db.fetch(`birthdate_${user.id}`);
    } else {
      var checking = db.fetch(`birthdate_${message.author.id}`);
    }
    if (!checking) return message.channel.send(`${user} has not set their birthday yet!`);
    message.channel.send(`🌷 ${user}'s birthday is on ${checking}!`);
  }
}