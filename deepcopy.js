function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    console.log(copy);
    const propNames = Object.getOwnPropertyNames(obj)
    console.log(propNames); //이미 가장 깊은 수준까지 가져오게 됨
    propNames.forEach(function (name) {
        const desc = Object.getOwnPropertyDescriptor(obj, name)
        console.log(desc);
        Object.defineProperty(copy, name, desc)
    })

    return copy
}

const obj1 = {
     a: 1, 
     b: 2, 
     c: { ca: [2, 3, 4, 5], 
        cb: { cba: 2, cbb: 
            { cbba: 0 } 
        } 
    } 
}
const obj2 = copy(obj1)

console.log(obj2);