const {Client, Intents, User} = require('discord.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

const random_sth = (i) =>{
    return Math.floor(Math.random() * i);
}

client.on('ready', ()=>{
    console.log('Noah Ark is ready')
})

client.on('messageCreate', msg=>{
    msg.content = msg.content.toLowerCase()
    if (msg.content[0] == '!'){
        let msgar = msg.content.split(" ") 
        if (msgar[0] == '!random'){
            let sth = []
            for (let i = 1; i <= msgar.length; i++){
                sth.push(msgar[i])
            }
            let l = sth.length
            msg.reply(sth[random_sth(l)])
        } else if (msgar[0] == '!help'){
            msg.reply('Random generator : type "!random x x x x" (x are sth you want to random)')
        } else if (msgar[0] == '!test'){
            msg.reply('Noah Ark is ready')
        } else if (msgar[0] == '!join'){
            if(msg.member.voiceChannel) {
                msg.member.voiceChannel.join()
                .then(connection => {
                    msg.reply('I have join to server')
                 })
                 .catch(console.log)
            } else {
                msg.reply("You need to join to Voice Channel!!!")
            }
        } else {
            msg.reply("Noah's Ark ไม่มีคำสั่งนี้ค้าบ หากต้องการทราบคำสั่งพิมพ์ !help ได้เลยค้าบ 😊")
        }
    }
})

client.login(process.env.TOKEN)