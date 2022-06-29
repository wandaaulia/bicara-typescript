/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance

abstract class Root {
    abstract done : boolean;
}
class User extends Root {
    id: number;
    firstName : string;
    lastName: string;
    protected save : boolean;
    private token : boolean;
    static MAX_LOGIN = 2;
    private retryLogin = 0;
    done : boolean;

    login(username: string, password: string) {
        this.retryLogin += 1;
        if(username === "admin" && password === "admin") {
            return true;
        }

        if(this.retryLogin >= User.MAX_LOGIN) {
            return "max login attempted"
        }

        return false;
    }

    constructor(id: number, firstName : string, lastName: string) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = true;
        this.token = true;
        this.done = false;
    }
}

class myuser extends User {
    location : string;

    constructor(location : string, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
        this.location = location;
        this.save = false;

    }
}

let user1 = new User(1, "ika", "gor");
let user2 = new myuser("jakra", 1, "ika", "bakar");


// static bisa di akses tanpa value new.
User.MAX_LOGIN = 3;

console.log(user1.login("",""));
console.log(user1.login("",""));
console.log(user1.login("",""));
