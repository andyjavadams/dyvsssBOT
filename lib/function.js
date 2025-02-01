const moment = require("moment-timezone");
const util = require("util");
const fs = require("fs");
const BodyForm = require("form-data");
const axios = require("axios");
const cheerio = require("cheerio");
const Jimp = require("jimp");
const { sizeFormatter } = require("human-readable");
exports.getRandom = ext => {
    return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.ucapan = () => {
    const currentTime = moment().tz("Asia/Jakarta");
    const currentHour = currentTime.hour();
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = "𝐏𝐚𝐠𝐢 𝐛𝐠";
    } else if (currentHour >= 12 && currentHour < 15) {
        greeting = "𝐒𝐢𝐚𝐧𝐠 𝐛𝐠";
    } else if (currentHour >= 15 && currentHour < 18) {
        greeting = "𝐒𝐨𝐫𝐞 𝐛𝐠";
    } else {
        greeting = "𝐌𝐚𝐥𝐚𝐦 𝐛𝐠";
    }
    return greeting;
};

exports.generateProfilePicture = async buffer => {
    const jimp = await Jimp.read(buffer);
    const min = jimp.getWidth();
    const max = jimp.getHeight();
    const cropped = jimp.crop(0, 0, min, max);
    return {
        img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
        preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
    };
};

exports.generateMessageTag = epoch => {
    let tag = (0, unixTimestampSeconds)().toString();
    if (epoch) tag += ".--" + epoch;
    return tag;
};

exports.getTime = (format, date) => {
    if (date) {
        return moment(date).locale("id").format(format);
    } else {
        return moment.tz("Asia/Jakarta").locale("id").format(format);
    }
};

exports.isUrl = url => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
};

exports.getGroupAdmins = participants => {
    let admins = [];
    for (let i of participants) {
        i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : "";
    }
    return admins || [];
};

exports.pickRandom = list => {
    return list[Math.floor(list.length * Math.random())];
};

exports.getSizeMedia = async path => {
    return new Promise((resolve, reject) => {
        if (typeof path === "string" && /http/.test(path)) {
            axios.get(path).then(res => {
                let length = parseInt(res.headers["content-length"]);
                if (!isNaN(length)) resolve(bytesToSize(length, 3));
            });
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path);
            if (!isNaN(length)) resolve(bytesToSize(length, 3));
        } else {
            reject(0);
        }
    });
};

exports.getBuffer = async (url, options) => {
    try {
        options ? options : {};
        const res = await axios({
            method: "get",
            url,
            headers: {
                DNT: 1,
                "Upgrade-Insecure-Request": 1
            },
            ...options,
            responseType: "arraybuffer"
        });
        return res.data;
    } catch (err) {
        return err;
    }
};

exports.sleep = async ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {};
        const res = await axios({
            method: "GET",
            url: url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            },
            ...options
        });
        return res.data;
    } catch (err) {
        return err;
    }
};
exports.formatp = sizeFormatter({
    std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`
});
exports.runtime = function (seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " 𝗱, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " 𝗵, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " 𝗺, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " 𝘀") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.tanggal = function (numer) {
    myMonths = ["𝗝𝗮𝗻", "𝗙𝗲𝗯", "𝗠𝗮𝗿", "𝗔𝗽𝗿", "May", "𝗝𝘂𝗻", "𝗝𝘂𝗹", "𝗔𝘂𝗴", "𝗦𝗲𝗽", "𝗢𝗰𝘁", "𝗡𝗼𝘃", "𝗗𝗲𝗰"];
    myDays = ["𝗦𝘂𝗻", "𝗠𝗼𝗻", "𝗧𝘂𝗲", "𝗪𝗲𝗱", "𝗧𝗵𝘂", "𝗙𝗿𝗶", "𝗦𝗮𝘁"];
    var tgl = new Date(numer);
    var day = tgl.getDate();
    bulan = tgl.getMonth();
    var thisDay = tgl.getDay(),
        thisDay = myDays[thisDay];
    var yy = tgl.getYear();
    var year = yy < 1000 ? yy + 1900 : yy;
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][Math.floor((d * 1 + gmt) / 84600000) % 5];

    return `${thisDay}, ${day}/${myMonths[bulan]}/${year}`;
};

exports.toRupiah = function (x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2");
    return x;
};

exports.telegraPh = async Path => {
    return new Promise(async (resolve, reject) => {
        if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
        try {
            const form = new BodyForm();
            form.append("file", fs.createReadStream(Path));
            const data = await axios({
                url: "https://telegra.ph/upload",
                method: "POST",
                headers: {
                    ...form.getHeaders()
                },
                data: form
            });
            return resolve("https://telegra.ph" + data.data[0].src);
        } catch (err) {
            return reject(new Error(String(err)));
        }
    });
};

async function getTypeUrlMedia(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const buffer = await axios.get(url, { responseType: "arraybuffer" });
            const type = buffer.headers["content-type"] || (await FileType.fromBuffer(buffer.data)).mime;
            resolve({ type, url });
        } catch (e) {
            reject(e);
        }
    });
}

exports.pinterest = function (t) {
    return new Promise(async (e, a) => {
        axios
            .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + t, {
                headers: {
                    cookie: '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0'
                }
            })
            .then(({ data: t }) => {
                const a = cheerio.load(t),
                    i = [],
                    c = [];
                a("div > a")
                    .get()
                    .map(t => {
                        const e = a(t).find("img").attr("src");
                        i.push(e);
                    }),
                    i.forEach(t => {
                        null != t && c.push(t.replace(/236/g, "736"));
                    }),
                    c.shift(),
                    e(c);
            });
    });
};
