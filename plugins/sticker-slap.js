import {sticker} from '../lib/sticker.js';
import fetch from 'node-fetch';

const handler = async (m, {conn}) => {
    try {
        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
        if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
        const res = await fetch('https://neko-love.xyz/api/v1/slap');
        const json = await res.json();
        const {url} = json;
        const stiker = await sticker(null, url, `+${m.sender.split('@')[0]} le dio una bofetada a ${m.mentionedJid.map((user) => (user === m.sender) ? 'alguien ' : `+${user.split('@')[0]}`).join(', ')}`);
        conn.sendFile(m.chat, stiker, null, {asSticker: true});
    } catch (e) {
    }
};
handler.help = ['slap'];
handler.tags = ['General'];
handler.command = /^slap/i;
export default handler;
