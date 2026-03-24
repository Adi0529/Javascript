count=0
str="My name is Aditya"
str1=str.toLowerCase()
for(let i=0;i<str.length ;i++)
{
    if(str1.charAt(i)=='a')
    {
        count++;
    }
}
console.log(count)