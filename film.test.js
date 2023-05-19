const  {getFilmTitles}  = require('./film');
jest.setTimeout(60000);
describe('Film Titles', () => {
  test('should retrieve and process film titles correctly', async () => {
    const titles = await getFilmTitles();
    expect(titles).toEqual([
      'The Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith',
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi'
    ]);
  });
});
