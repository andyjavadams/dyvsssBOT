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
        const fatkuns = m.quoted || m;
        const axios = require("axios");
        const quoted = fatkuns.mtype == "buttonsMessage" ? fatkuns[Object.keys(fatkuns)[1]] : fatkuns.mtype == "templateMessage" ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : fatkuns.mtype == "product" ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || "";
        const qmsg = quoted.msg || quoted;
        const { Primbon } = require("scrape-primbon");
        const primbon = new Primbon();
        const sekarang = new Date();
        const hari = sekarang.toLocaleDateString("id-ID", { weekday: "long" });
        const text = (q = args.join(" "));
        const gis = require("g-i-s");
        const { pinterest2, wallpaper, remini, wikimedia, quotesAnime, multiDownload, yanzGpt, happymod, umma, ringtone, jadwalsholat, styletext, tiktokDl, facebookDl, instaStory, bk9Ai, ytMp4, ytMp3, mediafireDl, quotedLyo, simi } = require("./all/screaper");
        const { pixivdl } = require("./all/pixiv");
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
        const { TelegraPh, UguuSe } = require("./all/uploader");
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
            shubuh: "04:19",
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
        let targetDate = new Date("Februai 28, 2025 00:00:00");
        let currentDate = new Date();
        let remainingTime = targetDate.getTime() - currentDate.getTime();
        let poe = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let jamnya = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let menitnya = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let detiknya = Math.floor((remainingTime % (1000 * 60)) / 1000);
        let countdownMessage = `Tinggal ${poe} hari, ${jamnya} jam, ${menitnya} menit, ${detiknya} detik menuju bulan ramadhan 😇`;

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
        //function downloader
        async function saveTube3(url) {
            let res = await fetch(`https://api.nasirxml.my.id/download/ytmp3?url=${url}`).then(response => response.json());
            return res;
        }

        async function saveTube4(url) {
            let res = await fetch(`https://api.nasirxml.my.id/download/ytmp4?url=${url}`).then(response => response.json());
            return res;
        }

        async function saveTt4(url) {
            let res = await fetch(`https://api.nasirxml.my.id/download/tiktok?url=${url}`).then(response => response.json());
            return res;
        }
        //end

        //react
        async function emote(emo) {
            andy.sendMessage(m.chat, {
                react: {
                    text: emo,
                    key: m.key
                }
            });
        }
        //end

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
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite("[ PESAN ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(budy || m.mtype)) + "\n" + chalk.magenta("=> Dari"), chalk.green(pushname), chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> Di"), chalk.green(m.isGroup ? pushname : "Private Chat", from));
        }
        const qtext = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}) }, message: { extendedTextMessage: { text: body } } };

        const qdoc = { key: { participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: `Tutor hek wea by andyjavadams`, jpegThumbnail: "" } } };

        const qdoc2 = { key: { participant: "0@s.whatsapp.net", ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { documentMessage: { title: `Cie dapet Pesan Menfes, Ini pesannya`, jpegThumbnail: "" } } };

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

        if (m.chat.endsWith("@s.whatsapp.net") && !isCmd) {
            try {
                this.menfes = this.menfes || {};
                let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === "CHATTING");
                if (room) {
                    if (/^.*(next|leave|start)/.test(m.text)) return;
                    if ([".next", ".leave", ".stop", ".start", "Cari Partner", "Keluar", "Lanjut", "Stop"].includes(m.text)) return;
                    let find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
                    let other = find.a === m.sender ? find.b : find.a;
                    if (m.mtype === "conversation" || m.mtype === "extendedTextMessage") {
                        await andy.sendMessage(
                            other,
                            {
                                text: m.text,
                                mentions: [other]
                            },
                            {
                                quoted: qdoc2
                            }
                        );
                    }
                    if (["imageMessage", "videoMessage", "audioMessage", "documentMessage", "stickerMessage"].includes(m.mtype)) {
                        let media;
                        try {
                            media = await m.download();
                        } catch (err) {
                            console.error("Gagal mengunduh media:", err);
                            await andy.sendMessage(m.sender, { text: "Gagal mengunduh media. Pastikan media masih valid dan coba lagi." });
                            return;
                        }
                        let options = {
                            caption: m.msg?.caption || "",
                            mentions: [other]
                        };
                        if (m.mtype === "imageMessage") {
                            await andy.sendMessage(other, { image: media, ...options }, { quoted: fmen });
                        } else if (m.mtype === "videoMessage") {
                            await andy.sendMessage(other, { video: media, ...options }, { quoted: fmen });
                        } else if (m.mtype === "audioMessage") {
                            await andy.sendMessage(other, { audio: media, mimetype: "audio/mpeg", ...options }, { quoted: fmen });
                        } else if (m.mtype === "documentMessage") {
                            await andy.sendMessage(other, { document: media, mimetype: m.msg?.mimetype, fileName: m.msg?.fileName, ...options }, { quoted: fmen });
                        } else if (m.mtype === "stickerMessage") {
                            await andy.sendMessage(other, { sticker: media }, { quoted: fmen });
                        } else {
                            console.warn("Tipe media tidak dikenali:", m.mtype);
                        }
                    }
                }
            } catch (err) {
                console.error("Error di fitur Menfess:", err);
                await andy.sendMessage(m.sender, { text: "Terjadi kesalahan saat mengirim pesan ke pasangan Menfess. Silakan coba lagi nanti." });
            }
        }

        switch (command) {
            //=======================================//
            //=======================================//
            //============[ MENU / CASE ]============//
            //=======================================//
            //=======================================//
            case "menu":
                {
                    emote("✅");
                    //   andy.sendText(m.chat, "Sedang Diproses", qtext);
                    let teksnya = `📌 INFO : _Semua bug sudah di fix_

📌 INFO UPDATE : _Penghapusan button - Penambahan react - Membuat agar suport di ios_

📌 _${countdownMessage}_

${readmore}

┌─「 D A S H B O A R D 」
├ ${ucapanWaktu}, @${m.sender.split("@")[0]}
├ Hari Ini : _${hariini}_
├ Status Bot : _Online_
└─

┌─「 Z O N A - W A K T U 」
├ Wib : _${wib}_
├ Wita : _${wita}_
├ Wit : _${wit}_
└─

┌─「 I N F O - B O T 」
├ Nama Bot : _${namabot}_
├ Nama Bos : _${namaowner}_
├ Versi Bot : _${versionbot}_
└─

┌─「 S T I C K E R - M E N U 」
├ sticker
├ swm
├ smeme
├ toimage
├ trigger
├ emojimix
├ getexif
├ qc
├ brat
└─

┌─「 A I - M E N U 」
├ simi
├ ai
└─

┌─「 Q U O T E S - M E N U 」
├ motivasi
├ bijak
├ dare
├ truth
├ quotes
├ bucin
└─

┌─「 S E A R C H - M E N U 」
├ google
├ gimage
├ fetch
├ pixiv
├ wallpaper
├ ringtone
├ npm
├ style
├ yts
├ spotify
├ pinterest
└─

┌─「 D O W N L O A D - M E N U 」
├ ytmp4
├ ytmp3
├ tiktokmp4
├ tiktokmp3
├ spotifydl
└─

┌─「 A S U P A N - M E N U 」
├ asupan
├ asupanbocil
├ asupancina
├ asupangeayubi
├ asupanindo
├ asupanjepang
├ asupankorea
├ asupanthailand
└─

┌─「 P R I M B O N - M E N U 」
├ artimimpi
├ nomorhoki
├ ramalanjodoh
├ ramalanjodohbali
├ suamiistri
├ ramalancinta
├ artinama
├ kecocokannama
├ kecocokanpasangan
├ jadianpernikahan
├ sifatusaha
├ rezeki
├ pekerjaan
├ ramalannasib
├ potensipenyakit
├ artitarot
├ fengshui
├ haribaik
├ harisangar
├ harinaas
├ nagahari
├ arahrezeki
├ peruntungan
├ weton
├ sifat
├ Keberuntungan
├ memancing
├ masasubur
├ shio
└─

┌─「 F U N - M E N U 」
├ bisakah
├ apakah
├ kapan
├ kerangajaib
├ cekaku
├ bagaimanakah
├ cekmati
├ ceksifat
├ cnilai
├ fitnah
├ halah
├ hilih
├ huluh
├ heleh
├ holoh
└─

┌─「 A U D I O - M E N U 」
├ bass
├ blown
├ deep
├ earrape
├ fast
├ fat
├ nightcore
├ reverse
├ robot
├ slow
├ smooth
├ tupai
├ toaudio
├ tomp3
├ tovn
├ toptt
├ tts
└─

┌─「 T O O L S - M E N U 」
├ hd
├ readmore
├ cuaca
├ shortlink
├ tourl
├ toqr
├ git
├ ssweb
├ inspect
├ q
└─

┌─「 G R O U P - M E N U 」
├ add
├ kick
├ hidetag
├ tagall
├ delete
├ open
├ close
├ setnamagc
├ setdesk
├ setppgc
├ promote
├ demote
├ leavegc
├ idgc
├ linkgc
└─
  
┌─「 O W N E R - M E N U 」
├ anticall
├ setpppanjang
├ setnamabot
├ setbiobot
├ listpremium
├ listowner
├ addowner
├ delowner
├ addprem
├ delprem
└─`;
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
                        { quoted: qkontak }
                    );
                }
                break;
            /*            andy.sendMessage(
                        m.chat,
                        {
                            image: { url: image },
                            caption: teksnya,
                            footer: "dyvsssBOT akan selalu update, dan dikembangkan gimana mood owner | dyvsss.me | © andyjavadams",
                            buttons: [
                                {
                                    buttonId: ".owner",
                                    buttonText: {
                                        displayText: "CONTACT"
                                    }
                                },
                                {
                                    buttonId: ".sc",
                                    buttonText: {
                                        displayText: "SOURCE CODE"
                                    }
                                },
                                {
                                    buttonId: ".donasi",
                                    buttonText: {
                                        displayText: "DONASI"
                                    }
                                }
                            ],
                            headerType: 1,
                            viewOnce: true
                        },
                        { quoted: qkontak }
                    );
                }
                break;*/
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
                    m.reply("Berhasil menambah ke daftar owner");
                    await emote("✅");
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
            case "delown":
            case "delowner":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"];
                    if (!users.length || !text) return m.reply("Tag seseorang!");
                    if (users.filter(v => !zippokun.includes(v)).length) return andy.sendMessage(m.chat, { text: `${users.map(v => `@${v.split("@")[0]}`).join(", ")} belum masuk ke list owner!`, mentions: users }, { quoted: m });
                    zippokun = zippokun.filter(v => !users.includes(v));
                    fs.writeFileSync(dbowner, JSON.stringify(zippokun));
                    m.reply("Kedudukan owner telah di hapus dari database");
                    await emote("✅");
                }
                break;
            case "listowner":
            case "listown":
                {
                    emote("✅");
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
                    m.reply("Berhasil menambahkan Kedudukan premium ke database");
                    await emote("✅");
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
                    m.reply("Berhasil menghapus Kedudukan premium dari database");
                    await emote("✅");
                }
                break;

            case "listprem":
            case "listpremium":
                {
                    andy.sendMessage(m.chat, { text: `DAFTAR PREMIUM\n\n${zippokuy.map(v => `- @${v.split("@")[0]}`).join("\n")}\n\nTotal : ${zippokuy.length}`, mentions: zippokuy }, { quoted: m });
                    emote("✅");
                }
                break;
            case "public":
            case "publik":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    andy.public = true;
                    m.reply("Sukses merubah bot ke publik");
                    await emote("✅");
                }
                break;
            case "self":
            case "private":
            case "priv":
            case "prib":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    andy.public = false;
                    m.reply("Sukses merubah bot ke pribadi");
                    await emote("✅");
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
                        m.reply("Berhasil menggantif foto profil");
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
            case "anticall":
                {
                    if (!isOwner) return m.reply(msg.owner);
                    if (text.toLowerCase() == "on") {
                        if (anticall) return m.reply("Anticall is now active");
                        anticall = true;
                        m.reply("Successfully turned on anticall by andyjavadams");
                    } else if (text.toLowerCase() == "off") {
                        if (!anticall) return m.reply("Anticall is now inactive");
                        anticall = false;
                        m.reply("Successfully turned off anticall by andyjavadams");
                    } else {
                        return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"));
                    }
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
                    if (!isAdmin) return m.reply(msg.admin);
                    if (!isGroup) return m.reply(msg.group);
                    m.reply(`${m.chat}`);
                }
                break;
            case "listgc":
            case "listgrup":
                {
                    emote("✅");
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
                    await m.reply("Aku disuruh keluar dari grup sama bos,\n\nSelamat tinggal");
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
                        await m.reply(`Successfully left the group by andyjavadams\nMessage : Adios..`);
                        await andy.groupLeave(`${gcall[leav].id}`);
                    }
                }
                break;
            //=======================================//
            //=======================================//
            //==============[ Menu Primbon ]===============//
            //=======================================//
            //=======================================//
            case "artimimpi":
            case "tafsirmimpi":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Mati`);
                    let anu = await primbon.tafsir_mimpi(text);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m);
                }
                break;
            case "nomerhoki":
            case "nomorhoki":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 62821xxxxx`);
                    let anu = await primbon.nomer_hoki(Number(text));
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m);
                }
                break;
            case "ramalanjodoh":
            case "ramaljodoh":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008, Jamilah, 1, 1, 2004`);
                    let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`;
                    let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n\n• *Hasil :* ${anu.message.result}\n\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "ramalanjodohbali":
            case "ramaljodohbali":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008, Jamilah, 1, 1, 2004`);
                    let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`;
                    let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n\n• *Hasil :* ${anu.message.result}\n\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "suamiistri":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008, Jamilah, 1, 1, 2004`);
                    let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`;
                    let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n\n• *Hasil :* ${anu.message.result}\n\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "ramalancinta":
            case "ramalcinta":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008, Jamilah, 1, 1, 2004`);
                    let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`;
                    let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "artinama":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy Javadam`);
                    let anu = await primbon.arti_nama(text);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "kecocokannama":
            case "cocoknama":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008`);
                    let [nama, tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m);
                }
                break;
            case "kecocokanpasangan":
            case "cocokpasangan":
            case "pasangan":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy|Jamilah`);
                    let [nama1, nama2] = text.split`|`;
                    let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendImage(m.chat, anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m);
                }
                break;
            case "jadianpernikahan":
            case "jadiannikah":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2018`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m);
                }
                break;
            case "sifatusaha":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 8, 2022`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m);
                }
                break;
            case "rejeki":
            case "rezeki":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "pekerjaan":
            case "kerja":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "ramalannasib":
            case "ramalnasib":
            case "nasib":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.ramalan_nasib(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m);
                }
                break;
            case "potensipenyakit":
            case "penyakit":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "artitarot":
            case "tarot":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.arti_kartu_tarot(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "fengshui":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 1, 2008\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`);
                    let [nama, gender, tahun] = text.split`,`;
                    let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m);
                }
                break;
            case "haribaik":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.petung_hari_baik(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "harisangar":
            case "taliwangke":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "harinaas":
            case "harisial":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.primbon_hari_naas(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m);
                }
                break;
            case "nagahari":
            case "harinaga":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.rahasia_naga_hari(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "arahrejeki":
            case "arahrezeki":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "peruntungan":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008, 2026\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`);
                    let [nama, tgl, bln, thn, untuk] = text.split`,`;
                    let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "weton":
            case "wetonjawa":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2008`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.weton_jawa(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m);
                }
                break;
            case "sifat":
            case "karakter":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008`);
                    let [nama, tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m);
                }
                break;
            case "keberuntungan":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} Andy, 8, 1, 2008`);
                    let [nama, tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m);
                }
                break;
            case "memancing":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2025`);
                    let [tgl, bln, thn] = text.split`,`;
                    let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "masasubur":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} 8, 1, 2025, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`);
                    let [tgl, bln, thn, siklus] = text.split`,`;
                    let anu = await primbon.masa_subur(tgl, bln, thn, siklus);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m);
                }
                break;
            case "shio":
                {
                    if (!text) return m.reply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`);
                    let anu = await primbon.shio(text);
                    if (anu.status == false) return m.reply(anu.message);
                    andy.sendText(m.chat, `• *Hasil :* ${anu.message}`, m);
                }
                break;

            //=======================================//
            //=======================================//
            //==============[ Menu Quotes ]===============//
            //=======================================//
            //=======================================//
            case "motivasi":
                let kata = [
                    "di setiap kelebihan pasti ada kembalian",
                    "cobaan memang banyak kalo dikit itu cobain",
                    "kalau orang lain bisa mengapa harus saya, kalau orang lain gak bisa apalagi saya",
                    "lebih baik menjauh daripada tersakiti begitulah caraku menggoreng ikan",
                    "sholat itu 5 waktu, bukan kalo ada waktu",
                    "tetaplah membalas budi, walau budi nggak salah",
                    "jika kamu bilang cari duit itu sulit, percayalah,nagih utang jauh lebih sulit",
                    "jika hidupmu malang, cobalah ke Bali",
                    "ke masjid itu sampai tua bukan nunggu tua",
                    "ingat kawan sakit gigi dan sakit hati berawal dari yang 'manis manis'",
                    "kesempatan tidak datang 2 kali kecuali remedial",
                    "hidup cuman sekali kalo dua kali namanya hidup-hidup",
                    "kalian mau tau kenapa pria sejati itu kebanyakan sibuk? ok nanti aku jelasin, lagi sibuk soalnya.",
                    "sibuk mencari kesibukan yang tidak menyibukan",
                    "masa depan mu tidak secerah 'hp bapakku'",
                    "disaat masalah tidak ada jalan keluarnya, maka kita yang keluar jalan-jalan",
                    "Pekerjaan akan lebih mudah jika tidak dikerjakan",
                    "Istiqomah itu berat, yang ringan mah istirahat.",
                    "dunia ini berputar, pantesan saya pusing",
                    "Hidup itu berjalan kalo capek naik gojek aja",
                    "dunia punya cerita yg cerita bukan saya",
                    "ingin tidak mau jadi beban keluarga yaa keluar kk",
                    "'sesuatu yang berlebihan itu tidak baik kecuali' uang",
                    "cinta itu hanya bertepuk sebelah tangan, kalau tepuk dua tangan jadi tepuk pramuka",
                    "kalau pekerjaan mu berat cari lah yg ringan",
                    "anda punya masalah Ya itu bukan urusan saya, karena klau saya ikut akan jadi masalah buat saya",
                    "bermimpi adalah hal terbaik, maka dari itu saya sering tidur.",
                    "ibu dan bapak kalian nikah di tanggal yang sama",
                    "diam tidak akan menyelesaikan masalah, tapi diam juga tidak membuat masalah",
                    "jika kamu gagal jadi orang sukses. tenanglah. setidaknya kamu telah sukses jadi orang gagal.",
                    "aku tulus, tapi aku gabisa nyanyi",
                    "hidup memang banyak ujian , kalau banyak cucian itu Laundry",
                    "pengen ngejar mimpi tapi males lari",
                    "tanpa kalian sadari,kalian itu udah sadar",
                    "kalau roda bisa berhenti kenapa harus berputar?",
                    "jika kamu gagal maka cobalah lagi, siapa tau gagal lagi",
                    "kamu tau kiko? Enak tau",
                    "prot² lebih menyenangkan dari pada janji kawan",
                    "Hari ini dan esok harinya untuk kita berdua , tapi hari selanjutnya untuk siapa?",
                    "aku cuma punya motor supra, kalo kamu suka sama ninja. sama aku juga",
                    "jadilah murid teladan, datangnya telat pulang duluan",
                    "penyesalan itu di akhir kalo di awal itu pendaftaran",
                    "didewasakan oleh film dewasa",
                    "jangan ngurusin saya, saya udah kurus",
                    "tanpa saya, warga Indonesia kurang satu",
                    "menyukai tidak harus memiliki, itulah caraku melihat shopee",
                    "dikuburan itu sepi, kalo rame lanjut part 2"
                ];
                const quotes = kata[Math.floor(Math.random() * kata.length)];
                andy.sendText(m.chat, quotes, m);
                break;
            case "bijak":
                let katanya = [
                    "jgn pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah",
                    "Dalam cinta, ketika ada yg berbeda, jgn mencari siapa yg salah, krn kamu dan dia adalah tim yg sama dgn tujuan yg sama",
                    "Saat terpisah, imajinasi adalah penghubung antara dua jiwa yang saling mencintai",
                    "Sahabat adl dia yg tahu kekuranganmu, tp menunjukkan kelebihanmu. Dia yg tahu ketakutanmu, tapi menunjukkan keberanianmu",
                    "Jadikan cobaan sebuah pelajaran, jgn pernah mengeluh krn kesusahan, di situ kita diajarkan utk menjadi orang yg sabar",
                    "Risiko terbesar dalam hidup ini adalah tidak mengambil resiko sama sekali",
                    "Mereka yg membencimu hanya buktikan bahwa hidupmu lebih baik dari mereka. Jangan hiraukan mereka, teruslah melangkah",
                    "Hanya karena mereka tak memperlakukanmu seperti yg kamu inginkan, bukan berarti mereka tak mencintaimu setulus hati",
                    "Kebahagiaan belum tentu membuat seseorang bersyukur. Tetapi bersyukurlah yang membuat seseorang meraih kebahagiaan",
                    "Meski bersahabat, kalian tak hrs sll bersama. Miliki waktumu sendiri. Tapi jgn lupakan mrk ketika kalian menemukan cinta",
                    "Jangan selalu katakan *masih ada waktu* atau *nanti saja*. Lakukan segera, gunakan waktumu dengan bijak",
                    "Hanya karena mereka tak memperlakukanmu seperti yg kamu inginkan, bukan berarti mereka tak mencintaimu setulus hati",
                    "Berpikir itu gampang, bertindak itu sulit, dan melaksanakan satu pikiran dalam tindakan adl hal yg paling sulit di dunia",
                    "Dear sahabat.. Aku tak tahu cara berterimakasih kepadamu, tp aku sangatlah beruntung mempunyai seorang sahabat sepertimu",
                    "Jika tak cinta, katakan saja. Jangan memberi harapan hampa, karena seseorang akan terluka. Jangan manfaatkan cinta!",
                    "Cinta bisa membuat waktu terlewati, dan waktu pun bisa membuat cinta terlewati",
                    "Cinta yg dekat dan mesra, sering terbukti hambar setelah pernikahan. Maka lbh berhati-hatilah saat cintamu terpisah jarak",
                    "Terkadang, bukan kenangan buruk yg membuatmu bersedih, tp kenangan indah yg kamu tahu, hal itu tak akan terulang kembali",
                    "Dalam kepala kaum wanita ada kekurangan, tetapi dalam hati mereka ada kelebihan",
                    "jika menjauhimu membuatku jd sendiri, itu tak mengapa ... karna Tuhan sudah menjodohkan aku, entah dgn siapa kelak :( semangat",
                    "jgn sesali apa yg pergi. Jgn tangisi apa yg sudah tiada. Tetapi bangkitlah dan bina kembali apa yg telah hilang dan pergi",
                    "Orang yang telah tiada takkan mungkin kembali, seberapapun km mencintainya, km harus merelakan itu kan? Move On",
                    "Butuh waktu untuk mendapatkan orang yang tepat",
                    "Yang penting itu bukan apa yang kita ketahui tapi apa yang kita bersedia pelajari",
                    "Perasaan yang paling berbahaya adalah iri, karena iri hati melahirkan kebencian dan kebencian akan membunuhmu perlahan",
                    "Sesuatu yg sangat sulit tuk melupakan seseorang yang telah memberimu begitu banyak hal tuk diingat",
                    "Ikhlas menerima kesalahan, dan belajar dari setiap kesalahan, krn itu yg akan menjadikanmu kuat dlm menjalani kehidupan",
                    "Kebahagiaanmu tdk ditentukan org lain, tapi dirimu sendiri. Apa yg kamu lakukan hari ini, tentukan bahagia masa depanmu",
                    "Ladies# jangan pernah meremehkan seorang pria, karena mereka adalah orang yang akan menjaga kamu seumur hidupmu",
                    "Terkadang, bukan kenangan buruk yg membuatmu bersedih, tp kenangan indah yg kamu tahu, hal itu tak akan terulang kembali",
                    "Hanya krn km sendiri, bukan berarti harus berdiam diri kaLa ada dipersimpangan",
                    "Perbedaan tak seharusnya membuatmu berpisah, krn seharusnya perbedaan menyadarkanmu bahwa kamu dan dia saling membutuhkan",
                    "Orang yang gagah perkasa itu bukan orang yang bertubuh kekar melainkan orang yang mampu mengendalikan emosinya ketika marah",
                    "Bukan seberapa banyak yang kita punya yang memberikan kebahagiaan adalah seberapa besar kita menikmati apa yg kita punya",
                    "Pada akhirnya kita tau bahwa cinta tidak datang pada 2 orang yang sempurna seperti yang kita harapkan",
                    "Berjalan dengan seorang sahabat dikegelapan,lebih berarti daripada berjalan sendirian ditempat yg terang banyak cahaya",
                    "jgn memulai bisnis utk jadi kaya. tp mulailah utk membuat kaya org di sekitarmu. itu akan membuatmu kaya dgn sendirinya",
                    "Berpikir itu gampang, bertindak itu sulit, dan melaksanakan satu pikiran dalam tindakan adl hal yg paling sulit di dunia",
                    "Satu-satunya perempuan yang tidak pernah mengecewakanku adalah ibu",
                    "jgn memohon pd Tuhan utk meringankan cobaan yg ada, berdoalah pd Tuhan utk memberikanmu kekuatan utk dpt melaluinya",
                    "Orang yang gagah perkasa itu bukan orang yang bertubuh kekar melainkan orang yang mampu mengendalikan emosinya ketika marah",
                    "Hanya karena mereka tak memperlakukanmu seperti yg kamu inginkan, bukan berarti mereka tak mencintaimu setulus hati",
                    "Berbincang-bincang dengan kawan lama membuatmu menyadari seberapa besar hidupmu telah berubah",
                    "Ketika ragu menghampiri, ikuti kata hati. Beri pertanyaan, temukan sebuah jawaban. Belajarlah tuk mempercayai hati",
                    "Orang yg malas telah membuang kesempatan yg diberikan Tuhan, padahal Tuhan tidak pernah menciptakan sesuatu dgn sia-sia",
                    "Jangan membenci mereka yang mengatakan hal buruk tuk menjatuhkanmu, karena merekalah yang buatmu semakin kuat setiap hari",
                    "Dan janganlah memperburuk keadaan dengan berlaku rendah untuk membuatnya balik mencemburuimu",
                    "dlm hidup, kamu akan bertemu orang yg tak INGIN kamu bahagia, namun hidupmu bukan ttg keinginan mereka tapi keinginanmu",
                    "Bahwa dalam suatu perjuangan kita harus berjuang terus sampai habis-habisan",
                    "Di balik kekurangan pasti ada kelebihan, meskipun mata tertutup, tapi hati selalu bisa merasakan",
                    "Cinta sejati adl ketika dia mencintai org lain dan kamu masih mampu tersenyum, sambil berkata: aku turut bahagia untukmu",
                    "Orang yg malas telah membuang kesempatan yg diberikan Tuhan, padahal Tuhan tidak pernah menciptakan sesuatu dgn sia-sia",
                    "Kamu takkan bisa mendapatkan yg kamu inginkan jika kamu terlalu sibuk mengeluhkan apa yg telah kamu miliki. Bersyukurlah!",
                    "jgn nilai orang dr masa lalunya krn kita semua sudah tdk hidup disana. Semua orang bisa berubah, biarkan mrk membuktikan",
                    "Lebih baik memiliki 1 sahabat yang mengerti kita dari pada 1000 teman yang mementingkan dirinya sendiri",
                    "Pada akhirnya kita tau bahwa cinta tidak datang pada 2 orang yang sempurna seperti yang kita harapkan",
                    "Begitu sulitnya mencari teman yg tak lupa kita ketika sudah tak lama berjumpa",
                    "Di mana Anda berada saat ini tidak menentukan di mana Anda akan berakhir",
                    "Jangan terlalu memikirkan masa lalumu, kini mereka hanya kenangan. Tatap masa depanmu karena disanalah impian",
                    "Kesalahan adl pengalaman hidup, belajarlah darinya. jgn mencoba tuk menjadi sempurna. Cobalah menjadi teladan bagi sesama",
                    "Hidup terlalu singkat jika hanya menyesal. Hidup hanya sekali, namun jika digunakan dengan baik, sekali saja cukup!",
                    "Di balik kekurangan pasti ada kelebihan, meskipun mata tertutup, tapi hati selalu bisa merasakan",
                    "Selama kita masih hidup tidak ada hukuman; yang ada adalah peringatan agar kita memperbaiki diri",
                    "Aku hanya manusia biasa, memiliki hidup yg biasa. Namun kehadiran dirimu mengubah segalanya, kau membuatku merasa sempurna",
                    "Sahabat sejati menangis saat kau pergi, sahabat palsu pergi saat kau menangis",
                    "Sahabat adalah mereka yang mengerti masa lalumu, percaya pada masa depanmu, dan menerima kamu apa adanya",
                    "Dalam hidup, orang tak akan peduli berapa banyak yg kamu tahu hingga mereka tahu berapa banyak kamu peduli pada mereka",
                    "Bila org mulai dgn kepastian, akan berakhir dgn keraguan. jika org mulai dgn keraguan, dia akan berakhir dgn kepastian",
                    "Hindari mengaplikasikan trend yg berlebihan ke diri kalian. krn kalian terkesan tdk memiliki penampilan yg unik & khas",
                    "Hidup ini bukan hanya mencari yang terbaik, namun lebih kepada menerima kenyataan bahwa kamu adalah kamu",
                    "jika ssorg meninggalkanmu, jgn hanya bs katakan dia tak mencintaimu, tp tanyakan pada dirimu, knp dia meninggalkanmu",
                    "Hidup ini bukan hanya mencari yg terbaik, namun lebih pada menerima kenyataan bahwa kamu adalah kamu. Jadi dirimu sendiri",
                    "mencintai karena agama dan kebaikannya, kamu akan menemuakan kebahagian hidup bersamanya",
                    "Sukses dicapai dengan mengembangkan kelebihan kita bukan dengan menghilangkan kelemahan",
                    "Orang yg malas telah membuang kesempatan yg diberikan Tuhan, padahal Tuhan tidak pernah menciptakan sesuatu dgn sia-sia",
                    "jgn pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah",
                    "Kalaulah anda tidak mampu untuk menggembirakan orang lain, janganlah pula anda menambah dukanya",
                    "Jika tak cinta, katakan saja. Jangan memberi harapan hampa, karena seseorang akan terluka. Jangan manfaatkan cinta!",
                    "masa lalu hanya akan membuatmu tak percaya dgn berbagai hal, namun HATI, dia akan selalu ada dimasa kini",
                    "Cinta mgkn akan membuatmu terluka, tapi ia membuatmu semakin dewasa. Jadilah pribadi yg sll memaafkan, terutama hatimu",
                    "Lebih jernih dalam berpikir, dengan logika dan ilmu yg memadai",
                    "Hanya krn km sendiri, bukan berarti harus berdiam diri kaLa ada dipersimpangan",
                    "Meneruskan kehidupan dengan baik, meskipun ada yang iri dan membenci Anda. Live on!",
                    "Mewujudkan apa yang kita inginkan adalah hadiah terbesar yang kita terima dari lahir",
                    "Berpikir itu gampang, bertindak itu sulit, dan melaksanakan satu pikiran dalam tindakan adl hal yg paling sulit di dunia",
                    "Butuh waktu untuk mendapatkan orang yang tepat",
                    "Sesuatu yg sulit ketika tahu bahwa kamu hrs melepaskan, krn cinta tak terbalaskan, tp kamu ttp berharap sebuah keajaiban",
                    "Tidak ada kebahagiaan dalam kelemahan. Jangan lagi berlama-lama dalam kelemahan hidup",
                    "Ketika Tuhan mengambil sesuatu dari genggamanmu, Dia tak menghukummu, Dia hanya membuka tanganmu tuk menerima yg lbh baik",
                    "jgn pernah meremehkan diri sendiri. Jika kamu tak bahagia dengan hidupmu, perbaiki apa yg salah, dan teruslah melangkah",
                    "Tiada yg lebih indah daripada kasih seorg sahabat, sahabat menaruh kasih di setiap waktu selalu ada dlm setiap kesukaran",
                    "Pribadi yg baik bukan hanya pribadi yg berlaku baik, tetapi juga yg menghindari keadaan utk diperlakukan dgn tidak baik",
                    "merelakan org yg kita cinta bahwa dia telah pergi selamanya mmg bkn hal mudah, namun mengharapkan dia ada itupun salah",
                    "Kesalahan adl pengalaman hidup, belajarlah darinya. jgn mencoba tuk menjadi sempurna. Cobalah menjadi teladan bagi sesama",
                    "Seorang ibu akan terus menyayangi anaknya walaupun anaknya telah tumbuh dewasa dan menua",
                    "Kamu takkan pernah kehilangan org yg kamu cintai jika kamu bersedia jadi sahabatnya, meski hubungan kalian telah berakhir",
                    "aku mundur darimu bkn krn aku tak cinta padamu, tapi aku butuh kepastian *mau dibawa kemana hubungan kita ini?*",
                    "jgn terus menyesali masa lalu, selama km mampu menjadikannya pelajaran, km akan jd pribadi yg lbh kuat di masa depan",
                    "Kadang kamu bertemu seseorang yg sangat berarti dlm hidupmu hanya tuk menyadari pada akhirnya kamu harus melepaskannya",
                    "Jika dia mencintaimu, dia pasti menginginkan hubungan serius dgnmu, jk dia terus mempertahankanmu namun tak serius, lupakan"
                ];
                const bijak = katanya[Math.floor(Math.random() * katanya.length)];
                andy.sendText(m.chat, bijak, m);
                break;
            case "dare":
                let kat = [
                    "Ajak orang yg tidak kamu kenal itu selfie berdua dengan mu lalu upload ke snapgram",
                    "Ambil beberapa nomor dari kontakmu secara acak dan kirim sms 'Aku hamil' sama mereka.",
                    "Ambil minuman apa saja yg ada didekat mu lalu campurkan dengan cabai dan minum!",
                    "Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang 'Aku mencintaimu'",
                    "Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu 'Ini.. adalah makanan yang paling mahal yang pernah kubeli.. Hiks'",
                    "Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
                    "Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
                    "Berdiri di tengah lapangan basket dan berteriak, 'AKU MENCINTAIMU PANGERANKU/PUTRIKU'",
                    "Beri hormat pada seseorang di kelas, lalu bilang 'Hamba siap melayani Anda, Yang Mulia.'",
                    "Berjalan sambil bertepuk tangan dan menyanyi lagu 'Selamat Ulang Tahun' dari kelas ke koridor.",
                    "Berlutut satu kaki dan bilang 'Marry me?' sama orang pertama yang masuk ke ruangan.",
                    "Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload",
                    "Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' sama cewek yang menurutmu paling cantik di kelas ini",
                    "Bilang pada seorang guru, 'Bu/Pak, baju saya terasa sempit' dengan ekspresi memelas.",
                    "Bilang pada seseorang di kelas, 'Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.'",
                    "Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang 'Buku ini isinya tidak ada yang bisa memahami'",
                    "Cabut bulu kaki mu sendiri sebanyak 3x",
                    "Chat kedua orangtuamu, katakan bahwa kamu kangen dengan mereka lengkap dengan emoticon sedih.",
                    "Coba searcing google mengenai hal-hal yang mengerikan atau menggelikan seperti trypophobia, dll.",
                    "Duduk relaks di tengah lapangan basket sambil berpura-pura itu adalah pantai untuk berjemur.",
                    "isi mulut penuh dengan air dan harus tahan hingga dua putaran. Jika tertawa dan tumpah atau terminum, maka harus ngisi ulang dan ditambah satu putaran lagi.",
                    "Jabat tangan orang pertama yang masuk ke ruangan ini dan bilang 'Selamat datang di Who Wants To Be a Millionaire!'",
                    "Kirim sms pada orangtuamu 'Hai, bro! Aku baru beli majalah Playboy edisi terbaru!'",
                    "Kirim sms pada orangtuamu, 'Ma, Pa, aku sudah tahu bahwa aku adalah anak adopsi dari Panti Asuhan. Jangan menyembunyikan hal ini lagi.'",
                    "Kirim sms pada tiga nomor acak di kontakmu dan tulis 'Aku baru saja menjadi model majalah Playboy.'",
                    "Makan 1 Sendok makan kecap manis dan kecap asin!",
                    "Makan sesuatu tapi gak pake tangan.",
                    "Marah-marah ketemen kamu yang gak dateng padahal udah janjian mau main 'truth or dare' bareng-bareng",
                    "Mecahin telur pake kepala.",
                    "Memakan makanan yang sudah dicampur-campur dan rasanya pasti aneh, namun pastikan bahwa makanan itu tidak berbahaya untuk kesehatan jangka panjang maupun jangka pendek.",
                    "Menari ala Girls' Generation untuk cowok di depan kelas, atau menari ala Super Junior untuk cewek.",
                    "Mengerek tiang bendera tanpa ada benderanya.",
                    "Menggombali orang yang ditaksir, sahabat terdekat, lawan jenis yang tidak dikenal sama sekali dan  sejenisnya.",
                    "Meniru style rambut semua temen kamu.",
                    "Menyanyikan lagu HAI TAYO di depan banyak orang sambil menari",
                    "Menyanyikan lagu Iwak Peyek dengan keras di ruang kelas.",
                    "Minjem sesuatu ke tetangga",
                    "Minta tandatangan pada seorang guru yang paling kamu benci sambil bilang 'Anda benar-benar orang yang paling saya kagumi di dunia.'",
                    "Minta uang pada seseorang (random/acak) di jalan sambil bilang 'Saya tidak punya uang untuk naik angkot.'",
                    "Minum sesuatu yang udah dibuat/disepakatin, tapi pastiin gak berbahaya, bisa kayak minum sirup yang digaremin terus ditambah kecap.",
                    "Minum tiga teguk teh atau coke (coca-cola atau sprite) yang dicampur sambal.",
                    "Ngomong ke gebetannya emoticon-Takut, ngobrol ngalurngidul apapun lah boleh ,via manapun juga bisa.",
                    "Nyanyi-nyanyi lagu favorit difilm disney diluar rumah sambil teriak-teriak.",
                    "Nyebutin 1 biru sampai 10 biru dengan cepat dan tidak boleh melakukan kesalahan. Jika salah maka harus diulang dari awal.",
                    "Pakai mahkota tiruan dari kertas buku dan bilang sama setiap orang di ruangan 'BERI PENGHORMATAN PADA YANG MULIA RAJA' sambil menunjuk setiap orang dengan penggaris.",
                    "Pake celana kebalik sampe besok paginya.",
                    "Pegang bola basket, berdiri di depan kelas, dan berteriak, 'ADA YANG TAHU MENGAPA BOLA GOLF INI SANGAT BESAR? APA PABRIKNYA SALAH CETAK?'",
                    "Peluk orang yang NGGAK kamu sukai di kelas dan bilang, 'Terimakasih banyak kamu sudah bersedia menjadi orang paling baik untukku.'",
                    "Pergi ke lapangan yg luas, lalu berlari sekencang kencangnya sambil mengatakan 'aku gila aku gila'",
                    "Petik 1 bunga lalu tancapkan bunga itu ke orang yg tidak kamu kenal (harus lawan jenis ya)",
                    "Pilih orang secara acak di jalan, lalu bilang 'You don't know you're beautiful' (ala One Direction)",
                    "Pura pura kerasukan ex: kerasukan macan dll",
                    "Suruh bersiul pas mulutnya lagi penuh dijejelin makanan.",
                    "Suruh jadi pelayan buat ngelayanin kamu sama temen-temen kamu buat makan siang.",
                    "Suruh pake kaos kaki buat dijadiin sarung tangan.",
                    "Suruh pake topi paling aneh/helm paling absurd selama 3 putaraann kedepan.",
                    "Telpon mama kamu dan bilang 'ma, aku mau nikah secepatnya'",
                    "Telpon mantan kamu dan bialng 'aku rindu kamu'",
                    "Teriak 'WOI GW JACK, DENGER NIH RAUNGAN GW, ROAAAAR!' ditempat rame",
                    "Tuker baju sama orang terdekat sampe ronde berikutnya.",
                    "Update status di BBM, Line, WA, atau apapun itu dengan kata kata yang semuanya berawalan 'T'",
                    "Upload video dia nyanyi ke youtube yang lagi nyanyiin lagu-lagu populer",
                    "Warnain kuku kaki dan tangan tapi dengan warna berbeda-beda buat seminggu"
                ];
                const dare = kat[Math.floor(Math.random() * kat.length)];
                andy.sendText(m.chat, dare, m);
                break;
            case "truth":
                let ka = [
                    "Acara tv apa yang paling memuakkan? Berikan alasannya!",
                    "Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
                    "Apa binatang patronus yang cocok untuk kamu?",
                    "Apa hal paling buruk yang pernah kamu bilang tentang temenmu?",
                    "Apa hal paling memalukan dari dirimu?",
                    "Apa hal paling memalukan dari temanmu?",
                    "Apa hal pertama yang kamu lihat saat kamu melihat orang lain (beda gender)?",
                    "Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
                    "Apa hal terbodoh yang pernah kamu lakukan?",
                    "Apa hal terbodoh yg pernah kamu lakukan ?",
                    "Apa ketakutan terbesar kamu?",
                    "Apa mimpi terburukmu?",
                    "Apa mimpi terkonyol yang pernah kamu inget?",
                    "Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
                    "Apa sifat terburukmu menurut kamu?",
                    "Apa sifat yang ingin kamu rubah dari dirimu?",
                    "Apa sifat yang ingin kamu rubah dari temanmu?",
                    "Apa yang akan kamu lakuin bila pacarmu bilang hidung atau jarimu jelek?",
                    "Apa yg kamu fikirkan sebelum kamu tidur ? ex: menghayal tentang jodoh,dll.",
                    "Apakah hal yang menurutmu paling menonjol dari dirimu?",
                    "Bagian tubuh temanmu mana yang paling kamu sukai dan ingin kamu punya?",
                    "Bagian tubuhmu mana yang paling kamu benci?",
                    "Dari semua kelas yang ada di sekolah, kelas mana yang paling ingin kamu masuki dan kelas mana yang paling ingin kamu hindari?",
                    "Deksripsikan teman terdekat mu!",
                    "Deskripsikan dirimu dalam satu kata!",
                    "Film dan lagu apa yang pernah bikin kamu nangis?",
                    "Hal apa yang kamu rahasiakan sampe, sekarang dan gak ada satu orangpun yang tau?",
                    "Hal paling romantis apa yang seseorang (beda gender) pernah lakuin atau kasih ke kamu?",
                    "Hal-hal menjijikan apa yang pernah kamu alami ?",
                    "Jika kamu lahir kembali dan harus jadi salah satu dari temanmu, siapa yang akan kamu pilih untuk jadi dia?",
                    "Jika punya kekuatan super/ super power ingin melakukan apa",
                    "Jika sebentar lagi kiamat, apa yg kamu lakukan ?",
                    "Kalo kamu disuruh operasi plastik dengan contoh wajah dari teman sekelasmu, wajah siapa yang akan kamu tiru?",
                    "Kamu pernah mencuri sesuatu gak?",
                    "Kamu takut mati? kenapa?",
                    "Kapan terakhir kali menangis dan mengapa?",
                    "kemampuan spesial kamu apa?",
                    "Kok bisa suka sama orang yang kamu sukai?",
                    "Menurutmu, apa sifat baik teman terdekatmu yang nggak dia sadari?",
                    "Orang seperti apa yang ingin kamu nikahi suatu saat nanti?",
                    "Pekerjaan paling ngenes apa yang menurutmu cocok untuk teman di sebelah kananmu?",
                    "Pengen tukeran hidup sehari dengan siapa? (teman terdekat yang kalian sama-sama tahu) dan mengapa",
                    "Pernahkah kamu diam-diam berharap hubungan seseorang dengan pacarnya putus? Siapa?",
                    "Pilih PACAR atau TEMAN ? berikan alasannya !",
                    "Quote apa yang paling kamu ingat dan kamu suka?",
                    "Rahasia apa yg belum pernah kamu katakan sampai sekarang kepada teman mu ?",
                    "Rolemodel (panutan) kamu siapa?",
                    "Siapa di antara temanmu yang kamu pikir matre?",
                    "Siapa di antara teman-temanmu yang menurutmu potongan rambutnya paling ngenes (paling nggak banget)?",
                    "Siapa diantara temen-temenmu yang paling NGGAK fotogenik dan kalo difoto lagi ketawa mukanya kaya kuda?",
                    "Siapa mantan terindah mu? dan mengapa kalian putus ?!",
                    "Siapa nama artis yang pernah kamu cium fotonya diam-diam?",
                    "Siapa nama guru cowok yang pernah kamu sukai dulu?",
                    "Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
                    "Siapa nama orang (beda gender) yang menurutmu akan asyik bila dijadikan pacar?",
                    "Siapa nama orang yang kamu benci, tapi kamu rasa orang itu suka sama kamu (nggak harus beda gender)?",
                    "Siapa nama orang yang pernah kamu ikutin diam-diam?",
                    "Siapa orang (lawan jenis) yang paling sering terlintas di pikiranmu?",
                    "Siapa orang yg paling menjengkelkan di antara teman teman mu ? alasannya!",
                    "Siapa sebenernya di antara teman-temanmu yang kamu pikir harus di make-over?",
                    "Siapa yang paling mendekati tipe pasangan idealmu di sini"
                ];
                const truth = ka[Math.floor(Math.random() * ka.length)];
                andy.sendText(m.chat, truth, m);
                break;
            case "quotes":
                {
                    const hasil = pickRandom(await fetchJson("https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json"));
                    m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`);
                }
                break;
            case "bucin":
                {
                    const hasil = pickRandom(await fetchJson("https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json"));
                    andy.sendText(m.chat, hasil, m);
                }
                break;
            //=======================================//
            //=======================================//
            //==============[ Menu Asupan ]===============//
            //=======================================//
            //=======================================//
            case "asupan":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/bocil");
                        const videoUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                video: { url: videoUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;
            case "asupanbocil":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/asupan");
                        const videoUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                video: { url: videoUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;
            case "asupancina":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/china");
                        const imageUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                image: { url: imageUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;
            case "asupangeayubi":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/geayubi");
                        const videoUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                video: { url: videoUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;
            case "asupanindo":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/indonesia");
                        const imageUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                image: { url: imageUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;

            case "asupanjepang":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/japan");
                        const imageUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                image: { url: imageUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;
            case "asupankorea":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/korea");
                        const imageUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                image: { url: imageUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
                    }
                }
                break;
            case "asupanthailand":
                {
                    emote("⏳");
                    try {
                        const response = await axios.get("https://api.nasirxml.my.id/asupan/thailand");
                        const imageUrl = response.data.result;
                        await andy.sendMessage(
                            m.chat,
                            {
                                image: { url: imageUrl },
                                caption: "Selamat Menikmati"
                            },
                            { quoted: m }
                        );
                        await emote("✅");
                    } catch (error) {
                        m.reply("Error bre");
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
            case "cekaku":
                const ganteng = ["Cakep", "Kurang cakep:v", "Jelek", "Cakep Parah"];
                const sifat = ["Pembohong", "Galak", "Suka Bantu Orang", "Baik", "Jahat:(", "Bobrok", "Suka BadMood", "Setia", "Tulus", "Beriman", "Penyayang Binatang", "Baperan"];
                const suka = ["Makan", "Tidur", "Main Game", "Sesama Jenis", "Binatang", `Seseorang Yang ${pushname} Sukai`, "Belajar", "Ibadah", "Diri Sendiri"];
                const nomernyah = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "31", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "82", "84", "84", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
                const keberanian = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "31", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "82", "84", "84", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
                const kepinteran = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "31", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "82", "84", "84", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
                const ganz = ganteng[Math.floor(Math.random() * ganteng.length)];
                const sipat = sifat[Math.floor(Math.random() * sifat.length)];
                const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)];
                const gai = suka[Math.floor(Math.random() * suka.length)];
                const berani = keberanian[Math.floor(Math.random() * keberanian.length)];
                const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)];
                var cek = `*[ CEK PRIBADI KAMU ]*
 
Nama : ${pushname}
Sifat : ${sipat}
Keberanian : ${berani}%
Ketakutan : ${numb}%
Cakep : ${ganz}
Cek Pintar : ${pinter}%
Menyukai : ${gai}
  `;

                andy.profilePictureUrl(m.chat, "image")
                    .then(res => andy.sendMessage(m.chat, { caption: cek, image: { url: res } }, { quoted: m }))
                    .catch(() => andy.sendMessage(m.chat, { caption: cek, image: { url: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCX5TOKkOk3MBt8V-f8PbmGrdLHCi4BoUOs_yuZ1pekOp8U_yWcf40t66JZ4_e_JYpRTOVCl0m8ozEpLrs9Ip2Cm7kQz4fUnUFh8Jcv8fMFfPbfbyWEEKne0S9e_U6fWEmcz0oihuJM6sP1cGFqdJZbLjaEQnGdgJvcxctqhMbNw632OKuAMBMwL86/s414/pp%20kosong%20wa%20default.jpg` } }, { quoted: m }));
                break;
            case "bagaimanakah": {
                if (!text) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Cara buat cilok`);
                const gimana = ["Gak Gimana2", "Sulit Itu Bro", "Maaf Bot Tidak Bisa Menjawab", "Coba Deh Cari Di Gugel", "Duh jawaban sulit, kapan kapan aja", "Pusing ah", "Coba tanya ai", "Gatau", "Gimana yeee"];
                const ya = gimana[Math.floor(Math.random() * gimana.length)];
                m.reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`);
            }
            case "apakah":
                {
                    if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`);
                    let apa = ["Iya", "Tidak", "Bisa Jadi", "Coba Ulangi", "Mungkin Saja", "Mungkin Tidak", "Mungkin Iya", "Ntahlah"];
                    let kah = apa[Math.floor(Math.random() * apa.length)];
                    m.reply(`*${command} ${text}*\nJawab : ${kah}`);
                }
                break;
            case "halah":
            case "hilih":
            case "huluh":
            case "heleh":
            case "holoh":
                {
                    if (!text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`);
                    ter = command[1].toLowerCase();
                    tex = m.quoted ? (m.quoted.text ? m.quoted.text : q ? q : m.text) : q ? q : m.text;
                    m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()));
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
            case "ai":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} query`);
                    await emote("⏳");
                    try {
                        let hasil = await yanzGpt(text);
                        await m.reply(hasil.choices[0].message.content);
                        await emote("✅");
                    } catch (e) {
                        try {
                            let hasil = await bk9Ai(text);
                            await m.reply(hasil.BK9);
                            await emote("✅");
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
            case "setppgc":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (/image/g.test(mime)) {
                        let media = await andy.downloadAndSaveMediaMessage(qmsg);
                        await andy.updateProfilePicture(m.chat, { url: media });
                        await fs.unlinkSync(media);
                        m.reply("Sukses mengganti foto profil grup");
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
                    m.reply(`Sukses mengganti nama grup`);
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
                    m.reply(`Sukses mengganti deskripsi grup`);
                }
                break;
            case "open":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    await andy.groupSettingUpdate(m.chat, "not_announcement");
                    m.reply("Sukses membuka grup");
                }
                break;
            case "close":
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    await andy.groupSettingUpdate(m.chat, "announcement");
                    m.reply("Sukses menutup grup");
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
                {
                    if (!isGroup) return m.reply(msg.group);
                    if (!isAdmin && !isOwner) return m.reply(msg.admin);
                    if (!isBotAdmin) return m.reply(msg.adminbot);
                    if (m.quoted || text) {
                        let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                        await andy
                            .groupParticipantsUpdate(m.chat, [target], "demote")
                            .then(res => m.reply(`${target.split("@")[0]} sekarang jadi member`))
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
                            .then(res => m.reply(`${target.split("@")[0]} sekarang jadi admin`))
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
                    if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("G A G A L\nAdmin tidak mengizinkan peserta menambahkan member");
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
                                amount1000: 62821646593620000,
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
            case "toqr":
            case "qr":
                {
                    if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`);
                    emote("⏳");
                    await andy.sendMessage(m.chat, { image: { url: "https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=" + text }, caption: "Selesai" }, { quoted: qloc2 });
                    await emote("✅");
                }
                break;
            case "tourl":
                {
                    try {
                        if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
                            emote("✅");
                            let media = await quoted.download();
                            let anu = await UguuSe(media);
                            m.reply("Url : " + anu.url);
                        } else {
                            m.reply("Send Media yg ingin di Upload!");
                        }
                    } catch (e) {
                        m.reply("Server Uploader sedang offline!");
                    }
                }
                break;
            case "tinyurl":
            case "shorturl":
            case "shortlink":
                {
                    emote("✅");
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
                    emote("✅");
                    if (!text) return m.reply(`Example: ${prefix + command} https://github.com/andyjavadams`);
                    try {
                        let anu = "https://" + text.replace(/^https?:\/\//, "");
                        await andy.sendMessage(m.chat, { image: { url: "https://image.thum.io/get/width/1900/crop/1000/fullpage/" + anu }, caption: "Done" }, { quoted: m });
                    } catch (e) {
                        m.reply("Server SS web Sedang Offline!");
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
                        andy.sendMessage(m.chat, { document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + ".zip", mimetype: "application/zip" }, { quoted: m }).catch(e => m.reply(msg.error));
                    } catch (e) {
                        m.reply("Gagal!");
                    }
                }
                break;
            case "q":
            case "quoted":
                {
                    if (!m.quoted) return m.reply("Reply Pesannya!!");
                    let wokwol = await andy.serializeM(await m.getQuotedObj());
                    if (!wokwol.quoted) return m.reply("Pesan Yang Anda Reply Tidak Mengandung Reply");
                    await wokwol.quoted.copyNForward(m.chat, true);
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
                        emote("⏳");
                        await andy.sendStimg(m.chat, media, m, { packname: teks1, author: teks2 });
                        await emote("✅");
                    } else if (/video/.test(mime)) {
                        if (qmsg.seconds > 11) return m.reply("Maksimal 10 detik!");
                        emote("⏳");
                        await andy.sendStimg(m.chat, media, m, { packname: teks1, author: teks2 });
                        await emote("✅");
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
                        if (!isPremium) return m.reply(msg.prem);
                        if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`);
                        if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`);
                        emote("⏳");
                        let atas = text.split`|`[0] ? text.split`|`[0] : "-";
                        let bawah = text.split`|`[1] ? text.split`|`[1] : "-";
                        let media = await quoted.download();
                        let mem = await UguuSe(media);
                        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`;
                        await andy.sendStimg(m.chat, smeme, m, { packname: packname, author: author });
                        await emote("✅");
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
                            emote("✅");
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
                    let webp = (await import("node-webpmux")).default;
                    let img = new webp.Image();
                    await img.load(await quoted.download());
                    await m.reply(util.format(JSON.parse(img.exif.slice(22).toString())));
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
                    await emote("⏳");
                    if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`);
                    try {
                        await andy.sendMessage(m.chat, { image: { url: "https://brat.caliphdev.com/api/brat?text=" + (text || m.quoted.text) } }, { quoted: qloc });
                        await emote("✅");
                    } catch (e) {
                        try {
                            await andy.sendMessage(m.chat, { image: { url: "https://mannoffc-x.hf.space/brat?q=" + (text || m.quoted.text) } }, { quoted: qkontak });
                            await emote("✅");
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
                    emote("⏳");
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
                    emote("✅");
                }
                break;
            case "hdr":
            case "hd":
            case "remini":
                {
                    if (!quoted) return m.reply(`Where is the picture?`);
                    emote("⏳");
                    if (!/image/.test(mime)) return m.reply(`Send/Reply Photos With Captions ${prefix + command}`);
                    const { remini } = require("./all/remini");
                    let media = await quoted.download();
                    let proses = await remini(media, "enhance");
                    andy.sendMessage(m.chat, { image: proses, caption: "Jangan lupa folow instagram @andy.jees" }, { quoted: m });
                    await emote("✅");
                }
                break;
            case "toimage":
            case "toimg":
                {
                    if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example("sambil reply sticker"));
                    emote("✅");
                    let media = await andy.downloadAndSaveMediaMessage(qmsg);
                    let ran = `${makeid}.png`;
                    await exec(`ffmpeg -i ${media} ${ran}`, err => {
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
                    emote("✅");
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
                    emote("✅");
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
                            emote("✅");
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
                            emote("✅");
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
                    emote("⏳");
                    var media = await andy.downloadAndSaveMediaMessage(qmsg);
                    await andy.sendStimg(m.chat, media, m, { packname: "© andyjavadams" });
                    await fs.unlinkSync(media);
                    await emote("✅");
                }
                break;
            case "fetch":
            case "get":
                {
                    if (!/^https?:\/\//.test(text)) return m.reply("Awali dengan http:// atau https://");
                    try {
                        const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text);
                        if (!/text|json|html|plain/.test(res.headers["content-type"])) {
                            await m.reply(text);
                        } else {
                            m.reply(util.format(res.data));
                        }
                    } catch (e) {
                        m.reply(util.format(e));
                    }
                }
                break;
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
            case "gimage":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} query`);
                    emote("⏳");
                    gis(text, async (err, result) => {
                        if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`);
                        if (result == undefined) {
                            m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`);
                        } else if (result.length > 1) {
                            let anu = pickRandom(result);
                            await andy.sendMessage(m.chat, { image: { url: anu.url }, caption: "Url : " + anu.url }, { quoted: m });
                        } else m.reply("Gagal Mencari Gambar!");
                    });
                }
                break;
            case "play":
            case "ytplay":
            case "yts":
            case "ytsearch":
            case "youtubesearch":
                {
                    if (!text) return m.reply(`Example: ${prefix + command} booyah free fire`);
                    emote("⏳");
                    try {
                        const res = await yts.search(text);
                        const hasil = pickRandom(res.all);
                        const teksnya = `*📍Title:* ${hasil.title || "Tidak tersedia"}\n*✏Description:* ${hasil.description || "Tidak tersedia"}\n*🌟Channel:* ${hasil.author?.name || "Tidak tersedia"}\n*⏳Duration:* ${hasil.seconds || "Tidak tersedia"} second (${hasil.timestamp || "Tidak tersedia"})\n*🔎Source:* ${hasil.url || "Tidak tersedia"}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
                        await andy.sendMessage(m.chat, { image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: qloc });
                        await emote("✅");
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
                        emote("⏳");
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
                    emote("✅");
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
                {
                    if (!text) return m.reply(`Contoh: ${prefix + command} url_youtube`);
                    if (!text.includes("youtu")) return m.reply("Url Tidak Mengandung Result Dari Youtube!");
                    emote("⏳");
                    let v = await saveTube3(text);
                    andy.sendMessage(m.chat, { audio: { url: v.result.link }, mimetype: "audio/mpeg", ptt: false }, { quoted: m }), await emote("✅");
                }
                break;
            case "ytmp4":
                {
                    if (!text) return m.reply(`Contoh: ${prefix + command} url_youtube`);
                    if (!text.includes("youtu")) return m.reply("Url Tidak Mengandung Result Dari Youtube!");
                    emote("⏳");
                    let v = await saveTube4(text);
                    andy.sendMessage(m.chat, { video: { url: v.result.link }, caption: "Done kak jangan lupa folow instagram @andy.jees", mimetype: "video/mp4" }, { quoted: m }), await emote("✅");
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
                    if (!text) return m.reply(`Contoh: ${prefix + command} url_tiktok`);
                    if (!text.includes("tiktok")) return m.reply("Url Tidak Mengandung Result Dari Tiktok!");
                    try {
                        const v = await saveTt4(text);
                        await andy.sendMessage(
                            m.chat,
                            {
                                video: { url: v.result.link },
                                caption: "Video TikTok berhasil diunduh",
                                mimetype: "video/mp4"
                            },
                            { quoted: m }
                        );
                    } catch (error) {
                        console.error(error);
                        m.reply("Terjadi kesalahan saat mengambil video TikTok. Pastikan URL yang diberikan valid.");
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
                        emote("⏳");
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
                            { quoted: m },
                            await emote("✅")
                        );
                    } catch (e) {
                        m.reply("Gagal/Url tidak valid!");
                    }
                }
                break;
            case "spotifydl":
                {
                    emote("⏳");
                    if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`);
                    if (!isUrl(args[0]) && !args[0].includes("open.spotify.com/track")) return m.reply("Url Invalid!");
                    try {
                        await andy.sendMedia(m.chat, "https://spotifyapi.caliphdev.com/api/download/track?url=" + text, "", "", { quoted: m });
                        await emote("✅");
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
            case "owner":
                {
                    emote("✅");
                    andy.sendContact(m.chat, [owner], "Save namain Andy Malaikat Bandung", qloc);
                }
                break;
            case "sc":
                {
                    emote("✅");
                    andy.sendText(m.chat, "https://github.com/andyjavadams/dyvsssBOT", qdoc);
                }
                break;
            case "donasi":
                {
                    emote("✅");
                    andy.sendText(m.chat, "OVO | 082164659362 | ANXX JAXXXXX", qloc);
                }
                break;
            case "gakmauah":
                {
                    emote("✅");
                    andy.sendText(m.chat, "Baiklah, aku tidak memaksa", qloc2);
                }
                break;

            default:
                if (budy.startsWith("$")) {
                    if (!isOwner) return m.reply(msg.owner);
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return andy.sendMessage(m.chat, { text: err.toString() }, { quoted: m });
                        if (stdout) return andy.sendMessage(m.chat, { text: util.format(stdout) }, { quoted: m });
                    });
                }

                if (budy.startsWith(">")) {
                    if (!isOwner) return m.reply(msg.owner);
                    try {
                        let evaled = await eval(text);
                        if (typeof evaled !== "string") evaled = util.inspect(evaled);
                        andy.sendMessage(m.chat, { text: util.format(evaled) }, { quoted: m });
                    } catch (e) {
                        andy.sendMessage(m.chat, { text: util.format(e) }, { quoted: m });
                    }
                }

                if (budy.startsWith("=>")) {
                    if (!isOwner) return m.reply(msg.owner);
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
