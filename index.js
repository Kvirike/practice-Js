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
  