/*

	あ IZIN SEBELUM RE UPLOAD
	あ YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
	あ FITUR JUALAN TELAH DI HAPUS [ Bisa order klo mau ]
	
	あ JASA RUN HEROKU BISA PC wa.me/62887435047326 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { downloadig, igstory } = require("./lib/instadl.js");
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
var nomor_ovo = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `0887435047326\nA.N R*****DI` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://h.top4top.io/p_2053vk0uw1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://j.top4top.io/p_20532posd1.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'https://i.top4top.io/p_2053em3vh1.jpg' //gk usah di ubah ya klo gk punya ntr eror

var _minggu = 'Rp 10.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 15.000,00'
var ___minggu = 'Rp 20.000,00'
var _bulan = 'Rp 22.000,00'
var _permanen = 'Rp 100.000,00'
var __permanen = 'Rp 150.000,00'

zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "50"
gcounttprem = "55" 
gcounttuser = "100" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = false
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = false
offline = false
readGc = true 
readPc = false 
antitrol = false 
bugc = false
autovn = true
autoketik = false
autoregister = setting.user_register

img = setting.img
baper = 'SUB YT ZEEONE OFC'
apiku = 'https://youtu.be/2rWbjrDIAyA'
gc_wa_lu = 'https://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const runtime = process.uptime() 
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` ]
		const isCreator = alphaNumber.includes(sender)
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + jam + ":" + menit + ":" + detik + " Wib";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function _0x5119(_0x5301ed,_0x4bdeff){const _0x4d484a=_0x4d48();return _0x5119=function(_0x5119ed,_0x514696){_0x5119ed=_0x5119ed-0x125;let _0x41233c=_0x4d484a[_0x5119ed];return _0x41233c;},_0x5119(_0x5301ed,_0x4bdeff);}function _0x4d48(){const _0x1136ef=['setStatus','4495827nZGfsy','padStart','floor','168TLrYoW','2504iOUJqx','4149wwROTc','I\x27m\x20Userbot\x20🤖\x20|\x20Runtime\x20','188nwguEu','1013965jKmium','\x20⏰\x20|\x20','4692908hxoDzf','map','2862520HmlZjX','uptime','9732cHnqXp','12oPpLUp','5517JzEqTI','toString'];_0x4d48=function(){return _0x1136ef;};return _0x4d48();}const _0x6d8bb3=_0x5119;(function(_0x4099c9,_0x45c9a3){const _0x65668d=_0x5119,_0x54f7ea=_0x4099c9();while(!![]){try{const _0x3b845d=-parseInt(_0x65668d(0x12d))/0x1*(parseInt(_0x65668d(0x12b))/0x2)+-parseInt(_0x65668d(0x136))/0x3*(-parseInt(_0x65668d(0x12f))/0x4)+parseInt(_0x65668d(0x130))/0x5*(-parseInt(_0x65668d(0x137))/0x6)+parseInt(_0x65668d(0x128))/0x7+-parseInt(_0x65668d(0x12c))/0x8*(-parseInt(_0x65668d(0x125))/0x9)+-parseInt(_0x65668d(0x134))/0xa+parseInt(_0x65668d(0x132))/0xb;if(_0x3b845d===_0x45c9a3)break;else _0x54f7ea['push'](_0x54f7ea['shift']());}catch(_0x43b3a5){_0x54f7ea['push'](_0x54f7ea['shift']());}}}(_0x4d48,0x5b088));function clockString(_0x34132c){const _0x2407a4=_0x5119;let _0x1d952b=isNaN(_0x34132c)?'--':Math['floor'](_0x34132c/0x36ee80),_0x1671d4=isNaN(_0x34132c)?'--':Math[_0x2407a4(0x12a)](_0x34132c/0xea60)%0x3c,_0x12ec2e=isNaN(_0x34132c)?'--':Math[_0x2407a4(0x12a)](_0x34132c/0x3e8)%0x3c;return[_0x1d952b,_0x1671d4,_0x12ec2e][_0x2407a4(0x133)](_0x5913d3=>_0x5913d3[_0x2407a4(0x126)]()[_0x2407a4(0x129)](0x2,0x0))['join'](':');}if(autobio){if(autobio===![])return;let settingstatus=0x0;if(new Date()*0x1-settingstatus>0x3e8){let _uptime=process[_0x6d8bb3(0x135)]()*0x3e8,uptimer=clockString(_uptime);await alpha[_0x6d8bb3(0x127)](_0x6d8bb3(0x12e)+uptimer+_0x6d8bb3(0x131)+status)['catch'](_0x731e31=>_0x731e31),settingstatus=new Date()*0x1;}}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} ??🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isRegister && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n📛 *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `@${ment.split('@')[0]} sedang AFK\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {contextInfo:{mentionedJid: [ment]}})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari AFK\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete family[sender.split('@')[0]]
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply('Don`t Spam, 5 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply('Don`t Spam, 5 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
			}	
            //await alpha.updatePresence(from, Presence.recording)
            //await alpha.updatePresence(from, Presence.composing)
        if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
		switch (command) {
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍🎓 Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                break
	case 'menu': case 'help':
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`𝙃𝙚𝙡𝙡𝙤 𝙄'𝙢 𝙪𝙨𝙚𝙧𝙗𝙤𝙩 👋

			『 *BOT INFO*  』

*🔖 Creator :  @${koko.split('@')[0]}*
*🔖 Powered  : @${ini_mark.split('@')[0]}*
*🔖 Mode : ${status}*
*🔖 Status : ${offline ? 'OFFLINE' : 'ONLINE'}*
*🔖 Prefix : [  ${prefix}  ]*
*🔖 Group Chat : ${giid.length}*
*🔖 Private Chat : ${totalchat.length - giid.length}*
*🔖 Total Chat : ${totalchat.length}*
*🔖 Lib  : Baileys*
*🔖 Type  : NodeJs*
*🔖 Total hit : ${hitall}*
*🔖 Hit today : ${hit_today.length}*
*🔖 Speed : ${latensii.toFixed(4)} Second*
*🔖 Runtime : ${kyun(anunya)}*
*🔖 Battery : ${isBattre}*
*🔖 Charging : ${isCharge}*

			『 *YOUR INFO* 』

*〽️ Name : ${pushname}*
*〽️ Bio : ${p1 ? `${p1.status}` : '-'}*
*〽️ Nomor : @${sender.split('@')[0]}*
*〽️ Me : ${mek.key.fromMe ? 'True' : 'False'}*
*〽️ Owner : ${isOwner ? 'True' : `False`}*
`
if(menusimple == false){
sendButDoc(from, ini_anu, `𝐏𝐥𝐞𝐚𝐬𝐞 𝐝𝐨𝐧'𝐭 𝐬𝐩𝐚𝐦 𝐛𝐨𝐭, 𝐩𝐚𝐮𝐬𝐞 𝟓 𝐬𝐞𝐜𝐨𝐧𝐝𝐬 𝐩𝐞𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝.\n𝐓𝐡𝐚𝐧𝐤𝐬!`, sender, koko, ini_mark)
} else if(menusimple = true){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'ownerku', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'statiktiknya', buttonText:{displayText: '✓ STATISTIC'}, type: 1},
  {buttonId: 'Command', buttonText: {displayText: '❍ LIST MESSAGE'}, type: 1}
]

const btn1 = {
    contentText: allmenu(prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}

break
case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
 if ((args[0]) == 'ori'){
menusimple = false
reply(`_Succses mengganti menu ke menu ori_`)
} else if((args[0]) == 'simple'){
menusimple = true
Mloc = false
reply(`_Succses mengganti menu ke menu simple_`)
} else {
reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
}
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										},{
										"buttonId": 'Command',
										"buttonText": {
											"displayText": "LIST MESSAGE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, allmenu(prefix, wita, wit, ucapannya2 , timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papao, {})
                break
        case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await alpha.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
              break       
				
		case 'gay':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
         
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					case 'jadian':
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					fakegroup('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakegroup('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.otNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup my', text, { quoted: fdoc })
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
				  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nTotal group: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Name grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Cretae : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Members : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus(lang.successBc())
					}
					break
         case 'owner':
         case 'creator':  
         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case 'sticktag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case 'totag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'fitnah':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
		    case 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'anime':
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break
case 'setexif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    const namaPack = q.substring(0, q.indexOf('|') - 1)
                    const authorPack = q.substring(q.lastIndexOf('|') + 2)
                    fs.unlinkSync('./sticker/data.exif')
                    sleep(2000)
                    addMetadata(namaPack, authorPack)
                    fakestatus(`Success ubah wm sticker`)
                    break    
		    case 'take':
		    case 'colong':
		    		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					break
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
		case 'revoke':
if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	case 'hidetag':
		     case '_`':
		if (!mek.key.fromMe && !isGroupAdmins && !isOwner && !isCreator) return reply(lang.onlyOwner())
		     if (!isGroup) return fakegroup(lang.onlygc())
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return fakegroup(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return fakegroup(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': 
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment':
				let paykenekk = await getBuffer('https://telegra.ph/file/3c58eb6b1fda6c22c8668.jpg')
							sendButLocation(from, allpayment() , `Nih payment nya kak 🪀 ${enter}${enter}${botname}™© | By ${ownername}`,paykenekk,  [{"buttonId": `owner`,"buttonText": {"displayText": "OWNER"},"type": "RESPONSE"}], {})
							break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa(_minggu, __minggu, ___minggu, _bulan, _permanen, __permanen) , `Jangan klik doang harus sewa beneran 😎 ${enter}${enter}${botname}™© | By ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'donasi': case 'donate':
							let donas = await getBuffer('https://telegra.ph/file/2203a91ba6216de345c3d.jpg')
							sendButLocation(from, donasibot() , `Jangan klik doang, donasi ya 🌝 ${enter}${enter}${botname}™© | By ${ownername}`,donas,  [{"buttonId": `qr_gopay1`,"buttonText": {"displayText": "QR GOPAY"},"type": "RESPONSE"},{"buttonId": `qr_dana1`,"buttonText": {"displayText": "QR DANA"},"type": "RESPONSE"},{"buttonId": `qr_ovo1`,"buttonText": {"displayText": "QR OVO"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							sendButLocation(from, gcbotwa() , `Jangan klik doang, join napa 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `${enter}${enter}${botname} 〽️ | By ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {})
							break
			case 'play2':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                       await sendMediaURL(from, thumb, captions)
		                        sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		
		               case 'sticker':
					case 'stiker': case 's':
					
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply('emror bang')
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    break
		    case 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa Support YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case 'ytsearch': case 'yts':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐤 Link: ' + video.url + '\n'
		            ytresult += '🦊 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐺 Views: ' + video.views + '\n'
		            ytresult += '🦡 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'set_stc_menu':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case 'set_stc_ping':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case 'set_stc_music':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case 'set_stc_gclose':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case 'set_stc_gopen':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case 'set_stc_itos':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case 'set_stc_to_image':
			case 'set_stc_toimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case 'set_stc_self':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case 'set_stc_public':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            res = await gis(gimg, google)
		            function google(error, result){
              if (error){ return reply('Not found')}
              else {
					n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,images,image,{quoted:mek})
		            }}
		            break
		    
		    case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					break
		
      
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'igstalk':
		       if (!q) return fakegroup('Usernamenya?')
		var halzmal = q
		            const tod = await fetchJson(`https://ferdiz-afk.my.id/api/stalkig?username=${halzmal}`);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
alpha.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
break    
		    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(lang.erorLink())
            reply(lang.wait())
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ALPHABOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
break
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					fakegroup(pingnya)
					})
					break
               
		    case 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case 'tourl':
		case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
                    var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading image...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					reply(teks)
                    .catch((e)=>{reply(`\`\`\`[ x ]\`\`\`Eror! ada masalah dgn imgbb`)})
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
		            
		           break
/*
]=====> NSFW MENU<=====[
*/

			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0].toLowerCase() === 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0].toLowerCase() === 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (!isGroupAdmins && !isBotGroupAdmins) return reply("Khusus admin");
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup(lang.success())
					break
            case 'leave':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Byeee 👋```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             break
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					fakegroup(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					fakegroup(lang.successBc())
					}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(lang.wait())
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[ EXEC ]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
              case 'smeme': 
					arg = args.join(' ');
					top = arg.split('|')[0]
					bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
					let dger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owigi = await  alpha.downloadAndSaveMediaMessage(dger)
					oanu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owigi)
					oteks = `${oanu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					var anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${oteks}`
					var smeme = await getBuffer(anu2)
					alpha.sendMessage(from, smeme, image, {thumbnail: Buffer.alloc(0)})
					} else {
					reply('Gunakan foto!')
					}
					break
			case 'demoteall':
			if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						alpha.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						alpha.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						alpha.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						alpha.groupDemoteAdmin(from, mentioned)
					}
					break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
// photooxy
//2 text
case 'captain_as':
case 'smoke':
case 'tiktok2': 
case 'arcade':
case 'battlefield':
case 'pubg':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let photooxy = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break                
          
// 1 text
case 'shadow':
case 'cname':
case 'romantic':
case 'burnpaper':
case 'funnycup':
case 'love':
case 'undergrass':          
case 'heart':
case 'coffeecup':
case 'wood':          
case 'flower':         
case 'wooden': 
case '3dsummer':
case 'wolf_metal':
case '3dnature':
case 'underwater':          
case 'goldenrose':
case 'vector':
case 'typography':
case 'typography2': 
case 'underfall':  
case 'smokyneon': 
case 'rainbow': 
case 'graffiti':
case 'camouflage':
case '3dglowing':          
case 'vintage':
case 'honey': 
case 'whitecube':
case 'avatar': 
case 'glowrainbow':
case 'nightsky':
case 'fur':
case 'flaming':          
case 'crisp':
case 'embroidery':
case 'bcake':          
case '3dligth':
case 'metallic': 
case 'striking':
case 'watermelon':         
case 'butterfly':
case 'harry':
case 'glowneon':
case 'coffecup2':          
case 'luxury': 
case 'cemetery':
case 'woodblock':
case 'sweet':
case 'simple':
case 'bevel':
case 'underflower':         
case 'underflower2':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let photooxy2 = await getBuffer(`${alphaapi}/photooxy/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,photooxy2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break         

//TEXT PRO
//2 TEXT
case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'coolg':
case 'coolwg':
case 'realistic':
case 'space3d':
case 'gtiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case 'pornhub':
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break 
//1 TEXT  
case 'blackpink':
case 'rainbow2':
case 'water_pipe':
case 'halloween':
case 'sketch':
case 'sircuit':
case 'discovery':
case 'metallic2':
case 'fiction':
case 'demon':
case 'transformer':
case 'berry':
case 'thunder':
case 'magma':
case '3dstone':
case 'neon':
case 'glitch':
case 'harry_potter':
case 'embossed':
case 'broken':
case 'papercut':
case 'gradient':
case 'glossy':
case 'watercolor':
case 'multicolor':
case 'neon_devil':
case 'underwater':
case 'bear':
case 'wonderfulg':
case 'christmas':
case 'neon_light':
case 'snow':
case 'cloudsky':
case 'luxury2':
case 'gradient2':
case 'summer':
case 'writing':
case 'engraved':
case 'summery':
case '3dglue':
case 'metaldark':
case 'neonlight':
case 'oscar':
case 'minion':
case 'holographic':
case 'purple':
case 'glossyb':
case 'deluxe2':
case 'glossyc':
case 'fabric':
case 'neonc':
case 'newyear':
case 'newyear2':
case 'metals':
case 'xmas':
case 'blood':
case 'darkg':
case 'joker':
case 'wicker':
case 'natural':
case 'firework':
case 'skeleton':
case 'balloon':
case 'balloon2':
case 'balloon3':
case 'balloon4':
case 'balloon5':
case 'balloon6':
case 'balloon7':
case 'steel':
case 'gloss':
case 'denim':
case 'decorate':
case 'decorate2':
case 'peridot':
case 'rock':
case 'glass':
case 'glass2':
case 'glass3':
case 'glass4':
case 'glass5':
case 'glass6':
case 'glass7':
case 'glass8':
case 'captain_as2':
case 'robot':
case 'equalizer':
case 'toxic':
case 'sparkling':
case 'sparkling2':
case 'sparkling3':
case 'sparkling4':
case 'sparkling5':
case 'sparkling6':
case 'sparkling7':
case 'decorative':
case 'chocolate':
case 'strawberry':
case 'koifish':
case 'bread':
case 'matrix':
case 'blood2':
case 'neonligth2':
case 'thunder2':
case '3dbox':
case 'neon2':
case 'roadw':
case 'bokeh':
case 'gneon':
case 'advanced':
case 'dropwater':
case 'wall':
case 'chrismast':
case 'honey':
case 'drug':
case 'marble':
case 'marble2':
case 'ice':
case 'juice':
case 'rusty':
case 'abstra':
case 'biscuit':
case 'wood':
case 'scifi':
case 'metalr':
case 'purpleg':
case 'shiny': 
case 'jewelry':
case 'jewelry2':
case 'jewelry3':
case 'jewelry4':
case 'jewelry5':
case 'jewelry6':
case 'jewelry7':
case 'jewelry8':
case 'metalh':
case 'golden':
case 'glitter':
case 'glitter2':
case 'glitter3':
case 'glitter4':
case 'glitter5':
case 'glitter6':
case 'glitter7':
case 'metale':
case 'carbon':
case 'candy':
case 'metalb':
case 'gemb':
case '3dchrome':
case 'metalb2':
case 'metalg':
if (args.length < 1) return reply(lang.noteks(prefix, command))
let textpro2 = await getBuffer(`${alphaapi}/textpro/${command}?apikey=${alphakey}&text=${q}`)
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `${botname}™© | By ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
break  
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: ftroli, caption : '.sticker'})
                    break
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
             case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await alpha.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    break;
        case 'nulis2':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var no = bodi.split("&")[2];
var aksarane = bodi.split("&")[3];
reply('membuat bos...')
                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 alpha.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });

                 break;
              /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             break
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            break
    case 'delvote':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.suksesDelVot())
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(!isGroup) return reply(lang.onlygc())
            if (isVote) return reply(lang.adaVoting())
            if(!q) return reply(lang.caraVoting())
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply(lang.caraVot(prefix, command))
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
		case 'jadibot':
			//    if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.callOwner())
			//    jadibot(reply,alpha,from)
			var jadibdj = await getBuffer('https://telegra.ph/file/18be96b6415ea8833dbe5.jpg')
							sendButLocation(from, jadibut() , `Jangan klik doang 〽️ ${enter}${enter}${botname}™© | By ${ownername}`,jadibdj,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
			    break
		case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(lang.onlygc())
              // if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.suksesDelTtt())
}
               break
        case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.noSesiTtt())
}
} else if (args[0] === 'vote') {
if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.sukseDelVot())
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
break
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
break
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        break
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					break
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 break
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    break
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `\n*@${sender.split('@')[0]}* is now AFK\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : ftroli,contextInfo: {mentionedJid: [sender]}})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'antihidetag':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antihidetag === true) return reply(lang.anjawaUdhOn(command))
antihidetag = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antihidetag === false) return
antihidetag = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI HIDETAG`, `Choose one`, [
            {
              buttonId: 'antihidetag on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antihidetag off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(lang.wait())
     let ppk = await alpha.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await alpha.downloadAndSaveMediaMessage(bioij, `./media/${sender}.png`)
    let  datau = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", delib)
     anuk = `${datau.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: thumbnya})
     } else {
     	reply(lang.wait())
		ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await alpha.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: medianya})
     } 
     break
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					break
					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${ApiZeks}/api/tebakgambar?apikey=${zeksApikey}`)
                    resu = anu.result
                    tebak = resu.soal
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/caklontong?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    break
				case 'family100':
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/family100?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    }
                    break
				case 'tebakanime':
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break
            case 'suit': 
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
				default:
				if (budy.includes("Ownerbot",'ownerbot')){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
} 
if (subscribezeeoneofc == 'statiktiknya') {
anuui = process.uptime()
const timestampnya = speed();
					const latensinya = speed() - timestampnya
teks = `\`\`\`「 STATISTIK BOT 」\`\`\`

${petik}々 Base : SELF-BOT${petik}
${petik}々 Lib : Baileys, 3.5.2${petik}
${petik}々 Prefix : ${prefix}${petik}
${petik}々 Versi Bot : v0.0.7${petik}

${petik}々 Merk HP : ${device_manufacturer}${petik}
${petik}々 Versi OS : ${os_version}${petik}
${petik}々 Versi HP : ${device_model}${petik}
${petik}々 MCC : ${mcc}${petik}
${petik}々 MNC : ${mnc}${petik}
${petik}々 Baterai : ${isBattre}${petik}
${petik}々 Charger : ${isCharge}${petik}
${petik}々 Whatsapp : ${wa_version}${petik}
${petik}々 Blockir : ${banned.length} Blocked${petik}
${petik}々 Group Chat : ${totalgroup.length} Chat${petik}
${petik}々 Personal Chat : ${totalkontak.length} Chat${petik}
${petik}々 Total Chat : ${totalchat.length} Chat${petik}
${petik}々 Speed : ${latensinya.toFixed(4)} Second${petik}
${petik}々 Runtime : ${kyun(anuui)}${petik}`
fakeitem(teks)
}
if (subscribezeeoneofc == "ownerku"){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 
			         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewa_kak', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
} 
if(subscribezeeoneofc == 'qr_gopay1'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	send_qr_gopay(gambar_gopay_nya, mek)
}    
if(subscribezeeoneofc == 'qr_dana1'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	send_qr_dana(gambar_dana_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo1'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	send_qr_ovo(gambar_ovo_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo13'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana13'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay13'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    

if(subscribezeeoneofc == 'qr_ovo14'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana14'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay14'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}

if(subscribezeeoneofc == 'qr_ovo15'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana15'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay15'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}


if(subscribezeeoneofc == 'qr_ovo16'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana16'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay16'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if(subscribezeeoneofc == 'qr_ovo17'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana17'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay17'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_ 
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
if(subscribezeeoneofc == 'qr_ovo18'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana18'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay18'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}   
if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./sticker/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if(budy.includes("@verif", "@verify","daftar")){
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	function _0x3e27(){const _0x252d52=['whnLAMW','AweGzgfYAsaQ','cGOQu2LZysbpCG','ie5HBweGDgvTCa','oI8VD3D3lMzHBG','nJq2otm4D2nir1DO','kLnPC2eGAwTHBG','C2vUze1LC3nHzW','BgLTAxqGDw50Dq','tMPnq1u','twvUDw5Nz3uGAa','v2vhzMy','BMvIyw5N','ze93wK0','y2vPBa','B3bZtM0','EMTvBxO','uK5eEMK','DdOQia','BIbSzwjPAcbIyq','CeDryKu','kIbPA2fU','ze9evwe','AxmGC2LSywHRyq','igTHExu','nMy1n2e0zJzKoq','BgfUzaRWN5+JieDLCG','y29YyMLLBNmGCG','DhvUz2D1lI4U','ANvHBgLUz290','DgTHBIbF','BMvYyxrVCNmUyW','AwvUCYbhCMfZCW','nffXwvLhtq','AwXLl2vMzgnKnW','C2LSywHRyw4GDa','AMvSywPHAa','otiWA2fS','s2fTDsbTzw5Kyq','y3vfDNO','ywT0AwzRyw4','ihn0B25LigTHBq','yw1Iyw5NlcbZAq','rgDhENi','yw1LihvUDhvRia','cVcFKkWGkKzju0GQia','yw1HidiGBwvUAq','y2zMyZiUANbN','yw5NigrPzgfWyq','kIbZzwXHBweGmG','BxnOEgS','ANvHBhn0B25L','kIbJB3bWzxiGBW','AM9PBG','BMrH','CufLvfm','BgvUz3rO','DuHmCuO','BMvWDhvUDxm','qu4GqKvsseftsq','A3vWlcbTAw5PBq','AwXLl2vHyMzJoq','kIbIyxr1igrHBG','vhrowMK','DxaSig1PBMLTyq','ANvHBgjHAgfUAW','BMCGC2vIzxnHCG','CNrWsNa','ig9YzsbRyw11ia','z2LYAw0G','idiGB3jL','cVcFM5eGkLnut05fkG','rYeH','BwvUzgfWyxrRyq','yw4GBM9TzxiGCa','s1jqDwG','DxbPihvUDhvRia','kLbjteLiifDjta','z290igrPANvHBa','BMTPBwLHoIOG','AYbWDw55ysbJBW','Aw1Pyq','txKGsw52zw50BW','igXPBwL0','vwfUzYbTDsb0Aq','kKnVBMDYyxr1Ba','ysbVD25LCIbRyq','u2vKyw5NigjLCG','kIbjA2fUihnLBa','tcaG44cnkG','ywi3n2e2y2vHoa','yw4GzgLQDwfSoG','twf1ihrHCNvOyq','v3fXu0O','yNv0Dg9Uswq','AgfZAwWGzgvUzW','cGPtAwXHAgTHBG','otzMywiYy2nInG','yLHpteK','AwXLlZC3yZnIyq','yxrPB24G8j+oIIO','B20VxW','CxvVDgvK','igjLBhvTigrPia','kIbJB2fSicWGza','EMfRzLC','vuDbA3u','ztOQia','s2fTDsbRywXHAa','y2HPBhrHD2eGDW','Ag1wwMW','BNDIvum','BIbIzxjHCge','Cgf0oIOG','AxzLCG','4OsIWQKGFcbcEsa','AYbWDw55ysbIyq','u2vHcUkAQYbnB29I','yMP3A3q','D2fTsve','twfHzIa','kLnPC2eGDwfUzW','ywWGmIbPBMDVDa','kIbRyxL1','kLnPC2eGyMfOyq','Dw5cwxG','uhjVC2vZigjLCG','Aw5NihnLBgfTyq','zxLZrKi','CgzLsxG','uwzzA00','z2D1lI4U','yxHvwK8','kLvHBMCGzgLKyq','Bwv0Ag9K','C2LZywjHAgfUAW','BKjwwKO','CMfUzg9T','ndGXmZy4EeTPyMfs','yw0GyM90ig1LBG','ywWGzgLQDwfSoG','B3vUDgfPBGOkrq','AgfUA2LTAweGza','z2v0','AwXLlZe5yteWzG','igv2zw50ig1PBG','yMLSifDVB2rZcG','kKP1BwXHAcbcyq','su5hsu4Gs0fnvq','s3vTChvSA2fUia','DxjHBNvZ','C2XPy2u','oweZmgyUANbN','r0PqywC','yw5NA2fUignHCW','kKP1BwXHAcbIyq','ie1VDw50ywLUCW','AgfUA2LTAweGwq','ter0B0q','CMjPzw5ZihjPDG','vvvxEvG','mtaXmJLMzg9iyKG','kIbVCMu','igTHBxuGBwvUza','nJK1ytGUANbN','z29WBgfUzxq','A2fTDsbTzw5Kyq','s2fTDsbTzw1LBG','ie9srsOGoIa','A2fYzw5HigfUza','mdDJzMm0ndCZoa','BuLyvLe','ywXSB2m','tLzftLrpuLKQia','xYbHzgfSywG6kG','cVcFLlqGq2HHzguGtq','Cgf0A2fUicO','y2i1zMeUANbN','yNv0Dg9Uvgv4Da','y29JAgHLCIbZzq','EKHPu2i','DhuGzgLQDwfSoG','yw5JAw5NlcbZAq','B3j5igfUzgeGza','sM9Ky0y','r05Ls3e','idiGBwvUAxqSia','kKP1BwXHAcbPAW','yMvSDw0Gy3vRDq','8j+xG++4JYakcVcFJQiGkKnpqq','oIOG','igjHDhu','ngjLotG2nwmWzG','CIbWzw1IyxLHCG','Ahr0Chm6lY90zq','ANvHBgnVywW','kLnPC2eGs2f5Dq','yw4GzdG4mJG4yG','kMTHExuGC2vSyq','ihn1zgfOigHHyG','Bw9VyMLLBNmGzW','CNKG8j+xG++4JW','Cgv0DwfSyw5Nla','txvHihrHCNvOyq','CMfZC2XHBMq','nMiWyZaUANbN','idOQia','zMXVB3i','AwXHAgTHBIb0Dq','ANvHBgLRyw4','DhLWzq','yMvYAgfZAwWGza','D0vACwW','AsbHA3rPzMTHBG','D0Tevwq','Aw52','kLnPC2eGy29HBa','ndK0odyYruLoBfDx','BgvNCMeUCgGVzG','AwXLlZbJm2zHoa','BMfTyMfUzW','igLRyw4GA2fTDq','tgLTAxqGA2fTDq','uKvtue9ou0u','ugvUANvHBgfUia','z2vYyMLSihDVBW','s2fTDsblquXbsa','q2vRigLUDMvUDa','Aw5VihnLyMvZyq','BIbRAxjPBsa','ihnPBgfOA2fUia','BwLUAw5N','igTHBxuGDgLKyq','mJy3ztqUANbN','yxbHDgTHBIaQ','kUoaJcbmrujvuIbc','D2TxBgK','AgfUA2LTAwe','iePftefkquHjkG','cVcFL4pVUi8GkLvtrviGsq','qK1OCva','Aw5NihrPzgfRia','z01trxy','whaGDw50DwSGyq','rvjiqvnjtcdJGi0Q','yxrPB24G8j+oIIOG','BIbIzxjHCge/','C2f0DxjUDxm','zgfRig1LBMn1AW','u3DWqMe','ywWGmIbZDg9Uzq','cGOk4PQQienVCMjP','BwvSywT1A2fUia','zw1IyxLHCMfUia','AwP1ywW6kIa','y2HHzguGBw91BG','mJC2otL1ywnttvy','igjLCM1HAw4GzW','DsbIzwX1BsbJDq','ihrHAhvU','ndu2mJiYBLb4EK10','zdG4mJG4yMfRmq','AYbTzw5NzwnLAW','yxqGif9ODhrWCW','ANvKAq','odrkrgDesui','BcbTB3vUDgfPBG','igTLDgLRia','AMvSywPHAcbJBW','zgLZCgXHEvrLEa','cGOQsNvTBgfOia','mZC5nJa1AwPStK9I','v2PPvvG','EweGBwfHCcbHAG','Bg9XA0O','BwfHzIa','mtuYm2uUANbN','ywr2zw50DxjL','BwfYCW','CMuGzgfUia','Dg9YEq','yLvTsfm','Dw5Nz3uUlI4','u2vKyw5Nie1LBq','s2fTDsbnru5btG','D2vNu1m','zw5Nyw4GBM9TBW','DwiGyMvSDw0Gza','rxzLBNqGz3j1yG','AwXLlZq0zMm2oa','DwfUzYb1BNr1AW','AwXHBMDHBIb1yq','tuHkte0','B0nqCxG','kUoaJcbqru5kvufm','idOG','ANvHBgTHExu','ifDVB2rZcVcFN6aGta','u2vKyw5Nig1LBG','qvLbscbzqu5hia','kIbIyxr1icWGkG','BwfUy2LUzW','BwKGzgfYAsb0zq','wvHwA0O','y2fZAw5V','AfrmuLO','BgfOA2fUihr1BG','AwXLlZaWmde4za','ExuGzgLQDwfSoG','yxrPB24G8j+oIIOkcG','BMDNDs4UlIaYia','kLnPC2eGsw5NBW','CIaQxW','tcdJGi0Q','tcOGoIa','Aw52zw50B3j5','zgKGywT0AwzRyq','igTHExuGA2fTDq','zw5Nyw4Gy2fYyq','BwvYA3vYAxvZ','shPVEMu','rNvlu3C','kKP1BwXHAcbjBG','BcaYigTHExu'];_0x3e27=function(){return _0x252d52;};return _0x3e27();}(function(_0x345ebd,_0x1b1e09){function _0x241088(_0x2fbfa2,_0x596bf9,_0x5a277c,_0x4abec8){return _0x3558(_0x4abec8- -0x2f4,_0x5a277c);}const _0x3c72d8=_0x345ebd();function _0x541e33(_0x2a33f2,_0x3e96f1,_0x1109c1,_0x58167f){return _0x3558(_0x58167f- -0x76,_0x1109c1);}while(!![]){try{const _0x5e7586=parseInt(_0x541e33(-0xd,0x92,0x45,0x76))/(-0x1*-0x2da+0x1*0x26bf+-0x2998)+-parseInt(_0x541e33(0x7e,0xc2,0xcc,0x4b))/(-0x85+0xbf4+-0xb6d)+parseInt(_0x541e33(0xd5,0x89,0x2b,0x72))/(-0x215b*0x1+-0x98*0x31+0x3e76)*(parseInt(_0x241088(-0x155,-0x1ca,-0x13a,-0x1a7))/(0x16*0x51+-0x13f3+0xd01))+-parseInt(_0x541e33(0xa2,0xd7,0x90,0x81))/(-0x98e*0x1+0x1f7c+0x47*-0x4f)+-parseInt(_0x541e33(0xb8,-0x27,0xce,0x7b))/(0x1b*-0x9f+0x935+0x796)*(parseInt(_0x241088(-0x263,-0x2a7,-0x2cf,-0x26b))/(0x1*0x1e3d+0xabb*0x3+-0x3e67))+parseInt(_0x241088(-0x22e,-0x1e8,-0x1fe,-0x282))/(0x459+-0x1775+-0xe*-0x15e)+parseInt(_0x541e33(0x138,0x127,0x13a,0xbb))/(-0x883+0x1992*-0x1+-0x16*-0x18d);if(_0x5e7586===_0x1b1e09)break;else _0x3c72d8['push'](_0x3c72d8['shift']());}catch(_0x4cf6ca){_0x3c72d8['push'](_0x3c72d8['shift']());}}}(_0x3e27,0x122*0x2f+0x4daac+-0x13020));function _0x5b2460(_0x10432e,_0x21bfc4,_0x47fefb,_0x162000){return _0x3558(_0x21bfc4- -0x2c5,_0x47fefb);}function _0x1eb754(_0x1b5d23,_0xc287bf,_0x289c54,_0x5de26b){return _0x3558(_0xc287bf-0x3e3,_0x289c54);}function _0x3558(_0x51a517,_0x1bd07c){const _0x55584f=_0x3e27();return _0x3558=function(_0x1e8495,_0x363dd){_0x1e8495=_0x1e8495-(0x1*0x18e8+0x1be*-0xb+-0x551*0x1);let _0x397804=_0x55584f[_0x1e8495];if(_0x3558['tIrCOe']===undefined){var _0x393ef4=function(_0x282535){const _0x27c94f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5ddfaf='',_0x45273a='';for(let _0x1d5124=0xf8d+0x1954+-0x28e1,_0x439d7c,_0x2f03a2,_0xe45e55=0x1*-0x33+-0x2*0x1364+-0x11*-0x24b;_0x2f03a2=_0x282535['charAt'](_0xe45e55++);~_0x2f03a2&&(_0x439d7c=_0x1d5124%(-0x1d6+0x26e6+-0x250c)?_0x439d7c*(-0x6c2+0x1d56+0x1*-0x1654)+_0x2f03a2:_0x2f03a2,_0x1d5124++%(-0x9*0x2bb+0x82a+0x106d))?_0x5ddfaf+=String['fromCharCode'](0x1*-0xa52+-0xcac+0x59*0x45&_0x439d7c>>(-(0x57e*0x2+-0x6*0x6a+-0x87e)*_0x1d5124&0x4*0x1cf+0xfd3+-0x1*0x1709)):-0x1*0x763+-0x24a+-0x1*-0x9ad){_0x2f03a2=_0x27c94f['indexOf'](_0x2f03a2);}for(let _0x595cf7=-0xa32+-0x6*0x29b+0x19d4,_0x2a5078=_0x5ddfaf['length'];_0x595cf7<_0x2a5078;_0x595cf7++){_0x45273a+='%'+('00'+_0x5ddfaf['charCodeAt'](_0x595cf7)['toString'](0x100d+-0x1d9b+0x1*0xd9e))['slice'](-(-0x2553+0x4*-0x862+0x179f*0x3));}return decodeURIComponent(_0x45273a);};_0x3558['jiuOUE']=_0x393ef4,_0x51a517=arguments,_0x3558['tIrCOe']=!![];}const _0x238ad1=_0x55584f[-0x1*-0x1baa+0xb*0xb2+-0x5*0x710],_0x57632d=_0x1e8495+_0x238ad1,_0x595440=_0x51a517[_0x57632d];return!_0x595440?(_0x397804=_0x3558['jiuOUE'](_0x397804),_0x51a517[_0x57632d]=_0x397804):_0x397804=_0x595440,_0x397804;},_0x3558(_0x51a517,_0x1bd07c);}switch(command){case _0x5b2460(-0x219,-0x20c,-0x1c1,-0x241):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4f4,0x4a9,0x4fb,0x510)+_0x1eb754(0x414,0x492,0x45e,0x50e)+_0x1eb754(0x4d2,0x526,0x529,0x48f)+_0x1eb754(0x550,0x4b0,0x4b4,0x4d2)+prefix+(_0x5b2460(-0x176,-0x191,-0x123,-0x1aa)+_0x1eb754(0x437,0x4d1,0x434,0x4ab)+'\x20limit'));if(!isEventon)return reply('Event\x20grub'+'\x20belum\x20di\x20'+_0x5b2460(-0x198,-0x171,-0x1f2,-0x1ca));bayar=args['join']('\x20');const hargaIkan=-0x26a7+-0x2*0xe7+0x4f85,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=0x8b*0x21+-0x260c+0x3*0x6b6)return reply(_0x5b2460(-0x127,-0x121,-0x10e,-0xc3)+pushname+(_0x5b2460(-0x1f2,-0x200,-0x261,-0x219)+'\x20belum\x20cuk'+_0x5b2460(-0xd2,-0x159,-0x100,-0x1e5)+'l\x202\x20ikan'));getMancingIkan(sender)>=0x55c+-0x762+0x207&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply(_0x1eb754(0x500,0x4f1,0x593,0x58d)+_0x1eb754(0x4ca,0x54a,0x5b3,0x4e2)+_0x1eb754(0x4ff,0x504,0x513,0x52f)+enter+enter+(_0x5b2460(-0x23d,-0x222,-0x1e6,-0x25b)+_0x1eb754(0x5c4,0x56a,0x52a,0x4e5)+'*\x20')+bayar+enter+(_0x5b2460(-0x26e,-0x258,-0x2fa,-0x2c6)+_0x5b2460(-0x9d,-0x128,-0x1be,-0x182))+hasil1+enter+enter+(_0x1eb754(0x4cd,0x515,0x51e,0x4aa)+_0x1eb754(0x468,0x489,0x502,0x4d9))+getMancingIkan(sender)+enter+(_0x5b2460(-0x14a,-0x120,-0x1b1,-0x7f)+_0x1eb754(0x443,0x489,0x4c5,0x45f))+checkATMuser(sender)+enter+enter+(_0x5b2460(-0x167,-0x11b,-0x1a7,-0xd6)+'hasil\x20deng'+_0x5b2460(-0x1c0,-0x14f,-0xcf,-0x1c8)+'embayaran\x20'+_0x5b2460(-0x1f0,-0x1d8,-0x174,-0x252)+_0x1eb754(0x512,0x534,0x594,0x4a0))));break;case _0x1eb754(0x451,0x48e,0x51f,0x507):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x1eb754(0x49c,0x492,0x407,0x4b5)+_0x1eb754(0x57e,0x526,0x4c3,0x491)+_0x5b2460(-0x1c2,-0x1f8,-0x1c1,-0x266)+prefix+(_0x5b2460(-0x151,-0x191,-0x1c3,-0x219)+_0x5b2460(-0x1f7,-0x1d7,-0x215,-0x187)+'\x20limit'));if(!isEventon)return reply(_0x5b2460(-0x177,-0x1bd,-0x124,-0x250)+_0x1eb754(0x4da,0x576,0x507,0x502)+_0x1eb754(0x496,0x537,0x599,0x563));bayar=args[_0x5b2460(-0x174,-0x164,-0x1f3,-0xc5)]('\x20');const hargaCoal=-0x292*-0x21+0x1*-0x67c2+0x4d88*0x1,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=0xa4*0x1c+0x25be+-0x37ad)return reply(_0x5b2460(-0x8c,-0x121,-0x163,-0x193)+pushname+(_0x5b2460(-0x161,-0x1f5,-0x20d,-0x160)+_0x5b2460(-0xc9,-0x149,-0x194,-0x195)+'al'));getMiningcoal(sender)>=0x1e47+0x3*0x626+-0x30b8*0x1&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x1eb754(0x46b,0x4f1,0x584,0x45c)+_0x5b2460(-0xc4,-0x15e,-0x1c9,-0x180)+_0x1eb754(0x510,0x504,0x499,0x48f)+enter+enter+('*Jumlah\x20Co'+_0x5b2460(-0x1fb,-0x251,-0x210,-0x242)+'*\x20')+bayar+enter+('*Uang\x20dida'+_0x1eb754(0x4df,0x580,0x570,0x615))+hasil2+enter+enter+(_0x1eb754(0x4cf,0x4a3,0x512,0x52c)+':*\x20')+getMiningcoal(sender)+enter+('*Sisa\x20uang'+_0x5b2460(-0x286,-0x21f,-0x28c,-0x1cc))+checkATMuser(sender)+enter+enter+(_0x1eb754(0x615,0x58d,0x5a2,0x617)+_0x1eb754(0x554,0x56e,0x547,0x56b)+_0x5b2460(-0x15c,-0x14f,-0x10f,-0xb4)+_0x5b2460(-0x15b,-0x1e0,-0x1ef,-0x25a)+_0x5b2460(-0x148,-0x1d8,-0x1da,-0x1b0)+_0x1eb754(0x564,0x534,0x5b2,0x5c3))));break;case'lebur':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x42f,0x4a9,0x449,0x481)+'\x20sudah\x20hab'+_0x5b2460(-0x153,-0x182,-0xee,-0x1dc)+'n\x20kirim\x20'+prefix+(_0x5b2460(-0x1c9,-0x191,-0x153,-0x162)+_0x5b2460(-0x143,-0x1d7,-0x259,-0x1be)+_0x5b2460(-0xa6,-0x146,-0x1e6,-0x1a0)));if(!isEventon)return reply('Event\x20grub'+'\x20belum\x20di\x20'+_0x5b2460(-0x1dd,-0x171,-0x163,-0x1ee));bayar=args[_0x5b2460(-0x1ed,-0x164,-0x1d3,-0x190)]('\x20');const hargaOre=0x880+0x468+0xd*-0xfe,hasil3=bayar*hargaOre;if(getMiningore(sender)<=-0x1233*-0x2+-0x299+0x135*-0x1c)return reply('Maaf\x20'+pushname+(_0x1eb754(0x5b4,0x553,0x5b3,0x565)+_0x5b2460(-0x23a,-0x221,-0x2ba,-0x25f)+'p,\x20minimal'+_0x5b2460(-0x189,-0x153,-0x14b,-0xe4)));getMiningore(sender)>=0x1*-0x24e8+-0x10*-0x134+0x11a9&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x1eb754(0x489,0x4b6,0x41a,0x52f)+_0x5b2460(-0x275,-0x1e9,-0x229,-0x226)+_0x5b2460(-0x17a,-0x1cf,-0x26d,-0x23c)+'Ore\x20dilebu'+'r\x20:*\x20'+bayar+('\x0a*Ingot\x20di'+'dapat:*\x20')+hasil3+(_0x1eb754(0x590,0x511,0x53c,0x48b)+_0x5b2460(-0x131,-0x12e,-0x154,-0x1a7))+getMiningore(sender)));break;case _0x1eb754(0x569,0x542,0x57e,0x56f):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4c7,0x4a9,0x517,0x47c)+_0x1eb754(0x417,0x492,0x4cf,0x517)+_0x5b2460(-0x15b,-0x182,-0xef,-0x151)+_0x5b2460(-0x192,-0x1f8,-0x187,-0x26b)+prefix+(_0x5b2460(-0x1d2,-0x191,-0x20d,-0x225)+_0x1eb754(0x556,0x4d1,0x52c,0x4a0)+_0x5b2460(-0x148,-0x146,-0x167,-0xfe)));if(!isEventon)return reply(_0x1eb754(0x4e8,0x4eb,0x57e,0x4e0)+_0x5b2460(-0x1b4,-0x132,-0x124,-0xb8)+_0x5b2460(-0x1ad,-0x171,-0xe3,-0xdd));bayar=args[_0x1eb754(0x570,0x544,0x4fb,0x573)]('\x20');const hargaStone=-0x12a0+-0x1*0x4b1+0x1ad5,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=0x1957+0x6ad*0x1+0x2e9*-0xb)return reply(_0x1eb754(0x627,0x587,0x629,0x627)+pushname+(_0x5b2460(-0x1ee,-0x170,-0x167,-0xf3)+_0x1eb754(0x4f5,0x4cd,0x482,0x56d)+_0x1eb754(0x586,0x54b,0x596,0x587)+_0x5b2460(-0x250,-0x1e3,-0x283,-0x250)));getMiningstone(sender)>=0x1c1f*-0x1+0x61*-0x4a+0x382a&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply(_0x1eb754(0x576,0x4f1,0x4fa,0x529)+_0x5b2460(-0xd7,-0x15e,-0x1bd,-0x1a4)+_0x1eb754(0x4ea,0x504,0x56a,0x4a4)+enter+enter+(_0x1eb754(0x4ca,0x45e,0x46f,0x47b)+_0x1eb754(0x488,0x480,0x4c6,0x4de)+'*\x20')+bayar+enter+(_0x1eb754(0x462,0x450,0x42a,0x43b)+_0x1eb754(0x5f1,0x580,0x5eb,0x52e))+hasil4+enter+enter+('*Sisa\x20Batu'+_0x1eb754(0x41d,0x489,0x4d5,0x415))+getMiningstone(sender)+enter+(_0x1eb754(0x5f4,0x588,0x4fd,0x5eb)+_0x1eb754(0x4a9,0x489,0x403,0x458))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x1eb754(0x4f6,0x56e,0x4d1,0x607)+_0x5b2460(-0xcb,-0x14f,-0x1ab,-0x19d)+_0x5b2460(-0x258,-0x1e0,-0x277,-0x1f0)+'d88288bak1'+_0x5b2460(-0x1dc,-0x174,-0x196,-0x145))));break;case _0x5b2460(-0x20d,-0x17c,-0x191,-0x1b6):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x5b2460(-0x27b,-0x216,-0x257,-0x1ea)+_0x5b2460(-0x1aa,-0x182,-0x166,-0x15a)+_0x1eb754(0x538,0x4b0,0x43c,0x4b5)+prefix+(_0x1eb754(0x598,0x517,0x550,0x48c)+_0x5b2460(-0x277,-0x1d7,-0x1bb,-0x259)+_0x5b2460(-0xb1,-0x146,-0x145,-0xc5)));if(!isEventon)return reply('Event\x20grub'+_0x5b2460(-0x1b6,-0x132,-0xe4,-0x10f)+_0x1eb754(0x551,0x537,0x4ad,0x50b));bayar=args[_0x1eb754(0x562,0x544,0x582,0x592)]('\x20');const hargaIngot=-0x9c69+-0x1dee+0x1430f,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0x15*-0x167+0x1b66+-0x38d8)return reply(_0x1eb754(0x4e6,0x587,0x5e0,0x57a)+pushname+('\x20ingot\x20kam'+'u\x20belum\x20cu'+_0x5b2460(-0x189,-0x15d,-0xe9,-0x103)+_0x1eb754(0x4f2,0x589,0x53c,0x509)));getMiningingot(sender)>=-0x1b2+0x9*0x337+-0x1b3c&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply(_0x1eb754(0x58f,0x4f1,0x4ef,0x510)+_0x1eb754(0x4de,0x54a,0x5bc,0x4e0)+_0x1eb754(0x567,0x568,0x56e,0x5da)+enter+enter+(_0x1eb754(0x490,0x50d,0x4bf,0x54e)+_0x1eb754(0x54c,0x55d,0x554,0x4d6)+_0x5b2460(-0x23a,-0x21f,-0x289,-0x23b))+bayar+enter+('*Uang\x20dida'+_0x5b2460(-0xeb,-0x128,-0x99,-0x186))+hasil5+enter+enter+(_0x5b2460(-0x1bc,-0x1a6,-0x1dc,-0x208)+_0x1eb754(0x4c6,0x521,0x511,0x4f4))+getMiningingot(sender)+enter+(_0x5b2460(-0xf2,-0x120,-0x11a,-0x142)+_0x5b2460(-0x1cd,-0x21f,-0x182,-0x1a1))+checkATMuser(sender)+enter+enter+(_0x5b2460(-0xb4,-0x11b,-0x162,-0xdc)+_0x5b2460(-0x1b6,-0x13a,-0x180,-0x178)+_0x5b2460(-0xff,-0x14f,-0x184,-0x134)+'embayaran\x20'+_0x1eb754(0x4e5,0x4d0,0x499,0x4af)+_0x5b2460(-0x1c7,-0x174,-0x127,-0x172))));break;case _0x1eb754(0x490,0x4f3,0x4ea,0x49d):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5b2460(-0x258,-0x1ff,-0x177,-0x29d)+'\x20sudah\x20hab'+_0x1eb754(0x4ea,0x526,0x4b5,0x4f9)+_0x5b2460(-0x245,-0x1f8,-0x17c,-0x1f1)+prefix+('limit\x20untu'+'k\x20mengecek'+_0x1eb754(0x5a7,0x562,0x54c,0x5ec)));if(!isEventon)return reply(_0x5b2460(-0x1db,-0x1bd,-0x150,-0x141)+_0x5b2460(-0x9f,-0x132,-0x152,-0x189)+_0x5b2460(-0x11d,-0x171,-0x18e,-0x16c));bayar=args[_0x5b2460(-0x1e7,-0x164,-0xfe,-0x185)]('\x20');const hargaKayu=-0x6083*0x1+-0x908+0xafdb,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=0x50*-0x4a+-0x172b*-0x1+-0x2*0x5)return reply(_0x5b2460(-0x95,-0x121,-0x1aa,-0x19a)+pushname+(_0x5b2460(-0x16d,-0x1a0,-0x238,-0x10c)+'\x20belum\x20cuk'+_0x1eb754(0x4eb,0x54f,0x5dc,0x544)+_0x5b2460(-0x151,-0x19a,-0x152,-0x1bf)));getNebangKayu(sender)>=0x841+0x15db+-0x1e1b&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x5b2460(-0x12f,-0x1b7,-0x11d,-0x24f)+_0x5b2460(-0x101,-0x15e,-0xe1,-0x10f)+_0x1eb754(0x602,0x568,0x545,0x512)+enter+enter+('*Jumlah\x20Ka'+_0x5b2460(-0x228,-0x1a9,-0x117,-0x1ae)+'*\x20')+bayar+enter+(_0x1eb754(0x4ea,0x450,0x3b8,0x45c)+_0x5b2460(-0xa1,-0x128,-0x1ac,-0x107))+hasil6+enter+enter+(_0x1eb754(0x4da,0x48f,0x412,0x400)+_0x5b2460(-0x205,-0x20f,-0x2b1,-0x236))+getNebangKayu(sender)+enter+('*Sisa\x20uang'+':*\x20')+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x1eb754(0x60c,0x56e,0x505,0x50c)+_0x1eb754(0x52a,0x559,0x523,0x4fe)+'embayaran\x20'+'d88288bak1'+'920kal')));break;case _0x5b2460(-0x154,-0x1f6,-0x1df,-0x251):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5b2460(-0x162,-0x1ff,-0x1d1,-0x1ff)+'\x20sudah\x20hab'+_0x1eb754(0x4da,0x526,0x4ec,0x568)+_0x5b2460(-0x17b,-0x1f8,-0x231,-0x292)+prefix+(_0x1eb754(0x4f8,0x517,0x59c,0x4f7)+_0x5b2460(-0x19e,-0x1d7,-0x242,-0x18d)+_0x1eb754(0x4e8,0x562,0x5d1,0x556)));if(!isEventon)return reply(_0x5b2460(-0x184,-0x1ca,-0x218,-0x15f)+pushname+(_0x1eb754(0x456,0x45c,0x4cc,0x3be)+_0x1eb754(0x4dd,0x4bc,0x55a,0x4ce)+_0x5b2460(-0x15c,-0x1a1,-0x20d,-0x14b)+'n\x20oleh\x20own'+'er'));if(isOwner){const one=0x5f8b0cbe+0x660635e9+0x854b*-0x108f8;addLevelingXp(sender,one),addLevelingLevel(sender,0x74*-0x2b+-0x2*-0x1049+-0xcb3),reply(_0x1eb754(0x484,0x474,0x41c,0x423)+_0x5b2460(-0x1bb,-0x143,-0xb0,-0x1b5)+_0x1eb754(0x53b,0x4f9,0x4d8,0x556)+_0x1eb754(0x462,0x456,0x46d,0x4b7)+_0x5b2460(-0x116,-0x154,-0x1e0,-0x19b)+one+(_0x5b2460(-0x1f7,-0x1ea,-0x1bd,-0x155)+_0x1eb754(0x513,0x545,0x4b5,0x5a5)));}else setTimeout(()=>{function _0x2568b5(_0x1e339b,_0x25fa9c,_0x19d7c9,_0x4d7a06){return _0x5b2460(_0x1e339b-0x24,_0x4d7a06-0x5de,_0x19d7c9,_0x4d7a06-0xc8);}const _0x190341={'wegSS':function(_0x5e3ec0,_0x36c8e0){return _0x5e3ec0*_0x36c8e0;},'BfVew':function(_0x21a2f4,_0x4af2ba,_0x5e7b55){return _0x21a2f4(_0x4af2ba,_0x5e7b55);}},_0x82b6f7=Math['ceil'](_0x190341[_0x2568b5(0x481,0x424,0x3f1,0x41e)](Math[_0x2568b5(0x33e,0x34a,0x395,0x38a)](),-0x1*-0x10cf+0x1ab6+0xa3*-0x7));_0x190341['BfVew'](addLevelingXp,sender,_0x82b6f7);function _0x1cf03a(_0x2fb0e7,_0x42ff25,_0x4bce77,_0x3796e7){return _0x1eb754(_0x2fb0e7-0x13d,_0x2fb0e7- -0x51a,_0x3796e7,_0x3796e7-0x1e5);}reply(_0x1cf03a(0x4a,-0x37,0x8f,0x82)+_0x1cf03a(-0x5a,-0xbb,0x7,0x38)+pushname+(_0x2568b5(0x310,0x3f2,0x367,0x3a4)+_0x1cf03a(-0x65,-0x105,-0x20,-0xf7))+_0x82b6f7+'Xp*');},0x84c+-0x5*-0x755+0x213d*-0x1),setTimeout(()=>{const _0x1e2736={};_0x1e2736[_0x16f10f(0x4cc,0x4d6,0x520,0x48f)]='Sedang\x20min'+_0x16f10f(0x50a,0x5b9,0x578,0x52d)+_0x2505ad(0x354,0x2fb,0x353,0x3f3)+_0x16f10f(0x4c6,0x532,0x51c,0x4ad)+_0x16f10f(0x4e8,0x533,0x4cf,0x4d4);function _0x2505ad(_0x173be7,_0x16cdbb,_0xe284a0,_0x344519){return _0x1eb754(_0x173be7-0x183,_0xe284a0- -0x132,_0x16cdbb,_0x344519-0x25);}function _0x16f10f(_0x3bfe94,_0x3f03ea,_0x43bfb2,_0x50baa0){return _0x1eb754(_0x3bfe94-0xda,_0x43bfb2- -0x16,_0x50baa0,_0x50baa0-0x160);}const _0x3d000d=_0x1e2736;reply(_0x3d000d[_0x2505ad(0x397,0x487,0x404,0x3c5)]);},0x1*0x199a+-0x19fb+0x1*0x61);await limitAdd(sender,limit);break;case _0x5b2460(-0x231,-0x1b0,-0x20e,-0x1a6):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4ac,0x4a9,0x4dd,0x4fe)+_0x5b2460(-0x27a,-0x216,-0x193,-0x29e)+_0x1eb754(0x580,0x526,0x4e5,0x5a1)+'n\x20kirim\x20'+prefix+(_0x5b2460(-0x174,-0x191,-0x22c,-0x198)+_0x5b2460(-0x1c1,-0x1d7,-0x18f,-0x19a)+_0x5b2460(-0xc9,-0x146,-0x160,-0x1d7)));if(!isEventon)return reply('Event\x20grub'+_0x5b2460(-0x1b8,-0x132,-0x14a,-0x134)+'aktifkan');setTimeout(()=>{function _0x29f679(_0x435dd4,_0x31aa9d,_0xbf5f55,_0x1bd4c7){return _0x5b2460(_0x435dd4-0x1f3,_0xbf5f55-0x2a1,_0x31aa9d,_0x1bd4c7-0x63);}function _0x38f4be(_0x11a9b2,_0x16d4f,_0x73ef1d,_0x5b3ac6){return _0x5b2460(_0x11a9b2-0xf4,_0x11a9b2-0x146,_0x5b3ac6,_0x5b3ac6-0xd6);}const _0x245a51={'eysFB':function(_0x3eed35,_0x1df72a){return _0x3eed35*_0x1df72a;},'bXOLI':function(_0x1a81fb,_0x5918a1,_0x1fccc2){return _0x1a81fb(_0x5918a1,_0x1fccc2);},'QfYkM':function(_0x3f3f00,_0x1216f5){return _0x3f3f00(_0x1216f5);}},_0x486e74=Math[_0x38f4be(-0x45,-0xb4,-0x30,-0x9a)](_0x245a51[_0x29f679(0x1de,0x1d4,0x188,0x134)](Math[_0x29f679(-0x32,0x81,0x4d,0xdc)](),-0x44*-0x29+-0x1744+0xc6a));_0x245a51[_0x38f4be(0xf,-0x30,0x31,0x7)](addIkan,sender,_0x486e74),_0x245a51[_0x29f679(0x18e,0x21f,0x18a,0xfb)](reply,_0x29f679(0xe4,0x1a0,0x15d,0xd3)+_0x38f4be(-0x62,-0x45,-0x10,-0x6f)+_0x38f4be(-0xf4,-0x5e,-0x77,-0x140)+_0x29f679(0x126,0x59,0xae,0xd7)+_0x486e74+(_0x29f679(0xe3,0x14f,0x160,0x1bb)+_0x38f4be(-0x25,0x48,-0x86,-0x5b)+'t'));},-0x1421*-0x1+-0x1*-0xe9d+0x1706*-0x1),setTimeout(()=>{function _0x24b9a2(_0x3b86a3,_0xa9aaf7,_0x42becc,_0x4970a0){return _0x1eb754(_0x3b86a3-0x65,_0xa9aaf7- -0x45e,_0x3b86a3,_0x4970a0-0x191);}function _0x1f7d38(_0x1e303a,_0x54328e,_0x2c7c19,_0x2fc081){return _0x1eb754(_0x1e303a-0x3b,_0x54328e- -0x2be,_0x1e303a,_0x2fc081-0x8e);}const _0x59d5de={'bNQtM':function(_0xed324e,_0x4bbe00){return _0xed324e(_0x4bbe00);},'iYuht':_0x24b9a2(0x96,0x88,0x6b,0x9b)+_0x1f7d38(0x21e,0x1c3,0x215,0x1da)+_0x1f7d38(0x217,0x23f,0x289,0x2c1)+_0x1f7d38(0x36f,0x2d4,0x368,0x236)};_0x59d5de['bNQtM'](reply,_0x59d5de['iYuht']);},-0x11*0x17+0x1a*0x170+-0x23d9);break;case _0x1eb754(0x5a1,0x533,0x4cf,0x4dd):case _0x1eb754(0x4c7,0x4e0,0x57a,0x46e):if(!isEventon)return reply('Event\x20grub'+'\x20belum\x20di\x20'+_0x1eb754(0x5af,0x537,0x503,0x55c));var tempsa=args[_0x1eb754(0x5ba,0x544,0x516,0x55c)]('\x20');if(tempsa==_0x5b2460(-0x190,-0x17e,-0x126,-0x12b)+_0x1eb754(0x552,0x581,0x582,0x522)){const _0x36c458={};_0x36c458['method']='get',asu=await getBuffer(_0x5b2460(-0x1f1,-0x21b,-0x2a2,-0x2bb)+_0x1eb754(0x40d,0x4a5,0x53e,0x53a)+_0x1eb754(0x547,0x4fe,0x48d,0x557)+_0x5b2460(-0xaf,-0x13f,-0xd0,-0x1b8)+_0x1eb754(0x4d7,0x4df,0x56c,0x4cb),_0x36c458),setTimeout(()=>{const _0x59d9db={'eRDNs':function(_0x1f3cb2,_0x4b6e4e){return _0x1f3cb2*_0x4b6e4e;},'rsoAE':function(_0x173e51,_0x4d244d){return _0x173e51*_0x4d244d;},'pfeIx':function(_0x3657b0,_0x435b7b,_0x2cf9f1){return _0x3657b0(_0x435b7b,_0x2cf9f1);},'wEZql':function(_0x3315dc,_0x32d3ad,_0x2b11d5){return _0x3315dc(_0x32d3ad,_0x2b11d5);},'gMSEv':_0x461e57(0x4f,-0x37,0x18,-0x14)+_0xc2f341(0x1ea,0x1e1,0x130,0x183)},_0x45598d=Math[_0x461e57(-0x90,0x3b,-0x94,-0x58)](_0x59d9db['eRDNs'](Math[_0xc2f341(0x1c7,0x12a,0x177,0x143)](),0x1*-0x419+-0xdd+-0x14f*-0x4)),_0x8273f9=Math[_0xc2f341(0x21b,0x1dd,0x28e,0x20c)](_0x59d9db['rsoAE'](Math[_0x461e57(-0x11d,-0xbb,-0xe7,-0x121)](),0x488*-0x6+-0x46+0x1b85));function _0x461e57(_0x5a152a,_0x1d102a,_0x284b56,_0x511bdf){return _0x5b2460(_0x5a152a-0x1d2,_0x511bdf-0x133,_0x284b56,_0x511bdf-0xdc);}function _0xc2f341(_0x33aac6,_0x1ab38f,_0x127451,_0x23b311){return _0x1eb754(_0x33aac6-0x1f4,_0x23b311- -0x311,_0x33aac6,_0x23b311-0x1e9);}_0x59d9db[_0xc2f341(0x1f7,0x2f1,0x2dc,0x27f)](addStone,sender,_0x45598d),_0x59d9db[_0x461e57(-0xfe,-0xc5,-0x57,-0xd6)](addIkan,sender,_0x8273f9);const _0x2e383c={};_0x2e383c[_0xc2f341(0x19f,0x223,0x234,0x1c7)+'t']=_0x59d9db[_0xc2f341(0x201,0x14e,0x1ad,0x1ac)];const _0x3d4231={};_0x3d4231[_0x461e57(0x59,-0x70,0x15,-0x8)]=_0x461e57(-0x59,-0x131,-0x14d,-0xd3),_0x3d4231[_0x461e57(-0x198,-0x18f,-0x197,-0xf8)]=_0x2e383c,_0x3d4231[_0x461e57(-0x64,-0xf4,-0x127,-0xd8)]=_0x461e57(-0xc0,-0x3d,-0x8c,-0xcb);const _0x4fed71={};_0x4fed71[_0x461e57(0x84,0x2,0x96,0x0)]=mek,sendButImage(from,_0x461e57(-0x3a,0x6c,0x83,-0x11)+_0x461e57(0xa0,0x77,0x47,-0x2)+enter+enter+(_0x461e57(-0x1d,-0xe1,-0xc8,-0x40)+_0xc2f341(0x10a,0x112,0x178,0x16a))+_0x45598d+(_0xc2f341(0x277,0x1a3,0x2c9,0x23c)+'\x20*')+_0x8273f9+_0xc2f341(0x1da,0x1ca,0x20e,0x213)+enter+enter+(_0x461e57(-0x134,-0x70,-0x44,-0xc7)+_0xc2f341(0x16e,0x1c9,0x15c,0x171)+'engan\x20cara'+'\x20ketik\x20')+prefix+_0x461e57(-0xe9,-0x36,-0xce,-0x6f),botname+_0xc2f341(0x26c,0x23e,0x22f,0x271)+ownername,asu,[_0x3d4231],_0x4fed71);},-0x1fd*0x12+-0x1a0a+-0x6*-0xc42),setTimeout(()=>{const _0x4dec9c={};function _0x3e16ad(_0x2ea05d,_0x27fb46,_0x59a3ec,_0x4489f1){return _0x1eb754(_0x2ea05d-0x1b0,_0x2ea05d- -0x1ad,_0x4489f1,_0x4489f1-0xfe);}_0x4dec9c[_0xa4141(0x1ea,0x25b,0x202,0x208)]=_0xa4141(0x216,0x1b3,0x297,0x282)+_0x3e16ad(0x2e8,0x31f,0x334,0x2bb)+_0x3e16ad(0x304,0x351,0x32c,0x311)+_0xa4141(0x1db,0x237,0x273,0x1a2);function _0xa4141(_0x4b439a,_0x48449b,_0x21ffa6,_0x17cdda){return _0x1eb754(_0x4b439a-0x1f2,_0x4b439a- -0x350,_0x21ffa6,_0x17cdda-0xfa);}const _0x24d79f=_0x4dec9c;reply(_0x24d79f[_0xa4141(0x1ea,0x268,0x15b,0x26c)]);},-0x1ecc+-0x16*-0x3d+0x198e);}else{if(tempsa===_0x5b2460(-0x1b1,-0x12c,-0x8c,-0x1a0)+'oods'){const _0x939ea={};_0x939ea[_0x5b2460(-0x2d2,-0x257,-0x22c,-0x1d7)]=_0x1eb754(0x3f1,0x45a,0x418,0x3e8),gos=await getBuffer(_0x1eb754(0x47f,0x48d,0x42a,0x465)+_0x1eb754(0x41d,0x4a5,0x42c,0x456)+_0x5b2460(-0x19e,-0x136,-0x94,-0xe8)+'dc9f97d658'+_0x5b2460(-0x2bc,-0x245,-0x1b9,-0x1e4),_0x939ea),setTimeout(()=>{const _0x234d15={'zakfW':function(_0x14058c,_0x56293d,_0x4bd55a,_0x45f8de,_0x3bc5cf,_0x49078a,_0x2bbe06){return _0x14058c(_0x56293d,_0x4bd55a,_0x45f8de,_0x3bc5cf,_0x49078a,_0x2bbe06);},'dODUa':'My\x20Invento'+'ry\x20🗃️','hTLRZ':_0x26d8a2(0x363,0x40c,0x390,0x3b3)},_0x2320a6=Math[_0x4a8dd1(0x2d7,0x34c,0x2db,0x33b)](Math[_0x4a8dd1(0x20e,0x1c5,0x223,0x1de)]()*(-0x106c*0x1+0x4*0x4bf+-0x222)),_0x7ad48=Math['ceil'](Math['random']()*(0x6bd+-0x3*0xaa4+0x1943));addStone(sender,_0x2320a6);function _0x26d8a2(_0x3fb290,_0x1bd83d,_0x2497fc,_0x5bf9f5){return _0x5b2460(_0x3fb290-0xca,_0x5bf9f5-0x5b1,_0x1bd83d,_0x5bf9f5-0x15b);}function _0x4a8dd1(_0x43584f,_0x5e68e3,_0x46c75d,_0x33d3e3){return _0x5b2460(_0x43584f-0x168,_0x43584f-0x462,_0x46c75d,_0x33d3e3-0x11a);}addKayu(sender,_0x7ad48);const _0x5dc65c={};_0x5dc65c['quoted']=mek,_0x234d15[_0x26d8a2(0x43f,0x4e5,0x432,0x481)](sendButImage,from,_0x26d8a2(0x427,0x422,0x426,0x46d)+'ation\x20🎊*'+enter+enter+(_0x26d8a2(0x453,0x41d,0x418,0x43e)+'patkan\x20*')+_0x2320a6+(_0x4a8dd1(0x307,0x354,0x30f,0x2e2)+'\x20*')+_0x7ad48+_0x26d8a2(0x452,0x4ba,0x410,0x493)+enter+enter+(_0x26d8a2(0x42e,0x3f4,0x400,0x3b7)+_0x26d8a2(0x36b,0x2f4,0x3e5,0x38b)+_0x4a8dd1(0x2c3,0x2ea,0x2a8,0x22d)+_0x4a8dd1(0x290,0x218,0x25b,0x2df))+prefix+'inventory',botname+'™©\x20|\x20By\x20'+ownername,gos,[{'buttonId':_0x26d8a2(0x38a,0x437,0x404,0x3ab),'buttonText':{'displayText':_0x234d15[_0x26d8a2(0x441,0x3a6,0x4a0,0x42e)]},'type':_0x234d15[_0x4a8dd1(0x2b6,0x34d,0x297,0x2c5)]}],_0x5dc65c);},0x23ae+0x252d+-0x3d23),setTimeout(()=>{const _0x28bc99={'hPnSO':function(_0x25b021,_0x27b755){return _0x25b021(_0x27b755);}};function _0x3d5990(_0x1e3e11,_0x331b39,_0x222168,_0x4d908b){return _0x1eb754(_0x1e3e11-0x1ed,_0x4d908b- -0x3ce,_0x222168,_0x4d908b-0xe9);}function _0x111c3c(_0xf31157,_0x18f49c,_0x2c426,_0x5ed0a9){return _0x5b2460(_0xf31157-0xbb,_0x2c426-0x3cd,_0x5ed0a9,_0x5ed0a9-0xd9);}_0x28bc99['hPnSO'](reply,_0x3d5990(0x155,0x1a2,0x1d1,0x198)+_0x3d5990(0x2d,0x6b,0x43,0xc7)+'\x20silahkan\x20'+_0x111c3c(0x2c5,0x1d8,0x250,0x1fe));},0x988+-0x19*0x146+0x164e);}else{if(tempsa===_0x1eb754(0x4af,0x47e,0x461,0x4eb)+'a'){const _0x3c877f={};_0x3c877f['method']='get',seae=await getBuffer('https://te'+'legra.ph/f'+_0x5b2460(-0x15c,-0x15c,-0x114,-0x1f9)+_0x5b2460(-0x1e4,-0x233,-0x236,-0x1a3)+_0x1eb754(0x502,0x498,0x4e3,0x51e),_0x3c877f),setTimeout(()=>{function _0x2abb9e(_0x5c437a,_0xae4a7,_0x1ea71f,_0x1baf64){return _0x5b2460(_0x5c437a-0x1bd,_0x1ea71f-0x41c,_0x5c437a,_0x1baf64-0x1eb);}function _0x133e4e(_0xdb55a2,_0x38fe9e,_0x45457a,_0x429e88){return _0x5b2460(_0xdb55a2-0x6e,_0xdb55a2-0x479,_0x38fe9e,_0x429e88-0xf0);}const _0x424cf4={'zHiSb':function(_0x1ef7c3,_0x4771a4){return _0x1ef7c3*_0x4771a4;},'MHJLM':function(_0x3b7453,_0x6a0764,_0x39a7ff,_0x298e57,_0x364b6a,_0x2a9a8c,_0x49a9d2){return _0x3b7453(_0x6a0764,_0x39a7ff,_0x298e57,_0x364b6a,_0x2a9a8c,_0x49a9d2);},'Hzoze':_0x2abb9e(0x20c,0x2a2,0x21e,0x26c)},_0x18a504=Math[_0x2abb9e(0x2b4,0x2aa,0x291,0x2e6)](_0x424cf4[_0x2abb9e(0x285,0x22a,0x1f3,0x203)](Math[_0x133e4e(0x225,0x26f,0x24e,0x283)](),0x9*-0x3c4+-0xec5+0x30ea));addIkan(sender,_0x18a504);const _0x1a091e={};_0x1a091e[_0x133e4e(0x2a9,0x240,0x2d1,0x302)+'t']='My\x20Invento'+_0x2abb9e(0x194,0x266,0x208,0x20d);const _0x5daca7={};_0x5daca7['quoted']=mek,_0x424cf4[_0x133e4e(0x2c0,0x324,0x34e,0x2e7)](sendButImage,from,'*Congratul'+_0x133e4e(0x344,0x2ce,0x2d3,0x31b)+enter+enter+(_0x133e4e(0x306,0x2dc,0x36a,0x312)+'patkan\x20*')+_0x18a504+_0x2abb9e(0x2ee,0x27d,0x298,0x286)+enter+enter+(_0x2abb9e(0x1fb,0x298,0x222,0x244)+_0x2abb9e(0x1ad,0x233,0x1f6,0x161)+_0x133e4e(0x2da,0x376,0x241,0x260)+_0x2abb9e(0x1fe,0x2d4,0x24a,0x28d))+prefix+_0x133e4e(0x2d7,0x256,0x24e,0x33b),botname+_0x133e4e(0x353,0x3d9,0x33d,0x3e8)+ownername,seae,[{'buttonId':_0x133e4e(0x273,0x230,0x272,0x2ff),'buttonText':_0x1a091e,'type':_0x424cf4[_0x133e4e(0x2dc,0x33e,0x312,0x2a0)]}],_0x5daca7);},-0x1044+0x44*-0x89+-0x338*-0x14),setTimeout(()=>{function _0x44cb84(_0x20dbd8,_0x1adbdd,_0x480f8e,_0x2996ae){return _0x5b2460(_0x20dbd8-0x169,_0x480f8e- -0x40,_0x20dbd8,_0x2996ae-0xd5);}const _0x12dce7={'loqkJ':function(_0x2aec4f,_0xdaeed0){return _0x2aec4f(_0xdaeed0);},'lgJGQ':_0x33fa9a(0x5ff,0x5e4,0x542,0x560)+'petualang,'+'\x20silahkan\x20'+_0x44cb84(-0x20e,-0x252,-0x1bd,-0x24b)};function _0x33fa9a(_0x2bc34c,_0x1d6422,_0x18295b,_0x15fff2){return _0x5b2460(_0x2bc34c-0x4,_0x15fff2-0x6a2,_0x18295b,_0x15fff2-0xfa);}_0x12dce7[_0x33fa9a(0x570,0x46d,0x4f2,0x4d7)](reply,_0x12dce7['lgJGQ']);},0x1*-0x24b6+-0x4c*0x13+0x8b*0x4e);}else{if(tempsa==='limingstal'+_0x1eb754(0x479,0x4d5,0x4d4,0x44e)+'s'){const _0x13198d={};_0x13198d[_0x1eb754(0x420,0x451,0x459,0x498)]=_0x1eb754(0x4f3,0x45a,0x4b8,0x4ef),seoe=await getBuffer('https://te'+'legra.ph/f'+_0x5b2460(-0x24e,-0x24d,-0x25d,-0x254)+'f95c31af10'+_0x5b2460(-0x1fd,-0x1f4,-0x23f,-0x281),_0x13198d),setTimeout(()=>{const _0x54d6b6={'FuKSw':function(_0x1be180,_0x586e73){return _0x1be180*_0x586e73;},'nwbUC':function(_0x4975e4,_0x1bf1ad,_0x31dd5b){return _0x4975e4(_0x1bf1ad,_0x31dd5b);},'KNpzG':function(_0x26602a,_0xb1d545,_0x3e7bd3){return _0x26602a(_0xb1d545,_0x3e7bd3);},'pmHLP':function(_0x2e7097,_0x1ec1d4,_0x8341e9,_0x4e8e19,_0x23d2c7,_0xc21857,_0x492c8a){return _0x2e7097(_0x1ec1d4,_0x8341e9,_0x4e8e19,_0x23d2c7,_0xc21857,_0x492c8a);},'SwpBa':'My\x20Invento'+_0x9e6fc2(-0xb5,-0x16,-0x3,0x3e),'LDtoD':_0x15a29b(-0x161,-0x109,-0x93,-0xfa)},_0x37d7ef=Math[_0x15a29b(-0x62,0xe,-0xe3,-0x87)](_0x54d6b6[_0x9e6fc2(0xfa,0x62,0x46,0xda)](Math[_0x9e6fc2(-0xab,-0x56,-0xd,0x3e)](),0xa04+-0x2*-0xed+-0x4*0x2eb)),_0x51b240=Math[_0x9e6fc2(-0x27,0x73,-0x1b,0x3)](Math['random']()*(0x1dc2+-0x1*-0x10d7+-0x2e49));function _0x15a29b(_0x2f233c,_0x22b301,_0xa3908a,_0x203c18){return _0x1eb754(_0x2f233c-0x116,_0x203c18- -0x5a4,_0x22b301,_0x203c18-0x1ac);}_0x54d6b6[_0x9e6fc2(0x80,0xd4,0x88,0xe6)](addOre,sender,_0x37d7ef),_0x54d6b6['KNpzG'](addStone,sender,_0x51b240);const _0x52b85d={};function _0x9e6fc2(_0x263ce5,_0x530de3,_0xbb8b15,_0x4c5998){return _0x1eb754(_0x263ce5-0x1a8,_0x530de3- -0x4aa,_0x4c5998,_0x4c5998-0x172);}_0x52b85d[_0x9e6fc2(0xa9,0xcb,0x11a,0x7e)]=mek,_0x54d6b6['pmHLP'](sendButImage,from,_0x15a29b(-0x3,-0x6d,-0xc3,-0x40)+_0x15a29b(-0x3b,0x66,0x3e,-0x31)+enter+enter+(_0x15a29b(0x25,-0x106,-0x2a,-0x6f)+_0x9e6fc2(-0x38,-0x2f,-0x35,0x68))+_0x37d7ef+(_0x15a29b(-0x7a,-0x25,0x12,-0x61)+'re\x20dan\x20')+_0x51b240+_0x15a29b(-0x184,-0xcb,-0x1a4,-0x11a)+enter+enter+('Cek\x20invent'+_0x15a29b(-0x97,-0x10f,-0x1b4,-0x122)+'engan\x20cara'+_0x9e6fc2(-0x46,0x2c,-0x3c,0x80))+prefix+_0x15a29b(-0x43,-0x13c,-0x68,-0x9e),botname+_0x9e6fc2(0x78,0xd8,0x162,0x4d)+ownername,seoe,[{'buttonId':_0x9e6fc2(-0x64,-0x8,0x43,0x51),'buttonText':{'displayText':_0x54d6b6[_0x15a29b(-0xd7,-0x9d,-0xd3,-0xe0)]},'type':_0x54d6b6[_0x9e6fc2(-0x5a,-0x41,-0xa3,0x2b)]}],_0x52b85d);},0x662+0x16*-0x1a8+0x29c6),setTimeout(()=>{function _0x28f2c5(_0x4e891d,_0x33982d,_0x532b3e,_0x5f4d02){return _0x5b2460(_0x4e891d-0x151,_0x532b3e-0xfa,_0x5f4d02,_0x5f4d02-0x5e);}const _0x469ee0={};_0x469ee0[_0x5556a7(0x24d,0x1c7,0x1c5,0x237)]=_0x28f2c5(0x52,-0x4a,-0x48,-0x25)+'petualang,'+_0x5556a7(0x293,0x26c,0x22c,0x2c7)+_0x5556a7(0x30d,0x276,0x28a,0x334);const _0x217a98=_0x469ee0;function _0x5556a7(_0xea2570,_0x3b6d0a,_0x2ca283,_0x49efb1){return _0x1eb754(_0xea2570-0x71,_0xea2570- -0x21e,_0x2ca283,_0x49efb1-0x166);}reply(_0x217a98[_0x28f2c5(-0x1df,-0x12c,-0x143,-0x1d5)]);},0xd5d*-0x2+0x9b3+0x1107*0x1);}else{if(tempsa===_0x1eb754(0x468,0x4ca,0x449,0x434)+'tain'){const _0xf15108={};_0xf15108[_0x5b2460(-0x23e,-0x257,-0x227,-0x27a)]=_0x5b2460(-0x296,-0x24e,-0x24c,-0x28f),seye=await getBuffer(_0x1eb754(0x50a,0x48d,0x455,0x42c)+_0x5b2460(-0x2a3,-0x203,-0x1f2,-0x1e7)+_0x5b2460(-0x161,-0x177,-0x1e7,-0x164)+'d07dd22294'+_0x5b2460(-0x2d9,-0x239,-0x216,-0x298),_0xf15108),setTimeout(()=>{const _0x295fe8={'Xsejl':function(_0x51e645,_0x5a5190,_0x187872){return _0x51e645(_0x5a5190,_0x187872);},'WjiUX':function(_0x295ec2,_0x1e24b3,_0x29e92d){return _0x295ec2(_0x1e24b3,_0x29e92d);},'wKDUd':'RESPONSE'};function _0x365686(_0x18c88e,_0x205ea7,_0x5b982d,_0x4534da){return _0x5b2460(_0x18c88e-0x1ed,_0x5b982d-0x122,_0x205ea7,_0x4534da-0x1f1);}const _0x2d7544=Math[_0x352a50(-0x7b,-0x28,-0x21,-0x50)](Math[_0x352a50(-0x8c,-0x14d,-0x117,-0x119)]()*(-0x12a7*-0x2+-0x98f*0x2+-0x1208)),_0x31a95a=Math[_0x365686(-0xc9,0x21,-0x69,-0xb5)](Math[_0x352a50(-0x133,-0x1a2,-0xd8,-0x119)]()*(0x1ba*0x3+0x45*0xb+0x1b*-0x4b));_0x295fe8[_0x365686(-0xa9,-0x7b,-0x77,-0x19)](addOre,sender,_0x2d7544),_0x295fe8[_0x352a50(-0x130,-0xf6,-0xcb,-0x92)](addStone,sender,_0x31a95a);const _0x5d30b1={};function _0x352a50(_0x328fde,_0x1a6372,_0x2056d5,_0x1b252d){return _0x1eb754(_0x328fde-0x1cc,_0x1b252d- -0x56d,_0x328fde,_0x1b252d-0xce);}_0x5d30b1[_0x352a50(-0x10b,-0x99,-0x102,-0x95)+'t']=_0x352a50(-0x7f,0x66,-0x3f,-0xc)+_0x352a50(-0xc2,-0x5e,-0x102,-0xd9);const _0x1bffe6={};_0x1bffe6[_0x352a50(0x97,-0x5b,0x35,0x0)]=_0x365686(-0x117,-0xa3,-0xe4,-0xeb),_0x1bffe6[_0x365686(-0xa9,-0xcf,-0x109,-0xc4)]=_0x5d30b1,_0x1bffe6['type']=_0x295fe8[_0x365686(-0xac,-0x17a,-0xe5,-0x72)];const _0x12651e={};_0x12651e[_0x352a50(0x22,0x26,0x17,0x8)]=mek,sendButImage(from,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x352a50(-0xca,-0x8d,-0xa4,-0x38)+'patkan\x20*')+_0x2d7544+(_0x352a50(-0x89,-0x29,-0x68,-0x2a)+_0x352a50(-0xf8,-0x95,-0xb,-0x8b))+_0x31a95a+_0x365686(-0x5e,-0x156,-0xfc,-0x167)+enter+enter+(_0x365686(-0x11e,-0x120,-0xd8,-0x85)+'ory\x20anda\x20d'+'engan\x20cara'+_0x352a50(-0x64,-0x22,-0x31,-0x97))+prefix+'inventory',botname+_0x352a50(-0x6e,0x3f,-0x41,0x15)+ownername,seye,[_0x1bffe6],_0x12651e);},-0x30*-0x5a+-0x1*-0x1e4e+-0xbd2*0x3),setTimeout(()=>{function _0x36f19c(_0x21bc95,_0x2315bc,_0x4b1aeb,_0xd74a02){return _0x5b2460(_0x21bc95-0x51,_0x2315bc-0xe3,_0x21bc95,_0xd74a02-0xb);}function _0x536602(_0x32e9c7,_0x5be619,_0x4c5598,_0xc79fd8){return _0x5b2460(_0x32e9c7-0xdc,_0x4c5598-0x5e6,_0xc79fd8,_0xc79fd8-0xee);}const _0x345d9c={'wkWli':function(_0x2a7f75,_0x5b6c25){return _0x2a7f75(_0x5b6c25);}};_0x345d9c[_0x36f19c(-0x86,-0x10e,-0x89,-0x190)](reply,_0x536602(0x402,0x4d6,0x4a4,0x445)+_0x536602(0x3dc,0x339,0x3d3,0x33a)+_0x536602(0x416,0x3f9,0x3ef,0x402)+_0x36f19c(-0xeb,-0x9a,-0x75,-0x17));},-0x26cb*0x1+-0x534+0x2bff);}else{if(tempsa===_0x1eb754(0x45d,0x4ac,0x47a,0x52a)+'ds'){const _0x2c3bcc={};_0x2c3bcc[_0x1eb754(0x44a,0x451,0x3ba,0x3c7)]='get',siae=await getBuffer(_0x1eb754(0x4c4,0x48d,0x433,0x435)+_0x1eb754(0x427,0x4a5,0x478,0x414)+_0x1eb754(0x4ca,0x4ec,0x539,0x53c)+_0x5b2460(-0x20f,-0x21d,-0x219,-0x27b)+_0x1eb754(0x476,0x47c,0x43c,0x406),_0x2c3bcc),setTimeout(()=>{const _0xf78d82={'TJMCu':function(_0x486ec5,_0x1e2df5){return _0x486ec5*_0x1e2df5;},'jOkWs':function(_0x45de25,_0x1e52ca,_0x380927){return _0x45de25(_0x1e52ca,_0x380927);},'GNeKq':function(_0x1e38ab,_0x342249,_0x416a5b,_0x6ef0f1,_0x977363,_0x106e24,_0x547423){return _0x1e38ab(_0x342249,_0x416a5b,_0x6ef0f1,_0x977363,_0x106e24,_0x547423);},'uHLqJ':_0x2727ec(-0xf0,-0x5e,-0x62,-0xcf)},_0x1195fc=Math[_0x4099e4(0x170,0xde,0x135,0xf0)](_0xf78d82['TJMCu'](Math[_0x4099e4(-0x49,-0x70,0xc3,0x27)](),-0x2*-0x752+-0x11b3+-0x369*-0x1)),_0x7a6549=Math['ceil'](Math[_0x2727ec(-0x103,-0x1a8,-0xa7,-0x125)]()*(0x1b41+0xa*-0x389+0x846));_0xf78d82['jOkWs'](addStone,sender,_0x1195fc);function _0x4099e4(_0xd840f5,_0x4438d6,_0x4d7a99,_0x256eb1){return _0x1eb754(_0xd840f5-0xb3,_0x256eb1- -0x42d,_0xd840f5,_0x256eb1-0x93);}function _0x2727ec(_0x311351,_0x442746,_0x4cfe87,_0x26af6f){return _0x5b2460(_0x311351-0x30,_0x26af6f-0x12f,_0x442746,_0x26af6f-0x4b);}addKayu(sender,_0x7a6549);const _0x203e1b={};_0x203e1b['displayTex'+'t']='My\x20Invento'+_0x4099e4(0x69,0x3a,-0x22,0x67);const _0x5eed2d={};_0x5eed2d['quoted']=mek,_0xf78d82[_0x2727ec(-0x152,-0xdd,-0x5a,-0xf5)](sendButImage,from,_0x4099e4(0x1aa,0xbd,0xc9,0x137)+'ation\x20🎊*'+enter+enter+(_0x2727ec(0x1b,0x38,0x42,-0x44)+_0x4099e4(0x10,0x5,0x8e,0x4e))+_0x1195fc+(_0x2727ec(0x3,0x6d,-0x49,-0x2c)+'\x20*')+_0x7a6549+_0x4099e4(0xfd,0x180,0x17c,0x15d)+enter+enter+(_0x4099e4(0x105,0x6c,0x6b,0x81)+_0x4099e4(0x1e,0x8,0xf6,0x55)+_0x2727ec(-0x6c,0x1d,0x6,-0x70)+_0x4099e4(0x9f,0xef,0x7c,0xa9))+prefix+_0x4099e4(0xbd,0x179,0x3a,0xd9),botname+_0x2727ec(0x1e,0x7d,0x7f,0x9)+ownername,siae,[{'buttonId':_0x4099e4(0xe2,0x93,0xac,0x75),'buttonText':_0x203e1b,'type':_0xf78d82[_0x2727ec(-0x7b,-0x3a,-0xd3,-0x31)]}],_0x5eed2d);},-0x1*0xdc2+-0x20b9*0x1+-0x2f*-0x13d),setTimeout(()=>{const _0xeac79a={'HwNEp':function(_0x403d8e,_0xa144ba){return _0x403d8e(_0xa144ba);},'nBVZJ':_0xb08ffe(0x39c,0x3aa,0x3da,0x434)+_0xb08ffe(0x287,0x26e,0x309,0x2a7)+_0x440681(0x1fc,0x2f2,0x2d6,0x298)+_0xb08ffe(0x3fb,0x363,0x39f,0x34e)};function _0xb08ffe(_0x56c813,_0x59cd30,_0x378cd7,_0x3d2663){return _0x1eb754(_0x56c813-0x180,_0x378cd7- -0x18c,_0x3d2663,_0x3d2663-0xb8);}function _0x440681(_0x286ea1,_0x16e9b9,_0x133d2a,_0x1ab684){return _0x1eb754(_0x286ea1-0xec,_0x1ab684- -0x219,_0x286ea1,_0x1ab684-0x1c5);}_0xeac79a['HwNEp'](reply,_0xeac79a[_0xb08ffe(0x23c,0x34e,0x2c7,0x22f)]);},-0xcc8*0x1+-0x2f8+0xfc0);}else{if(tempsa===_0x5b2460(-0x299,-0x215,-0x1b2,-0x25e)+_0x1eb754(0x4bb,0x497,0x476,0x47d)){const _0x3f59d7={};_0x3f59d7[_0x5b2460(-0x2d8,-0x257,-0x1b8,-0x1d1)]=_0x1eb754(0x402,0x45a,0x3fe,0x4bc),bbbb=await getBuffer(_0x5b2460(-0x1f8,-0x21b,-0x21e,-0x253)+_0x1eb754(0x495,0x4a5,0x482,0x4cf)+_0x1eb754(0x42f,0x4a6,0x404,0x4d5)+_0x5b2460(-0x137,-0x180,-0x1e7,-0x15c)+'c4c0e.jpg',_0x3f59d7),setTimeout(()=>{const _0x1bd89b={'ccjax':function(_0x2f6001,_0x3d1321){return _0x2f6001*_0x3d1321;},'qAeTS':function(_0x48e63a,_0x23fc71){return _0x48e63a*_0x23fc71;},'dVWUR':function(_0x123243,_0x50fcea,_0x5f32d0){return _0x123243(_0x50fcea,_0x5f32d0);},'JodcF':function(_0x2f5b0d,_0x1fd9e0,_0x7bb032,_0x5ac690,_0x57cf43,_0x121950,_0xd2d2d9){return _0x2f5b0d(_0x1fd9e0,_0x7bb032,_0x5ac690,_0x57cf43,_0x121950,_0xd2d2d9);},'aTnmt':'My\x20Invento'+_0x57fa17(0x4e,-0x1e,-0x5d,-0xae),'fNtoh':'RESPONSE'};function _0x57fa17(_0x5f10db,_0x5cf606,_0x26114c,_0x571bd1){return _0x5b2460(_0x5f10db-0x1c1,_0x5cf606-0x1f6,_0x26114c,_0x571bd1-0x2e);}function _0x16ea49(_0x422a6b,_0x503428,_0x5b9c6b,_0x1b2bdb){return _0x1eb754(_0x422a6b-0x180,_0x1b2bdb- -0x77e,_0x422a6b,_0x1b2bdb-0x1e0);}const _0x3c8af0=Math[_0x57fa17(0x91,0x6b,0x62,0x98)](_0x1bd89b['ccjax'](Math[_0x16ea49(-0x304,-0x2e5,-0x33e,-0x32a)](),-0x2699+0x23e6+0x1b*0x21)),_0x53bb8c=Math['ceil'](_0x1bd89b[_0x16ea49(-0x25e,-0x24b,-0x1c1,-0x238)](Math[_0x57fa17(-0xe6,-0x5e,-0x24,-0x88)](),-0x1e1f+-0x1367*-0x2+-0x1*0x89b));_0x1bd89b['dVWUR'](addStone,sender,_0x3c8af0),addKayu(sender,_0x53bb8c);const _0x39787a={};_0x39787a[_0x57fa17(0xcc,0xc3,0xae,0xc9)]=mek,_0x1bd89b[_0x16ea49(-0x2a5,-0x36c,-0x2b3,-0x2fb)](sendButImage,from,_0x57fa17(0x112,0xb2,0xa6,0x90)+_0x16ea49(-0x1a8,-0x29d,-0x1d2,-0x20b)+enter+enter+(_0x16ea49(-0x25b,-0x2de,-0x1cf,-0x249)+'patkan\x20*')+_0x3c8af0+('*\x20batu\x20dan'+'\x20')+_0x53bb8c+_0x16ea49(-0x2a9,-0x1b9,-0x204,-0x257)+enter+enter+(_0x57fa17(0x6c,-0x4,0x6,0x9a)+'ory\x20anda\x20d'+_0x57fa17(0xa4,0x57,0x1,0x81)+'\x20ketik\x20')+prefix+_0x57fa17(0x63,0x54,0x7b,0xdc),botname+_0x16ea49(-0x1e2,-0x1e1,-0x1ce,-0x1fc)+ownername,bbbb,[{'buttonId':'inv','buttonText':{'displayText':_0x1bd89b['aTnmt']},'type':_0x1bd89b['fNtoh']}],_0x39787a);},0x90d*0x1+-0x2314*0x1+0x25bf),setTimeout(()=>{function _0x1919f8(_0x26aacb,_0x48a96c,_0xe2d34a,_0x2b97a0){return _0x1eb754(_0x26aacb-0x116,_0x48a96c- -0x1b8,_0x26aacb,_0x2b97a0-0x98);}function _0x37366b(_0x4bcfbc,_0x149646,_0x43d509,_0x362c05){return _0x1eb754(_0x4bcfbc-0x25,_0x149646- -0x352,_0x4bcfbc,_0x362c05-0x143);}reply(_0x1919f8(0x412,0x3ae,0x330,0x3c9)+_0x1919f8(0x345,0x2dd,0x2ac,0x345)+_0x37366b(0x1f4,0x15f,0x192,0x153)+_0x37366b(0x24a,0x1d9,0x245,0x1fd));},0x2*-0xe8a+0x138e+-0x986*-0x1);}else{const _0x1e3ee9={};_0x1e3ee9['method']=_0x5b2460(-0x228,-0x24e,-0x25c,-0x289),seae=await getBuffer(_0x5b2460(-0x27f,-0x21b,-0x201,-0x1fb)+_0x5b2460(-0x1cb,-0x203,-0x218,-0x278)+'ile/168577'+_0x1eb754(0x577,0x570,0x592,0x60b)+_0x5b2460(-0x1f2,-0x16a,-0x1dd,-0x1d1),_0x1e3ee9),tesk=_0x5b2460(-0x11c,-0x14c,-0x13c,-0xd6)+_0x1eb754(0x502,0x4f6,0x4c8,0x4ca)+_0x1eb754(0x4a9,0x45f,0x4e3,0x4b8)+_0x5b2460(-0x284,-0x1ef,-0x1b1,-0x1c6)+_0x5b2460(-0x18b,-0x1e2,-0x160,-0x231)+'ens\x20River\x0a'+'🔵\x20Cochher\x20'+_0x1eb754(0x58a,0x584,0x52c,0x60e)+_0x5b2460(-0x126,-0x179,-0x1da,-0x1cc)+_0x5b2460(-0xf8,-0x17f,-0x14e,-0x166)+_0x5b2460(-0x21b,-0x24b,-0x2d5,-0x2e9)+'🟢\x20Chiltawa'+_0x1eb754(0x4ed,0x4f4,0x58b,0x514)+'imingstall'+_0x5b2460(-0x1df,-0x241,-0x259,-0x277)+_0x5b2460(-0x223,-0x22e,-0x21c,-0x252)+_0x5b2460(-0x2ed,-0x250,-0x235,-0x262)+'xample\x20:\x0a-'+'\x20'+prefix+(_0x1eb754(0x495,0x4d7,0x4f0,0x4ff)+_0x1eb754(0x40e,0x46a,0x468,0x461)+'er\x0a\x0aSumber'+_0x1eb754(0x4f2,0x512,0x513,0x4d6)+_0x5b2460(-0x244,-0x1d6,-0x26e,-0x1e0)+_0x5b2460(-0x1f8,-0x195,-0x146,-0x237)+'tasynamege'+_0x1eb754(0x590,0x52e,0x4e5,0x56b)+_0x1eb754(0x50f,0x574,0x578,0x4d5)),alpha['sendMessag'+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}break;case _0x5b2460(-0x238,-0x201,-0x1e8,-0x1cb):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x5b2460(-0x184,-0x1ff,-0x224,-0x1d5)+'\x20sudah\x20hab'+_0x5b2460(-0x1fe,-0x182,-0x1ba,-0x14a)+_0x1eb754(0x4cb,0x4b0,0x43d,0x4a1)+prefix+(_0x1eb754(0x4b9,0x517,0x486,0x5a2)+_0x1eb754(0x4cb,0x4d1,0x4d1,0x440)+_0x5b2460(-0x114,-0x146,-0xc7,-0x160)));if(!isEventon)return reply(_0x1eb754(0x564,0x4eb,0x513,0x4ed)+'\x20belum\x20di\x20'+_0x5b2460(-0x1cd,-0x171,-0x133,-0xd6));setTimeout(()=>{const _0x1f4de0={'mIXVQ':function(_0x3fb627,_0x587407){return _0x3fb627*_0x587407;},'hmVZl':function(_0xf4be54,_0x42816f){return _0xf4be54*_0x42816f;},'wamIQ':function(_0x217db3,_0x40135a,_0x4d9e4e){return _0x217db3(_0x40135a,_0x4d9e4e);},'TtNZi':function(_0x3c0daf,_0x5c98a6,_0x44e503){return _0x3c0daf(_0x5c98a6,_0x44e503);},'mshxk':function(_0x5eeebb,_0x528802){return _0x5eeebb(_0x528802);}};function _0x36eefe(_0x139f62,_0x431989,_0x4ed28e,_0x48f6d5){return _0x1eb754(_0x139f62-0x51,_0x48f6d5- -0x359,_0x139f62,_0x48f6d5-0x1f2);}const _0x17fafd=Math['ceil'](_0x1f4de0[_0x36eefe(0xc7,0x16f,0x106,0x11d)](Math['random'](),0x5a2*-0x3+0x119*-0xe+0x20a8)),_0x5c2176=Math[_0x15ecdf(0x330,0x25c,0x2f2,0x2d1)](_0x1f4de0[_0x15ecdf(0x2cb,0x390,0x352,0x3b4)](Math['random'](),-0x99e+0x5a*-0x2f+-0x1a42*-0x1));function _0x15ecdf(_0x399c34,_0x1a4007,_0x2c3bb8,_0x45eeef){return _0x5b2460(_0x399c34-0x1d4,_0x2c3bb8-0x47d,_0x1a4007,_0x45eeef-0x17b);}const _0xe2d56d=Math[_0x36eefe(0x185,0x197,0x260,0x1c4)](_0x1f4de0[_0x15ecdf(0x2c9,0x2dd,0x352,0x341)](Math[_0x36eefe(0x13a,0x16f,0x80,0xfb)](),-0x1bbf+-0xbd2+0x279b));_0x1f4de0[_0x36eefe(0x1bd,0x22f,0x246,0x22d)](addStone,sender,_0x17fafd),addCoal(sender,_0x5c2176),_0x1f4de0[_0x15ecdf(0x30e,0x288,0x323,0x39a)](addOre,sender,_0xe2d56d),_0x1f4de0[_0x15ecdf(0x2b4,0x2bb,0x316,0x2f8)](reply,_0x15ecdf(0x3d9,0x375,0x339,0x34f)+'ation\x20🎊*'+enter+enter+(_0x36eefe(0xe5,0x168,0x18d,0x115)+_0x15ecdf(0x275,0x1fa,0x28a,0x28c))+_0x17fafd+_0x15ecdf(0x307,0x22d,0x2cc,0x2d2)+_0x5c2176+(_0x15ecdf(0x320,0x314,0x34c,0x3e8)+'an\x20*')+_0xe2d56d+_0x36eefe(0x14d,0x89,0x11c,0x114));},0x25fe+0x64b+-0x2091),setTimeout(()=>{function _0x462704(_0x40d2aa,_0x52bf40,_0x32f8b5,_0x4df5de){return _0x5b2460(_0x40d2aa-0x111,_0x4df5de- -0x8a,_0x32f8b5,_0x4df5de-0x15);}function _0x4d808a(_0x5d1da4,_0x4a5c56,_0x47c7d1,_0x52848f){return _0x5b2460(_0x5d1da4-0x75,_0x4a5c56-0x470,_0x47c7d1,_0x52848f-0x35);}const _0x5d9f32={'bjwkt':function(_0x351fbc,_0xb7afbc){return _0x351fbc(_0xb7afbc);},'WqqSJ':_0x462704(-0x272,-0x1b7,-0x1d9,-0x23d)+_0x4d808a(0x291,0x301,0x371,0x3a0)+_0x4d808a(0x2de,0x2c5,0x2fd,0x26f)+'ggu...'};_0x5d9f32[_0x4d808a(0x2ee,0x34d,0x30a,0x306)](reply,_0x5d9f32[_0x4d808a(0x327,0x334,0x32a,0x368)]);},0xbb7*-0x2+0x1a95+-0x10d*0x3);break;case _0x5b2460(-0x12c,-0x18d,-0x14b,-0x1fc):if(!isEventon)return reply(_0x5b2460(-0x149,-0x1cc,-0x22c,-0x192)+'a\x20bro,\x20tap'+'i\x20event\x20gr'+_0x1eb754(0x4ab,0x4ea,0x543,0x583)+_0x1eb754(0x426,0x4a0,0x476,0x4d1));setTimeout(()=>{const _0x4a70c4={'axUZO':function(_0xfc2c02,_0xebe88e){return _0xfc2c02*_0xebe88e;},'RNDzi':function(_0x15b866,_0x5b5498,_0x5f0ff3){return _0x15b866(_0x5b5498,_0x5f0ff3);},'NjMCU':function(_0x51088d,_0x72e1e){return _0x51088d(_0x72e1e);}};function _0x5af91d(_0x6b5260,_0x419ee0,_0xaecc90,_0x769ccb){return _0x5b2460(_0x6b5260-0x33,_0x419ee0-0x6b,_0xaecc90,_0x769ccb-0x1ae);}const _0x507dab=Math[_0x14e0a5(-0x54,0x5,-0x9b,-0x76)](_0x4a70c4[_0x5af91d(-0x138,-0xaa,-0x140,-0x46)](Math[_0x14e0a5(-0x162,-0xc4,-0x143,-0x3f)](),-0x4ac*-0x3+0x59*0x42+-0x24e2));_0x4a70c4[_0x14e0a5(-0x1c,0x8,0x9,-0x2)](addKayu,sender,_0x507dab);function _0x14e0a5(_0x4fe416,_0x640a70,_0x3531a9,_0x49667f){return _0x5b2460(_0x4fe416-0xd6,_0x640a70-0x190,_0x49667f,_0x49667f-0xaf);}_0x4a70c4[_0x5af91d(-0x182,-0x125,-0xeb,-0x17e)](reply,_0x5af91d(-0x11f,-0xd9,-0x9c,-0x4e)+_0x5af91d(-0x5a,-0xca,-0xe1,-0xe5)+enter+enter+(_0x5af91d(-0x1e7,-0x1cc,-0x1fd,-0x23d)+_0x5af91d(-0x223,-0x1c2,-0x1c9,-0x188))+_0x507dab+(_0x5af91d(-0x117,-0x1ac,-0x23c,-0x130)+'ma\x202\x20menit'));},0x5*0x13d+0xeb9+0xb*-0xd6),setTimeout(()=>{const _0x2d5451={'BMhqP':function(_0x2adb1d,_0x20bd95){return _0x2adb1d(_0x20bd95);},'WeGff':_0x424819(0x306,0x31f,0x362,0x269)+'ambang,\x20si'+_0x424819(0x30e,0x370,0x344,0x2ec)+_0x408741(0x251,0x1f3,0x238,0x24d)};function _0x408741(_0x2774ac,_0x56289c,_0x16eee9,_0x482fac){return _0x5b2460(_0x2774ac-0x106,_0x2774ac-0x367,_0x56289c,_0x482fac-0x128);}function _0x424819(_0x2fd744,_0x277c60,_0x5b66b7,_0x122e42){return _0x1eb754(_0x2fd744-0x1b8,_0x2fd744- -0x1ef,_0x5b66b7,_0x122e42-0x52);}_0x2d5451[_0x408741(0x17a,0x103,0x1e8,0x15d)](reply,_0x2d5451[_0x408741(0x1d9,0x177,0x22b,0x205)]);},-0x1cb2+-0x22c6*0x1+-0x4*-0xfde);break;case _0x5b2460(-0x249,-0x238,-0x21d,-0x239):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x425,0x4a9,0x443,0x4ee)+_0x5b2460(-0x1a6,-0x216,-0x284,-0x261)+_0x5b2460(-0x127,-0x182,-0x117,-0x1e4)+_0x1eb754(0x41b,0x4b0,0x452,0x500)+prefix+('limit\x20untu'+_0x5b2460(-0x237,-0x1d7,-0x207,-0x1d2)+'\x20limit'));if(!isEventon)return reply(_0x1eb754(0x465,0x4eb,0x49c,0x52e)+_0x5b2460(-0xbe,-0x132,-0x17c,-0x15d)+_0x5b2460(-0x1b0,-0x171,-0xf4,-0x19b));setTimeout(()=>{function _0x599b29(_0x4a7843,_0x63c01f,_0x477f3d,_0x3d0744){return _0x5b2460(_0x4a7843-0x11a,_0x4a7843- -0x38,_0x63c01f,_0x3d0744-0xd);}function _0x18507c(_0x22ff7f,_0x169221,_0x1ca8f1,_0x21e34d){return _0x5b2460(_0x22ff7f-0xec,_0x21e34d-0x593,_0x1ca8f1,_0x21e34d-0x150);}const _0x1dbae7={'PxilW':_0x18507c(0x43f,0x43e,0x3ea,0x3f5),'kBgtb':_0x18507c(0x436,0x347,0x44c,0x3cc),'huHVl':'jupiter','zkUmz':_0x599b29(-0x21e,-0x2b2,-0x1b7,-0x269),'UCgFg':_0x599b29(-0x197,-0x1ef,-0x1fd,-0x16d),'bUmHS':_0x599b29(-0x27f,-0x319,-0x206,-0x27c),'YXVkJ':function(_0x3374d1,_0x418f82,_0x4165cd){return _0x3374d1(_0x418f82,_0x4165cd);}},_0x3226f2=Math[_0x18507c(0x4a9,0x376,0x471,0x408)](Math[_0x18507c(0x3dc,0x32b,0x332,0x33f)]()*(-0x36c+0x596+-0x1c6)),_0x1e9787=[_0x1dbae7['PxilW'],'venus',_0x1dbae7['kBgtb'],_0x1dbae7['huHVl'],_0x1dbae7[_0x18507c(0x4ac,0x3d3,0x3df,0x40a)],_0x1dbae7['UCgFg'],_0x1dbae7[_0x599b29(-0x1fc,-0x199,-0x23f,-0x179)]],_0x401df0=_0x1e9787[Math[_0x18507c(0x40c,0x368,0x333,0x385)](Math['random']()*_0x1e9787[_0x599b29(-0x199,-0x14a,-0x19b,-0x1fa)])];_0x1dbae7[_0x599b29(-0x1e6,-0x188,-0x1a7,-0x147)](addPlanet,sender,_0x3226f2),reply(_0x18507c(0x3b5,0x3f7,0x3ad,0x44f)+_0x599b29(-0x16d,-0x208,-0x1f1,-0x16e)+enter+enter+('kamu\x20menda'+_0x599b29(-0x265,-0x2ac,-0x1fa,-0x1ea))+_0x3226f2+('*bahan\x20kim'+_0x18507c(0x492,0x481,0x35e,0x3fb))+_0x401df0+(_0x18507c(0x43c,0x463,0x412,0x42b)+_0x599b29(-0x212,-0x1b7,-0x1b4,-0x17e)));},0x832+-0x844+0xbca),setTimeout(()=>{function _0x4491b4(_0x128695,_0x4dc5e6,_0x41796f,_0x4dcc1e){return _0x1eb754(_0x128695-0xc0,_0x41796f- -0x11e,_0x128695,_0x4dcc1e-0x28);}const _0x9e0938={'opsNm':function(_0x54bfef,_0x1da12b){return _0x54bfef(_0x1da12b);},'rtpJp':'Sedang\x20ber'+'tualang,\x20s'+_0x4491b4(0x2f1,0x307,0x37d,0x2f1)+_0x3dbf07(0x46b,0x437,0x429,0x41c)+'tahun'};function _0x3dbf07(_0x52ac70,_0x1f442c,_0x1d0724,_0x29bc3b){return _0x5b2460(_0x52ac70-0x179,_0x1d0724-0x5d0,_0x29bc3b,_0x29bc3b-0xd8);}_0x9e0938[_0x3dbf07(0x4b8,0x3aa,0x446,0x3ea)](reply,_0x9e0938[_0x4491b4(0x39c,0x3d2,0x434,0x40f)]);},-0x6aa*-0x5+0xd83*0x2+-0x3c58);break;case _0x5b2460(-0xde,-0x158,-0x132,-0x136)+_0x5b2460(-0x1a5,-0x148,-0x192,-0xd2):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu'+_0x1eb754(0x45c,0x492,0x4ef,0x45f)+'is\x20silahka'+_0x1eb754(0x48a,0x4b0,0x50f,0x490)+prefix+(_0x1eb754(0x5b1,0x517,0x493,0x56d)+_0x5b2460(-0x216,-0x1d7,-0x191,-0x17d)+_0x5b2460(-0x1db,-0x146,-0x10b,-0x15b)));if(!isEventon)return reply(_0x1eb754(0x555,0x4eb,0x45a,0x584)+_0x1eb754(0x601,0x576,0x541,0x50a)+'aktifkan');buayar=body[_0x5b2460(-0x285,-0x246,-0x24a,-0x277)](0x1*-0x1822+-0x1121*0x2+0x204*0x1d);const hargakimia=0x26a7+0x6d*-0x4b+-0x2d0,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=-0x16*0x37+-0x1f0b+-0x13*-0x1e2)return reply(_0x1eb754(0x528,0x4de,0x50a,0x44f)+pushname+(_0x1eb754(0x45e,0x4b3,0x436,0x544)+_0x5b2460(-0x98,-0x125,-0xf5,-0x187)+_0x5b2460(-0x188,-0x1f0,-0x1d5,-0x22d)));getBertualangPlanet(sender)>=0x149c+0x1ed8+-0x3373&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply('*「\x20PENJUAL'+'AN\x20BERHASI'+_0x1eb754(0x4f1,0x504,0x555,0x4b6)+enter+enter+(_0x1eb754(0x44e,0x466,0x3d0,0x4ff)+_0x1eb754(0x421,0x459,0x4e5,0x3e9)+_0x5b2460(-0x266,-0x1df,-0x22b,-0x1be))+buayar+enter+(_0x5b2460(-0x25c,-0x258,-0x2dd,-0x1c5)+_0x1eb754(0x57d,0x580,0x51f,0x562))+dapetin+enter+enter+(_0x1eb754(0x562,0x58b,0x5fc,0x528)+_0x1eb754(0x51b,0x55e,0x4e3,0x520))+getBertualangPlanet(sender)+enter+(_0x5b2460(-0x14f,-0x120,-0x15a,-0x133)+':*\x20')+checkATMuser(sender)+enter+enter+(_0x1eb754(0x4f4,0x4ab,0x463,0x438)+_0x5b2460(-0x1cf,-0x20a,-0x2a3,-0x219)+_0x5b2460(-0x228,-0x1bf,-0x1b1,-0x12f)+_0x1eb754(0x522,0x48c,0x477,0x44a)+_0x5b2460(-0x245,-0x218,-0x285,-0x282)+'ak1920kal')));break;case _0x1eb754(0x45f,0x452,0x428,0x3e5)+_0x5b2460(-0xf9,-0x148,-0xcd,-0xae):teks=_0x1eb754(0x414,0x466,0x488,0x4c0)+_0x1eb754(0x419,0x468,0x4ad,0x4b4)+_0x1eb754(0x505,0x53f,0x586,0x4e2)+_0x5b2460(-0x1fd,-0x17b,-0x184,-0x1d5)+pushname+(_0x5b2460(-0x2cf,-0x22f,-0x23f,-0x23d)+'\x0a\x0a*_')+getBertualangPlanet(sender)+'_*';const _0x4a3e1f={};_0x4a3e1f[_0x1eb754(0x547,0x575,0x558,0x5e9)]=mek,alpha[_0x5b2460(-0x154,-0x192,-0x1a1,-0x1a5)+'e'](from,teks,text,_0x4a3e1f);break;case _0x5b2460(-0x232,-0x1d5,-0x240,-0x1b6):case _0x1eb754(0x565,0x4fb,0x4e9,0x466):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x1eb754(0x4c6,0x4a9,0x4f2,0x453)+'\x20sudah\x20hab'+_0x5b2460(-0x17f,-0x182,-0x19a,-0x153)+_0x1eb754(0x423,0x4b0,0x4f3,0x503)+prefix+(_0x1eb754(0x551,0x517,0x56f,0x4c7)+_0x5b2460(-0x1e7,-0x1d7,-0x26a,-0x1d2)+_0x1eb754(0x533,0x562,0x5a7,0x53f)));if(!isEventon)return reply('Event\x20grub'+_0x1eb754(0x588,0x576,0x5b7,0x5ec)+'aktifkan');cas=body[_0x5b2460(-0x2cd,-0x246,-0x2db,-0x276)](-0x21*0xeb+0x1df5+0x2e*0x2);if(checkATMuser(sender)<cas)return reply(_0x5b2460(-0x118,-0x145,-0x18b,-0x139)+_0x1eb754(0x4de,0x4c3,0x4e9,0x525)+_0x1eb754(0x4c1,0x55b,0x4bd,0x555)+_0x1eb754(0x563,0x4c7,0x522,0x4be)+_0x1eb754(0x44b,0x4d3,0x459,0x571));if(args[_0x1eb754(0x579,0x547,0x5a2,0x54b)]<0x13bc+-0x250e+-0x5*-0x377)return reply(_0x1eb754(0x5d0,0x56b,0x563,0x4fb)+_0x5b2460(-0x185,-0x129,-0x1c0,-0x9f));if(isNaN(cas))return reply(_0x5b2460(-0x26d,-0x212,-0x27b,-0x29b)+_0x1eb754(0x54e,0x4c1,0x552,0x4c4));const resg=[_0x1eb754(0x51d,0x4e7,0x506,0x489)+_0x5b2460(-0x12c,-0x151,-0x126,-0xee),'Kamu\x20KALAH'+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{function _0x58a7fb(_0x362b02,_0x25a1a3,_0x1afad3,_0x2bcd2a){return _0x5b2460(_0x362b02-0x98,_0x1afad3-0x58a,_0x362b02,_0x2bcd2a-0xb9);}const _0x485672={'GJPag':function(_0xd7b851,_0x46dbc4){return _0xd7b851*_0x46dbc4;},'pGQbE':function(_0x5b165e,_0x276bb9){return _0x5b165e+_0x276bb9;},'unBYx':function(_0x23985b,_0x3be72d){return _0x23985b==_0x3be72d;},'oCPqx':function(_0x59613d,_0x4e6bda,_0x2edfb5){return _0x59613d(_0x4e6bda,_0x2edfb5);},'dOwZM':function(_0x154b1d,_0x1fd99b){return _0x154b1d(_0x1fd99b);},'KRPuh':function(_0x579c87,_0x242e19){return _0x579c87(_0x242e19);},'UGAku':'Error\x20'},_0x1e1bfc=Math[_0x4f5c2b(0x3c3,0x45e,0x33d,0x330)](_0x485672[_0x4f5c2b(0x30a,0x332,0x2e0,0x32e)](Math[_0x4f5c2b(0x2fa,0x2fd,0x29f,0x365)](),0xc80+0x1*0x1a06+-0x2684)),_0x3fc381=_0x485672[_0x58a7fb(0x3f6,0x406,0x405,0x400)](cas,0x26e8+-0x10f3*-0x2+0x2*-0x2467);function _0x4f5c2b(_0x4201bf,_0x1b9729,_0x2f7f51,_0x5cddf9){return _0x5b2460(_0x4201bf-0x13d,_0x4201bf-0x54e,_0x5cddf9,_0x5cddf9-0x1bc);}const _0x467e73=resg[Math['floor'](_0x485672[_0x4f5c2b(0x30a,0x26a,0x298,0x2fb)](Math[_0x58a7fb(0x341,0x3d4,0x336,0x2ef)](),resg[_0x58a7fb(0x486,0x3b0,0x429,0x42e)]))];if(_0x485672[_0x4f5c2b(0x432,0x4cc,0x46d,0x3cb)](_0x467e73,'Kamu\x20MENAN'+_0x58a7fb(0x431,0x462,0x439,0x3e9)))_0x485672[_0x58a7fb(0x3e6,0x38a,0x3d2,0x339)](addKoinUser,sender,_0x3fc381),_0x485672[_0x58a7fb(0x3bf,0x471,0x3fe,0x36c)](reply,_0x58a7fb(0x4c4,0x42c,0x446,0x4db)+_0x58a7fb(0x3bf,0x464,0x455,0x496)+enter+enter+(_0x4f5c2b(0x318,0x31c,0x359,0x33b)+_0x4f5c2b(0x30b,0x269,0x30c,0x351)+_0x4f5c2b(0x355,0x3e5,0x3a9,0x3b1)+_0x58a7fb(0x477,0x3b0,0x3e5,0x424))+_0x3fc381+'_*'+enter+enter+(_0x4f5c2b(0x306,0x305,0x30e,0x272)+_0x4f5c2b(0x393,0x39c,0x409,0x345)+'\x20membeli\x20l'+'imit'));else _0x467e73==_0x4f5c2b(0x353,0x31f,0x302,0x39e)+'!!'?(confirmATM(sender,cas),_0x485672[_0x58a7fb(0x443,0x489,0x43c,0x3d3)](reply,_0x58a7fb(0x451,0x483,0x45d,0x423)+'\x20🥺\x20dan\x20keh'+_0x4f5c2b(0x394,0x337,0x30c,0x41a)+_0x58a7fb(0x466,0x475,0x433,0x442)+'\x20'+cas)):reply(_0x485672[_0x4f5c2b(0x41f,0x457,0x44f,0x421)]);},0xd7*-0xb+0xb61*-0x1+0x2056),setTimeout(()=>{function _0x25187e(_0x1a445d,_0x4d6347,_0x254713,_0x2ba913){return _0x5b2460(_0x1a445d-0x91,_0x1a445d-0x61f,_0x4d6347,_0x2ba913-0x12f);}const _0x4c5995={'yxeFe':function(_0x5128ba,_0x2d90fc){return _0x5128ba(_0x2d90fc);}};_0x4c5995['yxeFe'](reply,_0x25187e(0x490,0x4ee,0x4ed,0x47d)+'asil!.');},0x1493+-0x1*0x4eb+0x3*-0x538),await limitAdd(sender,limit);break;case _0x5b2460(-0x180,-0x206,-0x27e,-0x249):case'tas':case _0x5b2460(-0x165,-0x1a2,-0x1a1,-0x1aa):inventory=_0x5b2460(-0x181,-0x1ee,-0x22a,-0x1f5)+_0x1eb754(0x4bb,0x478,0x437,0x4f2)+_0x5b2460(-0x288,-0x220,-0x1e7,-0x217)+_0x1eb754(0x540,0x505,0x482,0x520)+getMiningcoal(sender)+(_0x1eb754(0x5d5,0x556,0x51e,0x528)+_0x1eb754(0x4b7,0x4f2,0x4bf,0x477))+getMiningstone(sender)+('\x0a❄️\x20*COPPER'+_0x5b2460(-0x1a3,-0x235,-0x253,-0x250))+getMiningore(sender)+('\x0a🛠️\x20*INGOT\x20'+'ORE*\x20:\x20')+getMiningingot(sender)+('\x0a🌐\x20*WOOD*\x20'+':\x20')+getNebangKayu(sender)+(_0x5b2460(-0x120,-0x16c,-0x15d,-0x191)+':\x20')+getMancingIkan(sender)+(_0x1eb754(0x5e3,0x56f,0x542,0x606)+_0x5b2460(-0x21a,-0x1dc,-0x16b,-0x1be)+_0x5b2460(-0x1e5,-0x16d,-0x11d,-0x1c1)+_0x5b2460(-0x18f,-0x150,-0x155,-0x183)+_0x5b2460(-0x12b,-0x186,-0x146,-0x1a6)+'nyak\x20inven'+_0x5b2460(-0x14c,-0x1c5,-0x1f8,-0x1d7)),alpha['sendMessag'+'e'](from,pp_userz,image,{'thumbnail':Buffer[_0x1eb754(0x45c,0x477,0x4b3,0x50c)](0x584*0x1+0xf67*0x1+-0x33*0x69),'quoted':mek,'caption':inventory});break;}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), 'SELF-MODE', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}