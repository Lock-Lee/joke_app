import { Injectable } from '@angular/core';
const Microgear: any = window;
var microgear = Microgear.Microgear.create({
  key: 'YykoWTP3PCI2xrB',
  secret: '1vwDh4mTk0WxS1xI0p4eyREmM',
  alias: 'Ionic' /*  optional  */,
});
@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  constructor() {
    microgear.connect('Jokeiot');

    microgear.on('connected', () => {
      microgear.subscribe('/Jokeiot/+');
    });

    microgear.on('present', (event) => {
      console.log(event);
    });
  }
  message = (value) => {
    microgear.on('message', (topic, msg) => {
      value({ topic: topic, message: msg });

      console.log(msg);
    });
  };

  publish = (topic, message) => {
    microgear.publish('/joke' + topic, message);
  };
}
