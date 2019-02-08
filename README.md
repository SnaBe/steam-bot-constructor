# steam-bot-constructor
A constructor for Steam bots.

### How to get it up and running?
Before you can run the bots, you'll need the required packages. (node modules).

But how do you install them? Don't worry, I'll show you.

1. Download the github libary & locate the folder

Find the donwloaded folder, place it somewhere new and extract the files.

2. Edit the config.json to fit your needs.

Add your bot's steam account details & style the bot's profile. 

If you would like your bots to trade without a trade hold, you can do that too.

Just download [SDA ](https://github.com/Jessecar96/SteamDesktopAuthenticator/releases/tag/1.0.9 "SDA download page") and follow the steps to setup a new account.

Disable encryption, locate the maFile folder and find the steamid for you bot account, open the file and search for shared_secret and identity_secret. Simply add those in the config and your bot can now login and use 2FA. 

3. Open a command prompt & type the follwing command.
```
$ cd C:\Users\WINDOWS_USER\YOUR_FOLDER_LOCATION
```

4. Install the required packages with npm
```
$ npm i
```

5. Run the bots

You must have Node.js installed before you can run anything with the node command. You can download Node.js [here.](https://nodejs.org/en/download/ "NodeJS download page")

```
$ node app.js
```
6. That's it, enjoy!

If you run into any issues, feel free to contact me or post an issue here on Github.
