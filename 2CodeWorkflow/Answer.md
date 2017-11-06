#Oberservation

The Project is Divided into 3 parts
config - for managing all configurations need for the project
docs -- documentation.
src -- all the source code.


##src
This file will have all the source code and root file would be index.js

### Index.js
THis file has cluster which is used to deploy the code into multicore System. this will invoke the App.js Which starts the Webserver.

### App.js
This file creates the instance of the App. and This project has used Koa module for creating and managing Server Requests.
This file also has Middlewares, Cors, bodyParser etc. all will be added as middlewares to server by app.use

###const.js
contains all the Constats those will be needed to maintain consistency.

#configs
contains the configuration AWS.

#Controllers/ClientController
It returns a class which contains methods for handling different api requests.
It calls a respective Service from ClientService which will perform actions on DataBase and returns results.

getById - gets Client By Id
getByOrigin - gets results by filtering the Client Schema based on Origin
list - for listing all the Clents.

#Services/ClientService
It provides different Services for handling Api Requests. It communicates to DB by Dynamoose which is ODM for mongo DB and returns the results based on values provided.

#models/ClientModel
It has a Schema design and returns the document model from 
