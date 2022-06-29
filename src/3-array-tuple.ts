/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */
let list1 = [1,2,34];

//square bracket
let list1_2 : number[];
list1_2 = [1,2,4];

//generic array
let list1_3 : Array<number>;
list1_3 = [1,23];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */
let list2 : string[];
list2 = ["ayam", "ikan"];

//generic 
let list2_1 : Array<string>;
list2_1 = [ "yam", "hat"];


/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */
//square bracket
let list3 : (string | number)[];
list3 = ["ayam", 1];

// generic array
let list3_1 : Array<string | number>;
list3_1 = [12, "ayam"];


/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */
// square bracket
let list4 : [string, number, number];
list4 =  ['cordinat', 2, 4];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */
//inline interface
let list5 : {color: string, index: number}[];
list5 =  [
   { color: 'blue', index: 1 },
   { color: 'red', index: 2 },
  ];


  let list6  : {id: number, name: string}[];
  list6 = [
    {id: 1,
    name: "ikan"}
  ]


  //generic array
  let list7 : Array<{color: string, index:number}>;
  list7 =  [
   { color: 'blue', index: 1 },
   { color: 'red', index: 2 },
  ];

  let list8 : Array<{id: number, name: string}>;
  list8 =  [
    {id: 1,
    name: "ikan"}
  ]


/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */
// let matrix : number[][];

//generic array
let matrix : Array<Array<number>>;


 matrix = [
   [1, 2],
   [3, 4],
  ];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */

 let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
