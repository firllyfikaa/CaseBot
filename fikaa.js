process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const mark = `0@s.whatsapp.net`
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const moment = require('moment-timezone')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const { smsg, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
//==================================================//
module.exports = firly = async (firly, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.msg.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//

//=================================================//

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

const pushname = m.pushName || "No Name"

    
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}
//=================================================//
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const fromm = mek.key.remoteJid
const botNumber = await firly.decodeJid(firly.user.id)
const isGroup = fromm.endsWith('@g.us')
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await firly.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''


//Const
const cap = '${botname}'
//=================================================//
// FUNCTION

const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

const reply = (teks) => {
return firly.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `ꜰɪᴋᴀᴀ ᴀɪ`,"body": `${time} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/d986d16212c18accc9bc2.jpg',"thumbnail": thumb,"sourceUrl": `"https://youtube.com/watch?v=2pZl4E3f8JY`}}}, { quoted:m})}

//=====================================
/*try {
let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('autorecordtype' in setting)) setting.autorecordtype = true
               if (!('autorecord' in setting)) setting.autorecord = true
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               autorecordtype: true,
               autorecord: true,
            }
           } catch (err) {
            console.log(err)
        }*/
//text in console
if (!firly.public) {
if (!m.key.fromMe) return
}

if (m.message) {
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
//firly.sendPresenceUpdate(jd, from)
firly.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m firlyChat \x1b[1;37m]', time, chalk.green('Pesan Rahasia'), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: firly.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, firly.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
firly.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//==================================================//

//BATAS
//==================================================//
switch(command) {
break
case 'lagu1':
case 'lagu2':
case 'lagu3':
case 'lagu4':
case 'lagu5':
case 'lagu6':
case 'lagu7':
case 'lagu8':
case 'lagu9':
case 'lagu10':
case 'lagu11':
case 'lagu12':
case 'lagu13':
case 'lagu14':
case 'lagu15':
case 'lagu16':
case 'lagu17':
case 'lagu18':
case 'lagu19':
case 'lagu20':
case 'lagu21':
case 'lagu22':
case 'lagu23':
case 'lagu24':
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await loading()
 fikaa = await getBuffer(`https://github.com/firllyfikaa/FavLagu/raw/master/${command}.mp3`)
await firly.sendMessage(from, { audio: fikaa, mimetype: 'audio/mp4', ptt: true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
title: `Listening to ${command}`,
sourceUrl: 'https://youtube.com/watch?v=2pZl4E3f8JY', 
thumbnail: `${global.thumbnail}`
}
}})


break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
 m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
firly.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
