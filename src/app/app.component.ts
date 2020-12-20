import { AppService } from './core/app-service.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ReturnStatement } from '@angular/compiler';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

	constructor(private appService: AppService) { }


	ngOnInit() {

		if(environment.TESTS_MODE) {
			// WRITE YOUR TESTS

			this.appService.saveFacts();
			return;
		}

		this.appService.fetchFacts(`?animal_type=cat&amount=10`);
	}
}
