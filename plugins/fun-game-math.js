global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`❕⊱𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉⊱❕\n\n✨ 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝙇𝙊𝙎 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙊 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙇𝘼 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿\n✨ 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙐𝙎𝙀 𝙏𝙃𝙀 𝘽𝙐𝙏𝙏𝙊𝙉𝙎 𝙊𝙍 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔

𝙉𝙄𝙑𝙀𝙇 𝘿𝙀 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿 | 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔 
${Object.keys(modes).join('  |  ')}

𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
${usedPrefix + command} noob
${usedPrefix + command} impossible2

𝙈𝙄𝙀𝙉𝙏𝙍𝘼𝙎 𝙈𝘼𝙎 𝘿𝙄𝙁𝙄𝘾𝙐𝙇𝙏𝘼𝘿 𝙋𝙊𝘿𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙈𝘼𝙔𝙊𝙍 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼
𝙏𝙃𝙀 𝙈𝙊𝙍𝙀 𝘿𝙄𝙁𝙁𝙄𝘾𝙐𝙇𝙏𝙔 𝙔𝙊𝙐 𝘾𝘼𝙉 𝙂𝙀𝙏 𝙏𝙃𝙀 𝙂𝙍𝙀𝘼𝙏𝙀𝙍 𝙍𝙀𝙒𝘼𝙍𝘿
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['𝙼𝙰𝚃𝙴𝚂 𝙴𝙰𝚂𝚈', `${usedPrefix + command} easy`], 
['𝙼𝙰𝚃𝙴𝚂 𝙼𝙴𝙳𝙸𝚄𝙼', `${usedPrefix + command} medium`], 
['𝙼𝙰𝚃𝙴𝚂 𝙷𝙰𝚁𝙳', `${usedPrefix + command} hard`]], m)
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝚃𝙾𝙳𝙰𝚅𝙸𝙰 𝙷𝙰𝚈 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰𝚂 𝚂𝙸𝙽 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃!*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `𝙲𝚄𝙰𝙽𝚃𝙾 𝙴𝚂 𝙴𝙻 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 *${math.str}*?\n\n*⏳ 𝚃𝙸𝙴𝙼𝙿𝙾: ${(math.time / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*\n*🏆 𝙶𝙰𝙽𝙰 𝙷𝙰𝚂𝚃𝙰: ${math.bonus} 𝚇𝙿*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙴 𝙰𝙷 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙿𝙰𝚁𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁*\n\n*𝙻𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝙴𝚂 ${math.result}*`, author, null, [['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
