const button = document.getElementById("showres");

button.addEventListener("click", generatePassword);

function generatePassword() {
    const len = document.getElementById("length").value;
    const isnum = document.getElementById("isNumber").checked;
    const isupper = document.getElementById("isupper").checked;
    const issym = document.getElementById("isSpecial").checked;
    const isambi = document.getElementById("isambigious").checked;

    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}<>?/";

    let chars = lowercase;
    if (isnum) {
        chars += numbers;
    }
    if (isupper) {
        chars += uppercase;
    }
    if (issym) {
        chars += symbols;
    }
    if (isambi) {
        chars = chars.replace(/[Il1O0]/g, '');
    }
    let password = "";
    for (let i = 0; i < len; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }



    document.getElementById("result").value = password;
    checkStrength(password);
}
const resultInput = document.getElementById("result");
const showpass=document.getElementById("pass");
showpass.addEventListener("change", function() {
    if (this.checked) {
        resultInput.type = "text";
    } else {
        resultInput.type = "password";
    }
});

function checkStrength(password) {
    let strengthBar = document.getElementById("strengthBar");
    let strengthText = document.getElementById("strengthText");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    let width = (strength / 4) * 100;
    strengthBar.style.width = width + "%";

    if (strength === 1) {
        strengthBar.className = "progress-bar bg-danger";
        strengthText.innerText = "Weak";
    } else if (strength === 2) {
        strengthBar.className = "progress-bar bg-warning";
        strengthText.innerText = "Medium";
    } else if (strength === 3) {
        strengthBar.className = "progress-bar bg-info";
        strengthText.innerText = "Strong";
    } else if (strength === 4) {
        strengthBar.className = "progress-bar bg-success";
        strengthText.innerText = "Very Strong";
    }
}

function copyPassword() {
    let password = document.getElementById("result").value;

    if (!password) {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password Copied!");
        })
        .catch(() => {
            alert("Failed to copy!");
        });
}