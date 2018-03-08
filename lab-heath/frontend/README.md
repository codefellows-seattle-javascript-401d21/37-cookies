## Lab in work. 

here are the ENV for front end and back end.

### Backend 
```
PORT=3000
DEBUG=true
CORS_ORIGINS=http://localhost:8080
SECRET='Gregor and The Hound'
MONGO_URI=mongodb://localhost/testdb
AWS_BUCKET=‘you stuff here’
AWS_ACCESS_KEY_ID='you stuff here’
AWS_SECRET_ACCESS_KEY=you stuff here’
```

### Frontend

```
NODE_ENV="dev"
API_URL="http://localhost:3000"
CDN_URL="/"
```

## to start it up

do the navagate to the file and then do a `npm i` and it should load all the packages and then run in 3 different terminals 

* in the backend file
```javascript
npm run start-db
```

* in the backend file
```javascript
npm run start:watch
```

* in the frontend 
```javascript
npm run watch
```

### no test for frontend. 

## login/Signup

login with a 
* username
* email
* password

and signin is done with 
* username
* password