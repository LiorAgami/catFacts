import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../core/app-service.service';

@Component({
  selector: 'fact-list-item',
  templateUrl: './fact-list-item.component.html',
  styleUrls: ['./fact-list-item.component.scss']
})
export class FactListItem implements OnInit {

  @Input() index;
  @Input() id;

	constructor(private appService: AppService) { }

  ngOnInit() { }

  moveItemToDetailsSection() {
    this.appService.moveItemToDetailsSection(this.id);
  }

}
