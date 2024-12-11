const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;

const moviesDb = __dirname + '/data/movies.json';
var movies;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('PROG3175 Final - Jordan Partridge (8039109)');
});

//#region CRUD Endpoints
app.post('/api/addMovie', (req, res) => {
    const movie = req.body;
    res.send(movie);
});

app.get('/api/getMovies', (req, res) => {
    res.sendFile(moviesDb);
});

app.get('/api/getMovie/:id', (req, res) => {
    const movie = getMovieById(req.params.id);
    res.json(movie);
});
//#endregion

app.listen(PORT, () => {
    loadMovies();
    console.log(`Server running on http://localhost:${PORT}`);
});

function getMovieById(id) {
    return movies.find(movie => movie.id == id);
}

function loadMovies() {
    fs.readFile(moviesDb, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        movies = JSON.parse(data);
        console.log(`Loaded ${movies.length} movies from ${moviesDb}`);
    });
}