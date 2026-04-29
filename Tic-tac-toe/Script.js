boxes = document.querySelectorAll(".box")
trun0 = true

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trun0) {
            box.innerText = "X"
            trun0 = false
        }
        else {
            box.innerText = "0"
            trun0 = true
        }
        box.style.pointerEvents = "none";
        checkwinner()
    })
})

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
function checkwinner() {
    for (p of win) {
        v1 = boxes[p[0]].innerText
        v2 = boxes[p[1]].innerText
        v3 = boxes[p[2]].innerText
        if (v1 != "" && v2 != "" && v3 != "" && v1==v2 && v2==v3 ) {

            setTimeout(() => {
                if (v1 == "X") {
                    alert("Player 1 is winner");
                    clear();
                } else {
                    alert("Player 2 is winner");
                    clear();
                }
                clear();
            }, 10);
        }
    }
}
btn = document.getElementById("reset")
btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.style.pointerEvents = "auto";
    })
})

function clear() {
    boxes.forEach((box) => {
        box.innerText = ""
        box.style.pointerEvents = "auto";
    })
}