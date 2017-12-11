export class Hero {
  id: number;
  name: string;
}

export class StorageHouse {
  id: number;
  type: string;
  storageSpaces: StorageSpace[];
  name: string;
}

export class StorageSpace {
  id: number;
  type: string;
  width: string;
  length: string;
  name: string;
  price: number;
}

export class Owner {
  id: number;
  name: string;
  email: string;
}
