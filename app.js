const SteamCommunity = require('steamcommunity');
const SteamTotp = require('steam-totp');
const config = require('./config.json');

const SteamBot = require('./bots');

const bot1 = new SteamBot({
  accountName: config.bot1.username,
  password: config.bot1.password,
  twoFactorCode: SteamTotp.generateAuthCode(config.bot1.sharedSecret)
});

const bot2 = new SteamBot({
  accountName: config.bot2.username,
  password: config.bot2.password,
  twoFactorCode: SteamTotp.generateAuthCode(config.bot2.sharedSecret)
});
