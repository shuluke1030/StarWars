const axios = require("axios");

async function getSpecies(){
  try {
    const response = await axios.get("https://swapi.dev/api/films/6/");
    return response.data.species.length;
  } catch (error) {
    console.error(error);
    return null;
  }
}
module.exports = {
    getSpecies
};