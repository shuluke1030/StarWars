const { getCarsName } = require('./StarWarsAPI/CarsName');

describe('CarsName', () => {
  test('should return vehicles with max_atmosphering_speed over 1000', async () => {
    const vehicles = await getCarsName();
    expect(vehicles).toEqual([
        'T-16 skyhopper',
        'TIE/LN starfighter',
        'Storm IV Twin-Pod cloud car',
        'TIE/IN interceptor',
        'Vulture Droid',
        'Geonosian starfighter',
        'Droid tri-fighter'
      ]);
  });
});