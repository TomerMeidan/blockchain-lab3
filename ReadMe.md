# Blockchain Exercises 3

This project is a NodeJS/ExpressJS based web service (API) for a task management system. The API implements the following methods: CreateNew, Update, Remove, and List.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

* ```git clone repo```
* ```cd blockchain-lab3```
* ```npm install```
* ```node server.js```


## API Endpoints and Usage

After starting the server, you can send API requests using the following JSON body:

### ADD

Endpoint: `/add`
Method: POST
Body: JSON object representing the new task

```
###
POST http://localhost:7000/tasks/add
content-type: application/json

{
    "job": "This is a new task that was added by the edit API ADD route"
}
```

### UPDATE

Endpoint: `/update/:id`
Method: PUT
Body: JSON object containing the id of the task to be updated and the new data

```
###
PUT http://localhost:7000/tasks/edit/97e84825-0207-49f4-ae79-b5d1b516bc56
content-type: application/json

{
    "job": "This is task is edited by the edit API PUT route"
}
```

### DELETE

Endpoint: `/remove`
Method: DELETE
Body: JSON object containing the id of the task to be removed

```
###
GET http://localhost:7000/tasks/delete/2
```

### GET ALL

Endpoint: `/list`
Method: GET

```
###
GET http://localhost:7000/tasks/get/all
```