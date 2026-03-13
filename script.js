function login(){

let user = document.getElementById("user").value;
let pass = document.getElementById("pass").value;

let usuarios = {
admin: "dsao",
gabriel: "1234",
vip: "vip123"
};

if(usuarios[user] === pass){
window.location.href = "vip.html";
}else{
alert("Login errado");
}

}

if(window.location.pathname.includes("vip.html")){

fetch("https://api.ipify.org?format=json")
.then(res => res.json())
.then(data => {

let ip = data.ip;

let historico = JSON.parse(localStorage.getItem("historico")) || [];

let dataHora = new Date().toLocaleString();

historico.push("IP: " + ip + " | " + dataHora);

localStorage.setItem("historico", JSON.stringify(historico));

let lista = document.getElementById("lista");

historico.forEach(item =>{

let li = document.createElement("li");

li.textContent = item;

lista.appendChild(li);

});

});

}