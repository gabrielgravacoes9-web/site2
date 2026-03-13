const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static("public"))

app.get("/registrar", (req,res)=>{

let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
let data = new Date().toLocaleString()

let acessos = []

if(fs.existsSync("acessos.json")){
acessos = JSON.parse(fs.readFileSync("acessos.json"))
}

acessos.push({
ip: ip,
data: data
})

fs.writeFileSync("acessos.json", JSON.stringify(acessos,null,2))

res.json({status:"ok"})
})

app.get("/acessos",(req,res)=>{

if(fs.existsSync("acessos.json")){
res.sendFile(__dirname + "/acessos.json")
}else{
res.json([])
}

})

app.listen(3000,()=>{
console.log("Servidor rodando em http://localhost:3000")
})