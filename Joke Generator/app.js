import https from "https";
import { parse } from "path";

const getJoke = () => {
  const options = {
    hostname: "icanhazdadjoke.com",
    path: "/",
    headers: {
      Accept: "application/json",
    },
  };

  https.get(options, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      let parseData = JSON.parse(data);
      console.log(parseData.joke);
    });
  });
};

getJoke();
