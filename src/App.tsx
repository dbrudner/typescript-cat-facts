import React from 'react';
import './App.css';

// https://cat-fact.herokuapp.com/facts

// {
//   "_id": "5887e1d85c873e0011036889",
//   "text": "Cats make about 100 different sounds. Dogs make only about 10.",
//   "type": "cat",
//   "user": {
//   "_id": "5a9ac18c7478810ea6c06381",
//   "name": {
//   "first": "Alex",
//   "last": "Wohlbruck"
//   }
//   },
//   "upvotes": 9,
//   "userUpvoted": null
//   }

// Type inference

const myString = "MY_STRING";

const x = myString.indexOf('1');

// function

function addtwoNumbers(a: number, b?: number) {
    if (!b) {
        return "no b";
    }

    return a + b;
}

const z = addtwoNumbers(1, 2);

// Array

function addNumbers(nums: number[]) {
    return nums.reduce((total, num) => total + num, 0);
}

// object

const person = {
    name: "dave",
    age: 22,
    x: 'string'
}

type Person = {
    name: string;
    age: number;
}

function getPersonName(person: Person) {
    return person.age;
}

getPersonName(person);

function App() {
  return (
    <div className="App">
      <h1>Cat facts</h1>
    </div>
  );
}

export default App;
