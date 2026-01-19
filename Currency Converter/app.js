import https from "https";
import readline, { createInterface } from "readline";

const rdln = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "2a36aff3714fc1145e20bf63";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const currencyConverter = () => {
  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      let parsedData = JSON.parse(data).conversion_rates;
      rdln.question("Enter the amount in USD: ", (amount) => {
        amount = parseFloat(amount);
        rdln.question("Enter the currency to convert (INR,EUR): ", (target) => {
          let targetCurrency = target.toUpperCase();
          let targetAmount = parsedData[targetCurrency] * amount;
          console.log(`${amount} in ${targetCurrency} is ${targetAmount}`);
          rdln.close();
        });
      });
    });
  });
};

currencyConverter();
