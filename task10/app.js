const express = require('express');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Serving static files from the 'public' folder
app.use(express.static('public'));

// Define the route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

