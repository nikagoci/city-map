export enum CategoryEnum {
  Monastery = "Monastery",
  Bridge = "Bridge",
  Museum = "Museum",
  Garden = "Garden",
  Reserve = "Reserve",
  Aquatica = "Aquatica"
}

export interface LocationInterface {
  name: string;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  category: CategoryEnum
}
