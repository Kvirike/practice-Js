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