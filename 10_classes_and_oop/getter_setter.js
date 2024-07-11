class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this.email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }

    get password(){
        return `${this.password}hitesh`
    }
    get password(){
        return this.password.toUpperCase()
    }
    // set password(value){
    //     this._password  = value.toUpperCase()
    // }
    set password(value){
        this._password  = value
    }
}

const shivam = new user("shivam@gmail.com", "123")
console.log(shivam.password);