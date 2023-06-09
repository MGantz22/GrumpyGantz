# GrumpyGantz Coffe Bean Co
#### By Mitchell Gantz


[Component Diagram](#component-diagram)

[Setup/Installation Guide](#setup/installation-guide)

[Bugs](#known-bugs)

[License](#license)


## Technologies Used

   * Javascript
   * React
   * Eslint
   * Babel
   * Webpack
   * Jest

## User Stories / Prompt
* As a user, I want to see a list/menu of all available types of coffee beans.
* For each item, I want to see its name, origin, price, and roast (light, medium, or dark) of the coffee bean. (You are welcome to include anything additional that is relevant to the product your store carries.)
* As a user, I want to submit a form to add a new burlap sack of coffee to the inventory.
* As a user, I want to be able to click on a burlap sack to see its detail page.
* As a user, I want to see how many pounds of coffee beans are left in a burlap sack. A burlap sack has roughly 130 pounds.
* As a user, I want to be able to click a button to sell a pound of coffee beans. This should decrease the number of pounds left by 1. The number of pounds in a sack of coffee beans should not be able to go below 0.

## Component Diagram
* ![Component Diagram](./Mockup.png)

## Setup/Installation Guide
* Clone this repo to your workspace
* Navigate to the root directory, then the `GrumpyGantz` subdirectory and open a terminal there
* Enter `npm install` to install necessary packages
* To run the program, either enter: 
   * `npm start` (this runs the app in the development mode, enabling live reloads and linting errors in the console).
   * `npm run build` (no development features)

The site will be available at
[http://localhost:3000](http://localhost:3000)

## Known Bugs
* none


## License

MIT License

Copyright (c) 2023 Mitchell Gantz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.