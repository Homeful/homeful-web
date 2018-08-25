import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GeoService {
  constructor() {}

  getLocationFromBrowser(): Promise<any> {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(pos => {
        resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    });
  }
  getLocation(address: string) {
    return { lat: 1, lng: 1 };
  }
}
