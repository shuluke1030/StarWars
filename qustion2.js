const axios = require("axios");


const filmUrls = [
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/2/",
  "https://swapi.dev/api/films/3/",
  "https://swapi.dev/api/films/4/",
  "https://swapi.dev/api/films/5/",
  "https://swapi.dev/api/films/6/",
];

function getFilmTitle(url) {
  return axios
    .get(url)
    .then((response) => response.data.title)
    .catch((error) => {
      console.error(error);
      return null;
    });
}

(async function () {
  const titles = [];
  const episode_Ids = [];

  for (const url of filmUrls) {
    const title = await getFilmTitle(url);
    const episode_Id = await getFilmEpisode_Id(url);
    titles.push(title);
    episode_Ids.push(episode_Id);
  }

  const newTitles = new Array(filmUrls.length);
  for (let i = 0; i < filmUrls.length; i++) {
    let eid = episode_Ids[i];
    let tit = titles[i];
    newTitles.splice(eid, 1, tit);
  }
  newTitles.splice(0, 1);
  console.log(newTitles);
})();

function getFilmEpisode_Id(url) {
  return axios
    .get(url)
    .then((response) => response.data.episode_id)
    .catch((error) => {
      console.error(error);
      return null;
    });
}



