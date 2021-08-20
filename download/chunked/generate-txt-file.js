const fs = require('fs')

const writeStream = fs.createWriteStream(__dirname + '/file.txt')
// 可通过增加循环次数，生成大的文本文件
for (let i = 0; i < 50; i++) {
  writeStream.write(`${i} sdddddd\n`, 'utf8')
}

writeStream.end()
