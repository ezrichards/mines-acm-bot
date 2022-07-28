const { Client, Intents } = require('discord.js');
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    client.user.setAvatar('./icon_512.png');
    
    console.log('Bot running..')
});

client.login(process.env.DISCORD_TOKEN);
