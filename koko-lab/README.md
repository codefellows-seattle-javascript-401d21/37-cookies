## Lab 37 - Cookies 

**Author**: Koko Kassa

## How to Install:
- Fork and clone the repository.
- In your terminal navigate to directory lab-koko.
- Navigate down a directory to back-end.
  - Install by executing ```npm install```.
  - Start the server by running ```npm run start:watch```.
  - In a separate terminal start the database by running ```npm run start-db```.
  - In a separate terminal configure the database by running ```mongo```
- Navigate into the front-end directory.
  - Install by executing ```npm install```.
  - Run ```npm run watch``` to launch the site. 

## How to Use:
- In your browser type in ```http://localhost:8080/welcome/signup```, and go to the site. If you're a new user fill out the sign-up form. If your a returning user click on the ```sign in``` link and fill out the sign in form.
- Once signup or signin is complete, you will be given a temporary token and be navigated to ```http://localhost:8080/dashboard``` where you can create a profile.

#### Configuration
* `package.json`
* `.eslintrc`
* `.gitignore`
* `.env`
* `.test.env`

### Backend 
```
PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
APP_SECRET='Gregor and The Hound'
MONGO_URI=mongodb://localhost/testdb
```

### Frontend
```
CDN_URL=/
NODE_ENV=dev
API_URL=http://localhost:3000
```

## Login/Signup
Login with a 
* username
* email
* password

and Sign In is done with 
* username
* password

## Built With
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)
* [Reduct](https://redux.js.org/)
* [WebPack](https://webpack.js.org/)