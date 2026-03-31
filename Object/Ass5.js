const person1={
    name:"John",
    age:30,
    city:"New York",
    subjects:["Math","Science","History"],
}
const person2={
    name:"Alex",
    age:30,
    city:"New York",
    subjects:["Math","Science","History"],
}
if(person1.age===person2.age && person1.city===person2.city){
    console.log("They are the age and city are same");
}
else{       
    console.log("They are the age and city are not same");
}
if(person1.subjects===person2.subjects){
    console.log("They have the same subjects");
}   
else{
    console.log("They do not have the samesubjects");
}