import fs from 'node:fs'


const content = fs.readFileSync('demo.txt', {encoding: 'ascii'})
console.log(content)