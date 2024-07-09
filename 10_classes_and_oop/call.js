function SetUsername(username) {
    //complex Db calls
    this.username = username
    console.log("called");
}
function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email= email
    this.password = password
}

const chai = new createUser("chai", "chai@shj.com", "123" )
console.log(chai);