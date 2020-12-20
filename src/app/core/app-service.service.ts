import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import Fact from '../shared/models/fact.model';

@Injectable({
	providedIn: 'root'
})

export class AppService {

	constructor(private http: HttpClient, private toastr: ToastrService) { }

	factsUpdated = new Subject<any>();
	factsList: Fact[] = [];
	lastSavedFactsList: Fact[] = [];
	fakeUsersNames = [
		'Amare Sawyer',
		'Kendra Wilkerson',
		'Elisa Khan',
		'Natalee Conway',
		'Ruby Joyce',
		'Killian Graham',
		'Maxwell Marshall',
		'Armani Ford',
		'Karissa Frey',
		'Johnathan Fitzgerald',
		'Keegan Mullins',
		'Mauricio Garza',
		'Christopher Ryan',
		'Eric Robbins',
		'Melissa Bowen',
		'Roland Jennings',
		'Joy Salazar',
		'Celia Carlson',
		'Dwayne Washington',
		'Josh Parsons',
		'Kelli Kennedy',
		'Mattie Phillips'
	];

	/************************
	 * @ Facts List Actions
	 ************************/

	listsAreEqual() {
		const newFactsListToSave = JSON.stringify(this.listItemsToSave());
		const lastSavedFactsList = JSON.stringify(this.lastSavedFactsList);

		return (newFactsListToSave == lastSavedFactsList);
	}

	listItemsToSave() {debugger;
		const factsToSave = this.factsList
			.filter(fact => fact.showInDetailsSection) // take only what appears on details section
			.map(fact => {
				return { // fields to save in json file
					fact: fact.fact,
					user: fact.user,
					upvotes: fact.upvotes
				}
		});

		return factsToSave;
	}

	saveFacts() {

		if(this.listsAreEqual()) return this.showToast("info", "Nothing to update");

		const factsToSave: Fact[] = this.listItemsToSave();

		if(!factsToSave.length) return this.showToast("info", "Nothing to save");

		return this.http.post(environment.API_BASE_URL, { endpoint:'/api/facts/save', factsToSave })
			.subscribe(
				(res: any) => {
					if(!res.success) return;

					this.lastSavedFactsList = [...factsToSave];
					this.showToast("success", "Facts saved successfully!");
				},
				error => this.showToast("error", "Server Error!", "Couldn't save facts.")
			);
	}

	fetchFacts(urlParams) {
		return this.http.get(`${environment.FACTS_API_BASE_URL}${urlParams}`)
			.pipe(
				map((facts: any) => { // Clean out all unnecessary fact props
					return facts.map(fact => {
						return {
							fact: fact.text,
							id: fact._id
						};
					});
				})
			)
			.subscribe(
				(transformedFacts: Fact[]) => {
					this.factsList = transformedFacts;

					if(this.factsList.length){

						this.factsList.forEach(fact => {
							const RANDOM_NUM = Math.floor(Math.random() * this.fakeUsersNames.length);

							// Doing some fake operation - fetched facts doesn't contain the requested props
							fact.user = this.fakeUsersNames[RANDOM_NUM];
							fact.upvotes = RANDOM_NUM;
						});
					}

					this.broadcastNewFactsArr();
				},
				error => this.showToast("error", "Server Error!", "Couldn't fetch facts.")
			);
	}

	broadcastNewFactsArr() {
		this.factsUpdated.next([...this.factsList]);
	}

	moveItemToDetailsSection(id) {
		let fact = this.factsList.find((fact) => fact.id == id);

		if(!fact) return;

		fact.showInDetailsSection = true;
		this.broadcastNewFactsArr();
	}

	moveItemToListSection(id) {
		let fact = this.factsList.find((fact) => fact.id == id);

		if(!fact) return;

		fact.showInDetailsSection = false;
		this.broadcastNewFactsArr();
	}

	/************************
	 * @ Toast Actions
	 ************************/

	showToast(toastType = 'success', mainText = 'Operation Succeeded!', subText = '', config = {}) {
		this.toastr[toastType](subText, mainText, config);
	}

}
