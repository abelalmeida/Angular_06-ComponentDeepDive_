# CmpDeepDive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0-next.2.

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


# When should you split a component into multiple?
- up to you
- component concept:
    - separate concerns 
        - every component should do one thing
#App-component.html
- refactered to reuse dashboard-item 
***  image = input.required<{ src: string, alt: string }>();
     title = input.required<string>();
***

# use a built in elements
- create a button that can be reused use your selector - setup an attribute selector `selector: button[appButton]`



# Template:
- In the New-ticket-component, we using template to saving what we enter in the form in the element
  -- create attribute title  stored in the variable and can be used in the page as a variable with out the hash tag