const fs = require("fs")
// const quote = "No beauty shines brighter than of a good heart🥰"


// fs.writeFile("./awesome.html",quote,(err)=>{
//     console.log("Completed writing awesome.html")
// });


// // task1
// const quote2 ="Live more,Worry less🥰"

// for(let i = 0;i<=10;i++)
// {
//     fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>{
//         console.log(`Completed writing text-${i}.html`)
//     }); 
// }
// task2
// node fs.js 20 -> 20 files to be created|note-1.txt,note-2.txt....note-20.txt

//  const[,,noOfFiles] = process.argv
// //console.log(noOfFiles)

// const quote3 = "Happy Day"
// for(let i = 1;i<=noOfFiles;i++)
// {
    
//     fs.writeFile(`./backup/note-${i}.txt`,quote3,(err)=>{
//         if(err) throw err;
//         console.log(`Completed writing note-${i}.txt`)
//     }); 
// }

// fs.readFile("./cool123.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log("Error❌",err)
//     }
//     console.log("The content of the file is ☑:",data)
// });

// append file

// const niceQuote = "\n Make everyday a little less ordinary🥰";

// fs.appendFile("./nice.txt",niceQuote,(err)=>{
//     console.log("Completed writing nice.txt")
// })

//todelelte
// fs.unlink("./toRemove.txt",(err)=>{
//     console.log("Deleted Successfully ")
// })

//  //readdir--no of files in a particular folder

//  fs.readdir("./backup",(err,files)=>{
//     console.log("All file names",files);
//  })

 //deleteAll in backup folder

// fs.readdir("./backup",(err,data)=>{
    
//     data.forEach(fileName =>{
//         fs.unlink(`./backup/${fileName}`,(err)=>{
//             console.log(`Deleted Successfully`,fileName)
//         });
//     })

// })
// ================================================================================  



// Sync writeFile
const[,,noOfFiles] = process.argv;
const quote3 = "Happy Day"
for(let i = 1;i<=noOfFiles;i++)
{    
    fs.writeFileSync(`./backup/note-${i}.txt`,quote3)
    {
        console.log("Completed writing",i)
    }
} 











































