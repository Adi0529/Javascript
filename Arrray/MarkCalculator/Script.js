Marks=[]


function addMark(){
    mark=document.getElementById("marks")
    newmark=parseInt(mark.value)
    if(isNaN(newmark) || newmark<0 || newmark>100){
        alert("Please enter a valid mark between 0 and 100.")
        return
    }
    Marks.push(newmark)
    document.getElementById("marks").value=""
    console.log(Marks);
}

function calculateGrade(){
    sum=0
    smallest=Marks[0]
    largest=Marks[0]
    for(let i=0;i<Marks.length;i++){
        sum+=Marks[i]
        if(Marks[i]<smallest){
            smallest=Marks[i]
        }
        if(Marks[i]>largest){
            largest=Marks[i]
        }
    }
    average=sum/Marks.length

    document.getElementById("result").innerHTML=`Total Marks: ${sum},<br> Average Marks: ${average},<br> Lowest Marks: ${smallest},<br>
     Highest Marks: ${largest}`
}

function resetMarks(){
    Marks=[]
    document.getElementById("result").innerHTML=""
}

