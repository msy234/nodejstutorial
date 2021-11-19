// npm Global command come with node 
// npm --version 

// local dependency - use it only in this particular project
// npm i <packageName>

// Gloabal dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (store important info about our project/package)
// manual appraoch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// this is how to use external modules
// of course we can name the var what ever we want
const _ = require('lodash')
const arr = [1,[2,[3,[4]]]]
const newArr = _.flattenDeep(arr)
console.log(newArr)
// output : [ 1, 2, 3, 4 ]