"use strict";
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firstName, lastName) {
            super();
            this.retryLogin = 0;
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.save = true;
            this.token = true;
            this.done = false;
        }
        login(username, password) {
            this.retryLogin += 1;
            if (username === "admin" && password === "admin") {
                return true;
            }
            if (this.retryLogin >= User.MAX_LOGIN) {
                return "max login attempted";
            }
            return false;
        }
    }
    User.MAX_LOGIN = 2;
    return User;
})();
class myuser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save = false;
    }
}
let user1 = new User(1, "ika", "gor");
let user2 = new myuser("jakra", 1, "ika", "bakar");
User.MAX_LOGIN = 3;
console.log(user1.login("", ""));
console.log(user1.login("", ""));
console.log(user1.login("", ""));
