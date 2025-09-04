const myBottom = document.getElementById("accensione");
console.log(myBottom);

const myImg1 = document.getElementById("miaImmagine1");
console.log(myImg1);

const title = document.getElementById("titolo")

const segreto = document.getElementById("secret");

let accesa = false;

myBottom.addEventListener("click", onOff);


function onOff() {
    if (accesa == false) {
    myImg1.src = "img/yellow_lamp.png";
    myImg1.alt = "lampada accesa";
    accesa = true;
    myBottom.textContent = "SPENGI";
    myBottom.classList.add("rosso");
    document.body.style.backgroundColor = "black";
    title.textContent = "SPENGIMENTO DI UNA LAMPADINA";
    title.classList.add("notte");
  } else {
    myImg1.src = "img/white_lamp.png";
    myImg1.alt = "lampada spenta";
    accesa = false;
    myBottom.textContent = "ACCENDI";
    myBottom.classList.remove("rosso");
    document.body.style.backgroundColor = "white";
    title.textContent = "ACCENSIONE DI UNA LAMPADINA";
    title.classList.remove("notte");
  }
}





