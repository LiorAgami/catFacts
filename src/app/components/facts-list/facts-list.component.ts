import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../core/app-service.service';
import { Subscription } from 'rxjs';
import { map } from "rxjs/operators";


@Component({
	selector: 'facts-list',
	templateUrl: './facts-list.component.html',
	styleUrls: ['./facts-list.component.scss']
})

export class FactsList implements OnInit, OnDestroy {

	private fChanedSub: Subscription;

	factsList;

	constructor(private appService: AppService){
	}

	ngOnInit() {
		this.fChanedSub = this.appService.factsUpdated
			.subscribe((res) => {
				this.factsList = res.filter((fact) => !fact.showInDetailsSection);
			});
	}

	ngOnDestroy(): void {
		this.fChanedSub.unsubscribe();
	}

}
