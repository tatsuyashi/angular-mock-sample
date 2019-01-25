import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result:JSON;

  constructor(private appService: AppService) {}

  onClickGet(): void {
    this.appService.getGuitars().subscribe(guitars => this.result = JSON.parse(JSON.stringify(guitars)));
  }

  onClickPost(): void {
    this.appService.postGuitar({
      maker: 'Gretsch',
      name: 'White Falcon'
    }).subscribe(guitar => this.result=JSON.parse(JSON.stringify(guitar)));
  }

}
