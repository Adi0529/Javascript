function reverse(n){
    res=""
    i=1
    while(n>0){
        rem=n%10
        res+=rem
        
        n=~~(n/10)
    }
    return res
}
console.log(reverse(400))