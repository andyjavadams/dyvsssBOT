require("../settings");
const fs = require("fs");
const path = require("path");
const https = require("https");
const axios = require("axios");
const chalk = require("chalk");
const FileType = require("file-type");
const PhoneNumber = require("awesome-phonenumber");

const prem = require("./premium");
const { imageToWebp, videoToWebp, writeExif } = require("../lib/exif");
const premium = JSON.parse(fs.readFileSync("./database/premium.json"));
const { isUrl, getGroupAdmins, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep, getTypeUrlMedia } = require("../lib/function");
const { jidNormalizedUser, proto, getBinaryNodeChildren, getBinaryNodeChild, generateWAMessageContent, generateForwardMessageContent, prepareWAMessageMedia, delay, areJidsSameUser, extractMessageContent, generateMessageID, downloadContentFromMessage, generateWAMessageFromContent, jidDecode, generateWAMessage, toBuffer, getContentType, getDevice } = require("@whiskeysockets/baileys");

async function GroupUpdate(andy, update, store) {
    try {
        for (let n of update) {
            if (store.groupMetadata[n.id]) {
                store.groupMetadata[n.id] = {
                    ...(store.groupMetadata[n.id] || {}),
                    ...(n || {})
                };
            }
        }
    } catch (e) {
        throw e;
    }
}

async function GroupParticipantsUpdate(andy, { id, participants, author, action }, store) {
    try {
        function updateAdminStatus(participants, metadataParticipants, status) {
            for (const participant of metadataParticipants) {
                let id = jidNormalizedUser(participant.id);
                if (participants.includes(id)) {
                    participant.admin = status;
                }
            }
        }
        if (global.db.groups && global.db.groups[id] && store.groupMetadata && store.groupMetadata[id]) {
            const metadata = store.groupMetadata[id];
            for (let n of participants) {
                let profile;
                try {
                    profile = await andy.profilePictureUrl(n, "image");
                } catch {
                    profile = "https://telegra.ph/file/95670d63378f7f4210f03.png";
                }
                let messageText;
                if (action === "add") {
                    messageText = `Welcome to ${metadata.subject}\n@${n.split("@")[0]}`;
                    metadata.participants.push({ id: jidNormalizedUser(n), admin: null });
                } else if (action === "remove") {
                    messageText = `@${n.split("@")[0]}\nLeaving From ${metadata.subject}`;
                    metadata.participants = metadata.participants.filter(p => !participants.includes(jidNormalizedUser(p.id)));
                } else if (action === "promote") {
                    messageText = `@${n.split("@")[0]}\nPromote From ${metadata.subject}\nBy @${author.split("@")[0]}`;
                    updateAdminStatus(participants, metadata.participants, "admin");
                } else if (action === "demote") {
                    messageText = `@${n.split("@")[0]}\nDemote From ${metadata.subject}\nBy @${author.split("@")[0]}`;
                    updateAdminStatus(participants, metadata.participants, null);
                }
                if (messageText && global.db.groups[id].welcome) {
                    await andy.sendMessage(id, {
                        text: messageText,
                        contextInfo: {
                            mentionedJid: [n, author],
                            externalAdReply: {
                                title: action == "add" ? "Welcome" : action == "remove" ? "Leaving" : action.charAt(0).toUpperCase() + action.slice(1),
                                mediaType: 1,
                                previewType: 0,
                                thumbnailUrl: profile,
                                renderLargerThumbnail: true,
                                sourceUrl: global.my.gh
                            }
                        }
                    });
                }
            }
        }
    } catch (e) {
        throw e;
    }
}

