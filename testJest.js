const axios = require('axios');

const filmUrls = [
  'https://swapi.dev/api/films/1/',
  'https://swapi.dev/api/films/2/',
  'https://swapi.dev/api/films/3/',
  'https://swapi.dev/api/films/4/',
  'https://swapi.dev/api/films/5/',
  'https://swapi.dev/api/films/6/'
];

function getFilmTitle(url) {
  return axios.get(url)
    .then(response => response.data.title)
    .catch(error => {
      console.error(error);
      return null;
    });
}

function getFilmEpisode_Id(url) {
  return axios.get(url)
    .then(response => response.data.episode_id)
    .catch(error => {
      console.error(error);
      return null;
    });
}

test('getFilmTitle should return an array of film titles', async () => {
  const titles = [];

  for (const url of filmUrls) {
    const title = await getFilmTitle(url);
    titles.push(title);
  }

  expect(titles).toEqual([
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'The Phantom Menace',
    'Attack of the Clones',
    'Revenge of the Sith'
  ]);
});

test('getFilmEpisode_Id should return an array of episode ids', async () => {
  const episode_Ids = [];

  for (const url of filmUrls) {
    const episode_Id = await getFilmEpisode_Id(url);
    episode_Ids.push(episode_Id);
  }

  expect(episode_Ids).toEqual([4, 5, 6, 1, 2, 3]);
});
