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
    if (msg.content == 'ชนิน'){
        msg.reply('Lecture on Monday : https://chula.zoom.us/j/99633531372?pwd=b0Jkd05nVXV3MHdlTHFEWU5iVGF0dz09#success\nLecture on Thursday : https://chula.zoom.us/j/96167012836?pwd=Wi9hQUI3eTVFMTN6SE14dVRJc0ZPZz09\nLab on Thursday : https://chula.zoom.us/j/98553123452?pwd=UFFMV1NpZzRpUU43SXRWV1h0NDVjdz09')
    }
    if (msg.content == 'กรวิก'){
        msg.reply('ไปกดในลิ้งในนี้ : https://www.mycourseville.com/?q=courseville/course/27306/meeting')
    }
    if (msg.content == 'เฉลิมชล'){
        msg.reply('ไปดูใน mycourseville เอาเองนะน้องนะ')
    }
    if (msg.content == 'ไพศาล'){
        msg.reply('ลิ้งนี้ไอ่สัส : https://chula.zoom.us/j/99162558489?pwd=MEREc3dVbVd2TVlSb2xzYld0QklwZz09')
    }
    if (msg.content == 'พี่เพลิน'){
        msg.reply('ลิ้งนี้ไอ่สัส : https://chula.zoom.us/j/97390901679?pwd=L29wb21yOVcybGtMSlpvbW5yNGM2QT09') 
    }
    if (msg.content == 'ชัยโชค'){
        msg.reply('ใน Microsoft Team!!!!')
    }
    if (msg.content == 'zoom'){
        msg.reply('แปป เดะเขียนให้')
    }
    if (msg.content == '!help'){
        msg.reply('Random generator : type "!random x x x x" (x are sth you want to random) \nZoom meeting link : พิมพ์ zoom หรือพิมพ์ชื่ออาจารย์เลย')
    }
    if (msg.content[0] == '!'){
        let msgar = msg.content.split(" ")
        let sth = []
        for (let i = 1; i <= msgar.length; i++){
            sth.push(msgar[i])
        }
        let l = sth.length
        if (msgar[0] == '!random'){
            msg.reply(sth[random_sth(l)])
        }
    }
})

client.login(process.env.TOKEN)