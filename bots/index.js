const SteamUser = require('steam-user');
const SteamCommunity = require('steamcommunity');
const config = require('../config.json');

class SteamBot {
  constructor(logOnOptions) {
    this.client = new SteamUser();
    this.community = new SteamCommunity();
    this.manager = new TradeOfferManager({
      steam: this.client,
      community: this.community,
      language: 'en'
    });

    this.logOn(logOnOptions);
  }

  logOn(logOnOptions) {
    this.client.logOn(logOnOptions);

    this.client.on('loggedOn', () => {
      console.log('Succesfully logged on to Steam!');

      this.client.setPersona(SteamUser.Steam.EPersonaState.Online);
      this.client.gamesPlayed(440);
    });
  }
}

module.exports = SteamBot;
