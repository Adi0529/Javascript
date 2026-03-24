str="my name is aditya"
str1=str.split(" ")
arr=[]
for(let i=0;i<str1.length;i++)
{
    word= str1[i].charAt(0).toUpperCase()+str1[i].slice(1)
    arr.push(word)
}
console.log(arr.join(" "))
