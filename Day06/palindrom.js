
str="mam"
console.log(str.length)
str1=""
for(let i=str.length-1;i>=0 ;i--)
{
    str1 +=str.charAt(i)
}
console.log(str1)
if(str === str1){
    console.log("String is Palindrom")
}
else{
    console.log("String is not a palindrom")
}