async function LoadDataBase(andy, m) {
    try {
        const botNumber = await andy.decodeJid(andy.user.id);
        const isNumber = x => typeof x === "number" && !isNaN(x);
        const isBoolean = x => typeof x === "boolean" && Boolean(x);
        let user = global.db.users[m.sender];
        let setBot = global.db.set[botNumber];
        let limitUser = user ? (user.vip ? global.limit.vip : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free) : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free;
        let uangUser = user ? (user.vip ? global.uang.vip : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free) : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free;
        if (typeof setBot !== "object") global.db.set[botNumber] = {};
        if (setBot) {
            if (!("lang" in setBot)) setBot.lang = "id";
            if (!("limit" in setBot)) setBot.limit = 0;
            if (!("uang" in setBot)) setBot.uang = 0;
            if (!("status" in setBot)) setBot.status = 0;
            if (!("join" in setBot)) setBot.join = false;
            if (!("public" in setBot)) setBot.public = true;
            if (!("anticall" in setBot)) setBot.anticall = true;
            if (!("readsw" in setBot)) setBot.readsw = false;
            if (!("autobio" in setBot)) setBot.autobio = false;
            if (!("autoread" in setBot)) setBot.autoread = true;
            if (!("autotyping" in setBot)) setBot.autotyping = true;
            if (!("multiprefix" in setBot)) setBot.multiprefix = false;
            if (!("template" in setBot)) setBot.template = "textMessage";
        } else {
            global.db.set[botNumber] = {
                lang: "id",
                limit: 0,
                uang: 0,
                status: 0,
                join: false,
                public: true,
                anticall: true,
                readsw: false,
                autobio: false,
                autoread: true,
                autotyping: true,
                multiprefix: false,
                template: "textMessage"
            };
        }

        if (typeof user !== "object") global.db.users[m.sender] = {};
        if (user) {
            if (!("vip" in user)) user.afkReason = false;
            if (!isNumber(user.afkTime)) user.afkTime = -1;
            if (!("afkReason" in user)) user.afkReason = "";
            if (!isNumber(user.limit)) user.limit = limitUser;
            if (!("uang" in user)) user.uang = uangUser;
            if (!("lastclaim" in user)) user.lastclaim = new Date() * 1;
            if (!("lastbegal" in user)) user.lastbegal = new Date() * 1;
            if (!("lastrampok" in user)) user.lastrampok = new Date() * 1;
        } else {
            global.db.users[m.sender] = {
                vip: false,
                afkTime: -1,
                afkReason: "",
                limit: limitUser,
                uang: uangUser,
                lastclaim: new Date() * 1,
                lastbegal: new Date() * 1,
                lastrampok: new Date() * 1
            };
        }

        if (m.isGroup) {
            let group = global.db.groups[m.chat];
            if (typeof group !== "object") global.db.groups[m.chat] = {};
            if (group) {
                if (!("nsfw" in group)) group.nsfw = false;
                if (!("mute" in group)) group.mute = false;
                if (!("setinfo" in group)) group.setinfo = true;
                if (!("antilink" in group)) group.antilink = false;
                if (!("antitoxic" in group)) group.antitoxic = false;
                if (!("welcome" in group)) group.welcome = true;
                if (!("antivirtex" in group)) group.antivirtex = false;
                if (!("antidelete" in group)) group.antidelete = false;
                if (!("waktusholat" in group)) group.waktusholat = false;
            } else {
                global.db.groups[m.chat] = {
                    nsfw: false,
                    mute: false,
                    setinfo: true,
                    antilink: false,
                    antitoxic: false,
                    welcome: true,
                    antivirtex: false,
                    antidelete: false,
                    waktusholat: false
                };
            }
        }
    } catch (e) {
        throw e;
    }
}

