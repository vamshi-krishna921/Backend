import { log } from "console";
import readline from "readline/promises";

const rdln = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "21486e690d1342739093e473694058c1";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const city = await rdln.question("Enter the city name : ");

const getWeather = async (city) => {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error("The city is not found.");
    }
    console.log(`\nWeather in ${data.name}`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Condition: ${data.weather[0].description}`);
  } catch (error) {
    console.log(error);
  }
};
await getWeather(city);
rdln.close();
