const library = [
    {
        user: "Amit",
        books: [
            { title: "Js basics", returned: true },
            { title: "React Guide", returned: false }
        ]
    },
    {
        user: "Neha",
        books: [
            { title: "Node.js", returned: false },
        ]
    }
]
const borrowednotreturned = library.reduce((sum, v) => {
    const notreturned = v.books.reduce((sum1, val1) => {
        if (!val1.returned) {
            return sum1 + 1
        }
        return sum1
    }, 0)
    return sum + notreturned
}, 0)
console.log(borrowednotreturned)

const overdue = library.reduce((acc, v) => {
    const dueornot = v.books.some((v) => {
        return v.returned == false
    })
    if (dueornot) {
        return acc + dueornot
    }
    return acc
}, 0)
console.log(overdue)

function borrowBook(userName, bookTitle) {
    const customer = library.find(item => item.user === userName);
    if (customer.books.length < 3) {
        if (customer) {
            const newBook = { title: bookTitle, returned: false };
            customer.books.push(newBook);
            console.log(`${userName} borrowed ${bookTitle}`);
        } else {
            console.log("User not found!");
        }
    }
    else{
        console.log("You accessed max books claim pls return previous ones")
    }
}

borrowBook("Amit", "Mastering CSS");
console.log(library[0].books);

function returnBook(userName, bookTitle) {
    const customer = library.find(item => item.user === userName);
    customer.books.forEach((v) => {
        if (v.title == bookTitle) {
            v.returned = true
        }
    })
    console.log("${userName} returned ${bookTitle}")
}
returnBook("Amit", "React Guide")
console.log(library[0].books)

const freuser = library.reduce((prefre, curr) => {
    if (curr.books.length > prefre.books.length) {
        return curr
    }
    return prefre
}, library[0])
console.log(`${freuser.user} has borrowed the most books`);
borrowBook("Amit", "Mastering Node");