async function MessagesUpsert(andy, message, store) {
    try {
        let botNumber = await andy.decodeJid(andy.user.id);
        const msg = message.messages[0];
        if (store.groupMetadata && Object.keys(store.groupMetadata).length === 0) store.groupMetadata = await andy.groupFetchAllParticipating();
        const type = msg.message ? getContentType(msg.message) || Object.keys(msg.message)[0] : "";
        if (!msg.key.fromMe && !msg.message && message.type === "notify") return;
        const m = await Serialize(andy, msg, store);
        require("../andy")(andy, m, message, store);
        if (type === "interactiveResponseMessage" && m.quoted && m.quoted.fromMe) {
            await andy.appendResponseMessage(m, JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id);
        }
        if (global.db.set && global.db.set[botNumber] && global.db.set[botNumber].readsw) {
            if (msg.key.remoteJid === "status@broadcast") {
                await andy.readMessages([msg.key]);
                if (/protocolMessage/i.test(type)) andy.sendFromOwner(global.owner, "Status dari @" + msg.key.participant.split("@")[0] + " Telah dihapus", msg, { mentions: [msg.key.participant] });
                if (/(audioMessage|imageMessage|videoMessage|extendedTextMessage)/i.test(type)) {
                    let keke = type == "extendedTextMessage" ? `Story Teks Berisi : ${msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ""}` : type == "imageMessage" ? `Story Gambar ${msg.message.imageMessage.caption ? "dengan Caption : " + msg.message.imageMessage.caption : ""}` : type == "videoMessage" ? `Story Video ${msg.message.videoMessage.caption ? "dengan Caption : " + msg.message.videoMessage.caption : ""}` : type == "audioMessage" ? "Story Audio" : "\nTidak diketahui cek saja langsung";
                    await andy.sendFromOwner(global.owner, `Melihat story dari @${msg.key.participant.split("@")[0]}\n${keke}`, msg, { mentions: [msg.key.participant] });
                }
            }
        }
    } catch (e) {
        throw e;
    }
}

