// type inference(Implicit)
let ti = 'hello';

// type annotation(Explicit)
let ta: string = 'hello ts';


let a;       
       // undefined
let b : boolean;
b  = true;  
         // boolean
let c : number;
c = 1; 
             // number
let d : string
d = "hello";        // string
let e : bigint
e = 100n;   
        // big int (starting ES2020)
let f: symbol;
f = Symbol("Sym"); 

// symbol  (starting ES2015)
let g : () => void; 
g = function () {   // function
  return null;
};

let h : null;
h = null;   
        // null ( special primitive )
let i : Record<string, unknown>;
i = {};    
     // Object Literal
let j : [];
j = [];             // array

class Product {
  // class
  //...
}
let k = new Product();

function sum(a: number, b:number) : void {
//     return a +b;
}

let ar1 = 2;
let ar2 = 5;
let result = sum(ar1, ar2);

// union
let hit: string | number;

hit  = 2;
hit = "ayam";

// type aliases
type Customtype = string| number;
let myTupe : Customtype = "Ayam";