const axios = require("axios");

axios
  .get("https://swapi.dev/api/films/6/")
  .then((response) => {
    console.log(response.data.species.length);
  })
  .catch((error) => {
    console.error(error);
  });