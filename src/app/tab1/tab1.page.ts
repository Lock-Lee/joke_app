import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  gaugeType = 'semi';

  public readTemp;
  public readHum;
  public readLux;

  constructor(public service: AppserviceService) {
    
    this.service.message((val) => {
      if (val.topic == '/Jokeiot/Jokeiot/getSensor') {
        this.readLux = `${val.message}`.split(',')[0];
        this.readTemp = `${val.message}`.split(',')[1];
        this.readHum = `${val.message}`.split(',')[2];

        console.log(this.readLux, this.readTemp, this.readHum);
      }
    });
   

  }

  ngOnInit() {
    this.service.message((val) => {
      if (val.topic == '/Jokeiot/Jokeiot/Evap') {
        console.log(val);
      }
    });
  }
  public readSensor() {
    this.service.publish(
      `/readsensor`,
      `1`
    );
  }
  public readValue() {
    this.service.publish(
      `/readdata`,
      `1`
    );
  }
}
