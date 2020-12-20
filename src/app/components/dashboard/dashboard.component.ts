import { Component, OnInit } from '@angular/core';
import { AppService } from './../../core/app-service.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() { }

  saveFacts() {
    this.appService.saveFacts();
  }

}
