const axios = require("axios");

async function getCarsData() {
    const carsName = [];
  
    for (let page = 1; page <= 4; page++) {
      try {
        const response = await axios.get(`https://swapi.dev/api/vehicles/?page=${page}`);
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].max_atmosphering_speed > 1000) {
            carsName.push(response.data.results[i].name);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    console.log(carsName);
  }
  
  getCarsData();