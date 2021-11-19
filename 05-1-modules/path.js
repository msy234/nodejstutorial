const path = require('path')
console.log(path.sep)
// output : \

const filepath = path.join('/nodejs&Express','05-modules',
'text.txt')
// output : \nodejs&Express\05-modules\text.txt
console.log(filepath)

// gets only the last portion
const basefile = path.basename(filepath)
console.log(basefile)
// output : text.txt