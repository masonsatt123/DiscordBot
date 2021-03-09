module.exports = {
    name: 'moveme',
    description: "moves players",
    execute(message, args) {

        var channel = message.member.voice.channel;

        message.channel.send('One sec monk');

        channel.join().then(connection => {

        }) 

    }
}