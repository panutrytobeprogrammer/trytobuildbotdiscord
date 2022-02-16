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
    if (msg.content == 'giav'){
        msg.reply('Lecture on Monday : https://chula.zoom.us/j/99633531372?pwd=b0Jkd05nVXV3MHdlTHFEWU5iVGF0dz09#success\nLecture on Thursday : https://chula.zoom.us/j/96167012836?pwd=Wi9hQUI3eTVFMTN6SE14dVRJc0ZPZz09\nLab on Thursday : https://chula.zoom.us/j/98553123452?pwd=UFFMV1NpZzRpUU43SXRWV1h0NDVjdz09')
    }
    if (msg.content == 'math carto'){
        msg.reply('ไปกดในลิ้งในนี้ : https://www.mycourseville.com/?q=courseville/course/27306/meeting')
    }
    if (msg.content == 'sat survey'){
        msg.reply('ไปดูใน mycourseville เอาเองนะน้องนะ')
    }
    if (msg.content == 'adv photo'){
        msg.reply('ลิ้งนี้ไอ่สัส : https://chula.zoom.us/j/99162558489?pwd=MEREc3dVbVd2TVlSb2xzYld0QklwZz09')
    }
    if (msg.content == 'tech'){
        msg.reply('ลิ้งนี้ไอ่สัส : https://chula.zoom.us/j/97390901679?pwd=L29wb21yOVcybGtMSlpvbW5yNGM2QT09') 
    }
    if (msg.content == 'adv rs'){
        msg.reply('ใน Microsoft Team!!!!')
    }
    if (msg.content == '!help'){
        msg.reply('Random generator : type "!random x x x x" (x are sth you want to random) \nZoom meeting link : พิมพ์ !zoom หรือพิมพ์ชื่อวิชา \ngiav, math carto, sat survey, tech, adv rs, adv photo')
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
        if (msgar[0] == '!zoom'){
            msg.reply('GIAV\nLecture on Monday : https://chula.zoom.us/j/99633531372?pwd=b0Jkd05nVXV3MHdlTHFEWU5iVGF0dz09#success\nLecture on Thursday : https://chula.zoom.us/j/96167012836?pwd=Wi9hQUI3eTVFMTN6SE14dVRJc0ZPZz09\nLab on Thursday : https://chula.zoom.us/j/98553123452?pwd=UFFMV1NpZzRpUU43SXRWV1h0NDVjdz09\n\nMath Carto\nไปกดในลิ้งในนี้ : https://www.mycourseville.com/?q=courseville/course/27306/meeting\n\nAdv Photo\nhttps://chula.zoom.us/j/99162558489?pwd=MEREc3dVbVd2TVlSb2xzYld0QklwZz09\n\nTech Writting\nhttps://chula.zoom.us/j/97390901679?pwd=L29wb21yOVcybGtMSlpvbW5yNGM2QT09\n')
    
        }
    }
})

client.login(process.env.TOKEN)