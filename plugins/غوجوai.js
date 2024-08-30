const fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] اهلا انا غوجو *\n\n*—◉ مثال على طلبات*\n*◉ ${usedPrefix + command} .بوت اعطني كود بايثون*\n*◉ ${usedPrefix + command} .بوت اعطني انمي*`
try {
//m.reply('*[❗] 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙼𝙰𝙽𝙳𝙾 𝙻𝙾 𝚀𝚄𝙴 𝙼𝙴 𝙿𝙸𝙳𝙸𝙾*')
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://bk9.fun/BK9?q=اهلا&غوجو=انت غوحو من انمي ججتسو كايسن مرح وتظن انك الاقوي ودائما تتكلم الغه المصريه فقط وتستعمل  ايموجي`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] خطأ لايوجد*`
}}
handler.command = /^(غوجو)/i;
module.exports = handler
