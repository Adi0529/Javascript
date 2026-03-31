Numbers=[]
inputno=document.getElementById("numberInput")

function addNumber(){
    num=parseFloat(inputno.value)
    if(isNaN(num)){
        alert("Please enter a valid number.")
        return
    }else{
        Numbers.push(num)
        inputno.value=""
        console.log(Numbers);
    }
}

function filterEven(){
    evenNumbers=Numbers.filter(num => num%2===0)
    document.getElementById("evenResult").innerHTML=`Even Numbers: ${evenNumbers.join(", ")}`;
}

function filterOdd(){
    oddNumbers=Numbers.filter(num => num%2!==0)
    document.getElementById("oddResult").innerHTML=`Odd Numbers: ${oddNumbers.join(", ")}`;
}

function resetNumbers(){
    Numbers=[]
    document.getElementById("evenResult").innerHTML=""
    document.getElementById("oddResult").innerHTML=""
}