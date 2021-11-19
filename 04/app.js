// Common js - every file is a module (by default)
// Modules - Ecnapsulated Code (only share minimum)

const names = require('./names')
const sayHi = require('./utils');
const data = require('./alternative_flavor')
console.log(names)
// output : { peter: 'peter', john: 'john' }

sayHi('mustafa')
// output : welcome mustafa

sayHi(names.john)
sayHi(names.peter)
// we can access it since it obj

console.log(data)
// output : { items: [ 'item1', 'item2' ],singlePerson: { name: 'mustafa' } }

// mind grenade
require('./mind-grenade') 
// output : the sum is : 15
// note : once you import the module you invoke it