const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const User = require('Models/user'); // Import the User model

// MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB successfully!');
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Express route to create a new user
app.post('/users', (req, res) => {
    const { name, email, age } = req.body;

    // Create a new User document using the Mongoose model
    const newUser = new User({ name, email, age });

    // Save the user to the database
    newUser.save()
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user to the database' });
        });
});

// Express route to get all users
app.get('/users', (req, res) => {
    // Use the User model to find all users in the database
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to fetch users from the database' });
        });
});

// More routes for other CRUD operations can be added here

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
