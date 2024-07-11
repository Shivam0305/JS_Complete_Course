class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was addes by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com", "123")

chai.addCourse

const masalaChai = new User("masala chai")

masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof User);
