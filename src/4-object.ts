/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

//type inference
// let product =   {
//     id: "ID-1",
//     productName: "Macbook Air",
//     price: 2000,
//     note: ""
//   }

  // inline interface
  let product1 : {
    id: string;
    productName: string;
    price: number;
    note: string;
  }

  product1 =  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }

  //interface
  interface Product {
    id: string;
    productName: string;
    price: number;
    note: string;
  }

  let procut2 : Product;
  let product3 : Product;

/**
 * 2. Nested Object
 */

interface Item {
      id: string;
      productName: string;
      price: number;
      productDetail: ItemDetail;
}

interface ItemDetail {
  year: number;
  storage: number;
}
  
let product5 : Item;
product5 = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    productDetail : {
      year: 2011,
      storage: 209,
    }
  }

/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/
interface Item2 {
  id: string;
  name: string;
  address : StreeItem[];
}

interface StreeItem {
  street : string;
  city : string;
}

let user : Item2;
user = {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface arrObj {
  idCart: string;
  dateOrdered: string;
  items: {
    [key : string] : objtob
  }
}

interface objtob {
  id: string;
  name: string;
  qty: number;
}

let user2 : arrObj;
user2 =     {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/

let fullName =  {
    firstName : "Sastra",
    lastName : "Nababan"
  }

let { firstName, lastName} : {firstName: string; lastName: string} = fullName;
