const { getSpecies } = require('./StarWarsAPI/Species');

describe('Species', () => {
  test('should return Species quantity for Films 6', async () => {
    const quantity = await getSpecies();
    expect(quantity).toEqual(20);
  });
});