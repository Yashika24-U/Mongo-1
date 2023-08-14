const fs = require("fs")

const quote = "No beauty shines brighter than of a good heart🥰"

fs.writeFile("./awesome.html",quote,(err)=>{
    console.log("Completed writing awesome.html")
});


const quote2 ="Live more,Worry less🥰"
for(let i = 0;i<=10;i++)
{
    fs.writeFile("./awesome${i}.html",quote2,(err)=>{
        console.log("Completed writing awesome2.html")
    }); 
}