const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "𝕂𝕚𝕟𝕘♚『S』『U』『D』『U』" 
global.author = process.env.Author || "@𝑆𝑈𝐷𝛯𝛯𝛲𝑇𝛨𝛥" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© King Sudu Bot" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "𝑆𝑈𝐷𝛯𝛯𝛲𝑇𝛨𝛥" 
global.ownernumber = process.env.Owner_Number || "94785214202" 
global.adress = process.env.Continent || "Asia, Sri Lanka, Galle" 
global.timezone = process.env.TimeZone || "Asia/Colombo" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "kingsudubot@gmail.com" 

global.mongoUrl = process.env.MongoDB || "mongodb+srv://KingSUDU:sudubot2008@cluster0.q262gsk.mongodb.net/"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://telegra.ph/file/2e87c9db014e5651e87fc.jpg";

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "King sudu", 
  author: process.env.Author || "Sudeeptha",
  packname: process.env.PackName || "king sudu v2 MD",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© king sudu Bot",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "𝑆𝑈𝐷𝛯𝛯𝛲𝑇𝛨𝛥",
  ownernumber: process.env.Owner_Number || "94785214202",
  adress: process.env.Continent || "Asia, Sri Lanka, Galle",
  timezone: process.env.TimeZone || "Asia/Colombo", 
  instagramId: process.env.Insta || "8.08_only_mine",
  email: process.env.Email_Id || "example@example.com",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://KingSUDU:sudubot2008@cluster0.q262gsk.mongodb.net/",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "session sedssion sessipon ssfdgfbgnhhnhmnhnsgfnhfffffffffffffffffffffffdddddsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssssssssseeeeeeeeeessssssssssssssssssssiiiiiiiiiiiiiiiiiiiiiiioooooooooooooooooooooooooooookmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "true", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "true",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.ibb.co/PhDcZTM/Thumbnail.png",
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}
