const myDiv = document.getElementById('color1');
const myDiv1 = document.getElementById('color2');
const myDiv2 = document.getElementById('color3');
const btn=document.getElementById("btn");
const img1 = document.getElementById('img1');
const car=document.getElementById("car");
myDiv.addEventListener('click', function() {
    img1.style.backgroundColor = 'gray';
    img1.src="./img/b2.webp"
    btn.style.backgroundColor='gray'
    car.style.backgroundColor='gray'

});
myDiv1.addEventListener('click', function() {
    img1.style.backgroundColor = 'blue';
    btn.style.backgroundColor='blue'
    img1.src="./img/blue.png"
    car.style.backgroundColor='blue'
});
myDiv2.addEventListener('click', function() {
    img1.style.backgroundColor = 'red';
    btn.style.backgroundColor='red'
    img1.src="./img/c3.png"
    car.style.backgroundColor='red'
});


const myDivsec = document.getElementById('color11');
const myDiv11 = document.getElementById('color22');
const myDiv22 = document.getElementById('color33');
const btn1=document.getElementById("btn1");
const img2 = document.getElementById('img2');
const car1=document.getElementById("car1");
myDivsec.addEventListener('click', function() {
    img2.style.backgroundColor = 'gray';
    img2.src="./img/b2.webp"
    btn1.style.backgroundColor='gray'
    car1.style.backgroundColor='gray'

});
myDiv11.addEventListener('click', function() {
    img2.style.backgroundColor = 'blue';
    btn1.style.backgroundColor='blue'
    img2.src="./img/blue.png"
    car1.style.backgroundColor='blue'
});
myDiv22.addEventListener('click', function() {
    img2.style.backgroundColor = 'red';
    btn1.style.backgroundColor='red'
    img2.src="./img/c3.png"
    car1.style.backgroundColor='red'
});




