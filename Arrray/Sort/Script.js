Names=[]


function addName(){
    input=document.getElementById("nameInput").value
    Names.push(input)
    document.getElementById("nameInput").value=""
    console.log(Names)
}

function sortNames(){
    arr=Names.sort()
    document.getElementById("nameResult").innerHTML=`Sorted Names: ${arr.map(name => `<div class="text-light">${name}</div>`)}`;
    console.log(Names)
}
function resetNames(){    
    Names=[]
    document.getElementById("nameResult").innerHTML=""
    console.log(Names)
}