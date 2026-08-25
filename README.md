
# Week 1 Homework – Introduction to Node.js & Variables

## About the Assignment

This homework was an introduction to **Node.js and JavaScript variables**. The assignment included basic tasks, extra practice, and an advanced challenge.

I created a JavaScript file called `homework.js` and ran it using Node.js in the terminal.

## My Code

```javascript
const firstName = "Snezana";
const favoriteNumber = 7;
const likesCoding = true;

console.log(
  `Hi, my name is ${firstName}, my favorite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`
);

// Extra practice
const birthYear = 1986;
const currentYear = 2026;

const age = currentYear - birthYear;

console.log(`I am ${age} years old.`);

// Advanced
const foods = ["pizza", "sushi", "chocolate"];

const student = {
  name: firstName,
  favoriteNumber: favoriteNumber,
  likesCoding: likesCoding,
  foods: foods
};

console.log(student);
console.log(student.name);
```

## Variables and Data Types

For the first part of the assignment, I created three variables:

* `firstName` – a **string** containing `"Snezana"`
* `favoriteNumber` – a **number** containing `7`
* `likesCoding` – a **boolean** containing `true`

I used a **template literal** with `${}` to include these variables inside a sentence.

## Extra Practice – Age Calculation

For the extra practice, I created:

```javascript
const birthYear = 1986;
const currentYear = 2026;
```

I calculated the age using subtraction:

```javascript
const age = currentYear - birthYear;
```

The result was then displayed using:

```javascript
console.log(`I am ${age} years old.`);
```

## Advanced Practice – Array and Object

For the advanced challenge, I created an array containing three foods:

```javascript
const foods = ["pizza", "sushi", "chocolate"];
```

I then created a `student` object containing my name, favorite number, coding preference, and the foods array:

```javascript
const student = {
  name: firstName,
  favoriteNumber: favoriteNumber,
  likesCoding: likesCoding,
  foods: foods
};
```

I printed the complete object:

```javascript
console.log(student);
```

I also accessed and printed one individual property:

```javascript
console.log(student.name);
```

## Running the Project

I ran the JavaScript file with Node.js using:

```bash
node homework.js
```

## What I Practiced

In this homework I practiced:

* JavaScript variables with `const`
* Strings, numbers, and booleans
* Template literals
* Arithmetic operations
* Arrays
* Objects
* Accessing object properties
* `console.log()`
* Running JavaScript with Node.js from the terminal

This assignment helped me practice JavaScript fundamentals while also becoming more familiar with running JavaScript directly with Node.js.
