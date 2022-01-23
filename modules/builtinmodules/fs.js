const { error } = require('console');
const { create } = require('domain');
const fs = require('fs');
const path = require('path')

// console.log(fs)
// fs.readFile("../student.txt", (error, data) => {
//     if(error){
//         console.log("i wont work because u fail to load me well" + error)
//     }else{
//         console.log(data.toString())
//     }
// });


// fs.writeFile("../student.txt", "6 Leke", (error) =>{
//     if(error){
//         console.log("Please i cant write this path because i no dey see am" + error)
//     }else{
//         console.log("Done")
//     }
// })


// fs.appendFile("../student.text", "\n 3. Monday", (error) =>{
//     if(error){
//         console.log("Not possibe" + error)
//     }else{
//         console.log("done")
//     }
// })


fs.mkdir(path.join ("../builtinmodules", 'New'), (error) =>{
    if(error){
        let fileName = "Newfolder 1";
        let x = parseInt(fileName.slice(9));
        let currentFile = x ++;
        let newFile = 'New' + currentFile.toString();
        // console.log("Your file cant be created please check your error message and try again" + error)
        return fs.mkdir(path.join("../builtinmodules", newFile), (error) => {
            console.log(error);
          });
    }
    else{
        console.log("Your file has been created successfully")
    };
});

// if (error) {
//     let fileName = "Newfolder 1";
//     let x = parseInt(fileName.slice(9));
//     let currentFile = x + 1;
//     let newFile = 'fileName' + currentFile.toString();
  
//     return fs.mkdir(path.join("../builtinmodules", newFile), (error) => {
//       console.log(error);
//     });
//   }