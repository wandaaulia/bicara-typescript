/* eslint-disable */

// interface untuk kelas dan object
// type untuk function, tapi bisa juga object

export {}; // quick fix for global variable

/**
 * Object
 */
interface User {
    name: string;
    age : number;
}

type Tuser = {
    name: string;
    age: number;
}


/**
 * Merge
 */

interface Song {
    songName : string;
}

interface Song {
    lastSong : string;
}

type Sing = {
    name : String;
}


/**
 * Intersection & Union
 */
type typeA = {
    id: number;
    propA : string;
}

type typeB = {
    id: number;
    propB : string;
}

type intersectionAB = typeA & typeB;

/**
 * Implements
 */

interface PeopleFront {
    street : string;
}

interface Person extends PeopleFront {
    name: string;
    age : number;
    getName(id: number) : string;
}
class People implements Person {
    name: string;
    age: number;
    street : string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    this.street  = "nks"  }

    getName(id: number)  {
        return "Ayam";
    }

}

/**
 * Extend
 */
