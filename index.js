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

client.on('message', message=>{
    message.content = message.content.toLowerCase()
    if (message.content[0] == '!'){
        let msgar = message.content.split(" ") 
        if (msgar[0] == '!random'){
            let sth = []
            for (let i = 1; i <= msgar.length; i++){
                sth.push(msgar[i])
            }
            let l = sth.length
            message.reply(sth[random_sth(l)])
        } else if (msgar[0] == '!zoom'){
            message.reply('GIAV\nLecture on Monday : https://chula.zoom.us/j/99633531372?pwd=b0Jkd05nVXV3MHdlTHFEWU5iVGF0dz09#success\nLecture on Thursday : https://chula.zoom.us/j/96167012836?pwd=Wi9hQUI3eTVFMTN6SE14dVRJc0ZPZz09\nLab on Thursday : https://chula.zoom.us/j/98553123452?pwd=UFFMV1NpZzRpUU43SXRWV1h0NDVjdz09\n\nMath Carto\nไปกดในลิ้งในนี้ : https://www.mycourseville.com/?q=courseville/course/27306/meeting\n\nAdv Photo\nhttps://chula.zoom.us/j/99162558489?pwd=MEREc3dVbVd2TVlSb2xzYld0QklwZz09\n\nTech Writting\nhttps://chula.zoom.us/j/97390901679?pwd=L29wb21yOVcybGtMSlpvbW5yNGM2QT09\nAdv RS\nhttps://chula.zoom.us/j/91851131794?pwd=bHAyV2RseWRjajhPVjMyMGxmN2o3Zz09')
        } else if (msgar[0] == '!help'){
            message.reply('Random generator : type "!random x x x x" (x are sth you want to random) \nZoom meeting link : พิมพ์ !zoom โลดดด มาทุกวิชาที่เป็น link เดิม (Math Carto กับ Sat Survey แม่งเปลี่ยน link ทุกครั้งเลย)')
        } else if (msgar[0] == '!join'){
            if(message.member.voiceChannel) {
                message.member.voiceChannel.join()
                .then(connection => {
                    message.reply('I have join to server')
                 })
                 .catch(console.log)
            } else {
                message.reply("You need to join to Voice Channel")
            }
        } else {
            msg.reply("Noah's Ark ไม่มีคำสั่งนี้ค้าบ หากต้องการทราบคำสั่งพิมพ์ !help ได้เลยค้าบ 😊")
        }
    }
})

client.login(process.env.TOKEN)