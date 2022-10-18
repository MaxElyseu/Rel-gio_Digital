

function carregar(){
    setInterval(() => {


var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
//var hora = 15



var t = document.getElementById('titulo')
var h = document.getElementById('h')
var m = document.getElementById('m')
var s = document.getElementById('s')



hora = (hora < 10) ? '0' + hora : hora
minutos = (minutos < 10) ? '0' + minutos : minutos
segundos = (segundos < 10) ? '0' + segundos : segundos



//var hora = 22
h.innerHTML = hora;
m.innerHTML = minutos;
s.innerHTML = segundos;



if(hora >= 0 && hora < 12) {
    //bom dia
    img.innerHTML = '<img src="fotodia.png">'
    document.body.style.backgroundColor = '#f2d5b9'
    t.innerHTML = "BOM DIA"

} else if(hora >= 12 && hora < 18) {
    // boa tarde
    img.innerHTML = '<img src="fototarde.png">'
    document.body.style.backgroundColor = '#fe9002'
    t.innerHTML = "BOA TARDE"
} else {
    //boa noite
    img.innerHTML = '<img src="fotonoite.png">'
    document.body.style.backgroundColor = '#4d304b'
    t.innerHTML = "BOA NOITE"
}
}, 1000)
}


