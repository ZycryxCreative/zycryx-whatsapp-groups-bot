import { youtubedl, youtubeSearch, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) throw `*⚠️ INGRESE EL NOMBRE DE LA CANCIÓN QUE ESTÁ BUSCANDO*\n\n*💡 EJEMPLO*\n*${usedPrefix + command}* Another love`
m.react(rwait)
try {
m.reply(`🚀 *C A R G A N D O*`)
var vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*⚠️ ERROR, NO FUE POSIBLE DESCARGAR EL AUDIO*'
var { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
var url = 'https://www.youtube.com/watch?v=' + videoId

let vide = `https://yt.btch.bz/download?URL=${url}&videoName=video`
var tmb = thumbnail
var captionvid = `  
*• 📑 TÍTULO:*
${title}
   
*• 📆 PUBLICADO:* 
${publishedTime}
  
*• ⏰ DURACIÓN:* 
${durationH}
  
*• 👀 VISTAS* 
${viewH}  
  
*• 📡 URL*  
${url}
  
*• 💬 DESCRIPCIÓN* 
${description}`
var pesan = await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: "",
body: "CuriosityBot-MD",
thumbnailUrl: tmb ,
sourceUrl: md,
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}
})
    if (durationS > 18000) return conn.sendMessage(m.chat, { text: `*Link Original:* ${await cut(url)}\n\n_Durasi terlalu panjang..._\n*Duration Limit!*` }, { quoted: pesan })
conn.sendMessage(m.chat, {
video: {
url: vide,
mimetype: 'video/mp4',
attributes: [
{
name: 'controls',
value: 'true'
},
{
name: 'autoplay',
value: 'true'
}]}
}, { quoted: pesan })
m.react(done)
} catch (e) {
throw '*⚠️ NO FUE POSIBLE DESCARGAR EL VIDEO. CORROBORÉ QUE EL NOMBRE DEL VIDEO SEA CORRECTO*'
}
}

handler.command = handler.help = ['play2', 'playvideo']
handler.tags = ['dl']
handler.exp = 0
handler.diamond = true 
handler.register = true
handler.premium = false
export default handler
async function cut(url) {
url = encodeURIComponent(url)
let res = await fetch(`https://api.botcahx.live/api/linkshort/bitly?link=${url}&apikey=${btc}`)
if (!res.ok) throw false
return await res.text()
}
async function delay(ms) {
await new Promise(resolve => setTimeout(resolve, ms));
}
