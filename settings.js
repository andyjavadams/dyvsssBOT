require("./lib/module.js");
const ctext = (text, style = 1) => {
    var abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    var xyz = {
        1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890"
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
//========== Setting Owner ==========//
global.owner = "6282164659362"; // no owner
global.dbowner = "./lib/database/owner.json";
global.dbprem = "./lib/database/premium.json";
global.dbusers = "./lib/database/users.json";
global.dbstc = "./lib/database/stc.json";
global.tag = "./src/media/tag.webp";
global.namaowner = "© andyjavadams"; // bebas
global.tempatDB = "database.json";

//======== Setting Bot & Link ========//
global.namabot = "dyvsss"; // bebas ubah
global.versionbot = `Beta`;
global.saluran = "-"; // bebas
global.linkgc = "https://chat.whatsapp.com/JR1bfYOUzIQ7GHyIW0ojDw"; // bebas
global.packname = "andyjavadams"; // bebas
global.author = "dyvsss.me"; // terserah
global.docs = fs.readFileSync("./src/media/fake.pdf");
global.listfakedocs = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"];
global.cenel = "120363144038483540@newsletter";
global.github = "https://github.com/andyjavadams";
global.web = "https://dyvsss.me";
//========= Setting Url Foto =========//
global.image = "https://d.top4top.io/p_32942ilrn0.jpg";
global.logo = "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg";
//========= Jangan Di Ubah =========//
global.msg = {
    error: "Sedang error",
    done: "Berhasil",
    wait: "Tunggu beberapa saat",
    group: "Perintah hanya untuk digrup",
    private: "Chat pribadi aja",
    admin: "Khusus Admin, member mana main:v",
    adminbot: "Jadiin bot admin",
    owner: "Kamu bukan owner, jadi ga bisa",
    developer: "Fitur untuk developer"
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
