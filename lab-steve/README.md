# 37 - Cookies and Full Stack Application

- **Author**: Steve Carpenter
- **Version**: 1.0.0

## Overview
This is a simple app that currently allows a user to sign in or sign up.
They can visit their `/profile` page to see a welcome message and sign out.

## Getting Started
- Clone the repository to your local directory from [here](https://github.com/stevegcarpenter/37-cookies)
- Install all the necessary modules using the `npm install` command in both the backend and frontend directories
- Start the mongo database in the backend directory by running `npm run start-db`
- Start `nodemon` in the backend directory by running `npm run start:watch`
- Run the webpack build in the front end directory by executing `npm run watch`
- Open the browser to `http://localhost:8080` and enjoy

### Details
- In the front end directory, you will need a `.dev.env` file with the following contents:
```bash
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000
```
- In the back end directory, you will need a `.env` file with the following contents:
```bash
PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
SECRET='Gregor and The Hound'
MONGO_URI=mongodb://localhost/testdb
```

## Architecture
- [JavaScript](https://www.javascript.com/)
- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Webpack](https://webpack.js.org/)
- [npm](https://npmjs.org/)

## Change Log
```
2018-03-06 Committing the cfgram backend to be used with our front-end
2018-03-06 Got the frontend code working with the backend
2018-03-06 Fixed .env and .dev.env files
2018-03-06 Added a missing package and fixed some bugs
2018-03-06 Added a null payload to the DELETE_TOKEN action
```
