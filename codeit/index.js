
const user = {
    email: 'chris123@google.com',
    birthdate: '1992-03-21', //property
    buy(item){
        console.log(`${this.email} buys ${item.name}`)
    }//method
} //Object Literal

function createUser(email, birthdate){
    const _email = email
    let _point = 0

    function increasePoint(){
        _point +=1
    }

    const user = {
        birthdate,

        get email(){
            return _email
        },

        get point(){
            return _point
        },

        set email(address){
            if(address.includes('@')){
                _email = address
            }else{
                throw new Error('invalid email address')
            }
        },

        buy(item){
            console.log(`${this.email} buys ${item.name}`)
            increasePoint()
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

    get email(){
        return this._email
    }

    set email(address){
        if(address.includes('@')){
            this._email = address
        }else{
            throw new Error('invalid email address')
        }
    }
} //Parent Class

class PremiumUser extends User{
    constructor(email, birthdate, level, point){
        super(email, birthdate)
        this.level = level
        this.point = point
    }

    buy(item){
        super.buy(item)
        this.point += item.price * 0.05
    }

    streamMusicForFree(){
        console.log(`Free music streaming for ${this.email}`)
    }
} //Child Class

const item = {
    name: '스웨터',
    price: 30000
}

const user1 = new User('chris123@google.com', '1992-03-21')
const user2 = createUser('jerry99@google.com', '1995-07-19')
const user3 = createUser('alice@google.com', '1993-12-24')
const pUser1 = new PremiumUser('chris123@google.com', '1992-03-21', 3)

console.log(user.email)
console.log(user.birthdate)
user.buy(item)
user1.buy(item)
pUser1.buy(item)

class Math{
    static PI = 3.14

    static getCircleArea(radius){
        return Math.PI * radius * radius
    }
}

Math.PI = 3.141592
Math.getRectangleArea = function (width, height){
    return width * height
}

console.log(Math.PI)
console.log(Math.getCircleArea(5))
console.log(Date.now())