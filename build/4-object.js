"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product1;
product1 = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
};
let procut2;
let product3;
let product5;
product5 = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    productDetail: {
        year: 2011,
        storage: 209,
    }
};
let user;
user = {
    id: "U-1",
    name: "Adi dodi",
    address: [
        {
            street: "Jln. Setapak No.2",
            city: "Jakarta"
        },
        {
            street: "Jln. Lebar sekali no 10",
            city: "Medan"
        }
    ]
};
let user2;
user2 = {
    idCart: "C1",
    dateOrdered: "2020-05-20",
    items: {
        p1: {
            "id": "P-1",
            "name": "Mechanical Keyboard",
            "qty": 2
        },
        p2: {
            "id": "P-2",
            "name": "USB Hub",
            "qty": 1
        },
    }
};
let fullName = {
    firstName: "Sastra",
    lastName: "Nababan"
};
let { firstName, lastName } = fullName;
