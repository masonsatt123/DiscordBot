const Discord = require('discord.js');
const Chimp = new Discord.Client();

const PREFIX = '!';
Chimp.commands = new Discord.Collection();
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    Chimp.commands.set(command.name, command);
}


Chimp.login(process.env.token);


Chimp.on('ready', () => {

    console.log("Chimp is active and ready");

})


Chimp.on('message', message => {
  //gets array what they say
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'online':

            Chimp.commands.get('online').execute(message, args);

        break;

        case 'moveme':

            Chimp.commands.get('moveme').execute(message, args);

        break;
        
        case 'no':
			
	    Chimp.commands.get('no').execute(message, args);
			
	break;
    }
})

//checks if member is in discord channel const member = message.guild.member(user);
//to kick member.kick('You were kicked for using this command more than once)

//add 10 puff challenge
//add cashin out pussy boi watch yo mouth
