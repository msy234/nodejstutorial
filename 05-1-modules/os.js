const os = require('os')
// info about user
const user = os.userInfo()
console.log(user)
/* output:
    {   uid: -1,
        gid: -1,
        username: 'hp',
        homedir: 'C:\\Users\\hp',
        shell: null 
    }
*/

//method that returns the system uptime in seconds
console.log(`the system uptime is : ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    relase: os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS)
// output:
// { name: 'Windows_NT',
//   relase: '6.1.7601',
//   totalMem: 4188385280,
//   freeMem: 1860980736 }