count=0
str="My name is Aditya"
str1=str.toLowerCase()
for(let i=0;i<str.length ;i++)
{
    if(str1.charAt(i)== 'a' || str1.charAt(i)== 'e' || str1.charAt(i)== 'i' || str1.charAt(i)== 'o' || str1.charAt(i)== 'u')
    {
        count++;
    }
}
console.log(count)