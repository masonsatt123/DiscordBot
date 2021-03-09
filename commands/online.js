module.exports = {
    name: 'online',
    description: "see how many players are online",
    execute(message, args) {

        const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) {
            //message.channel.send([id, voiceChannel]); testing to see whats going on
            count += voiceChannel.members.size;
        }
        message.channel.send("The number of degenerates in AFK and voice channels is " +count);
    }
}