const loadModule = name => {
    console.log(`[BOOT] Memuat ${name}...`);
    const loaded = require(name);
    console.log(`[BOOT] ${name} siap.`);
    return loaded;
};

const {
    default: makeWASocket,
    BufferJSON,
    Browsers,
    initInMemoryKeyStore,
    extractMessageContent,
    proto,
    DisconnectReason,
    useMultiFileAuthState,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateWAMessage,
    generateForwardMessageContent,
    generateWAMessageContent, 
    generateWAMessageFromContent,
    getAggregateVotesInPollMessage,
    WAMessageStubType,
    getContentType,
    relayMessage,
    WA_DEFAULT_EPHEMERAL,
    makeCacheableSignalKeyStore
} = loadModule("@whiskeysockets/baileys")
global.getAggregateVotesInPollMessage = getAggregateVotesInPollMessage
global.makeCacheableSignalKeyStore = makeCacheableSignalKeyStore
global.makeWASocket = makeWASocket
global.BufferJSON = BufferJSON
global.Browsers = Browsers
global.speed = loadModule("performance-now")
global.sizeFormatter = loadModule("human-readable").sizeFormatter
global.initInMemoryKeyStore = initInMemoryKeyStore
global.extractMessageContent = extractMessageContent
global.proto = proto
global.DisconnectReason = DisconnectReason
global.useMultiFileAuthState = useMultiFileAuthState
global.AnyMessageContent = AnyMessageContent
global.fetchLatestBaileysVersion = fetchLatestBaileysVersion
global.prepareWAMessageMedia = prepareWAMessageMedia
global.downloadContentFromMessage = downloadContentFromMessage
global.getBinaryNodeChild = getBinaryNodeChild
global.jidDecode = jidDecode
global.areJidsSameUser = areJidsSameUser
global.generateWAMessage = generateWAMessage
global.generateForwardMessageContent = generateForwardMessageContent
global.generateWAMessageContent = generateWAMessageContent
global.generateWAMessageFromContent = generateWAMessageFromContent
global.WAMessageStubType = WAMessageStubType
global.getContentType = getContentType
global.relayMessage = relayMessage
global.WA_DEFAULT_EPHEMERAL = WA_DEFAULT_EPHEMERAL
global.chalk = loadModule("chalk")
global.fetch = loadModule("node-fetch")
global.FileType = loadModule("file-type")
global.formBuffer = loadModule("file-type").fromBuffer
global.Boom = loadModule("@hapi/boom").Boom
global.PhoneNumber = loadModule("awesome-phonenumber")
global.fs = require("fs")
global.pino = loadModule("pino")
global.axios = loadModule("axios")
global.cheerio = loadModule("cheerio")
global.ffmpeg = loadModule("fluent-ffmpeg")
global.util = require("util")
const { Jimp, JimpMime } = loadModule("jimp")
global.Jimp = Jimp
global.JimpMime = JimpMime
global.moment = loadModule("moment-timezone")
global.ms = loadModule("parse-ms")
global.os = require("os") 
global.path = require("path")
global.exec = require("child_process").exec 
global.spawn = require("child_process").spawn 
global.execSync = require("child_process").execSync
global.vm = require("node:vm")
global.webp = loadModule("node-webpmux")
global.rimraf = loadModule("rimraf")
global.async = loadModule("async")
global.request = loadModule("request")
global.MultiStream = loadModule("multistream")
global.fakeUa = loadModule("fake-useragent")
global.FormData = loadModule("form-data")
global.yts = loadModule("yt-search")
global.ytdl = loadModule("ytdl-core")
global.api = loadModule("api-dylux")