const { Client, Intents } = require('discord.js');
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    // client.user.setAvatar('path');
    // client.user.setActivity('activity');

	console.log('ACM Bot ready..');
});

client.login(process.env.DISCORD_TOKEN);
