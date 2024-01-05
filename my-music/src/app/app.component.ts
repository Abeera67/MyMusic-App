import { Component, OnInit } from '@angular/core';
import { DatamangementService } from './shared/datamangement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-music';
  responseData: any = [];

  constructor(
    private readonly DatamangementService: DatamangementService
  ) { }

  ngOnInit() {
    this.getApiData();
  }

  getApiData() {
    this.DatamangementService.getApiData().subscribe((response: any) => {
      const {data} = response;
      this.responseData = data;
      console.log(this.responseData);
    });
  }
}
