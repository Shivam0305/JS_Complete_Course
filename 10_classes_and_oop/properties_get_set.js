function Useer(email, password){
    this._email = email;
    this._password = password

    Object.defineProperties(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })

    Object.defineProperties(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

                                                                                                                                                                                                                                                                              

const chai = new User("chai@gmail.com", "chai");
console.log(chai.email);


const User = {
    email: 's@sj.com',
    password: "abc",

    get _emails(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    }
}

const tea=  Object.create(User)
console.log(tea.email);