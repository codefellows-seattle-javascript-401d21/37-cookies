#Lab 37 

Feature Tasks
* Create a frontend that follows react redux best practices
* Create a landing page that enables a user to signup or signin
* Redirect the user to the dashboard page on signup or signin
* Store the users token in a cookie or localStorage on signin

Installing
```
npm install
```
You also need to copy and paste the following in a .dev.env file.
```
API_URL='http://localhost:3000'
CDN_URL='/'
NODE_ENV='dev'
```
This will install the required depencencies

Running the application
```
npm run watch
```
This will start the webpack dev server so that the app has a build.

Then you can go to
```
http://localhost:8080/welcome/signup
```
in the web browser. This will display the app.

Testing
```
npm test
```
The testing is on the Redux reducers and utility methods.


Authors
Roger Davenport - RND
License
This project is licensed under the MIT License -

Acknowledgments
Scott Schmidt
Google
