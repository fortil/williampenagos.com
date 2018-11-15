const fs = require('fs')
const { resolve } = require('path')
fs.createReadStream(resolve(__dirname, 'static', 'manifest.json'))
  .pipe(fs.createWriteStream(resolve(__dirname, 'out', 'manifest.json')))
  .on('end', () => {
    console.log('Fle copy successed')
  })
fs.createReadStream(resolve(__dirname, 'static', 'sw.js'))
  .pipe(fs.createWriteStream(resolve(__dirname, 'out', 'sw.js')))
  .on('end', () => {
    console.log('Fle copy successed')
  })