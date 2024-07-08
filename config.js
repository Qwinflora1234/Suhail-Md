const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104107887";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_48_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA2MixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2lHYlJZMDExK2tTM1JEWkRPcTRDUkFWK0tFbEpGSGxIWC8wMXlGYnFrND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYm1mc2dCSmdRbVNUWmlOZGxaTi14UVwiLFxuICBcInBob25lSWRcIjogXCI4ZGJmNzk3ZC0xNTEyLTQ2YWYtYjMwNC1kN2E5NTljNTcwY2NcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDUsXG4gICAgICA0NSxcbiAgICAgIDkzLFxuICAgICAgODgsXG4gICAgICA4MCxcbiAgICAgIDMwLFxuICAgICAgMjQ4LFxuICAgICAgMTU1LFxuICAgICAgOTQsXG4gICAgICAxMTYsXG4gICAgICA2NSxcbiAgICAgIDI5LFxuICAgICAgMTk5LFxuICAgICAgMTQwLFxuICAgICAgMjE3LFxuICAgICAgMjMyLFxuICAgICAgMjQ5LFxuICAgICAgMTc3LFxuICAgICAgMTE1LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgNzEsXG4gICAgICAxNTcsXG4gICAgICA3NixcbiAgICAgIDk2LFxuICAgICAgMjIwLFxuICAgICAgMTMzLFxuICAgICAgNDIsXG4gICAgICA4MSxcbiAgICAgIDg0LFxuICAgICAgMjUsXG4gICAgICA1NCxcbiAgICAgIDc0LFxuICAgICAgMTQ3LFxuICAgICAgMTIxLFxuICAgICAgMjE0LFxuICAgICAgMTU0LFxuICAgICAgMTYzLFxuICAgICAgNzQsXG4gICAgICAxOTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1BIWVRCNENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDQxMDc4ODc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMwODc2MjYwMjcwMTIwOjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFBpeGhFUWxzQ3Z0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDbC9ET2M4Rm9xbkQwMm05VUFGYWJGbkdlcTF4OW5jS2x3RzRvTm1iRFhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJVdDBmSEYzTG9oOHhEVDJuZDAwYkErb0ZLTlhPTTQxM1N5TTdNaWtMSU5ublh2QVl0ZFRnRUNqc0FLMU81bGRvMVZnM0VyMXFNZXk2NGlIY0paaEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRIMlRlNVVDRC96YjJRUDJpa0doSzJPSWc2dEFwRHVRb01pcnk0ZGtSV3NQOS9GMldiTE5NdFRuME55T3hiVXR6dDU5VFZzVnU3MHlMUFpocWtkUERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDQxMDc4ODc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDI5MDVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
