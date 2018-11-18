# IslanderUiFramework

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

The pupose of this repository, to have a base project to develope Angular projects.
This project contains the followings:
- angular-cli based project
- angular material template
- Jasmin & Karma unit test: Custom TestContext for confortable test writing, when the application expands.
- different running profile: 'mock mode' to be able to run the application without backend services.
- fully modular easily extendable

- routing example with one module and two components
- error page with handling service
- common utils in shared module
- snackbar support with notification service

- REST client to fetch data fromm any HTTP REST source
- pipes and util methods (Shared module)
- and others.

Feel free to contact me, if you need more information.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Furthermore `ng serve -c mock` for a dev server, `ng serve -c production` for a prod server.
OR
 "npm start-mock"
 "npm start-prod"

'angular.json' contains the defined script configuration.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Check [Angular-cli references](https://github.com/angular/angular-cli).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` or `npm fulltest` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
