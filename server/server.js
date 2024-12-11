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

// Create
app.post('/api/addMovie', (req, res) => {
    const movie = req.body;
    movie.id = movies.length + 1;
    
    movies.push(movie);
    saveMovies();

    res.json(movie);
});

// Read
app.get('/api/getMovies', (req, res) => {
    res.sendFile(moviesDb);
});

app.get('/api/getMovie/:id', (req, res) => {
    const movie = getMovieById(req.params.id);
    res.json(movie);
});

// Update
app.post('/api/updateMovie/:id', (req, res) => {
    const movie = getMovieById(req.params.id);
    const updatedMovie = req.body;

    Object.assign(movie, updatedMovie);
    saveMovies();

    res.json(movie);
});

// Delete
app.delete('/api/deleteMovie/:id', (req, res) => {
    const movie = getMovieById(req.params.id);
    
    movies = movies.filter(m => m.id != req.params.id);
    saveMovies();

    res.json(movie);
});

//#endregion

app.listen(PORT, () => {
    loadMovies();
    console.log(`Server running on http://localhost:${PORT}`);
});

//#region Helper Functions
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

function saveMovies() {
    fs.writeFile(moviesDb, JSON.stringify(movies), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }

        console.log(`Saved ${movies.length} movies to ${moviesDb}`);
    });
}
//#endregion