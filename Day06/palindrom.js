
str="My name is Aditya"
str1=""
for(let i=str.length;i>0 ;i--)
{
    str1=""+str.charAt(i)
}
if(str==str1){
    console.log(" String is Palindrom")
}
else{
    console.log("String is not a palindrom")
}