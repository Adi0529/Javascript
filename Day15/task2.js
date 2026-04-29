const orders = [
    {
        id: 1,
        customer: "Amit",
        items: [
            { name: "Phone", price: 20000 },
            { name: "charger", price: 1000 }
        ]
    },
    {
        id: 2,
        customer: "Nehs",
        items: [
            { name: "Phone", price: 50000 }
        ]
    }
]
let r = 0;
let maxprice = 0
for (let i of orders) {
    let c = 0;

    const total = i.items.map(item => c += item.price)
    console.log(i.customer, " is spending", c)
    const reveneue = i.items.forEach((item) => r += item.price)
    i.items.reduce((high, val) => {
        if (val.price > maxprice) {
            maxprice = val.price;
        }
        return maxprice;
    }, 0)
    const p3 = { name: "Laptop", price: 100000 }
    i.items.push(p3)
}
console.log("Total Revenue is ", r)
console.log("max price is", maxprice)
console.log(orders[1].items)
const order3 = {
    id: 3,
    customer: "Amit",
    items: [
        { name: "Phone", price: 50000 }
    ]
}
orders.push(order3)


const groupedByCustomer = orders.reduce((acc, order) => {
    const name = order.customer;
    if (!acc[name]) {
        acc[name] = [];
    }
    acc[name].push(order);
    
    return acc;
}, {});

console.log(groupedByCustomer);