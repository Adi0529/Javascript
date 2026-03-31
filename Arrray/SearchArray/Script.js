Brands=["Apple","Samsung","Google","Microsoft","Amazon"]
brand=document.getElementById("inputval")

result=document.getElementById("result")
function render(){
    result.innerHTML=Brands.map((brand, i) => 
                `<div class="item" id="brand-${i}">${brand}</div>`
    ).join('')
}

function search(){
    render()
    newbrand=brand.value
    document.getElementById("status").innerHTML=``

    document.querySelectorAll('.item').forEach(el => el.classList.remove('highlight'));
    const index = Brands.findIndex(b => b.toLowerCase() === newbrand.toLowerCase());
    
    if(Brands.includes(newbrand)){
        const target = document.getElementById(`brand-${index}`);
        target.classList.add('highlight');
        document.getElementById("status").innerHTML=`${newbrand} is available in the array.`
        
    }
    else{
        document.getElementById("status").innerHTML=`${newbrand} is not available in the array.`
    }
    
    
}

render()