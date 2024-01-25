# Clients-Locator

Clients Locator is a registration and search application, with TSP mapping.

Some technologies used:

* React;
* Html;
* CSS(Styled);
* JavaScript;
* PostgresSQL;
* Jest(Only Config);
* Node;
* Express.

## Routes

The route is linked to the address "localhost:3001/products ...". The backend runs on port 3001 and the frontend on port 3000. Below is a specification of the route's QueryParms.

* Get: /clients - QueryParms: { search };

* Get: /clients/route - Performs TSP route mapping;

* Post: /clients - Body: { "name": "string", "email": "string","latitude": "number", "longitude": "number", "phone": "number" };

* Delete: /clients/:id - Parms: { id };

## Running the app

**Obs 1**: Adjust the password according to your PostgreSQL configuration (./backend/src/modal/database.js);

**Obs 2**: Make sure the Backend is running before starting the Frontend, otherwise bugs may occur;

**Obs 3**: Don't forget to install dependencies, both backend and frontend.

**SQL search example**: SELECT id, name, email, phone, latitude, longitude FROM clients;

```bash
# Installation
# Go to "cd ./frontend" and in "cd ./backend". Then run:
$ npm install

# Running
# Open two terminals and go to "cd ./frontend" in one, and "cd ./backend" in the other. Then run on both:
$ npm start

# Running Test in Frontend
# Go to "cd ./frontend". Then run:
$ npm run test
```