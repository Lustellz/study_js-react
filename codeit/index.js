
const user = {
    email: 'chris123@google.com',
    birthdate: '1992-03-21', //property
    buy(item){
        console.log(`${this.email} buys ${item.name}`)
    }//method
} //Object Literal

function createUser(email, birthdate){
    const user = {
        email,
        birthdate,
        buy(item){
            console.log(`${this.email} buys ${item.name}`)
        }
    }
    return user
} //Factory Function

function User(email, birthdate){
    this.email = email
    this.birthdate = birthdate
    this.buy = function(item){
        console.log(`${this.email} buys ${item.name}`)
    }
} //Constructor Function

class User{
    constructor(email, birthdate){
        this.email = email
        this.birthdate = birthdate
    }

    buy(item){
        console.log(`${this.email} buys ${item.name}`)
    }
} //Class

const item = {
    name: '스웨터',
    price: 30000
}

const user1 = new User('chris123@google.com', '1992-03-21')
const user2 = createUser('jerry99@google.com', '1995-07-19')
const user3 = createUser('alice@google.com', '1993-12-24')

console.log(user.email)
console.log(user.birthdate)
user.buy(item)