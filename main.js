process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = true
import './config.js';

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

import * as ws from 'ws';
import { writeFileSync, readdirSync, statSync, unlinkSync, existsSync, readFileSync, copyFileSync, watch, rmSync, readdir, stat, mkdirSync } from 'fs';
import yargs from 'yargs';
import { spawn } from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import { tmpdir } from 'os';
import { format } from 'util';
import P from 'pino';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { Low, JSONFile } from 'lowdb';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const { DisconnectReason, useMultiFileAuthState } = await import('@adiwajshing/baileys')
const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000
protoType()
serialize()
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = { start: new Date }
const __dirname = global.__dirname(import.meta.url)
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || 'xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-HhhHBb.aA').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}${dirP}database.json`))

global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
if (!global.db.READ) {
clearInterval(this)
resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
}
}, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read().catch(console.error)
global.db.READ = null
global.db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
sticker: {},
settings: {},
...(global.db.data || {})
}
global.db.chain = chain(global.db.data)
}
loadDatabase()
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
if (!existsSync(jadibts)) {
  mkdirSync(jadibts);
  console.log('Directorio jadibts creado exitosamente');
}
if (!existsSync(authFileRespald)) {
  mkdirSync(authFileRespald);
  console.log('Directorio sesionRespaldo creado exitosamente');
}
if (!existsSync(temp)) {
  mkdirSync(temp);
  console.log('Directorio tmp creado exitosamente');
}
const { state, saveState, saveCreds } = await useMultiFileAuthState(global.authFile)

const connectionOptions = {
logger: P({ level: 'silent' }),
printQRInTerminal: true,
auth: state,
browser: ['CuriosityBot-MD','Safari','1.0.0'], 

}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))}, 30 * 1000)}
if (opts['server']) (await import(join(__dirname, 'server.js'))).default(global.conn, PORT)

  const SESSION_DIR = authFile;
  const SESSION_BACKUP_DIR = authFileRespald;
  const CREDENTIALS_FILE = 'creds.json';
  const CREDENTIALS_BACKUP_FILE = 'creds.json';
  
function backupCreds() {
const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  

  copyFileSync(credsFilePath, backupFilePath);
  console.log(`Creado el archivo de respaldo: ${backupFilePath}`);

}
 
function actualizarNumero() {
  const configPath = path.join(__dirname, 'config.js');
  const configData = readFileSync(configPath, 'utf8');
  const updatedConfigData = configData.replace(/(global\.animxscans\s*=\s*\[\s*\[')[0-9]+'(,\s*'Bot principal\s*-\s*CuriosityBot-MD',\s*true\]\s*\])/, function(match) {
    const archivoCreds = readFileSync(path.join(__dirname, 'sesionRespaldo/creds.json'));
    const numero = JSON.parse(archivoCreds).me.id.split(':')[0];
    return `global.animxscans = [['${numero}', 'CuriosityBot-MD', true]]`;
  });
  writeFileSync(configPath, updatedConfigData);
}

function cleanupOnConnectionError() {

  readdirSync(SESSION_DIR).forEach(file => {
    const filePath = path.join(SESSION_DIR, file);
    try {
      unlinkSync(filePath);
      console.log(`Archivo eliminado: ${filePath}`);
    } catch (error) {
      console.log(`No se pudo eliminar el archivo: ${filePath}`);
    }
  });

  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  try {
    unlinkSync(backupFilePath);
    console.log(`Archivo de copia de seguridad eliminado: ${backupFilePath}`);
  } catch (error) {
    console.log(`No se pudo eliminar el archivo de copia de seguridad o no existe: ${backupFilePath}`);
  }
  process.send('reset')
} 

function credsStatus() {

  const credsFilePath = path.join(SESSION_DIR, CREDENTIALS_FILE);
  const backupFilePath = path.join(SESSION_BACKUP_DIR, CREDENTIALS_BACKUP_FILE);
  
  // Comprobar si el archivo de credenciales originales existe y no es 0 bytes
  let originalFileValid = false;
  try {
    const stats = statSync(credsFilePath);
    originalFileValid = stats.isFile() && stats.size > 0;
  } catch (error) {
    console.log(`El archivo de credenciales no existe o está vacío. Generando código QR...`);
    connectionOptions
      console.log(`Escanea el código QR para continuar.`);
  }
  
  if (!originalFileValid) {
    // El archivo de credenciales originales no es válido o falta, así que copie el archivo de copia de seguridad y cambie el nombre
    const backupStats = statSync(backupFilePath);
    if (backupStats.isFile() && backupStats.size > 0) {
      copyFileSync(backupFilePath, credsFilePath);
      console.log(`Archivo de credenciales restaurado desde la copia de seguridad: ${backupFilePath} -> ${credsFilePath}`);
        process.send('reset')
    } else {
      console.log(`No se encuentra el archivo de credenciales válido y el archivo de copia de seguridad no es válido o falta: ${credsFilePath}, ${backupFilePath}`);
      connectionOptions
    }
  } else {
    console.log('Archivo de respaldo correcto, continuando inicio de sesión');
  }
}

function waitTwoMinutes() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2 * 60 * 1000); 
  });
}

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin } = update
if (isNewLogin) conn.isInit = true
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
console.log(await global.reloadHandler(true).catch(console.error))
global.timestamp.connect = new Date
}
if (global.db.data == null) loadDatabase()
if (update.qr != 0 && update.qr != undefined) {
console.log(chalk.yellow('🚩 Escanea este codigo QR,\nel codigo QR expira en 60 segundos.'));
      }
if (connection === 'open') {
console.log(chalk.yellow('➳ CONECTADO CORRECTAMENTE'))
if (existsSync(global.authFile)) {
    console.log(chalk.green('✓ Archivo de credenciales guardado correctamente'));
  } else {
    console.log(chalk.yellow('🚩ㅤError al guardar el archivo de credenciales'));
  }
          backupCreds();
          actualizarNumero()
          credsStatus();
          try {
            // Leer la base de datos
            await db.read();
            const chats = db.data.chats;
            let successfulBans = 0;
            for (const [key, value] of Object.entries(chats)) {
              if (value.isBanned === false) {
                value.isBanned = true;
                //console.log('Baneando chat:', key);
                successfulBans++;
              }
            }
            await db.write();
          
            if (successfulBans === 0) {
              throw new Error('No se pudo banear ningún chat');
            } else {
              console.log(`Se banearon ${successfulBans} chats correctamente`);
            }
          } catch (e) {
            console.log(`Error: ${e.message}`);
          } 
          await waitTwoMinutes()         
          try {
            await db.read();
            const chats = db.data.chats;
            let successfulUnbans = 0;
            for (const [key, value] of Object.entries(chats)) {
              if (value.isBanned === true) {
                value.isBanned = false;
                //console.log('Desbaneando chat:', key);
                successfulUnbans++;
              }
            }
            await db.write();
            if (successfulUnbans === 0) {
              throw new Error('No se pudo desbanear ningún chat');
            } else {
              console.log(`Se desbanearon ${successfulUnbans} chats correctamente`);
            }
          } catch (e) {
            console.log(`Error: ${e.message}`);
          }
          
          }
        try {
          await waitTwoMinutes(); 
          await conn.groupAcceptInvite(global.nna2);
          } catch (error) {
              console.log('Error al aceptar invitación de grupo:', error);
          }
}
 
process.on('uncaughtException', console.error)

let isInit = true;
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
try {
const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = global.conn.chats
try { global.conn.ws.close() } catch { }
conn.ev.removeAllListeners()
global.conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
  
conn.welcome = '┏━━━━━━━━━━━━\n┃──〘 💛 *WELCOME 💛* 〙──\n┃━━━━━━━━━━━━\n┃ *_👀 @user bienvenid@ a_* \n┃ *_@subject ✨_*\n┃\n┃=> *_Puedes solicitar mi lista de_*\n┃ *_comandos con:_*\n┠⊷ *#menu*\n┃\n┃=> *_Aquí tienes la descripción_* \n┃ *_del grupo, léela!!_*\n┃\n\n@desc\n\n┗━━━━━━━━━━━'
  conn.bye = '┏━━━━━━━━━━━━\n┃──〘 👋🏻 *ADIOS* 👋🏻 〙───\n┃━━━━━━━━━━━━\n┃ *_☠ Se fue @user_* \n┃ *_Que dios lo bendiga️_* \n┃ *_Y lo atropelle un tren 😇_*\n┗━━━━━━━━━━'
  conn.spromote = '⚠️ *@user SE SUMA AL GRUPO DE ADMINS!!*'
  conn.sdemote = '⚠️ *@user ABANDONA EL GRUPO DE ADMINS!!*'
  conn.sDesc = '📝 *SE HA MODIFICADO LA DESCRIPCIÓN*\n\n*NUEVA DESCRIPCIÓN:* @desc'
  conn.sSubject = '📝 *SE HA MODIFICADO EL TÍTULO DEL GRUPO*\n*NUEVO TITULO:* @subject'
  conn.sIcon = '🥏 *SE HA CAMBIADO LA FOTO DEL GRUPO!!*'
  conn.sRevoke = '🥏 *SE HA ACTUALIZADO EL ENLACE DEL GRUPO!!*\n*NUEVO ENLACE:* @revoke'

conn.handler = handler.handler.bind(global.conn)
conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
conn.onDelete = handler.deleteUpdate.bind(global.conn)
conn.onCall = handler.callUpdate.bind(global.conn)
conn.connectionUpdate = connectionUpdate.bind(global.conn)
conn.credsUpdate = saveCreds.bind(global.conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('call', conn.onCall)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
try {
let file = global.__filename(join(pluginFolder, filename))
const module = await import(file)
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(e)
delete global.plugins[filename]
}}}
filesInit().then(_ => Object.keys(global.plugins)).catch(console.error)

global.reload = async (_ev, filename) => {
if (pluginFilter(filename)) {
let dir = global.__filename(join(pluginFolder, filename), true)
if (filename in global.plugins) {
if (existsSync(dir)) conn.logger.info(`plugin actualizado - '${filename}'`)
else {
conn.logger.warn(`plugin eliminado - '${filename}'`)
return delete global.plugins[filename]
}
} else conn.logger.info(`nuevo plugin - '${filename}'`)
let err = syntaxerror(readFileSync(dir), filename, {
sourceType: 'module',
allowAwaitOutsideFunction: true
})
if (err) conn.logger.error(`Error de sintaxis mientras se carga '${filename}'\n${format(err)}`)
else try {
const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
global.plugins[filename] = module.default || module
} catch (e) {
conn.logger.error(`Hay un error que requiere atención en '${filename}\n${format(e)}'`)
} finally {
global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
}}}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()
async function _quickTest() {
let test = await Promise.all([
spawn('ffmpeg'),
spawn('ffprobe'),
spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
spawn('convert'),
spawn('magick'),
spawn('gm'),
spawn('find', ['--version'])
].map(p => {
return Promise.race([
new Promise(resolve => {
p.on('close', code => {
resolve(code !== 127)
})}),
new Promise(resolve => {
p.on('error', _ => resolve(false))
})])}))
let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
//let s = global.support = { ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find }
Object.freeze(global.support)
}

function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, 'tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
      const stats = statSync(file)
      if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
      return false })
  }
  
  function purgeSession() {
      
      let prekey = []
      let directorio = readdirSync(authFile)
      let filesFolderPreKeys = directorio.filter((file) => {
          if (file.startsWith('pre-key-')) {
          return true 
          }
          const stats = statSync(path.join(join(__dirname, file)));
          const mtime = new Date(stats.mtime);
        const now = new Date();
        const hourAgo = new Date(now - 60 * 60 * 1000);
        return (
          (file.startsWith('sender-key-') ||
            file.startsWith('sender-key-memory-') ||
            file.startsWith('sender-key-status@broadcast') ||
            file.startsWith('session')) &&
          mtime <= hourAgo
        )
      })
      if (prekey.length === 0) {
        console.log("Ningún archivo encontrado");
      } else {
      prekey = [...prekey, ...filesFolderPreKeys]
      filesFolderPreKeys.forEach(files => {
      unlinkSync(join(__dirname, files))
      console.log(`${files} fueron eliminados`)
  
  })
  }
  }  
  
  function purgeSessionSB() {
    const listaDirectorios = readdirSync(join(__dirname, jadibts));
    console.log(listaDirectorios);
    let SBprekey = [];
  
    listaDirectorios.forEach((filesInDir) => {
      const directorio = readdirSync(join(__dirname, jadibts+filesInDir));
      console.log(directorio);
      const DSBPreKeys = directorio.filter((fileInDir) => {
        if (fileInDir.startsWith('pre-key-')) {
          return true;
        }
        const stats = statSync(path.join(join(__dirname, jadibts+filesInDir+'/'+fileInDir)));
        const mtime = new Date(stats.mtime);
        const now = new Date();
        const hourAgo = new Date(now - 60 * 60 * 1000);
        return (
          (fileInDir.startsWith('sender-key-') ||
            fileInDir.startsWith('sender-key-memory-') ||
            fileInDir.startsWith('sender-key-status@broadcast') ||
            fileInDir.startsWith('session')) &&
          mtime <= hourAgo
        );
      });
      if (DSBPreKeys.length === 0) {
        console.log('Ningún archivo encontrado');
      } else {
        SBprekey = [...SBprekey, ...DSBPreKeys];
        DSBPreKeys.forEach((fileInDir) => {
          unlinkSync(dirP+jadibts+filesInDir+'/'+fileInDir);
          console.log(`${fileInDir} fueron eliminados`);
        });
      }
    });
  }
  
  function purgeOldFiles() {
      const directories = [authFile, jadibts];
      const oneHourAgo = new Date(Date.now() - (60 * 60 * 1000));
     
      directories.forEach((dir) => {
          readdirSync(dir, (err, files) => {
          if (err) throw err;
          files.forEach((file) => {
            const filePath = path.join(dir, file);
            statSync(filePath, (err, stats) => {
              if (err) throw err;
              const createTime = new Date(stats.birthtimeMs);
              const modTime = new Date(stats.mtimeMs);
              const isOld = createTime < oneHourAgo || modTime < oneHourAgo;
              const isCreds = file === 'creds.json';
              if (stats.isFile() && isOld && !isCreds) {
                  unlinkSync(filePath, (err) => {
                  if (err) throw err;
                  console.log(`Archivos ${filePath} borrados con éxito`);
                });
              } else {
                console.log(`Archivo ${filePath} no borrado`);
              }
            });
          });
        });
      });
    }
    purgeOldFiles()

setInterval(async () => {
    backupCreds()
    console.log(chalk.whiteBright(`\n▣────────[ BACKUP_CREDS ]───────────···\n│\n▣─❧ RESPALDO EXITOSO ✅\n│\n▣────────────────────────────────────···\n`))
    }, 15 * 60 * 1000)
setInterval(async () => {
    clearTmp()
    console.log(chalk.cyanBright(`AUTOCLEAR │ BASURA ELIMINADA`))
    }, 1000 * 60 * 3)
setInterval(async () => {
     purgeSession()
    console.log(chalk.cyanBright(`\n▣────────[ AUTOPURGESESSIONS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
    }, 1000 * 60 * 60)
setInterval(async () => {
      purgeSessionSB()
     console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_SESSIONS_SUB-BOTS ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
    }, 1000 * 60 * 60)
setInterval(async () => {
     purgeOldFiles()
    console.log(chalk.cyanBright(`\n▣────────[ AUTO_PURGE_OLDFILES ]───────────···\n│\n▣─❧ ARCHIVOS ELIMINADOS ✅\n│\n▣────────────────────────────────────···\n`))
    }, 1000 * 60 * 60)

//  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
//  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
//  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')


_quickTest()
.then(() => conn.logger.info(`\n\n[_>] Prueba rápida realizada ✓\n`))
.catch(console.error)
