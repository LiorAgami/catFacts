
# Cats Facts App


This App was built for fun and for demonstrating the usage of RxJS operators combined with Angular and 3rd party Api.

It includes the following technologies: Angular, PHP, RxJS, Es6, Typescript, ngx-toaster, [cat-facts API](https://alexwohlbruck.github.io/cat-facts/docs/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## App Features
- Loads 10 random cat facts from the API.
- Double click on a fact item from the list section - moves it to the details section.
- Double click on a fact item from the details section - moves it back to the list section.
- Click on save button -
	1. If there are items on the details section -> will be saved to a json file on server.
	2. If there are items on the details section and items list is equal to last saved list -> wouldn't be saved to a json file.
	3. If there are no items on the details section -> wouldn't be saved to a json file.

## Extra Features
- Using RxJS (Map, Subject, Subscription) operators.
- Using Typescript interface.
- Using Es6 Spread, Map, Filter etc.

**Warning:** Store this app on a local Apache server using wamp, xamp etc.

## How to Run locally

```bash
$ git clone https://github.com/LiorAgami/catFacts.git
$ cd catFacts
$ npm i
```

- Run your local Apache server.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Screenshots
![home](src/assets/images/mainScreen.png?raw=true "Home")
![saved](src/assets/images/factsSaved.png?raw=true "saved")
![not saved](src/assets/images/factsNotSaved.png?raw=true "not  saved")

