/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';

const handler = async (m, {conn, usedPrefix, command}) => {
    const name = await conn.getName(m.sender);
    const donar = `
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name}*
*┃ Aun nos encontramos rellenando esta seccion
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
    const aa = {quoted: m, userJid: conn.user.jid};
    const res = generateWAMessageFromContent(m.chat, {
        liveLocationMessage: {
            degreesLatitude: 0,
            degreesLongitude: 0,
            caption: donar,
            secuenceNumber: '0',
            contextInfo: {mentionedJid: conn.parseMention()}
        }
    }, aa);
    conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
