// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  url: "http://localhost:4200",
  production: false,
  firebase: {
    apiKey: "AIzaSyAAGyCNJIhfi4wIumrEtxEg_DwB2zD56UU",
    authDomain: "homeful-d9f3c.firebaseapp.com",
    databaseURL: "https://homeful-d9f3c.firebaseio.com",
    projectId: "homeful-d9f3c",
    storageBucket: "homeful-d9f3c.appspot.com",
    messagingSenderId: "542192151632"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
