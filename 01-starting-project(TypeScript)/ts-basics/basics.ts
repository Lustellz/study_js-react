// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number; // Number would be object

age = 12.1; // we can't assign string like age ='12.1'

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"]; // we can't assign number for it being array of strings

type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: "Max",
    age: 32,
};

// person = {
//     isEmployee: true, // this object type is not declared
// };

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12341; // the variable had been initialized as string(the type had been inferred without definition of types)

// Functions & types

function add(a: number, b: number): number | string {
    // we'd better not really define the types of functions(let it inferred from typeScript)
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    // we're telling typescript to have concrete type of the elements (making typescript flexible & type-safe)
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
