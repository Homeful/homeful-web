import { Camp } from "./camp";

export class Route {
  id?: string;
  name: string = "";
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
  stops: Stop[];
}

export class Stop {
  camp: Camp;
  complete: boolean;
  inProgress: boolean;
}
