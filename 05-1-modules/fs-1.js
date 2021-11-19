// destruct the fs
const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./text1.txt','utf-8')
const second = readFileSync('./text2.txt','utf-8')

// it will generate that folder if it not exist 
// and if it exist it will override it 
writeFileSync('./result-sync.txt',`here is the result : 
${first}, ${second} .`/*  ,{flag:'a'}  */)
// and we have a third arg 
// it is a {flag:'a'} and the a stands for append
// and if we use this {flag:'a'} it will starts newline
// and append the value that given
