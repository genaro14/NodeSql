# Node App with SQL DB
## Production:
+ express 
+ express-handlebars 
+ express-session 
+ express-mysql-session 
+ morgan 
+ timeago.js 
+ passport 
+ passport-local 
+ bcryptjs 
+ connect-flash 
+ express-validator

## Developer
+ Nodemon


## How to start

1.    run docker(Docker and D compose is needed)
``` bash
$ docker-compose -f db/sql/docker-compose.yml up -d
```
 2.   Run proyect
```bash
$ npm install // only the first time
$ npm start 
```
> Server Runs on localhost:8080

## Database Server

Access DB folder and run Mongo docker with docker-compose
``` bash
$ cd /db/sql
$ docker-compose up -d
```
 Adminer runs in port 8080
> Server: db //docker container name        
> user: root           
> password: BxT34%LyR       

## Node Proyect

in proyect '/' :
``` bash
$ npm install
$ npm run dev
```