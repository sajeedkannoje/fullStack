const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 3000;

// MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017';

// MongoDB Database Name
const dbName = 'mydatabase';

// Connect to MongoDB
mongodb.MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB successfully!');

    // Get the database
    const db = client.db(dbName);

    // Define a collection
    const collection = db.collection('users');

    // Insert a document
    collection.insertOne({ name: 'John', age: 30 }, (err, result) => {
        if (err) {
            console.error('Error inserting document:', err);
        } else {
            console.log('Document inserted successfully:', result.insertedId);
        }
    });

    // Close the MongoDB connection when the server is shut down
    process.on('SIGINT', () => {
        client.close(() => {
            console.log('MongoDB connection closed.');
            process.exit(0);
        });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

