# ECommerceApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Running the Project Locally

1. Install the Angular CLI

   `npm install -g @angular/cli`

2. Run `npm install` at the root of this project

3. Run `ng serve -o`

## Running the Project Using Docker Containers

1. Install the Angular CLI

   `npm install -g @angular/cli`

2. Run `npm install` at the root of this project
3. Build the application using: `ng build --watch --delete-output-path false`
4. Go to ecm-docker/ecm-local
5. To run the application in container first you will need to build the app, and then start it
   1. Build `docker compose build api app`
   2. Start: `docker compose up api app`
      > Note: If you want to start only angular application please remove api from the command, or run: `docker compose up --build app`

## Running the `Production` Version in Containers

1. Go to ecm-docker/dev or pord
2. Open terminal in that location
3. Run FE and BE in container `docker compose up --build app api`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
