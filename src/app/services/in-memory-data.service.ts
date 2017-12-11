import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    var storageHouseOne = { 
      id: 0,
      type: 'House',
      storageSpaces:  [ 
        {
          id: 0,
          type: 'Garage',
          width: '10 ft',
          length: '10 ft',
          name: 'Buraks Garage',
          price: 100,
        },
        {
          id: 1,
          type: 'Room',
          width: '16 ft',
          length: '10 ft',
          name: 'Buraks Garage',
          price: 140,
        }
      ],
      name: 'Buraks House'
    }

    var storageHouseTwo = { 
      id: 0,
      type: 'Apartment',
      storageSpaces:  [ 
        {
          id: 0,
          type: 'Rooom',
          width: '10 ft',
          length: '10 ft',
          name: 'Armys Garage',
          price: 50,
        }
      ],
      name: 'Apartment Apartment'
    }

    const StorageHouses = [
      storageHouseOne,
      storageHouseTwo
    ];
    
    return {heroes};
  }
}
