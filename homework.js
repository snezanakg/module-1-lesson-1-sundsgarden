const firstName = "Snezana";
const favoriteNumber = 7;
const likesCoding = true;

console.log(`Hi, my name is ${firstName}, my favorite number is ${favoriteNumber}, and it is ${likesCoding} that I like coding.`);

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
