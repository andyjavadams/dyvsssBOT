require("./all/global")
const func = require("./all/place")
const readline = require("readline")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}

async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()
const getMessage = async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'dyvsss.me'
}}

const connectionOptions = {
    isLatest,
    getMessage,
    keepAliveIntervalMs: 30000,
    printQRInTerminal: !usePairingCode,
    logger: pino({ level: "fatal" }),
    auth: state,
    browser: ['Ubuntu', 'Chrome', '20.0.04']
}
const andy = func.makeWASocket(connectionOptions)
if (usePairingCode && !andy.authState.creds.registered) {
const phoneNumber = await question(color('Recode by @andy.jees\nMasukan nomornya dibawah berawal 62 :\n', 'white'));
const code = await andy.requestPairingCode(phoneNumber.trim())
console.log(`KODE : ${code}`)
}
store.bind(andy.ev)

andy.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
andy.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
andy.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "oke udah") {
console.log(color('bentar...'))
} else if (connection === "open") {
andy.sendMessage("6282164659362@s.whatsapp.net", {text: "Conected WhatsApp web code by @andy.jees"})
console.log(color('dyvsssBot succesfully connected'))
}
})

andy.ev.on('call', async (user) => {
if (!global.anticall) return
let botNumber = await andy.decodeJid(andy.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await andy.sendMessage(ff.from, {text: `JANGAN TELEPON NTAR DI BLOK`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {thumbnailUrl: "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg", title: "ANTI TELEPON AKTIF!!", previewType: "PHOTO"}}}, {quoted: null})
andy.sendContact(ff.from, [owner], "Dont Call !", sendcall)
await sleep(8000)
await andy.updateBlockStatus(ff.from, "block")
}}
}})

andy.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return andy.readMessages([m.key])
if (!andy.public && m.key.remoteJid !== console.log && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) andy.readMessages([m.key])
m = func.smsg(andy, m, store)
require("./andy")(andy, m, store)
} catch (err) {
console.log(err)
}
})

andy.ev.on('messages.update', async (chatUpdate) => {
        for(const { key, update } of chatUpdate) {
			if (update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = "."+toCmd
	                andy.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

andy.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await andy.decodeJid(andy.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await andy.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await andy.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg'
}
if (anu.action == 'add') {
andy.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} menambahkan @${num.split("@")[0]}` : `Welcome @${num.split("@")[0]}`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© dyvsss', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
} 
if (anu.action == 'remove') { 
andy.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} mengeluarkan @${num.split("@")[0]}` : `@${num.split("@")[0]} telah keluar`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© dyvsss', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "promote") {
andy.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} menjadikan @${num.split("@")[0]} sebagai admin`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© dyvsss', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
if (anu.action == "demote") {
andy.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} memberhentikan @${num.split("@")[0]} sebagai admin`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© dyvsss', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

andy.public = true

andy.ev.on('creds.update', saveCreds)
return andy
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})