import { StorageHouse } from "./IStorageUnits";

const storageHouseOne : StorageHouse = { 
    id: 1,
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

const storageHouseTwo: StorageHouse = { 
    id: 2,
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
    name: 'Apartment #2'
  }

  export const StorageHouses = [
    storageHouseOne,
    storageHouseTwo
  ];