// Create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Create route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

// Create route
app.get('/comments', (req, res) => {
    res.json({ comments: [ 'comment 1', 'comment 2', 'comment 3' ] });
} 
);