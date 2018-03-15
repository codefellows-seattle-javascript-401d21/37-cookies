<h1>Code 37 Cookies</h1>

author: Richard Montgomery

github: montgomeryrd

version: 1.0.0

<hr>

<h2>How to Use</h2>

Front-End: "npm i" to install dependencies. Create environment variables. Include:
```
PORT=3000
NODE_ENV="dev"
__API_URL__="http://localhost:3000"
```

Back-End: "npm i" dependencies. Create back-end environment variables:

```
PORT=3000
DEBUG=true
CORS_ORIGINS='http://localhost:8080'
MONGO_URI='mongodb://localhost/testdb'
```

Run the server from the back-end using "npm run start". Should display __SERVER_UP__ 3000 in terminal.

Build the webpack on the front-end with "npm run watch". Should display "webpack: Compiled successfully."

Route to /welcome/signin or /welcome/signup to generate tokens.

<hr>

<h2>Lab Assignment</h2>
401 JS --  Lab 37 auth
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas


## Requirements
#### back-end setup
* copy the back-end lecture demo from today for your API, and enable your linter.

#### Configuration
##### frontend/
* **README.md** -- with a documentation about your lab
* **.babelrc** -- with all dependencies and dev-dependencies
* **.eslintrc** -- with the class .eslintrc file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies
* **webpack.config.js** -- with webpack config
* **src/** -- containing the front end code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset
* **src/style/_base.scss** -- base styles
* **src/style/_layout.scss** -- layout styles

#### Feature Tasks
* Create a frontend that follows react redux best practices
* Create a landing page that enables a user to signup or signin
* Redirect the user to the dashboard page on signup or signin
* Store the users token in a cookie or `localstorage` on signin

#### Test
* Test your redux reducers
* Test your util methods

####  Documentation
Write a description of the project in your README.md

