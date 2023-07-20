const express = require('express');
const app = express();
const userController = require('./controllers/userController');

// Set view engine and middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Use the userController for handling user-related routes
app.use('/', userController);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
