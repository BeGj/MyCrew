# MyCrew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# Info about libraries:
## Angular material
[Link to docs](https://material.angular.io/components/categories)

## ngRx
[Link to docs](https://ngrx.io/docs)
## Lodash 
[Link to docs](https://tutorialsforangular.com/2020/08/02/using-lodash-with-angular/)
### Example

import * as _ from 'lodash';

let myItem = {};

let clonedItem = _.clone(myItem);

## Day.js (Moment.js replacer)
[Link to docs](https://day.js.org/docs/en/installation/typescript)

### Example

import * as dayjs from 'dayjs'

dayjs().format()

### Locale and plugin import

import * as dayjs from 'dayjs'

import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin

import 'dayjs/locale/zh-cn' // import locale

dayjs.extend(isLeapYear) // use plugin

dayjs.locale('zh-cn') // use locale
