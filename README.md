# PROG3175 Final

## Overview

## Start the Server
To start the server, navigate to the server folder in a terminal and type the command `npm start`. All [dependencies](#dependencies) will be updated or installed automatically and the server should work out of the box.

---

### Endpoints

#### Create
###### `/api/addMovie` Add a Movie 

**Example Request**
To query this example on a local server from a terminal:
```bash
curl -X POST http://localhost:8080/api/addMovie \
-H "Content-Type: application/json" \
-d '{
    "title": "Sharknado",
    "genre": "Documentary",      
    "year": 2013
}'
```

**Expected Response**
The response should be the movie you'e adding in JSON format. Please note the Id assigned to the movie.
```json
{
    "id": 4,
    "title": "Sharknado",
    "genre": "Documentary",
    "year": 2013
}
```
<sub>*Output formatted for reaability*</sub>

---

#### Read
###### `/api/getMovies` Get all Movies

**Example Request**
To query this example on a local server from a terminal:
```bash
curl http://localhost:8080/api/getMovies
```

**Example Response**
The response should be a list of allstored movies in JSON format.
```json
[
  {
    "id": 1,
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "year": 1999
  },
  {
    "id": 2,
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": 2010
  },
  {
    "id": 3,
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "year": 2014
  }
]
```
<sub>*Output formatted for reaability*</sub>

###### `/api/getMovie/{id}` Get Movie by Id

**Example Request**
To query this example on a local server from a terminal:
```bash
curl http://localhost:8080/api/getMovie/1
```

**Example Response**

```json
{
  "id": 1,
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "year": 1999
}
```
<sub>*Output formatted for reaability*</sub>

---

## Dependencies
The server requires `express` and `nodemon`, which are both automatically installed when you run the server. To install them manually, naviate to the server folder in a terminal and use the command `npm install`.