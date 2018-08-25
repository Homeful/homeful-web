import { Member } from "./member";

export class Camp {
  id?: string;
  name: string = "";
  location: Location;
  members?: Member[] = [];
  active?: boolean;
}

export class Location {
  lat: number = 0;
  lng: number = 0;
}
