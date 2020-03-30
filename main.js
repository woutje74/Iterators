//.forEach() method

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
console.log('Using the forEach method to display a text with various fruits from an array.')
fruits.forEach(fruit => (console.log('I want to eat a '+ fruit)));

//.map() method

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log('The secret message created from the first letter of each string in the array is: ' + secretMessage.join(''));


// Create the smallNumbers array below
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)

//.filter() method

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumber = randomNumbers.filter(number => {return number < 250;});

// Call .filter() on favoriteWords below
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;});


//.findIndex() method

const animalS = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalS.findIndex(animal => {
  return animal === 'elephant';
});
console.log('The index number in the array for elephant is: ' + foundAnimal);

const startsWithS = animalS.findIndex(animal => {
  return animal[0] === 's'
});
console.log('There is an animal in the array that starts with the letter s in indexnbr: ' + startsWithS,);

//.reduce() method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => { 
  console.log('The value of accumulator: ' , accumulator);
  console.log('The value of currentValue: ' , currentValue);
  return accumulator + currentValue;
  }, 10);

console.log('This is the result of the .reduce method on array of integers: ' + newSum);

//.some() method: returns true or false if any of the elements in an array satisfy the query
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log('Are there elements in the array with a length < 6? ' + words.some(word => {
  return word.length < 6;
}));


// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
});
console.log('The .filter method creates a new array of elements that match the criteria of the callback function. This is the result: ' + interestingWords);

//.every() method

console.log(interestingWords.every((word) => {
  return word.length > 5;} ));

//Challenge 1: define a callback function before using it in an iterator
const capitals = [ 'Amsterdam', 'London', 'Brussels', 'Oslo', 'Stockholm', 'Paris'];

const cityA = cityA => {  //callback functie om te bepalen of een element begint met de letter A
  return cityA[0] === 'A';
};

const startsWithA=capitals.filter(cityA);  //startsWithA is het nieuwe array;de iterator is .filter op het array capitals; de callback functie is cityA

console.log(startsWithA);

const shortCity=startsWithA.some(city => city.length < 7); //example where two iteration methods are chained

console.log(shortCity);

//challenge 3: use optional arguments in an iterator
console.log(capitals.indexOf('Brussels', 0)); //should return 2

//challenge 4: use .reduce to flatten a multilayer array
const numbers = [[1,2],[3,4],[5,6],[7,8]];

let newArray = numbers.reduce(function(accumulator, currentValue) {
    return accumulator.concat(currentValue);
  },
  []
);

console.log(newArray);