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