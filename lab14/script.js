//1
let button1 = document.getElementById('okno1');
button1.onclick = function okno1() {
  window.open("https://onlinevkino.com/5235-igra-prestolov-1-sezon.html", ' ', 'width=200,height=200,toolbar=no,menubar=no,status=yes,location=no,resizable=yes,scrollbars=yes');
}

let button2 = document.getElementById('okno2');
button2.onclick = function okno2() {
  window.open("https://jut.su/naruuto/season-2/episode-12.html", ' ', 'width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=no,resizable=yes,scrollbars=no');
}

//2
let link = document.getElementById('link');
link.onclick = function linkonsite() {
  window.history.go(-1); 
}

//3.1 
let button3 = document.getElementById('height');
button3.onclick = function heightokna() {
  alert(window.innerHeight);
}

//3.2
let a = navigator.appName;
let b = navigator.appVersion;
let c = navigator.cookieEnabled;
setInterval(() => alert(`Информация о Вашем браузере: ${a}, ${b}, ${c}`), 10000);

