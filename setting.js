const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')	
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const Fichan = new require('./lib/functions')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

// SETTINGS IS BAILEYS \\
global.baileys = require('@whiskeysockets/baileys') // Biarin Ae Jir
// ====================== \\

/* SETTING IS PAIRING CODE 
True To Pairing Code
False To Scaned
*/
global.usePairingCode = true 
// ====================== \\

// SETTING IN SALURAN WHATSAPP \\
global.saluran = '-'
global.idsal = "120363198449115557@newsletter"
// ====================== \\

// SETTING IN OWNER NAME AND NUMBER OWNER \\
global.ownername = 'ꜰɪᴋᴀᴀ' // Owner Name
global.owner = ['62882003166946'] // Nomor Owner
global.botname = 'ꜰɪᴋᴀᴀ ᴀɪ' // Nama Bot
// ====================== \\

// SETTING IN WM \\
global.packname = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜰɪᴋᴀᴀ' // Name Sticker
global.author = `ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜰɪᴋᴀᴀ ᴀɪ` // Name Sticker 
global.hiasan = `	◦  ` // Biarin ,, Klo Ubah Eror Ga Nanggung 
global.prefa = ['','!','.',',','🐤','🗿'] // Biarin Juga
global.sessionName = 'firly' // Gausah
global.sp = '⭔' // Jangan
global.wlcm = []
global.wlcmm = []
global.gris = '`'
global.wm = `ꜰɪᴋᴀᴀ ᴀɪ` // Ubah Ae
global.autobio = false // True Jika Langsung On False Jika Off
global.autoread = false // True Jika Langsung On False Jika On
global.thumbnail = 'https://telegra.ph/file/8075bbe59fb9b63fa5ac0.jpg'

// ====================== \\


// MESSAGE OTOMATISED \\
global.Func = Fichan
global.systemN = `*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ*`
global.mess = {
    ban: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴜ ᴅɪ ʙᴀɴᴅ ᴏᴡɴᴇʀ ᴋᴏɴᴛᴏʟ ᴡᴋᴡᴋᴡᴋ'),
    badm: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴊᴀᴅɪɪɪɴ ʙᴏᴛ ᴀᴅᴍɪɴ ᴅᴜʟᴜ ʟᴀʜ ʙᴀʀᴜ ʙɪsᴀ ɢᴜɴᴀɪɴ ɴɪʜ ғɪᴛᴜʀᴇ'),
    regis: Styles(`*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴅᴀғᴛᴀʀ`),
    premium: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴜsᴇʀ ᴘʀᴇᴍ ʙᴜʏ ᴘʀᴇᴍ ᴋᴇ ᴏᴡɴᴇʀ'),
    search: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏᴛᴡ ꜰɪᴋᴀᴀ sᴇᴀʀᴄʜ....'),
    done: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴅᴏɴᴇ ʏᴀ ᴡɪʀ...'),
    success: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* sᴜᴄᴄᴇs....!!'),
    admin: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ғɪᴛᴜʀᴇ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ'),
    owner: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ᴋʏʏ sᴀᴊᴀ ʏᴀ'),
    group: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ sᴀᴊᴀ ʏᴀ ʟᴏʟ'),
    private: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴄᴍᴅ ɪɴɪ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ꜰɪᴋᴀᴀ ᴀɪ'),
    bot: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴏɴʟʏ ʙᴏᴛ ᴜsᴇʀ'),
    wait: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ᴡᴀɪᴛɪɴɢ ᴏᴛᴡ ꜰɪᴋᴀᴀ ᴘʀᴏsᴇs...'),
    getdata: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Scraping metadata . . .'),
    fail: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* Can\'t get metadata!'),
    error: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* ʟᴀɢɪ ᴀᴅᴀ ᴋᴇɴᴅᴀʟᴀ ᴋᴀᴋ sᴏʀʏ ʏᴀ'),
    errorF: Styles('*sʏsᴛᴇᴍ ɴᴏᴛɪᴄᴇ* this feature is in error.'),
}
//=================================================//
// SETTING IN LIMITED \\
global.limitawal = {
    premium: "Infinity",
    free: 1000
    }
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})