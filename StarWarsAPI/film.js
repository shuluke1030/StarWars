const axios = require("axios");

async function getFilmTitle(url) {
  try {
    const response = await axios.get(url);
    return response.data.title;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getFilmEpisodeId(url) {
  try {
    const response = await axios.get(url);
    return response.data.episode_id;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getFilmTitles() {
  const filmUrls = [];
  for (let i = 1; i <= 6; i++) {
    filmUrls.push(`https://swapi.dev/api/films/${i}/`);
  }

  const titles = [];
  const episodeIds = [];
  
  for (const url of filmUrls) {
    const title = await getFilmTitle(url);
    const episodeId = await getFilmEpisodeId(url);
    titles.push(title);
    episodeIds.push(episodeId);
  }

  const newTitles = new Array(filmUrls.length);
  for (let i = 0; i < filmUrls.length; i++) {
    let eid = episodeIds[i];
    let tit = titles[i];
    newTitles.splice(eid, 1, tit);
  }
  newTitles.splice(0, 1);
  return newTitles;
}

module.exports = {
  getFilmTitles
};
