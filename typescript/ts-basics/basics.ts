// Primitives: number, string, boolean
// More complex tpyes: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let inInstructor: boolean;
inInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

let people: Person[];

//Tpye inference

let course: string | number = "React - The Complete Guide";
// let course:string = "React - The Complete Guide"; 사용x

course = 12341;

// Functions & tpyes

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demeArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demeArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");
