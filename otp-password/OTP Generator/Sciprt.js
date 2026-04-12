btnelement=document.querySelector('#otp')
oneinput=document.querySelector("#oneinput")
Twout=document.querySelector("#Twoinput")
Three=document.querySelector("#Threeinput")
Fourinput=document.querySelector("#Fourinput")
btnelement1=document.querySelector('#res')
function getotp(){
    n1=Math.floor((Math.random()*9000)+1000)
    console.log(n1)
    alert("Your otp is: "+n1)
}

function showres(){
    user=oneinput.value+Twout.value+Three.value+Fourinput.value
    if(user ==n1){
        alert("Otp correct")
    }
    else{
        alert("Incorrect Otp")
    }
}
function next(ipNext){
    document.getElementById(ipNext).focus()
}
btnelement.addEventListener('click',getotp)

btnelement1.addEventListener('click',showres)