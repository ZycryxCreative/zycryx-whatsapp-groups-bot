const {downloadContentFromMessage} = (await import('@whiskeysockets/baileys'));

export async function before(m, {isAdmin, isBotAdmin}) {
    const chat = db.data.chats[m.chat];
    if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return;
    if (!chat.antiviewonce || chat.isBanned) return;
    if (m.mtype == 'viewOnceMessageV2') {
        const msg = m.message.viewOnceMessageV2.message;
        const type = Object.keys(msg)[0];
        const media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video');
        let buffer = Buffer.from([]);
        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        if (/video/.test(type)) {
            return this.sendFile(m.chat, buffer, 'error.mp4', `${msg[type].caption}\n\n*𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰*`, m);
        } else if (/image/.test(type)) {
            return this.sendFile(m.chat, buffer, 'error.jpg', `${msg[type].caption}\n\n*𝙰𝚀𝚄𝙸 𝙽𝙾 𝚂𝙴 𝙿𝙴𝚁𝙼𝙸𝚃𝙴 𝙾𝙲𝚄𝙻𝚃𝙰𝚁 𝙽𝙰𝙳𝙰*`, m);
        }
    }
}
