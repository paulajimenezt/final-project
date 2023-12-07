# Top Gun Lab Course - Module 3 Project

Application designed to help horse veterinarians keep track of their patients.

## Members:

- Paula Jimenez.

## API Endpoints

The application provides the following endpoints:

- `POST /horses`: Create a new horse record.
- `GET /horses`: Retrieve all horses in DB.
- `GET /horses/:id`: Retrieve a horse record by ID.
- `PATCH /horses/:id`: Update a horse record by ID.
- `DELETE /horses/:id`: Delete a horse record by ID.

## Tech Stack

- Node.js
- Express
- Sequelize
- PostgreSQL
- Docker

## Setup and Installation

To run this project, you need to have Docker installed on your machine. Once you have Docker, you can use the following command to start the application:

```bash
docker-compose up
```

```bash
npm run start
```

This will start the PostgreSQL database and the application. You can then access the application at http://localhost:3000.
It also runs pgadmin to see the db contents at http://localhost:8080

## Example calls

- `POST /horses`

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "name": "Starlight",
    "age": 10,
    "breed": "Arabian",
    "gender": "Female",
    "color": "Black",
    "owner": "John Doe",
    "birthDate": "2012-04-23T18:25:43.511Z",
    "lastCheckedDate": "2022-01-01T18:25:43.511Z",
    "weight": 500,
    "height": 150,
    "status": "healthy",
    "pregnancyDate": "2023-04-23T18:25:43.511Z"
}' http://localhost:3000/horses
```

- `GET /horses`

```bash
curl -X GET http://localhost:3000/horses
```

- `GET /horses/:id`

```bash
curl -X GET http://localhost:3000/horses/1
```

- `PATCH /horses/:id`

```bash
curl -X PATCH -H "Content-Type: application/json" -d '{
    "name": "Starlight",
    "age": 10,
    "breed": "Arabian",
    "gender": "Female",
    "color": "Black",
    "owner": "John Doe",
    "birthDate": "2012-04-23T18:25:43.511Z",
    "lastCheckedDate": "2022-01-01T18:25:43.511Z",
    "weight": 500,
    "height": 150,
    "status": "healthy",
    "pregnancyDate": "2023-04-23T18:25:43.511Z"
}' http://localhost:3000/horses/1
```

- `DELETE /horses/:id`

```bash
curl -X DELETE http://localhost:3000/horses/1
```
