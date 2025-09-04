const myBottom = document.getElementById("accensione");
console.log(myBottom)

const myImg1 = document.getElementById("miaImmagine1")
console.log(myImg1)

const myImg2 = document.querySelector(".miaImmagine2");

myBottom.addEventListener('click',function() {
  myImg1.src = 'img/yellow_lamp.png';
});

