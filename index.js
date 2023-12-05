// Fahrenheit/Celsius converter
class Thermostat{
    constructor(thermos){
      this.fahrenheit= thermos;
    }
    get temperature(){
      return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius){
      return this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }
  
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature;
  console.log(temp);

  // Getting celsius temperature 
  thermos.temperature = 32; 
  temp = thermos.temperature; 
  console.log(thermos);
  
  
// finding random number between passed numbers
  function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
console.log(randomRange(-787, 1780));


// sorting numbers in array (from lowest to highest)
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  console.log(ascendingOrder([1, 5, 2, 3, 4]));

// setting letters in right alphabetical order
function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
  });
}
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

  // finding sum of the numbers (between passed numbers and including)
  function sumAll(arr) {
    let max= Math.max(arr[0, 1])
    let min = Math.min(arr[0], arr[1])
    let sums = 0;
    for(let i = min; i<= max; i++){
      sums += i;
    }
    return sums
    }
    console.log(sumAll([1, 412]));

  // sum of all numbers in array
  let arr = [1, 2, 3, 4];
  let sums = arr.reduce((total, item) => {
    console.log(total, item);
    return total + item
  }, 0)
  console.log(sums);

  // finding sum of numbers (recursion)
  function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  let test = [1, 2, 3, 4, 5]
  console.log(sum(test, 5));
  
  // multiplying every number on the next one
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  let array = [1, 2, 3, 4, 5]
  console.log(multiply(array, 5));


  //finding sum of numbers with rest operator
  const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 5));

// multiplying all numbers from nested arrays
function multiplyAll(arr) {
  let product = 1;
for (let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    product = product * arr[i][j]
  }
}
  return product;
}
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));


// returning first number from array, which returns true for passed function
 function findElement(arr, func) {
    return arr.find(func)
  }
  console.log(findElement([1, 3, 4, 7], num => num % 2 === 0));


// sum of prices of the items in cart 
const toBuy = [
    { name: 'Cucumber', price: 4 },
    { name: 'Potatoe', price: 2 },
    { name: 'Bread', price: 3 }
  ];
  
  const usersObj = toBuy.reduce((total, items) => {
    return total + items.price
  }, 0);
  console.log(usersObj);

// finding greater or equal
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
console.log(findGreaterOrEqual(12, 34));

// grouping people by their age
const people = [
  { name: "kyle", age: 26},
  { name: "Jonh", age: 31},
  { name: "Sally", age: 42},
  { name: "Jill", age: 42},
]
const result = people.reduce((groupedPeople, person)=>{
  const age = person.age
if(groupedPeople[age] == null) groupedPeople[age]= []
groupedPeople[age].push(person)
  return groupedPeople
},{})
console.log(result);

// finding index of the place for passed number
function getIndexToIns(arr, num) {
    arr.sort((a, b)=> (a-b))
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            return i
        }
    }
    return arr.length
}
  console.log(getIndexToIns([40, 76, 35, 60], 150));

// checking for boolean
function booWho(bool) {
  return typeof bool === "boolean";
}
console.log(booWho(true));

// string in reverse
function reverseString(str) {
    let reversedStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
     reversedStr += str[i];
   }
   return reversedStr;
 }
 console.log(reverseString("Hello World"));

// updating record collections
 const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if(value === ""){
  delete records[id][prop];
}
  else if(prop !== "tracks" && value !== ""){
    records[id][prop] = value
  }
  else if(prop === "tracks" && value !== ""){
    if (records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [];
      }
    records[id][prop].push(value);
}
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

 // finding the length of the longest word in string
 function findLongestWordLength(str) {
    let words = str.split(' ');
    console.log(words);
    let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  //returning all numbers in array from 1 to passed one
  function countup(n) {
  if (n < 1) {
    return []
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(4));

// merging two arrays on the passed index
function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice()
    arr.splice(n, 0, ...arr1);
    return arr
  }
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 2));

// returning without falsy elements
  function bouncer(arr) {
    let filteredArr = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i])  filteredArr.push(arr[i])
    }
    return filteredArr
  }
  console.log(bouncer([7, "ate", "", false, 9]));

  // finding which user like what
  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name){
      return contacts[i][prop] || "No such property"
    }
  }return "No such contact"
  }
  var data = lookUpProfile("Akira", "likes");
  console.log(data);


  //blackjack strategy
  let count = 0;
  function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  
  let holdbet = "Hold"
  if(count > 0){
    holdbet = "Bet"
  }
  
  return count + " " + holdbet
  }
  
  console.log(cc(2)); cc(3); cc(7); cc('K'); cc('A');
  console.log(cc('A'));