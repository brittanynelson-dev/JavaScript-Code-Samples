//Ex 1: Fetch data from an API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Perform additional operations with the fetched data
  })
  .catch(error => {
    console.error('Error:', error);
  });

//Ex 2: Manipulate the DOM
const element = document.getElementById('exampleElement');
element.innerHTML = 'New content';

//Ex 3: Generate a random number
const randomNumber = Math.floor(Math.random() * 100);
console.log('Random number:', randomNumber);

//Ex 4: Execute a setTimeout function
setTimeout(() => {
  console.log('Timeout function executed');
}, 3000);

//Ex 5: Use a third-party library (example: Lodash)
const array = [1, 2, 3, 4, 5];
const sum = _.sum(array);
console.log('Sum:', sum);

//Ex 6: Perform string manipulation
const text = 'Hello, world!';
const uppercaseText = text.toUpperCase();
console.log('Uppercase text:', uppercaseText);

//Ex 7: Handle user input
const inputElement = document.getElementById('userInput');
inputElement.addEventListener('change', (event) => {
  const userInput = event.target.value;
  console.log('User input:', userInput);
});

//Ex 8: Work with dates
const currentDate = new Date();
console.log('Current date:', currentDate);

//Ex 9: Implement a recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(5);
console.log('Factorial:', result);

//Ex 10: Use localStorage to store data
localStorage.setItem('username', 'John');
const storedUsername = localStorage.getItem('username');
console.log('Stored username:', storedUsername);

//Ex 11: Create a class and instantiate objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('Alice', 25);
person1.greet();

//Ex 12: Perform array manipulation
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

//Ex 13: Handle asynchronous operations with async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
    // Perform additional operations with the fetched data
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

//Ex 14: SetTimeout function with alert window
window.setTimeout(alarm,5000);

function alarm()
{
	alert("Your time is up!");
}

