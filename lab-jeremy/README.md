# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_ (BACKEND): 

_Libraries_ (FRONTEND): 

_Last modified_: 3/6/2018

# App use

1. Install with npm i on backend and front end, and add neccessary env files

2. Launch the back end server with nodemon index.js

3. Build the front end with webpack using npm run watch

4. Go to the route /welcome/signin or /welcome/signup to generate tokens

# ENV Files

In the backend you will need the following .env file:
```
PORT=3000
DEBUG=true
CORS_ORIGINS='http://localhost:8080'
SECRET='Gregor and The Hound'
MONGO_URI='mongodb://localhost/testdb'
```

In the front end you will need the following .dev.env file:
```
NODE_ENV="dev"
API_URL="http://localhost:3000"
CDN_URL="/"
```

# Lab Readme (SPECS)

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
* **.eslintrc.json** -- with the class .eslintrc.json file
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
Write a description of the project in your README.md, including detailed instructions for how to build your app. In your frontend README.md add a code block with your frontend .env vars, and in your backend README.md add a code block with your backend .env vars. 
