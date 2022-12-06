function display(){
    console.log("hi hello")
document.getElementById('abc').style.backgroundColor='green'
}
function mul(){
document.getElementById('xyz').style.backgroundColor='blue'
}
function Sub(){
document.getElementById('pqr').style.backgroundColor='pink'
}
function add(){
document.getElementById('lmn').style.backgroundColor='green'
}
function changecolor(){
document.getElementById('cde').style.backgroundColor='violet'

}
function changeCase(){
  let name=document.getElementById('abc').value
  document.getElementById('abc').value = name.toUpperCase()
}

function changeCase() {
    let name = document.getElementById('uname').value;
    console.log(name)
    //document.getElementById('uname').value = "gm"
    document.getElementById('uname').value = name.toUpperCase()
}