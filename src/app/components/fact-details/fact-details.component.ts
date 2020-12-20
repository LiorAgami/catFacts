import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../../core/app-service.service';


@Component({
  selector: 'fact-details',
  templateUrl: './fact-details.component.html',
  styleUrls: ['./fact-details.component.scss']
})
export class FactDetails implements OnInit {
	private fChangedSub: Subscription;

  factsList;

  constructor(private appService: AppService) { }

	ngOnInit() {
		this.fChangedSub = this.appService.factsUpdated
			.subscribe((res) => {
				this.factsList = res;
			});
	}

	ngOnDestroy(): void {
		this.fChangedSub.unsubscribe();
	}

	moveItemToListSection(id) {
		this.appService.moveItemToListSection(id);
	}
}
