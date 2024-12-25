module.exports = async (andy, m) => {
    try {
        const body = m.mtype === "conversation" ? m.message.conversation : m.mtype == "imageMessage" ? m.message.imageMessage.caption : m.mtype == "videoMessage" ? m.message.videoMessage.caption : m.mtype == "extendedTextMessage" ? m.message.extendedTextMessage.text : m.mtype == "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype == "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === "interactiveResponseMessage" ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : m.mtype == "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId : m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : "";
        const budy = typeof m.text == "string" ? m.text : "";
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : ".";
        //const prefix = ''
        const isCmd = body.startsWith(prefix);
        //const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
        const cmd = prefix + command;
        const args = body.trim().split(/ +/).slice(1);
        const makeid = crypto.randomBytes(3).toString("hex");
        const quoted = m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || "";
        const qmsg = quoted.msg || quoted;
        const sekarang = new Date();
        const hari = sekarang.toLocaleDateString("id-ID", { weekday: "long" });
        const text = (q = args.join(" "));
        const gis = require("g-i-s");
        const { pinterest2, wallpaper, remini, wikimedia, quotesAnime, multiDownload, yanzGpt, happymod, umma, ringtone, jadwalsholat, styletext, tiktokDl, facebookDl, instaStory, bk9Ai, ytMp4, ytMp3, mediafireDl, quotedLyo, simi } = require("./all/screaper");
        const google = require("googlethis");
        const botNumber = await andy.decodeJid(andy.user.id);
        const fs = require("fs");
        if (!fs.existsSync(dbowner)) fs.writeFileSync(dbowner, "[]");
        if (!fs.existsSync(dbprem)) fs.writeFileSync(dbprem, "[]");
        let zippokun = JSON.parse(fs.readFileSync(dbowner).toString());
        let zippokuy = JSON.parse(fs.readFileSync(dbprem).toString());
        const isOwner = [owner + "@s.whatsapp.net", ...zippokun, botNumber].includes(m.sender);
        const isPremium = [owner + "@s.whatsapp.net", ...zippokun, botNumber, ...zippokuy].includes(m.sender);
        const isGroup = m.chat.endsWith("@g.us");
        const ytdl = require("ytdl-core");
        const yts = require("yt-search");
        const path = require("path");
        const https = require("https");
        const speed = require("performance-now");
        const senderNumber = m.sender.split("@")[0];
        const ctext = (text, style = 1) => {
            var abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
            var xyz = {
                1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890"
            };
            var replacer = [];
            abc.map((v, i) =>
                replacer.push({
                    original: v,
                    convert: xyz[style].split("")[i]
                })
            );
            var str = text.toLowerCase().split("");
            var output = [];
            str.map(v => {
                const find = replacer.find(x => x.original == v);
                find ? output.push(find.convert) : output.push(v);
            });
            return output.join("");
        };
        const from = m.key.remoteJid;
        const pushname = m.pushName || `${senderNumber}`;
        const isBot = botNumber.includes(senderNumber);
        const groupMetadata = isGroup ? await andy.groupMetadata(m.key.remoteJid) : {};
        const groupName = m.isGroup ? groupMetadata.subject : "";
        let participant_bot = (isGroup ? groupMetadata.participants.find(v => v.id == m.botNumber) : {}) || {};
        let participant_sender = (isGroup ? groupMetadata.participants.find(v => v.id == m.sender) : {}) || {};
        const isBotAdmin = participant_bot?.admin !== null ? true : false;
        const isAdmin = participant_sender?.admin !== null ? true : false;
        const chatnano = JSON.parse(fs.readFileSync("./database/chatnano.json"));
        const isnanochat = m.isGroup ? chatnano.includes(m.chat) : true;
        const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, isUrl, pickRandom, ucapan, generateProfilePicture, getBuffer, fetchJson, formatp } = require("./all/function.js");
        const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js");
        const antilink = JSON.parse(fs.readFileSync("./all/database/antilink.json"));
        const { TelegraPh, UguuSe } = require("./all/uploader");
        const antilink2 = JSON.parse(fs.readFileSync("./all/database/antilink2.json"));
        const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"));
        const time = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
        // Days
        const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
        const wib = moment.tz("Asia/Jakarta").format("HH : mm : ss");
        const wit = moment.tz("Asia/Jayapura").format("HH : mm : ss");
        const wita = moment.tz("Asia/Makassar").format("HH : mm : ss");
        const readmore = String.fromCharCode(8206).repeat(999);
        const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
        if (time2 < "23:59:00") {
            var ucapanWaktu = "Selamat Malam 🌌";
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = "Selamat Petang 🌅";
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = "Selamat Sore 🌆";
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = "Selamat Siang 🏙️";
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = "Selamat Pagi 🌇";
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = "Selamat Subuh 🌉";
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = "Selamat Tengah Malam 🌃";
        }

        andy.autoshalat = andy.autoshalat ? andy.autoshalat : {};
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? andy.user.id : m.sender;
        let id = m.chat;
        if (id in andy.autoshalat) {
            return false;
        }
        let jadwalSholat = {
            shubuh: "04:10",
            terbit: "05:42",
            dhuha: "06:02",
            dzuhur: "11:52",
            ashar: "15.18",
            magrib: "18.07",
            isya: "19:23"
        };
        const datek = new Date(
            new Date().toLocaleString("en-US", {
                timeZone: "Asia/Jakarta"
            })
        );
        const hours = datek.getHours();
        const minutes = datek.getMinutes();
        const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
        for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
            if (timeNow === waktu) {
                let caption = `Hai ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat\n\n*${waktu}*\n_untuk wilayah Bandung dan sekitarnya ya._`;
                andy.autoshalat[id] = [
                    m.reply(caption),
                    setTimeout(async () => {
                        delete andy.autoshalat[m.chat];
                    }, 57000)
                ];
            }
        }

        if (isGroup) {
            if (antilink.includes(m.chat) && isBotAdmin) {
                if (!isAdmin && !isOwner && !m.fromMe) {
                    var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
                    if (link.test(m.text)) {
                        var gclink = `https://chat.whatsapp.com/` + (await andy.groupInviteCode(m.chat));
                        var isLinkThisGc = new RegExp(gclink, "i");
                        var isgclink = isLinkThisGc.test(m.text);
                        if (isgclink) return;
                        let delet = m.key.participant;
                        let bang = m.key.id;
                        await andy.sendMessage(m.chat, { text: `Gausah sharelink, mampus gw kick`, contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg", title: "ANTI LINK TERDETEKSI!!", previewType: "PHOTO" } } }, { quoted: m });
                        await andy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
                        await andy.groupParticipantsUpdate(m.chat, [m.sender], "remove");
                    }
                }
            }
        }

        if (!m.key.fromMe && m.isGroup && isnanochat) {
            try {
                const data1 = await fetchJson(`https://skizoasia.xyz/api/openai?apikey=lynzzid&text=${budy}&system=kamu adalah dyvsssAi`);
                const msgai = data1.result;
                m.reply(`${msgai}`);
            } catch (err) {
                // console.log(err);
                console.log("Terjadi kelasalah, silahkan hubungi owner tentang kesalahan ini");
                // reply(JSON.stringify(err));
            }
        }

        if (isGroup) {
            if (antilink2.includes(m.chat) && isBotAdmin) {
                if (!isAdmin && !isOwner && !m.fromMe) {
                    var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;
                    if (link.test(m.text)) {
                        var gclink = `https://chat.whatsapp.com/` + (await andy.groupInviteCode(m.chat));
                        var isLinkThisGc = new RegExp(gclink, "i");
                        var isgclink = isLinkThisGc.test(m.text);
                        if (isgclink) return;
                        let delet = m.key.participant;
                        let bang = m.key.id;
                        await andy.sendMessage(m.chat, { text: `🚫🔗`, contextInfo: { mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg", title: "ANTI LINK TERDETEKSI!!", previewType: "PHOTO" } } }, { quoted: m });
                        await andy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
                    }
                }
            }
        }

        function getRandomColor() {
            return Math.floor(Math.random() * 256); // Menghasilkan warna acak dari 0-255
        }
        const randomColor1 = getRandomColor(); // Warna acak untuk botname
        const randomColor2 = getRandomColor(); // Warna acak untuk pushname
        const randomColor3 = getRandomColor(); // Warna acak untuk groupName | Private Chat
        const randomBgColor1 = getRandomColor(); // Warna acak untuk latar belakang ShunAi
        const randomBgColor2 = getRandomColor(); // Warna acak untuk latar belakang Time
        const randomBgColor3 = getRandomColor(); // Warna acak untuk latar belakang Cmd
        const randomBgColor4 = getRandomColor(); // Warna acak untuk latar belakang From
        const randomBgColor5 = getRandomColor(); // Warna acak untuk latar belakang In
        let rn = ["composing"];
        let jd = rn[Math.floor(Math.random() * rn.length)];
        if (m.message) {
            andy.sendPresenceUpdate(jd, from);
            console.log(chalk.black(chalk.bgWhite("[ PESAN ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(budy || m.mtype)) + "\n" + chalk.magenta("=> Dari"), chalk.green(pushname), chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> Di"), chalk.green(m.isGroup ? pushname : "Private Chat", from));
        }
        const qtext = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}) }, message: { extendedTextMessage: { text: body } } };

        const qdoc = { key: { participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: `Tutor hek wea by andyjavadams`, jpegThumbnail: "" } } };

        const qloc = { key: { participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `Rumah yang ada pohonnya`, jpegThumbnail: "" } } };

        const qloc2 = { key: { participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { locationMessage: { name: `© andyjavadams`, jpegThumbnail: "" } } };

        const qkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(botNumber
                    ? {
                          remoteJid: `status@broadcast`
                      }
                    : {})
            },
            message: {
                contactMessage: {
                    displayName: `Andy Malaikat Bandung`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6282164659362\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    sendEphemeral: true
                }
            }
        };

        let example = teks => {
            return `\nCmd salah, cobalah ${cmd} ${teks}\n`;
        };

        let timestamp = speed();
        let latensi = speed() - timestamp;
        neww = performance.now();
        oldd = performance.now();
        ping = `ping : ${latensi.toFixed(4)} × ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`;

        var resize = async (image, width, height) => {
            let oyy = await Jimp.read(image);
            let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG);
            return kiyomasa;
        };

        function capital(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        const createSerial = size => {
            return crypto.randomBytes(size).toString("hex").slice(0, size);
        };

        switch (command) {
            //=======================================//
            //=======================================//
            //============[ MENU / CASE ]============//
            //=======================================//
            //=======================================//
            case "menu":
                {
                    let teksnya = `
${ucapanWaktu}, Hai @${m.sender.split("@")[0]}, ada yang bisa dibantu?      

> ${sret}NamaBot${sret} : _${namabot}_
> ${sret}NamaOwner${sret} : _${namaowner}_
> ${sret}VersiBot${sret} : _${versionbot}_
> ${sret}Tanggal${sret} : _${hariini}_
> ${sret}Jam${sret} : _${wib}_
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
${sret}Menu Main${sret}
> hd
> sticker
> swm
> smeme
> trigger
> emojimix
> getexif
> qc
> brat

${sret}Ai Menu${sret}
> simi
> ai

${sret}Search Menu${sret}
> google
> fetch
> pixiv
> wallpaper
> ringtone
> npm
> style
> spotify
> pinterest

${sret}Menu Download${sret}
> tiktokmp3
> ytmp3
> yts
> ig
> spotifydl

${sret}Fun Menu${sret}
> bisakah
> apakah
> kapan
> kerangajaib
> cekmati
> ceksifat
> cnilai
> fitnah

${sret}Pengubah Suara${sret}
> bass
> blown
> deep
> earrape
> fast
> fat
> nightcore
> reverse
> robot
> slow
> smooth
> tupai

${sret}Menu Tools${sret}
> toaudio
> tomp3
> tovn
> toptt
> toimage
> tts
> readmore
> cuaca
> shortlink
> git
> ssweb
> inspect
> translate

${sret}Menu Group${sret}
> addmember
> antilink
> antilinkV2
> hidetag
> tagall
> delete
> open
> close
> setnamagc
> setdeskgc
> setppgc
> kick
> promote
> leavegc
> leavegc2
> demote
> idgc
> statusgc
> welcome on/off
  
${sret}Menu Owner${sret}
> clearsession
> anticall
> autoread
> welcome
> setpppanjang
> setnamabot
> setbiobot
> statusbot
> listpremium
> listowner
> addowner
> delowner
> addprem
> delprem
`;
                    andy.sendMessage(
                        m.chat,
                        {
                            image: { url: image },
                            caption: teksnya,
                            contextInfo: {
                                mentionedJid: [m.sender],
                                forwardingScore: 1000,
                                isForwarded: true
                            }
                        },
                        { quoted: qdoc }
                    );
                }
                break;
            //===================================================//
            //===================================================//
            //==================[ MENU OWNER ]==================//
            //===================================================//
            //===================================================//
            case "addown":
            case "addowner":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
                    if (!users.length || !text) return m.reply("Cmd salah\ncoba .addown nomor");
                    if (users.filter(v => zippokun.includes(v)).length) return andy.sendMessage(m.chat, { text: `${users.map(v => `@${v.split("@")[0]}`).join(", ")} adalah owner.`, mentions: users }, { quoted: m });
                    zippokun = [...zippokun, ...users];
                    fs.writeFileSync(dbowner, JSON.stringify(zippokun));
                    m.reply("Successfully added owner by andyjavadams");
                }
                break;
            case "upsw":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    const statusJidList = Object.keys(dbowner);
                    const backgroundColor =
                        "#" +
                        Math.floor(Math.random() * 16777215)
                            .toString(16)
                            .padStart(6, "0");
                    if (quoted.isMedia) {
                        if (/image|video/.test(quoted.mime)) {
                            await andy.sendMessage(
                                "status@broadcast",
                                {
                                    [`${quoted.mime.split("/")[0]}`]: await quoted.download(),
                                    caption: text || m.quoted?.body || ""
                                },
                                { statusJidList }
                            );
                            andy.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
                        } else if (/audio/.test(quoted.mime)) {
                            await andy.sendMessage(
                                "status@broadcast",
                                {
                                    audio: await quoted.download(),
                                    mimetype: "audio/mp4",
                                    ptt: true
                                },
                                { backgroundColor, statusJidList }
                            );
                            andy.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
                        } else m.reply("Only Support video/audio/image/text");
                    } else if (quoted.text) {
                        await andy.sendMessage(
                            "status@broadcast",
                            { text: text || m.quoted?.body || "" },
                            {
                                textArgb: 0xffffffff,
                                font: Math.floor(Math.random() * 9),
                                backgroundColor,
                                statusJidList
                            }
                        );
                        andy.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
                    } else m.reply("Only Support video/audio/image/text");
                }
                break;
                break;
            case "delown":
            case "delowner":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
                    if (!users.length || !text) return m.reply("Tag seseorang!");
                    if (users.filter(v => !zippokun.includes(v)).length) return andy.sendMessage(m.chat, { text: `${users.map(v => `@${v.split("@")[0]}`).join(", ")} belum masuk ke list owner!`, mentions: users }, { quoted: m });
                    zippokun = zippokun.filter(v => !users.includes(v));
                    fs.writeFileSync(dbowner, JSON.stringify(zippokun));
                    m.reply("Successfully removed owner by andyjavadams");
                }
                break;
            case "listowner":
            case "listown":
                {
                    andy.sendMessage(m.chat, { text: `DAFTAR OWNER\n\n${zippokun.map(v => `- @${v.split("@")[0]}`).join("\n")}\n\nTotal : ${zippokun.length}`, mentions: zippokun }, { quoted: qloc });
                }
                break;

            case "addprem":
            case "addpremium":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
                    if (!users.length || !text) return m.reply("Cmd salahscoba .addprem nomor");
                    if (users.filter(v => zippokuy.includes(v)).length) return andy.sendMessage(m.chat, { text: `${users.map(v => `@${v.split("@")[0]}`).join(", ")} sudah masuk ke list premium!`, mentions: users }, { quoted: m });
                    zippokuy = [...zippokuy, ...users];
                    fs.writeFileSync(dbprem, JSON.stringify(zippokuy));
                    m.reply("Successfully added premium byandyjavadams");
                }
                break;

            case "delprem":
            case "delpremium":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
                    if (!users.length || !text) return m.reply("Tag seseorang!");
                    if (users.filter(v => !zippokuy.includes(v)).length) return andy.sendMessage(m.chat, { text: `${users.map(v => `@${v.split("@")[0]}`).join(", ")} belum masuk ke list premium!`, mentions: users }, { quoted: m });
                    zippokuy = zippokuy.filter(v => !users.includes(v));
                    fs.writeFileSync(dbprem, JSON.stringify(zippokuy));
                    m.reply("Successfully removed owner byandyjavadams");
                }
                break;

            case "listprem":
            case "listpremium":
                {
                    andy.sendMessage(m.chat, { text: `DAFTAR PREMIUM\n\n${zippokuy.map(v => `- @${v.split("@")[0]}`).join("\n")}\n\nTotal : ${zippokuy.length}`, mentions: zippokuy }, { quoted: m });
                }
                break;
            case "public":
            case "publik":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    andy.public = true;
                    m.reply("Successfully changed bot mode to public");
                }
                break;
            case "self":
            case "private":
            case "priv":
            case "prib":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    andy.public = false;
                    m.reply("Successfully changed bot mode to private");
                }
                break;
            case "setppbot":
            case "setpp":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (/image/g.test(mime)) {
                        let media = await andy.downloadAndSaveMediaMessage(qmsg);
                        await andy.updateProfilePicture(botNumber, { url: media });
                        await fs.unlinkSync(media);
                        m.reply("Profile photo changed by andyjavadams");
                    } else return m.reply(example("dengan mengirim/reply foto"));
                }
                break;
            case "setppbotpanjang":
            case "setpppanjang":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (/image/g.test(mime)) {
                        var medis = await andy.downloadAndSaveMediaMessage(qmsg, "ppbot.jpeg", false);
                        var { img } = await generateProfilePicture(medis);
                        await andy.query({
                            tag: "iq",
                            attrs: {
                                to: botNumber,
                                type: "set",
                                xmlns: "w:profile:picture"
                            },
                            content: [
                                {
                                    tag: "picture",
                                    attrs: { type: "image" },
                                    content: img
                                }
                            ]
                        });
                        await fs.unlinkSync(medis);
                        m.reply("Profile photo changed byandyjavadams");
                    } else return m.reply(example("dengan mengirim/reply foto"));
                }
                break;
            case "autoread":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    if (text.toLowerCase() == "on") {
                        if (autoread) return m.reply("Autoread is now active");
                        autoread = true;
                        m.reply("Successfully turned on autoread byandyjavadams");
                    } else if (text.toLowerCase() == "off") {
                        if (!autoread) return m.reply("Autoread is now inactive");
                        autoread = false;
                        m.reply("Successfully turned off autoread byandyjavadams");
                    } else {
                        return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    }
                }
                break;
            case "anticall":
            case "seleb":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    if (text.toLowerCase() == "on") {
                        if (anticall) return m.reply("Anticall is now active");
                        anticall = true;
                        m.reply("Successfully turned on anticall by andyjavadams");
                    } else if (text.toLowerCase() == "off") {
                        if (!anticall) return m.reply("Anticall is now inactive");
                        anticall = false;
                        m.reply("Successfully turned off anticall byandyjavadams");
                    } else {
                        return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    }
                }
                break;
            case "setting":
            case "settingbot":
            case "option":
            case "statusbot":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    var teks = `
AUTO READ: ${global.autoread ? "*✅*" : "*❌*"}
ANTI TELEPON: ${global.anticall ? "*✅*" : "*❌*"}
SELAMAT DATANG: ${global.welcome ? "*✅*" : "*❌*"}
`;
                    m.reply(teks);
                }
                break;
            case "savekontak":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (!isGroup) return m.reply(msg.group);
                    const halls = await groupMetadata.participants.filter(v => v.id.endsWith(".net")).map(v => v.id);
                    for (let mem of halls) {
                        if (mem !== m.sender) {
                            contacts.push(mem);
                            fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts));
                        }
                    }
                    try {
                        const uniqueContacts = [...new Set(contacts)];
                        const vcardContent = uniqueContacts
                            .map((contact, index) => {
                                const vcard = ["BEGIN:VCARD", "VERSION:3.0", `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`, `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`, "END:VCARD", ""].join("\n");
                                return vcard;
                            })
                            .join("");
                        fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
                    } catch (err) {
                        m.reply(err.toString());
                    } finally {
                        if (m.chat !== m.sender) await m.reply(`Contact file successfully sent to private chat by andyjavadams`);
                        await andy.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created by andyjavadams", mimetype: "text/vcard" }, { quoted: m });
                        contacts.splice(0, contacts.length);
                        await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts));
                        await fs.writeFileSync("./all/database/contacts.vcf", "");
                    }
                }
                break;
            case "idgc":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (!isGroup) return m.reply(msg.group);
                    m.reply(`${m.chat}`);
                }
                break;
            case "listgc":
            case "listgrup":
                {
                    let gcall = Object.values(await andy.groupFetchAllParticipating().catch(_ => null));
                    let listgc = `*dyvsss bot BERADA DI*\n\n`;
                    await gcall.forEach((u, i) => {
                        listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split("@")[0] : "Sudah keluar"}\n\n`;
                    });
                    m.reply(listgc);
                }
                break;
            case "listonline":
            case "liston":
                {
                    if (!m.isGroup) return m.reply(msg.group);
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
                    if (!andy.presences || !andy.presences[id]) return m.reply("Sedang Tidak ada yang online!");
                    let online = [...Object.keys(andy.presences[id]), botNumber];
                    await andy.sendMessage(m.chat, { text: "List Online:\n\n" + online.map(v => setv + " @" + v.replace(/@.+/, "")).join`\n`, mentions: online }, { quoted: m }).catch(e => m.reply("Gagal"));
                }
                break;
            case "leave":
            case "leavegc":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (!isGroup) return m.reply(msg.group);
                    await m.reply("Successfully left the group by andyjavadams\nMessage : Adios..");
                    await sleep(3000);
                    await andy.groupLeave(m.chat);
                }
                break;
            case "leavegc2":
            case "leave2":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    let gcall = await Object.values(await andy.groupFetchAllParticipating().catch(_ => null));
                    let num = [];
                    let listgc = `*Bukan gitu*\ngini *${cmd}* nomor grupnya\n\n*List Semua Grup Chat :*\n\n`;
                    await gcall.forEach((u, i) => {
                        num.push(i);
                        listgc += ` *Nomor Grup => ${i + 1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split("@")[0] : "Sudah keluar"}\n\n`;
                    });
                    if (!args[0]) {
                        m.reply(listgc);
                    } else if (args[0]) {
                        if (!num.includes(Number(args[0]) - 1)) return m.reply("Group not found");
                        let leav = Number(args[0]) - 1;
                        await m.reply(`Successfully left the group byandyjavadams\nMessage : Adios..`);
                        await andy.groupLeave(`${gcall[leav].id}`);
                    }
                }
                break;
            //=======================================//
            //=======================================//
            //==============[ Menu Fun ]===============//
            //=======================================//
            //=======================================//
            case "bisakah":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} saya menang?`);
                    let bisa = ["Bisa", "Coba Saja", "Pasti Bisa", "Mungkin Saja", "Tidak Bisa", "Tidak Mungkin", "Coba Ulangi", "Ngimpi kah?", "yakin bisa?"];
                    let keh = bisa[Math.floor(Math.random() * bisa.length)];
                    m.reply(`*Bisakah ${text}*\nJawab : ${keh}`);
                }
                break;
            case "apakah":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`);
                    let apa = ["Iya", "Tidak", "Bisa Jadi", "Coba Ulangi", "Mungkin Saja", "Mungkin Tidak", "Mungkin Iya", "Ntahlah"];
                    let kah = apa[Math.floor(Math.random() * apa.length)];
                    m.reply(`*${command} ${text}*\nJawab : ${kah}`);
                }
                break;
            case "kapan":
            case "kapankah":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} saya menang?`);
                    let kapan = ["Besok", "Lusa", "Nanti", "4 Hari Lagi", "5 Hari Lagi", "6 Hari Lagi", "1 Minggu Lagi", "2 Minggu Lagi", "3 Minggu Lagi", "1 Bulan Lagi", "2 Bulan Lagi", "3 Bulan Lagi", "4 Bulan Lagi", "5 Bulan Lagi", "6 Bulan Lagi", "1 Tahun Lagi", "2 Tahun Lagi", "3 Tahun Lagi", "4 Tahun Lagi", "5 Tahun Lagi", "6 Tahun Lagi", "1 Abad lagi", "3 Hari Lagi", "Bulan Depan", "Ntahlah", "Tidak Akan Pernah"];
                    let koh = kapan[Math.floor(Math.random() * kapan.length)];
                    m.reply(`*${command} ${text}*\nJawab : ${koh}`);
                }
                break;
            case "tanyakerang":
            case "kerangajaib":
            case "kerang":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`);
                    let krng = ["Mungkin suatu hari", "Tidak juga", "Tidak keduanya", "Kurasa tidak", "Ya", "Tidak", "Coba tanya lagi", "Tidak ada"];
                    let jwb = krng[Math.floor(Math.random() * krng.length)];
                    m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`);
                }
                break;
            case "cekmati":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} nama lu`);
                    let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "").replace(/\d/g, "");
                    let { data } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : "bot"}`);
                    m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? Math.floor(Math.random() * 90) + 20 : data.age} Tahun.\nSedih Senang ditanggung user`);
                }
                break;
            case "ceksifat":
                {
                    let sifat_a = ["Bijak", "Sabar", "Kreatif", "Humoris", "Mudah bergaul", "Mandiri", "Setia", "Jujur", "Dermawan", "Idealis", "Adil", "Sopan", "Tekun", "Rajin", "Pemaaf", "Murah hati", "Ceria", "Percaya diri", "Penyayang", "Disiplin", "Optimis", "Berani", "Bersyukur", "Bertanggung jawab", "Bisa diandalkan", "Tenang", "Kalem", "Logis"];
                    let sifat_b = ["Sombong", "Minder", "Pendendam", "Sensitif", "Perfeksionis", "Caper", "Pelit", "Egois", "Pesimis", "Penyendiri", "Manipulatif", "Labil", "Penakut", "Vulgar", "Tidak setia", "Pemalas", "Kasar", "Rumit", "Boros", "Keras kepala", "Tidak bijak", "Pembelot", "Serakah", "Tamak", "Penggosip", "Rasis", "Ceroboh", "Intoleran"];
                    let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : "@" + m.sender.split("@")[0]}${text && m.mentionedJid ? "" : `\n│• Nama : *${text ? text : m.pushName}*` || "\n│• Nama : *Tanpa Nama*"}\n│• Orang yang : *${sifat_a[Math.floor(Math.random() * sifat_a.length)]}*\n│• Kekurangan : *${sifat_b[Math.floor(Math.random() * sifat_b.length)]}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`;
                    m.reply(teks);
                }
                break;
            case "cnilai":
                {
                    m.reply(`Rate Dari Bot : *${Math.floor(Math.random() * 100)}%*`);
                }
                break;
            case "fitnah":
                {
                    let [teks1, teks2, teks3] = text.split`|`;
                    if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`);
                    let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, "") + "@s.whatsapp.net", ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, "") + "@s.whatsapp.net" }) }, message: { conversation: teks1 } };
                    andy.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
                }
                break;
            //=======================================//
            //=======================================//
            //==============[ MENU AI ]===============//
            //=======================================//
            //=======================================//
            case "tiktokaudio":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} link`);
                    m.reply(msg.wait);
                    const data = await fetchJson(`https://skizoasia.xyz/api/tiktok?apikey=lynzzid&url=${encodeURIComponent(text)}`);
                    const audionya = data.data.music_info.play;
                    andy.sendMessage(m.chat, { audio: { url: audionya }, mimetype: "audio/mp4" }, { quoted: m });
                }
                break;
            case "ai":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} query`);
                    try {
                        let hasil = await yanzGpt(text);
                        m.reply(hasil.choices[0].message.content);
                    } catch (e) {
                        try {
                            let hasil = await bk9Ai(text);
                            m.reply(hasil.BK9);
                        } catch (e) {
                            m.reply(pickRandom(["Fitur Ai sedang bermasalah!", "Tidak dapat terhubung ke ai!", "Sistem Ai sedang sibuk sekarang!", "Fitur sedang tidak dapat digunakan!"]));
                        }
                    }
                }
                break;
            case "simi":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} query`);
                    try {
                        const hasil = await simi(text);
                        m.reply(hasil.success);
                    } catch (e) {
                        m.reply("Server simi sedang offline!");
                    }
                }
                break;
            //=======================================//
            //=======================================//
            //============[ MENU GROUB ]============//
            //=======================================//
            //=======================================//
            case "antilink":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isOwner && !isAdmin) return m.reply(msg.owner);
                    if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* untuk melihat status setting grup ini"));
                    if (/on/.test(args[0].toLowerCase())) {
                        if (antilink.includes(m.chat)) return m.reply("Antilink is now active in this group by andyjavadams");
                        if (antilink2.includes(m.chat)) {
                            let posi = antilink2.indexOf(m.chat);
                            antilink2.splice(posi, 1);
                            await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2));
                        }
                        antilink.push(m.chat);
                        await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink));
                        m.reply("Antilink successfully activated in this group");
                    } else if (/off/.test(args[0].toLowerCase())) {
                        if (!antilink.includes(m.chat)) return m.reply("Antilink in this group is not yet active");
                        let posi = antilink.indexOf(m.chat);
                        antilink.splice(posi, 1);
                        await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink));
                        m.reply("Successfully turned off Antilink in this group by andyjavadams");
                    } else {
                        return m.reply(example("on/off"));
                    }
                }
                break;
            case "antilinkV2":
            case "antilinkv2":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isOwner && !isAdmin) return m.reply(msg.owner);
                    if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* untuk melihat status setting grup ini"));
                    if (/on/.test(args[0].toLowerCase())) {
                        if (antilink2.includes(m.chat)) return m.reply("Antilink-v2 is now active in this group by andyjavadams");
                        if (antilink.includes(m.chat)) {
                            let posi = antilink.indexOf(m.chat);
                            antilink.splice(posi, 1);
                            await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink));
                        }
                        antilink2.push(m.chat);
                        await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2));
                        m.reply("Antilink-v2 successfully activated in this group by andyjavadams");
                    } else if (/off/.test(args[0].toLowerCase())) {
                        if (!antilink2.includes(m.chat)) return m.reply("Antilink-v2 in this group is not yet active");
                        let posi = antilink2.indexOf(m.chat);
                        antilink2.splice(posi, 1);
                        await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2));
                        m.reply("Successfully turned off Antilink-v2 in this group byandyjavadams");
                    } else {
                        return m.reply(example("on/off"));
                    }
                }
                break;
            case "welcome":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    if (text.toLowerCase() == "on") {
                        if (welcome) return m.reply("Welcome is now active");
                        welcome = true;
                        m.reply("Successfully turned on welcome by andyjavadams");
                    } else if (text.toLowerCase() == "off") {
                        if (!welcome) return m.reply("Welcome is now inactive");
                        welcome = false;
                        m.reply("Successfully turned off welcome by andyjavadams");
                    } else {
                        return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    }
                }
                break;
            case "statusgc":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isOwner && !isAdmin) return m.reply(msg.admin);
                    var anti1 = "✅";
                    var anti2 = "✅";
                    if (!antilink2.includes(m.chat)) anti2 = "❌";
                    if (!antilink.includes(m.chat)) anti1 = "❌";
                    var teks = `
ANTI LINK V1 : ${anti1}
ANTI LINK V2 : ${anti2}
`;
                    m.reply(teks);
                }
                break;
            case "setppgc":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (/image/g.test(mime)) {
                        let media = await andy.downloadAndSaveMediaMessage(qmsg);
                        await andy.updateProfilePicture(m.chat, { url: media });
                        await fs.unlinkSync(media);
                        m.reply("Group profile photo changed successfully by andyjavadams");
                    } else return m.reply(example("dengan mengirim/reply foto"));
                }
                break;
            case "setnamegc":
            case "setnamagc":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!text) return m.reply(example("teksnya"));
                    const gcname = metadata.subject;
                    await andy.groupUpdateSubject(m.chat, text);
                    m.reply(`Group name successfully changed by andyjavadams`);
                }
                break;
            case "setdesc":
            case "setdesk":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!text) return m.reply(example("teksnya"));
                    await andy.groupUpdateDescription(m.chat, text);
                    m.reply(`Group description changed successfully by andyjavadams`);
                }
                break;
            case "open":
            case "ngoceh":
            case "bacot":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    await andy.groupSettingUpdate(m.chat, "not_announcement");
                    m.reply("Successfully changed group settings to allow members to send messages by andyjavadams");
                }
                break;
            case "close":
            case "bisu":
            case "tunarungu":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    await andy.groupSettingUpdate(m.chat, "announcement");
                    m.reply("Successfully changed group settings to allow only admins to send messages by andyjavadams");
                }
                break;
            case "d":
            case "del":
            case "delete":
                {
                    if (isGroup) {
                        if (!isOwner && !isAdmin) return m.reply(msg.admin);
                        if (!m.quoted) return m.reply("Please reply with the message you want to delete.");
                        if (m.quoted.sender == botNumber) {
                            andy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } });
                        } else {
                            if (!isBotAdmin) return m.reply(msg.adminbot);
                            andy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } });
                        }
                    } else {
                        if (!isOwner) return m.reply(msg.owner);
                        if (!m.quoted) return m.reply("Please reply with the message you want to delete.");
                        andy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } });
                    }
                }
                break;
            case "demote":
            case "demote":
            case "budak":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (m.quoted || text) {
                        let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                        await andy
                            .groupParticipantsUpdate(m.chat, [target], "demote")
                            .then(res => m.reply(`${target.split("@")[0]} now become a regular member`))
                            .catch(err => m.reply(err.toString()));
                    } else return m.reply(example("62821xxxxxxxx"));
                }
                break;
            case "promote":
            case "promot":
            case "bos":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (m.quoted || text) {
                        let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                        await andy
                            .groupParticipantsUpdate(m.chat, [target], "promote")
                            .then(res => m.reply(`${target.split("@")[0]} now become an admin`))
                            .catch(err => m.reply(err.toString()));
                    } else return m.reply(example("62821xxxxxxxx"));
                }
                break;
            case "add":
            case "addmember":
            case "culik":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!args[0]) return m.reply(example("62821xxxxxxxx"));
                    var teks = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                    var cek = await andy.onWhatsApp(`${teks.split("@")[0]}`);
                    if (cek.length < 1) return m.reply("Number not registered in WhatsApp");
                    if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("𝗚𝗔𝗚𝗔𝗟\nAdmin tidak mengizinkan peserta menambahkan member");
                    var a = await andy.groupParticipantsUpdate(m.chat, [teks], "add");
                    if (a[0].status == 200) return m.reply(`BERHASIL DITAMBAHKAN`);
                    if (a[0].status == 408) return m.reply(`GAGAL DITAMBAHKAN`);
                    if (a[0].status == 409) return m.reply(`SUDAH BERGABUNG`);
                    if (a[0].status == 403) return m.reply(`GAGAL MENAMBAHKAN`);
                }
                break;
            case "linkgroup":
            case "linkgrup":
            case "linkgc":
            case "urlgroup":
            case "urlgrup":
            case "urlgc":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply("Jadikan bot admin");
                    if (!isAdmin) return m.reply(msg.admin);
                    let response = await andy.groupInviteCode(m.chat);
                    await andy.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await andy.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: qkontak });
                }
                break;
            case "k":
            case "kik":
            case "kick":
            case "babi":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (text || m.quoted) {
                        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                        await andy
                            .groupParticipantsUpdate(m.chat, [users], "remove")
                            .then(res => andy.sendMessage(m.chat, { text: `Selamat tinggal muah😘`, mentions: [`${users}`] }, { quoted: m }))
                            .catch(err => m.reply(err.toString()));
                    } else return m.reply(example("nomornya/@tag"));
                }
                break;
            case "hidetag":
            case "h":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"));
                    var teks = m.quoted ? m.quoted.text : text;
                    var member = await groupMetadata.participants.map(e => e.id);
                    andy.sendMessage(m.chat, { text: teks, mentions: [...member] });
                }
                break;
            case "tagall":
            case "tag":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!text) return m.reply(example("Text nya"));
                    var member = await groupMetadata.participants.map(e => e.id);
                    var teks = ` ${text}\n\n`;
                    member.forEach(e => (e !== m.sender ? (teks += `@${e.split("@")[0]}\n`) : ""));
                    andy.sendMessage(m.chat, { text: teks, mentions: [...member] });
                }
                break;
            //=======================================//
            //=======================================//
            //============[ MENU TOOLS ]============//
            //=======================================//
            //=======================================//
            case "runtime":
            case "ping":
                {
                    let timestamp = speed();
                    let latensi = speed() - timestamp;
                    neww = performance.now();
                    oldd = performance.now();
                    rin = `> Runtime : ${runtime(process.uptime())}\n> Response Speed : ${latensi.toFixed(4)} Second\n> Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`;
                    await andy.relayMessage(
                        m.chat,
                        {
                            requestPaymentMessage: {
                                currencyCodeIso4217: "IDR",
                                amount1000: 6282164659363000000,
                                requestFrom: m.sender,
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: ctext(rin),
                                        contextInfo: {
                                            externalAdReply: {
                                                showAdAttribution: true
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        {}
                    );
                }
                break;
            case "tinyurl":
            case "shorturl":
            case "shortlink":
                {
                    if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://ask.dyvsss.me`);
                    try {
                        let anu = await axios.get("https://tinyurl.com/api-create.php?url=" + text);
                        m.reply("Url : " + anu.data);
                    } catch (e) {
                        m.reply("Gagal!");
                    }
                }
                break;
            case "ssweb":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} https://github.com/andyjavadams`);
                    try {
                        let anu = "https://" + text.replace(/^https?:\/\//, "");
                        await andy.sendMessage(m.chat, { image: { url: "https://image.thum.io/get/width/1900/crop/1000/fullpage/" + anu }, caption: "Done" }, { quoted: m });
                    } catch (e) {
                        m.reply("Server SS web Sedang Offline!");
                    }
                }
                break;
            case "translate":
            case "tr":
                {
                    if (text && text == "list") {
                        let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
                        m.reply(list_tr);
                    } else {
                        if (!m.quoted && (!text || !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`);
                        let lang = args[0] ? args[0] : "id";
                        let teks = args[1] ? args.slice(1).join(" ") : m.quoted.text;
                        try {
                            let hasil = await translate(teks, { to: lang, autoCorrect: true });
                            m.reply(`To : ${lang}\n${hasil[0]}`);
                        } catch (e) {
                            m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`);
                        }
                    }
                }
                break;
            case "inspect":
                {
                    if (!text) return m.reply("Masukkan Link Group!");
                    let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
                    if (code === null) return m.reply("No invite url detected.");
                    code = code[0].replace("chat.whatsapp.com/", "");
                    await andy
                        .groupGetInviteInfo(code)
                        .then(anu => {
                            let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu;
                            let par = `*Nama Gc* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split("@")[0]}` : "*Creator* : -"}\n*Jumlah Member* : ${size}\n*Gc Dibuat Tanggal* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : "-"}\n${subjectOwner ? `*Nama GC Diubah Oleh* : @${subjectOwner.split("@")[0]}` : "*Nama GC Diubah Oleh* : -"}\n${descOwner ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}` : "*Desc diubah oleh* : -"}\n\n*Desc* : ${desc ? desc : "-"}\n`;
                            m.reply(par);
                        })
                        .catch(res => {
                            if (res.data == 406) return m.reply("Grup Tidak Di Temukan❗");
                            if (res.data == 410) return m.reply("Url Grup Telah Di Setel Ulang❗");
                        });
                }
                break;
            case "git":
            case "gitclone":
                {
                    if (!args[0]) return m.reply(`Example: ${prefix + command} https://github.com/andyjavadams/Cek-kodam`);
                    if (!isUrl(args[0]) && !args[0].includes("github.com")) return m.reply("Gunakan Url Github!");
                    let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || [];
                    try {
                        andy.sendMessage(m.chat, { document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + ".zip", mimetype: "application/zip" }, { quoted: m }).catch(e => m.reply(mess.error));
                    } catch (e) {
                        m.reply("Gagal!");
                    }
                }
                break;
            case "q":
            case "quoted":
                {
                    if (!m.quoted) return m.reply("Reply Pesannya!");
                    const anu = await m.getQuotedObj();
                    if (!anu) return m.reply("Format Tidak Tersedia!");
                    if (!anu.quoted) return m.reply("Pesan Yang Anda Reply Tidak Mengandung Reply");
                    await andy.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {});
                }
                break;
            case "emojimix":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`);
                    let [emoji1, emoji2] = text.split`+`;
                    if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`);
                    try {
                        let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
                        if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`);
                        for (let res of anu.data.results) {
                            await andy.sendStimg(m.chat, res.url, m, { packname: packname, author: author });
                        }
                    } catch (e) {
                        m.reply("Gagal Mix Emoji!");
                    }
                }
                break;
            case "stickerwm":
            case "swm":
            case "curi":
            case "colong":
            case "take":
            case "stickergifwm":
            case "sgifwm":
                {
                    if (!/image|video|webp/.test(mime)) return m.reply(example(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik\nContoh ${prefix + command} andy|js`));
                    let media = await andy.downloadAndSaveMediaMessage(qmsg);
                    let teks1 = text.split`|`[0] ? text.split`|`[0] : "";
                    let teks2 = text.split`|`[1] ? text.split`|`[1] : "";
                    if (/image|webp/.test(mime)) {
                        m.reply(msg.wait);
                        await andy.sendStimg(m.chat, media, m, { packname: teks1, author: teks2 });
                    } else if (/video/.test(mime)) {
                        if (qmsg.seconds > 11) return m.reply("Maksimal 10 detik!");
                        m.reply(msg.wait);
                        await andy.sendStimg(m.chat, media, m, { packname: teks1, author: teks2 });
                    } else {
                        m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`);
                    }
                }
                break;
            case "smeme":
            case "stickmeme":
            case "stikmeme":
            case "stickermeme":
            case "stikermeme":
                {
                    try {
                        if (!isPremium) return m.reply(mess.prem);
                        if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`);
                        if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`);
                        m.reply(msg.wait);
                        let atas = text.split`|`[0] ? text.split`|`[0] : "-";
                        let bawah = text.split`|`[1] ? text.split`|`[1] : "-";
                        let media = await quoted.download();
                        let mem = await UguuSe(media);
                        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`;
                        await andy.sendStimg(m.chat, smeme, m, { packname: packname, author: author });
                    } catch (e) {
                        m.reply("Server Meme Sedang Offline!");
                    }
                }
                break;
            case "bass":
            case "blown":
            case "deep":
            case "earrape":
            case "fast":
            case "fat":
            case "nightcore":
            case "reverse":
            case "robot":
            case "slow":
            case "smooth":
            case "tupai":
                {
                    try {
                        let set;
                        if (/bass/.test(command)) set = "-af equalizer=f=54:width_type=o:width=2:g=20";
                        if (/blown/.test(command)) set = "-af acrusher=.1:1:64:0:log";
                        if (/deep/.test(command)) set = "-af atempo=4/4,asetrate=44500*2/3";
                        if (/earrape/.test(command)) set = "-af volume=12";
                        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
                        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
                        if (/nightcore/.test(command)) set = "-filter:a atempo=1.06,asetrate=44100*1.25";
                        if (/reverse/.test(command)) set = '-filter_complex "areverse"';
                        if (/robot/.test(command)) set = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
                        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
                        if (/smooth/.test(command)) set = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
                        if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
                        if (/audio/.test(mime)) {
                            m.reply(msg.wait);
                            let media = await andy.downloadAndSaveMediaMessage(qmsg);
                            let ran = `./database/sampah/${getRandom(".mp3")}`;
                            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                                fs.unlinkSync(media);
                                if (err) return m.reply(err);
                                let buff = fs.readFileSync(ran);
                                andy.sendMessage(m.chat, { audio: buff, mimetype: "audio/mpeg" }, { quoted: m });
                                fs.unlinkSync(ran);
                            });
                        } else {
                            m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`);
                        }
                    } catch (e) {
                        m.reply("Gagal!");
                    }
                }
                break;
            case "readmore":
                {
                    let teks1 = text.split`|`[0] ? text.split`|`[0] : "";
                    let teks2 = text.split`|`[1] ? text.split`|`[1] : "";
                    m.reply(teks1 + readmore + teks2);
                }
                break;
            case "getexif":
                {
                    if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`);
                    if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`);
                    const img = new webp.Image();
                    await img.load(await m.quoted.download());
                    m.reply(util.format(JSON.parse(img.exif.slice(22).toString())));
                }
                break;
            case "cuaca":
            case "weather":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} jakarta`);
                    try {
                        let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`);
                        m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`);
                    } catch (e) {
                        m.reply("Kota Tidak Di Temukan!");
                    }
                }
                break;
            case "texttospech":
            case "tts":
            case "tospech":
                {
                    if (!text) return m.reply("Mana text yg mau diubah menjadi audio?");
                    let { tts } = require("./all/tts");
                    let anu = await tts(text);
                    andy.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: "audio/mpeg" }, { quoted: m });
                }
                break;
            case "brat":
                {
                    await m.reply("Sedang diproses");
                    if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
                    try {
                        await andy.sendMessage(m.chat, { image: { url: "https://brat.caliphdev.com/api/brat?text=" + (text || m.quoted.text) } }, { quoted: qloc });
                    } catch (e) {
                        try {
                            await andy.sendMessage(m.chat, { image: { url: "https://mannoffc-x.hf.space/brat?q=" + (text || m.quoted.text) } }, { quoted: qkontak });
                        } catch (e) {
                            m.reply("Server Brat Sedang Offline!");
                        }
                    }
                }
                break;
            case "qc":
                {
                    if (!text) return m.reply(example("teksnya"));
                    let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"];
                    let ppuser;
                    try {
                        ppuser = await andy.profilePictureUrl(m.sender, "image");
                    } catch (err) {
                        ppuser = "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg";
                    }
                    let reswarna = await warna[Math.floor(Math.random() * warna.length)];
                    m.reply(msg.wait);
                    const obj = {
                        type: "quote",
                        format: "png",
                        backgroundColor: "#ffffff",
                        width: 512,
                        height: 768,
                        scale: 2,
                        messages: [
                            {
                                entities: [],
                                avatar: true,
                                from: {
                                    id: 1,
                                    name: m.pushName,
                                    photo: {
                                        url: ppuser
                                    }
                                },
                                text: text,
                                replyMessage: {}
                            }
                        ]
                    };
                    try {
                        const json = await axios.post("https://bot.lyo.su/quote/generate", obj, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const buffer = Buffer.from(json.data.result.image, "base64");
                        andy.sendStimg(m.chat, buffer, m, { packname: global.packname });
                    } catch (error) {
                        m.reply(error.toString());
                    }
                }
                break;
            case "hdr":
            case "hd":
            case "remini":
                {
                    if (!quoted) return m.reply(`Where is the picture?`);
                    if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);
                    const { remini } = require("./all/remini");
                    let media = await quoted.download();
                    let proses = await remini(media, "enhance");
                    andy.sendMessage(m.chat, { image: proses, caption: msg.success }, { quoted: m });
                }
                break;
            case "assalamu'alaikum":
            case "Assalamu'alaikum":
            case "assalamualaikum":
            case "Assalamualaikum":
                {
                    var teks = `Waalaikumsalam`;
                    m.reply(teks);
                }
                break;
            case "halo":
            case "Halo":
                {
                    var teks = `Hai`;
                    m.reply(teks);
                }
                break;
            case "toimage":
            case "toimg":
                {
                    if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example("sambil reply sticker"));
                    m.reply(msg.wait);
                    let media = await andy.downloadAndSaveMediaMessage(qmsg);
                    let ran = `${makeid}.png`;
                    exec(`ffmpeg -i ${media} ${ran}`, err => {
                        fs.unlinkSync(media);
                        if (err) return err;
                        let buffer = fs.readFileSync(ran);
                        andy.sendMessage(
                            m.chat,
                            { image: buffer },
                            {
                                quoted: m
                            }
                        );
                        fs.unlinkSync(ran);
                    });
                }
                break;
            case "tovn":
            case "toptt":
                {
                    if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example("dengan mengirim/reply audio/vidio"));
                    m.reply(msg.wait);
                    await andy.downloadMediaMessage(qmsg).then(async res => {
                        let anu = await toPTT(res, "mp4");
                        andy.sendMessage(m.chat, { audio: anu, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
                    });
                }
                break;
            case "toaudio":
            case "tomp3":
                {
                    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example("dengan mengirim/reply vidio"));
                    if (qmsg.seconds > 30) return m.reply("Durasi vidio maksimal 30 detik");
                    m.reply(msg.wait);
                    await andy.downloadMediaMessage(qmsg).then(async res => {
                        let anu = await toAudio(res, "mp4");
                        andy.sendMessage(m.chat, { audio: anu, mimetype: "audio/mpeg" }, { quoted: m });
                    });
                }
                break;
            case "wasted":
                {
                    try {
                        if (/jpg|jpeg|png/.test(mime)) {
                            m.reply(msg.wait);
                            let media = await quoted.download();
                            let anu = await UguuSe(media);
                            await andy.sendMessage(m.chat, "https://some-random-api.com/canvas/wasted?avatar=" + anu.url, "Nih Bro", m);
                        } else {
                            m.reply("Send Media yg ingin di Upload!");
                        }
                    } catch (e) {
                        m.reply("Server Canvas Sedang Offline!");
                    }
                }
                break;
            case "trigger":
            case "triggered":
                {
                    try {
                        if (/jpg|jpeg|png/.test(mime)) {
                            m.reply(msg.wait);
                            let media = await quoted.download();
                            let anu = await UguuSe(media);
                            await andy.sendMessage(m.chat, { document: { url: "https://some-random-api.com/canvas/triggered?avatar=" + anu.url }, fileName: "triggered.gif", mimetype: "image/gif" }, { quoted: m });
                        } else {
                            m.reply("Send Media yg ingin di Upload!");
                        }
                    } catch (e) {
                        m.reply("Server Canvas Sedang Offline!");
                    }
                }
                break;
            case "sticker":
            case "stiker":
            case "sgif":
            case "s":
                {
                    if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim/reply foto/vidio"));
                    if (/video/.test(mime)) {
                        if (qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!");
                    }
                    m.reply(msg.wait);
                    var media = await andy.downloadAndSaveMediaMessage(qmsg);
                    await andy.sendStimg(m.chat, media, m, { packname: "© andyjavadams" });
                    await fs.unlinkSync(media);
                }
                break;
                			case 'fetch': case 'get': {
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data))
					}
				} catch (e) {
					m.reply(util.format(e))
				}
			}
			break
            case "google":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} query`);
                    try {
                        let anu = await google.search(text);
                        let msg = anu.knowledge_panel.metadata
                            .map(({ title, value }) => {
                                return `*${title}*\n_${value}_`;
                            })
                            .join("\n\n");
                        if (!anu.knowledge_panel.description && !anu.knowledge_panel.url) return m.reply("Result tidak ditemukan!");
                        m.reply(anu.knowledge_panel.description + "\n" + anu.knowledge_panel.url + "\n\n" + msg);
                    } catch (e) {
                        m.reply("Pencarian Tidak Ditemukan!");
                    }
                }
                break;
            case "play":
            case "ytplay":
            case "yts":
            case "ytsearch":
            case "youtubesearch":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} booyah free fire`);
                    m.reply(msg.wait);
                    try {
                        const res = await yts.search(text);
                        const hasil = pickRandom(res.all);
                        const teksnya = `*📍Title:* ${hasil.title || "Tidak tersedia"}\n*✏Description:* ${hasil.description || "Tidak tersedia"}\n*🌟Channel:* ${hasil.author?.name || "Tidak tersedia"}\n*⏳Duration:* ${hasil.seconds || "Tidak tersedia"} second (${hasil.timestamp || "Tidak tersedia"})\n*🔎Source:* ${hasil.url || "Tidak tersedia"}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
                        await andy.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: qloc });
                    } catch (e) {
                        m.reply("Post not available!");
                    }
                }
                break;
            case "pixiv":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} mikasa`);
                    try {
                        let { pixivdl } = require("./all/pixiv");
                        let res = await pixivdl(text);
                        m.reply(msg.wait);
                        for (let i = 0; i < res.media.length; i++) {
                            let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(", ")}` : "";
                            let mime = (await FileType.fromBuffer(res.media[i])).mime;
                            await andy.sendMessage(m.chat, { [mime.split("/")[0]]: res.media[i], caption, mimetype: mime }, { quoted: m });
                        }
                    } catch (e) {
                        m.reply("Post not available!");
                    }
                }
                break;
            case "wallpaper":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} Heker pro tzy`);
                    try {
                        let anu = await wallpaper(text);
                        let result = pickRandom(anu);
                        if (anu.length < 1) {
                            m.reply("Post not available!");
                        } else {
                            await andy.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}` }, { quoted: m });
                        }
                    } catch (e) {
                        m.reply("Server wallpaper sedang offline!");
                    }
                }
                break;
            case "ringtone":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} black rover`);
                    let anu = await ringtone(text);
                    let result = pickRandom(anu);
                    await andy.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + ".mp3", mimetype: "audio/mpeg" }, { quoted: m });
                }
                break;
            case "npm":
            case "npmjs":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} axios`);
                    let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`);
                    let { objects } = await res.json();
                    if (!objects.length) return m.reply("Pencarian Tidak di temukan");
                    let txt = objects.map(({ package: pkg }) => {
                        return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`;
                    }).join`\n\n`;
                    m.reply(txt);
                }
                break;
            case "style":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} Andy`);
                    let anu = await styletext(text);
                    let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`;
                    m.reply(txt);
                }
                break;
            case "spotify":
            case "spotifysearch":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`);
                    try {
                        let hasil = await fetchJson("https://www.bhandarimilan.info.np/spotisearch?query=" + encodeURIComponent(text));
                        let txt = hasil.map(a => {
                            return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`;
                        }).join`\n\n`;
                        m.reply(txt);
                    } catch (e) {
                        m.reply("Server Search Offline!");
                    }
                }
                break;
            case "pinterest":
            case "pin":
                {
                    if (!text) return m.reply(`Cmd salah\n Coba .pin Kucing oren`);
                    //try {
                    await m.reply("Sedang diproses");
                    async function createImage(url) {
                        const { imageMessage } = await generateWAMessageContent(
                            {
                                image: {
                                    url
                                }
                            },
                            {
                                upload: andy.waUploadToServer
                            }
                        );
                        return imageMessage;
                    }

                    function shuffleArray(array) {
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]];
                        }
                    }

                    let push = [];
                    let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
                    let res = data.resource_response.data.results.map(v => v.images.orig.url);

                    shuffleArray(res); // Mengacak array
                    let ult = res.splice(0, 10); // Mengambil 10 gambar pertama dari array yang sudah diacak
                    let i = 1;

                    for (let pus of ult) {
                        push.push({
                            body: proto.Message.InteractiveMessage.Body.fromObject({
                                text: `Image ke - ${i++}`
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.fromObject({
                                text: "dyvsss"
                            }),
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                title: "Hasil.",
                                hasMediaAttachment: true,
                                imageMessage: await createImage(pus)
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                                buttons: [
                                    {
                                        name: "cta_url",
                                        buttonParamsJson: `{\"display_text\":\"Contact Owner\",\"url\":\"https://www.pinterest.com/${pus}\",\"merchant_url\":\"https://www.google.com\"}`
                                    }
                                ]
                            })
                        });
                    }

                    const msg = generateWAMessageFromContent(
                        m.chat,
                        {
                            viewOnceMessage: {
                                message: {
                                    messageContextInfo: {
                                        deviceListMetadata: {},
                                        deviceListMetadataVersion: 2
                                    },
                                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                        body: proto.Message.InteractiveMessage.Body.create({
                                            text: "Jangan berharap lebih, kalo ga muncul berarti ga bisa"
                                        }),
                                        footer: proto.Message.InteractiveMessage.Footer.create({
                                            text: "dyvsss"
                                        }),
                                        header: proto.Message.InteractiveMessage.Header.create({
                                            hasMediaAttachment: false
                                        }),
                                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                            cards: [...push]
                                        })
                                    })
                                }
                            }
                        },
                        {}
                    );

                    await andy.relayMessage(m.chat, msg.message, {
                        messageId: msg.key.id
                    });
                }
                break;

            //=======================================//
            //=======================================//
            //============[ MENU DOWNLOAD ]============//
            //=======================================//
            //=======================================//

            case "ytmp3":
            case "ytaudio":
            case "ytplayaudio":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
                    if (!text.includes("youtu")) return m.reply("Url Tidak Mengandung Result Dari Youtube!");
                    m.reply(msg.wait);
                    try {
                        const hasil = await ytMp3(text);
                        await andy.sendMessage(
                            m.chat,
                            {
                                audio: { url: hasil.result },
                                mimetype: "audio/mpeg",
                                contextInfo: {
                                    externalAdReply: {
                                        title: hasil.title,
                                        body: hasil.channel,
                                        previewType: "PHOTO",
                                        thumbnailUrl: hasil.thumb,
                                        mediaType: 1,
                                        renderLargerThumbnail: true,
                                        sourceUrl: text
                                    }
                                }
                            },
                            { quoted: m }
                        );
                    } catch (e) {
                        m.reply("Gagal Mendownload audio");
                    }
                }
                break;
            case "ytmp4":
            case "ytvideo":
            case "ytplayvideo":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} url_youtube`);
                    if (!text.includes("youtu")) return m.reply("Url Tidak Mengandung Result Dari Youtube!");
                    m.reply(msg.wait);
                    try {
                        const hasil = await ytMp4(text);
                        await andy.sendMessage(m.chat, { video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ""}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
                    } catch (e) {
                        try {
                            const hasil = await multiDownload(text);
                            await andy.sendMessage(m.chat, { video: { url: hasil[0].path } }, { quoted: m });
                        } catch (e) {
                            m.reply("Gagal Mendownload Video!");
                        }
                    }
                }
                break;
            case "ig":
            case "instagram":
            case "instadl":
            case "igdown":
            case "igdl":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} url_instagram`);
                    if (!text.includes("instagram.com")) return m.reply("Url Tidak Mengandung Result Dari Instagram!");
                    m.reply(msg.wait);
                    try {
                        const hasil = await multiDownload(text);
                        if (hasil.length < 0) return m.reply("Postingan Tidak Tersedia atau Privat!");
                        for (let i = 0; i < hasil.length; i++) {
                            await andy.sendFileUrl(m.chat, hasil[i].path, "Done", m);
                        }
                    } catch (e) {
                        m.reply("Postingan Tidak Tersedia atau Privat!");
                    }
                }
                break;
            case "igstory":
            case "instagramstory":
            case "instastory":
            case "storyig":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} usernamenya`);
                    try {
                        const hasil = await instaStory(text);
                        m.reply(msg.wait);
                        for (let i = 0; i < hasil.results.length; i++) {
                            await andy.sendFileUrl(m.chat, hasil.results[i].url, "Done", m);
                        }
                    } catch (e) {
                        m.reply("Username tidak ditemukan atau Privat!");
                    }
                }
                break;
            case "tiktok":
            case "tiktokdown":
            case "ttdown":
            case "ttdl":
            case "tt":
            case "ttmp4":
            case "ttvideo":
            case "tiktokmp4":
            case "tiktokvideo":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`);
                    if (!text.includes("tiktok.com")) return m.reply("Url Tidak Mengandung Result Dari Tiktok!");
                    try {
                        const hasil = await tiktokDl(text);
                        m.reply(msg.wait);
                        if (hasil && hasil.size_nowm) {
                            await andy.sendMessage(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m);
                        } else {
                            for (let i = 0; i < hasil.data.length; i++) {
                                await andy.sendMessage(m.chat, hasil.data[i].url, `*🚀Image:* ${i + 1}`, m);
                            }
                        }
                    } catch (e) {
                        m.reply("Gagal/Url tidak valid!");
                    }
                }
                break;
            case "ttmp3":
            case "tiktokmp3":
            case "ttaudio":
            case "tiktokaudio":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`);
                    if (!text.includes("tiktok.com")) return m.reply("Url Tidak Mengandung Result Dari Tiktok!");
                    try {
                        const hasil = await tiktokDl(text);
                        m.reply(msg.wait);
                        await andy.sendMessage(
                            m.chat,
                            {
                                audio: { url: hasil.music_info.url },
                                mimetype: "audio/mpeg",
                                contextInfo: {
                                    externalAdReply: {
                                        title: "TikTok • " + hasil.author.nickname,
                                        body: hasil.stats.likes + " suka, " + hasil.stats.comment + " komentar. " + hasil.title,
                                        previewType: "PHOTO",
                                        thumbnailUrl: hasil.cover,
                                        mediaType: 1,
                                        renderLargerThumbnail: true,
                                        sourceUrl: text
                                    }
                                }
                            },
                            { quoted: m }
                        );
                    } catch (e) {
                        m.reply("Gagal/Url tidak valid!");
                    }
                }
                break;
            case "fb":
            case "fbdl":
            case "fbdown":
            case "facebook":
            case "facebookdl":
            case "facebookdown":
            case "fbdownload":
            case "fbmp4":
            case "fbvideo":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} url_facebook`);
                    if (!text.includes("facebook.com")) return m.reply("Url Tidak Mengandung Result Dari Facebook!");
                    try {
                        const hasil = await facebookDl(text);
                        if (hasil.results.length < 1) {
                            m.reply("Video Tidak ditemukan!");
                        } else {
                            m.reply(msg.wait);
                            await andy.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
                        }
                    } catch (e) {
                        m.reply("Server downloader facebook sedang offline!");
                    }
                }
                break;
            case "mediafire":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
                    if (!isUrl(args[0]) && !args[0].includes("mediafire.com")) return m.reply("Url Invalid!");
                    try {
                        const anu = await mediafireDl(text);
                        await andy.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${decodeURIComponent(anu.name)}\n*${setv} Size* : ${anu.size}`, m);
                    } catch (e) {
                        m.reply("Server download sedang offline!");
                    }
                }
                break;
            case "spotifydl":
                {
                    await m.reply(msg.wait);
                    if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
                    if (!isUrl(args[0]) && !args[0].includes("open.spotify.com/track")) return m.reply("Url Invalid!");
                    try {
                        await andy.sendMedia(m.chat, "https://spotifyapi.caliphdev.com/api/download/track?url=" + text, "", "", m);
                    } catch (e) {
                        m.reply("Server download sedang offline!");
                    }
                }
                break;

            //=======================================//
            //=======================================//
            //============[ MENU MASSAGE ]============//
            //=======================================//
            //=======================================//
            case "terkentod":
                {
                    var teks = `Hoekkkkkkk🤮🤮🤮. najis ada gay.`;
                    m.reply(teks);
                }
                break;
            case "owner":
                {
                    andy.sendContact(m.chat, [owner], "Save namain Andy Malaikat Bandung", qloc);
                }
                break;

            default:
                if (budy.startsWith("$")) {
                    if (!isOwner) return;
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return andy.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
                        if (stdout) return andy.sendMessage(m.chat, { text: util.format(stdout) }, { quoted: m });
                    });
                }

                if (budy.startsWith(">")) {
                    if (!isOwner) return;
                    try {
                        let evaled = await eval(text);
                        if (typeof evaled !== "string") evaled = util.inspect(evaled);
                        andy.sendMessage(m.chat, { text: util.format(evaled) }, { quoted: m });
                    } catch (e) {
                        andy.sendMessage(m.chat, { text: util.format(e) }, { quoted: m });
                    }
                }

                if (budy.startsWith("=>")) {
                    if (!isOwner) return false;
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2);
                        bang = util.format(sat);
                        if (sat == undefined) {
                            bang = util.format(sul);
                        }
                        return m.reply(bang);
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
                    } catch (e) {
                        m.reply(String(e));
                    }
                }
        }
    } catch (e) {
        console.log(e);
    }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