async function Solving(andy, store) {
    andy.serializeM = m => MessagesUpsert(andy, m, store);

    andy.decodeJid = jid => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
        } else return jid;
    };

    andy.getName = (jid, withoutContact = false) => {
        const id = andy.decodeJid(jid);
        if (id.endsWith("@g.us")) {
            const groupInfo = store.contacts[id] || andy.groupMetadata(id) || {};
            return Promise.resolve(groupInfo.name || groupInfo.subject || PhoneNumber("+" + id.replace("@g.us", "")).getNumber("international"));
        } else {
            if (id === "0@s.whatsapp.net") {
                return "WhatsApp";
            }
            const contactInfo = store.contacts[id] || {};
            return withoutContact ? "" : contactInfo.name || contactInfo.subject || contactInfo.verifiedName || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international");
        }
    };

    andy.sendContact = async (jid, kon, quoted = "", opts = {}) => {
        let list = [];
        for (let i of kon) {
            list.push({
                displayName: await andy.getName(i + "@s.whatsapp.net"),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await andy.getName(i + "@s.whatsapp.net")}\nFN:${await andy.getName(i + "@s.whatsapp.net")}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.ADR:;;Indonesia;;;;\nitem2.X-ABLabel:Region\nEND:VCARD` //vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await andy.getName(i + '@s.whatsapp.net')}\nFN:${await andy.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:whatsapp@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/andy_dev\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            });
        }
        andy.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted });
    };

    andy.profilePictureUrl = async (jid, type = "image", timeoutMs) => {
        const result = await andy.query(
            {
                tag: "iq",
                attrs: {
                    target: jidNormalizedUser(jid),
                    to: "@s.whatsapp.net",
                    type: "get",
                    xmlns: "w:profile:picture"
                },
                content: [
                    {
                        tag: "picture",
                        attrs: {
                            type,
                            query: "url"
                        }
                    }
                ]
            },
            timeoutMs
        );
        const child = getBinaryNodeChild(result, "picture");
        return child?.attrs?.url;
    };

    andy.setStatus = status => {
        andy.query({
            tag: "iq",
            attrs: {
                to: "@s.whatsapp.net",
                type: "set",
                xmlns: "status"
            },
            content: [
                {
                    tag: "status",
                    attrs: {},
                    content: Buffer.from(status, "utf-8")
                }
            ]
        });
        return status;
    };

    andy.sendPoll = (jid, name = "", values = [], selectableCount = 1) => {
        return andy.sendMessage(jid, { poll: { name, values, selectableCount } });
    };

    andy.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
        async function getFileUrl(res, mime) {
            if (mime && mime.includes("gif")) {
                return andy.sendMessage(jid, { video: res.data, caption: caption, gifPlayback: true, ...options }, { quoted });
            } else if (mime && mime === "application/pdf") {
                return andy.sendMessage(jid, { document: res.data, mimetype: "application/pdf", caption: caption, ...options }, { quoted });
            } else if (mime && mime.includes("webp") && !/.jpg|.jpeg|.png/.test(url)) {
                return andy.sendAsSticker(jid, res.data, quoted, options);
            } else if (mime && mime.includes("image")) {
                return andy.sendMessage(jid, { image: res.data, caption: caption, ...options }, { quoted });
            } else if (mime && mime.includes("video")) {
                return andy.sendMessage(jid, { video: res.data, caption: caption, mimetype: "video/mp4", ...options }, { quoted });
            } else if (mime && mime.includes("audio")) {
                return andy.sendMessage(jid, { audio: res.data, mimetype: "audio/mpeg", ...options }, { quoted });
            }
        }
        const axioss = axios.create({
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });
        const res = await axioss.get(url, { responseType: "arraybuffer" });
        let mime = res.headers["content-type"];
        if (!mime || mime.includes("octet-stream")) {
            const fileType = await FileType.fromBuffer(res.data);
            mime = fileType ? fileType.mime : null;
        }
        const hasil = await getFileUrl(res, mime);
        return hasil;
    };

    andy.sendGroupInvite = async (jid, participant, inviteCode, inviteExpiration, groupName = "Unknown Subject", caption = "Invitation to join my WhatsApp group", jpegThumbnail = null, options = {}) => {
        const msg = proto.Message.fromObject({
            groupInviteMessage: {
                inviteCode,
                inviteExpiration: parseInt(inviteExpiration) || +new Date(new Date() + 3 * 86400000),
                groupJid: jid,
                groupName,
                jpegThumbnail: Buffer.isBuffer(jpegThumbnail) ? jpegThumbnail : null,
                caption
            }
        });
        const message = generateWAMessageFromContent(participant, msg, options);
        const invite = await andy.relayMessage(participant, message.message, { messageId: message.key.id });
        return invite;
    };

    andy.sendFromOwner = async (jid, text, quoted, options = {}) => {
        for (const a of jid) {
            await andy.sendMessage(a.replace(/[^0-9]/g, "") + "@s.whatsapp.net", { text, ...options }, { quoted });
        }
    };

    andy.sendTextMentions = async (jid, text, quoted, options = {}) => andy.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), ...options }, { quoted });

    andy.sendAsSticker = async (jid, path, quoted, options = {}) => {
        const buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], "base64") : /^https?:\/\//.test(path) ? await await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        const result = await writeExif(buff, options);
        return andy.sendMessage(jid, { sticker: { url: result }, ...options }, { quoted });
    };

    andy.downloadMediaMessage = async message => {
        const msg = message.msg || message;
        const mime = msg.mimetype || "";
        const messageType = (message.type || mime.split("/")[0]).replace(/Message/gi, "");
        const stream = await downloadContentFromMessage(msg, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    andy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        const buffer = await andy.downloadMediaMessage(message);
        const type = await FileType.fromBuffer(buffer);
        const trueFileName = attachExtension ? `./database/sampah/${filename ? filename : Date.now()}.${type.ext}` : filename;
        await fs.promises.writeFile(trueFileName, buffer);
        return trueFileName;
    };

    andy.getFile = async (PATH, save) => {
        let res;
        let filename;
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], "base64") : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? ((filename = PATH), fs.readFileSync(PATH)) : typeof PATH === "string" ? PATH : Buffer.alloc(0);
        let type = (await FileType.fromBuffer(data)) || { mime: "application/octet-stream", ext: ".bin" };
        filename = path.join(__dirname, "../database/sampah/" + new Date() * 1 + "." + type.ext);
        if (data && save) fs.promises.writeFile(filename, data);
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        };
    };

    andy.appendResponseMessage = async (m, text) => {
        let apb = await generateWAMessage(m.chat, { text, mentions: m.mentionedJid }, { userJid: andy.user.id, quoted: m.quoted });
        apb.key = m.key;
        apb.key.fromMe = areJidsSameUser(m.sender, andy.user.id);
        if (m.isGroup) apb.participant = m.sender;
        andy.ev.emit("messages.upsert", {
            ...m,
            messages: [proto.WebMessageInfo.fromObject(apb)],
            type: "append"
        });
    };

    andy.sendMedia = async (jid, path, fileName = "", caption = "", quoted = "", options = {}) => {
        const { mime, data, filename } = await andy.getFile(path, true);
        const isWebpSticker = options.asSticker || /webp/.test(mime);
        let type = "document",
            mimetype = mime,
            pathFile = filename;
        if (isWebpSticker) {
            pathFile = await writeExif(data, {
                packname: options.packname || global.packname,
                author: options.author || global.author,
                categories: options.categories || []
            });
            await fs.unlinkSync(filename);
            type = "sticker";
            mimetype = "image/webp";
        } else if (/image|video|audio/.test(mime)) {
            type = mime.split("/")[0];
            mimetype = type == "video" ? "video/mp4" : type == "audio" ? "audio/mpeg" : mime;
        }
        let anu = await andy.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options });
        await fs.unlinkSync(pathFile);
        return anu;
    };

    andy.sendButtonMsg = async (jid, content = {}, quoted, options = {}) => {
        const { text, caption, footer = "", title = "", contextInfo = {}, buttons = [], mentions = [], ...media } = content;
        const msg = await generateWAMessageFromContent(
            jid,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: text || caption || "" }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                                title,
                                hasMediaAttachment: Object.keys(media).length > 0,
                                ...(media && typeof media === "object" && Object.keys(media).length > 0
                                    ? await generateWAMessageContent(media, {
                                          upload: andy.waUploadToServer
                                      })
                                    : {})
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: buttons.map(a => {
                                    return {
                                        name: a.name,
                                        buttonParamsJson: JSON.stringify(a.buttonParamsJson ? (typeof a.buttonParamsJson === "string" ? JSON.parse(a.buttonParamsJson) : a.buttonParamsJson) : "")
                                    };
                                })
                            }),
                            contextInfo: {
                                ...contextInfo,
                                ...options.contextInfo,
                                forwardingScore: 10,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global.my.ch,
                                    serverMessageId: null,
                                    newsletterName: "Join For More Info"
                                },
                                mentionedJid: options.mentions || mentions,
                                ...(quoted
                                    ? {
                                          stanzaId: quoted.key.id,
                                          remoteJid: quoted.key.remoteJid,
                                          participant: quoted.key.participant || quoted.key.remoteJid,
                                          fromMe: quoted.key.fromMe,
                                          quotedMessage: quoted.message
                                      }
                                    : {})
                            }
                        })
                    }
                }
            },
            {}
        );
        const hasil = await andy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        return hasil;
    };

    andy.sendCarouselMsg = async (jid, body = "", footer = "", cards = [], options = {}) => {
        async function getImageMsg(url) {
            const { imageMessage } = await generateWAMessageContent({ image: { url } }, { upload: andy.waUploadToServer });
            return imageMessage;
        }
        const cardPromises = cards.map(async a => {
            const imageMessage = await getImageMsg(a.url);
            return {
                header: {
                    imageMessage: imageMessage,
                    hasMediaAttachment: true
                },
                body: { text: a.body },
                footer: { text: a.footer },
                nativeFlowMessage: {
                    buttons: a.buttons.map(b => ({
                        name: b.name,
                        buttonParamsJson: JSON.stringify(b.buttonParamsJson ? JSON.parse(b.buttonParamsJson) : "")
                    }))
                }
            };
        });

        const cardResults = await Promise.all(cardPromises);
        const msg = await generateWAMessageFromContent(
            jid,
            {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: body }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: footer }),
                            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.create({
                                cards: cardResults,
                                messageVersion: 1
                            })
                        })
                    }
                }
            },
            {}
        );
        const hasil = await andy.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
        return hasil;
    };

    if (andy.user && andy.user.id) {
        const botNumber = andy.decodeJid(andy.user.id);
        if (global.db.set && global.db.set[botNumber]) {
            andy.public = global.db.set[botNumber].public;
        } else andy.public = true;
    } else andy.public = true;

    return andy;
}

/*
 * Create By andy
 * Follow https://github.com/andydev
 * Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
 */

async function Serialize(andy, m, store) {
    const botNumber = andy.decodeJid(andy.user.id);
    if (!m) return m;
    if (m.key) {
        m.id = m.key.id;
        m.chat = m.key.remoteJid;
        m.fromMe = m.key.fromMe;
        m.isBot = ["HSK", "BAE", "B1E", "3EB0", "B24E", "WA"].some(a => m.id.startsWith(a) && [12, 16, 20, 22, 40].includes(m.id.length)) || false;
        m.isGroup = m.chat.endsWith("@g.us");
        m.sender = andy.decodeJid((m.fromMe && andy.user.id) || m.participant || m.key.participant || m.chat || "");
        if (m.isGroup) {
            m.metadata = store.groupMetadata[m.chat] || (await andy.groupMetadata(m.chat));
            m.admins = m.metadata.participants.reduce((a, b) => (b.admin ? a.push({ id: b.id, admin: b.admin }) : [...a]) && a, []);
            m.isAdmin = m.admins.some(b => b.id === m.sender);
            m.participant = m.key.participant;
            m.isBotAdmin = !!m.admins.find(member => member.id === botNumber);
        }
    }
    if (m.message) {
        m.type = getContentType(m.message) || Object.keys(m.message)[0];
        m.msg = /viewOnceMessage/i.test(m.type) ? m.message[m.type].message[getContentType(m.message[m.type].message)] : extractMessageContent(m.message[m.type]) || m.message[m.type];
        m.body = m.message?.conversation || m.msg?.text || m.msg?.conversation || m.msg?.caption || m.msg?.selectedButtonId || m.msg?.singleSelectReply?.selectedRowId || m.msg?.selectedId || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || m.msg?.name || "";
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
        m.text = m.msg?.text || m.msg?.caption || m.message?.conversation || m.msg?.contentText || m.msg?.selectedDisplayText || m.msg?.title || "";
        m.prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.body) ? m.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(m.body) ? m.body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : "";
        m.command = m.body && m.body.replace(m.prefix, "").trim().split(/ +/).shift();
        m.args =
            m.body
                ?.trim()
                .replace(new RegExp("^" + m.prefix?.replace(/[.*=+:\-?^${}()|[\]\\]|\s/g, "\\$&"), "i"), "")
                .replace(m.command, "")
                .split(/ +/)
                .filter(a => a) || [];
        m.device = getDevice(m.id);
        m.expiration = m.msg?.contextInfo?.expiration || 0;
        m.timestamp = (typeof m.messageTimestamp === "number" ? m.messageTimestamp : m.messageTimestamp.low ? m.messageTimestamp.low : m.messageTimestamp.high) || m.msg.timestampMs * 1000;
        m.isMedia = !!m.msg?.mimetype || !!m.msg?.thumbnailDirectPath;
        if (m.isMedia) {
            m.mime = m.msg?.mimetype;
            m.size = m.msg?.fileLength;
            m.height = m.msg?.height || "";
            m.width = m.msg?.width || "";
            if (/webp/i.test(m.mime)) {
                m.isAnimated = m.msg?.isAnimated;
            }
        }
        m.quoted = m.msg?.contextInfo?.quotedMessage || null;
        if (m.quoted) {
            m.quoted.message = extractMessageContent(m.msg?.contextInfo?.quotedMessage);
            m.quoted.type = getContentType(m.quoted.message) || Object.keys(m.quoted.message)[0];
            m.quoted.id = m.msg.contextInfo.stanzaId;
            m.quoted.device = getDevice(m.quoted.id);
            m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
            m.quoted.isBot = m.quoted.id ? ["HSK", "BAE", "B1E", "3EB0", "B24E", "WA"].some(a => m.quoted.id.startsWith(a) && [12, 16, 20, 22, 40].includes(m.quoted.id.length)) : false;
            m.quoted.sender = andy.decodeJid(m.msg.contextInfo.participant);
            m.quoted.fromMe = m.quoted.sender === andy.decodeJid(andy.user.id);
            m.quoted.text = m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || "";
            m.quoted.msg = extractMessageContent(m.quoted.message[m.quoted.type]) || m.quoted.message[m.quoted.type];
            m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
            m.quoted.body = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted?.message?.conversation || m.quoted.msg?.selectedButtonId || m.quoted.msg?.singleSelectReply?.selectedRowId || m.quoted.msg?.selectedId || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || m.quoted?.msg?.name || "";
            m.getQuotedObj = async () => {
                if (!m.quoted.id) return false;
                let q = await store.loadMessage(m.chat, m.quoted.id, andy);
                return await Serialize(andy, q, store);
            };
            m.quoted.key = {
                remoteJid: m.msg?.contextInfo?.remoteJid || m.chat,
                participant: m.quoted.sender,
                fromMe: areJidsSameUser(andy.decodeJid(m.msg?.contextInfo?.participant), andy.decodeJid(andy?.user?.id)),
                id: m.msg?.contextInfo?.stanzaId
            };
            m.quoted.isGroup = m.quoted.chat.endsWith("@g.us");
            m.quoted.mentions = m.quoted.msg?.contextInfo?.mentionedJid || [];
            m.quoted.body = m.quoted.msg?.text || m.quoted.msg?.caption || m.quoted?.message?.conversation || m.quoted.msg?.selectedButtonId || m.quoted.msg?.singleSelectReply?.selectedRowId || m.quoted.msg?.selectedId || m.quoted.msg?.contentText || m.quoted.msg?.selectedDisplayText || m.quoted.msg?.title || m.quoted?.msg?.name || "";
            m.quoted.prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(m.quoted.body) ? m.quoted.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(m.quoted.body) ? m.quoted.body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : "";
            m.quoted.command = m.quoted.body && m.quoted.body.replace(m.quoted.prefix, "").trim().split(/ +/).shift();
            m.quoted.isMedia = !!m.quoted.msg?.mimetype || !!m.quoted.msg?.thumbnailDirectPath;
            if (m.quoted.isMedia) {
                m.quoted.mime = m.quoted.msg?.mimetype;
                m.quoted.size = m.quoted.msg?.fileLength;
                m.quoted.height = m.quoted.msg?.height || "";
                m.quoted.width = m.quoted.msg?.width || "";
                if (/webp/i.test(m.quoted.mime)) {
                    m.quoted.isAnimated = m?.quoted?.msg?.isAnimated || false;
                }
            }
            m.quoted.fakeObj = proto.WebMessageInfo.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: m.quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            });
            m.quoted.download = () => andy.downloadMediaMessage(m.quoted);
            m.quoted.delete = () => {
                andy.sendMessage(m.quoted.chat, {
                    delete: {
                        remoteJid: m.quoted.chat,
                        fromMe: m.isBotAdmins ? false : true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                });
            };
        }
    }

    m.download = () => andy.downloadMediaMessage(m);

    m.copy = () => Serialize(andy, proto.WebMessageInfo.fromObject(proto.WebMessageInfo.toObject(m)));

    m.reply = async (text, options = {}) => {
        const chatId = options?.chat ? options.chat : m.chat;
        const caption = options.caption || "";
        const quoted = options?.quoted ? options.quoted : m;
        try {
            if (/^https?:\/\//.test(text)) {
                const data = await axios.get(text, { responseType: "arraybuffer" });
                const mime = data.headers["content-type"] || (await FileType.fromBuffer(data.data)).mime;
                if (/gif|image|video|audio|pdf|stream/i.test(mime)) {
                    return andy.sendMedia(chatId, data.data, "", caption, quoted, options);
                } else {
                    return andy.sendMessage(chatId, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), ...options }, { quoted });
                }
            } else {
                return andy.sendMessage(chatId, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), ...options }, { quoted });
            }
        } catch (e) {
            return andy.sendMessage(chatId, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + "@s.whatsapp.net"), ...options }, { quoted });
        }
    };

    return m;
}

module.exports = { GroupUpdate, GroupParticipantsUpdate, LoadDataBase, MessagesUpsert, Solving };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
