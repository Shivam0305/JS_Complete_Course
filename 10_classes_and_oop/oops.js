const user = {
    username: "shivam",
    LoginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details form database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


function User(username, LoginCount, isLoggedIn){
    this.username = username;
    this.LoginCount = logincount
    this.isLoggedIn = isLoggedIn 

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("shivam", 20, true)
const userTwo = new User("ChaiAurCode", 14, false)
console.log(userOne.constructor);
console.log(userTwo);

// instance off method chechk