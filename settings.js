require("./all/module.js")
const ctext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var xyz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: xyz[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
//========== Setting Owner ==========//
global.owner = "6282164659362" // no owner
global.dbowner = "./all/database/owner.json"
global.dbprem = './all/database/premium.json'
global.dbusers = './all/database/users.json'
global.namaowner = "© andyjavadams" // bebas

//======== Setting Bot & Link ========//
global.namabot = "dyvsss" // bebas ubah
global.versionbot = `Beta`
global.saluran = "-" // bebas
global.linkgc = 'https://chat.whatsapp.com/JR1bfYOUzIQ7GHyIW0ojDw' // bebas
global.sret = "```" // jangan ubah
global.packname = "andyjavadams" // bebas
global.author = "dyvsss.me" // terserah

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false 

//========= Setting Url Foto =========//
global.image = "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg" 
global.makasi = "https://raw.githubusercontent.com/andyjavadams/andyjavadams.github.io/refs/heads/main/assets/imgs/image.jpg"
//========= Jangan Di Ubah =========//
global.msg = {
"error": "Sedang error",
"done": "Berhasil", 
"wait": "Tunggu beberapa saat", 
"group": "Perintah hanya untuk digrup", 
"private": "Chat pribadi aja", 
"admin": "Khusus Admin, member mana main:v", 
"adminbot": "Jadiin bot admin", 
"owner": "Kamu bukan owner, jadi ga bisa", 
"developer": "Fitur untuk developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})