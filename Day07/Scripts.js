function countvowels() {
    countv = 0
    str = document.getElementById("inputpara").value
    str1 = str.toLowerCase()
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u') {
            countv++
        }
    }
    document.getElementById("result1").textContent = "vowel count:" + "  " + countv
}

function consonents() {
    countc = 0
    str = document.getElementById("inputpara").value
    str1 = str.toLowerCase()
    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(i) == 'a' || str1.charAt(i) == 'e' || str1.charAt(i) == 'i' || str1.charAt(i) == 'o' || str1.charAt(i) == 'u') {

        }
        else {
            countc++
        }
    }
    document.getElementById("result1").textContent = "vowel consonents:" + "  " + countc
}

function spaces() {
    count = 0
    str = document.getElementById("inputpara").value
    for (let i = 0; i < str1.length; i++) {
        if (str.charAt(i) == " ") {
            count++
        }
    }
    document.getElementById("result1").textContent = "spaces:" + "  " + count

}

function lower() {
    str = document.getElementById("inputpara").value
    lowe = str.toLowerCase()
    document.getElementById("result1").textContent = "lower case:" + " " + lowe
}

function capietal() {
    str = document.getElementById("inputpara").value
    Cap = str.toUpperCase()
    document.getElementById("result1").textContent = "Upper case:" + " " + Cap
}

function titlecase() {
    str = document.getElementById("inputpara").value
    str1 = str.split(" ")
    arr = []
    for (let i = 0; i < str1.length; i++) {
        word = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
        arr.push(word)
    }

    document.getElementById("result1").textContent = arr.join(" ")

}

function palindrome() {
    str = document.getElementById("inputpara").value
    str1 = ""
    for (let i = str.length - 1; i >= 0; i--) {
        str1 += str.charAt(i)
    }
    console.log(str1)
    if (str === str1) {
        res = "String is Palindrom"
    }
    else {
        res = "String is not a palindrom"
    }
    document.getElementById("result1").textContent = res
}

function firstword() {
    str = document.getElementById("inputpara").value
    arr = str.split(" ")
    document.getElementById("result1").textContent = arr[0]
}

function hypen() {
    str = document.getElementById("inputpara").value
    str1 = str.replaceAll(" ", "-")
    document.getElementById("result1").textContent = str1
}

function reverse() {
    str = document.getElementById("inputpara").value
    str1 = ""
    for (let i = str.length - 1; i >= 0; i--) {
        str1 += str.charAt(i)
    }
    document.getElementById("result1").textContent = str1
}
function newline(){
    count=0
    str = document.getElementById("inputpara").value
    for(let i=0;i<str.length ;i++){
        if(str.charAt(i)=="/n"){
            count++
        }
    }
    document.getElementById("result1").textContent = count
}

function sortchar(){
    
}