export class Camp {
  id?: string;
  name: string = "";
  location: Location;
}

export class Location {
  lat: number = 0;
  lng: number = 0;
}
