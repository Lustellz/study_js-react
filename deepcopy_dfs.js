const data = {
    a: '1',
    b: 123,
    c: {
        a: 1,
        b: '123'
    },
    d: [
        1,
        {
            a: [ 1, 2, 3 ],
            b: {
                a: 1,
                b: '123'
            }
        },
        'str'
    ]
}

function deepCopy(obj) {
    let result

    if (typeof obj === 'object') {
        // Array
        if (Array.isArray(obj)) {
            result = []
            for (let i=0; i<obj.length; i++) {
                result[i] = deepCopy(obj[i])
            }
        }
        // JSON
        else {
            result = {}
            for (const fieldKey in obj) {
                const fieldValue = obj[fieldKey]
                result[fieldKey] = deepCopy(fieldValue)
            }
        }
    }
    // VALUE
    else result = obj

    console.log(result)
    return result
}

console.log(deepCopy(data))