const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('PROG3175 Final - Jordan Partridge (8039109)');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});