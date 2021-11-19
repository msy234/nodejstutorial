//NOTE : the console logs here shows you
// async work how the 
// destruct the fs
const {readFile,writeFile} = require('fs')

// NOTE : we must add the utf-8 cause if we dont 
// the result will be the buffer
console.log('start')
readFile('./text1.txt','utf-8',(err,result)=>{
    // in case of error accured
    if(err){
        console.log("error happend try again")
        return
    } 
    //in case of result(successful reading of the file)
    // we assign the result in first var
    // and read the second one
    const first = result

    readFile('./text2.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        // in case of success we assign the result
        // in the second var and write on the file
        const second = result
        // NOTE : if not exist it will create it
        // that is an async :)
        writeFile('./result-async.txt',`here is the result : 
        ${first}, \n ${second} .`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with this task')
        })
    })
})
console.log('strarting new task')

