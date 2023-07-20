const { MongoClient } = require('mongodb');

// MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017';

// MongoDB Database Name
const dbName = 'mydatabase';

// Connect to MongoDB
MongoClient.connect(mongoURL, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB successfully!');

        const db = client.db(dbName);

        // Implement CRUD operations here

        client.close();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });


const createUser = () => {
    const userCollection = db.collection('users');

    const newUser = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
    };

    userCollection.insertOne(newUser)
        .then(result => {
            console.log('Document inserted successfully:', result.insertedId);
        })
        .catch(err => {
            console.error('Error inserting document:', err);
        });

}

const readUser = () => {
    const userCollection = db.collection('users');

    // Find all documents
    userCollection.find().toArray()
        .then(users => {
            console.log('All users:', users);
        })
        .catch(err => {
            console.error('Error finding documents:', err);
        });

    // Find a specific document by its properties
    userCollection.findOne({ name: 'John Doe' })
        .then(user => {
            console.log('User found:', user);
        })
        .catch(err => {
            console.error('Error finding document:', err);
        });
}

const updateUser = () => {
    const userCollection = db.collection('users');

    // Update a single document
    userCollection.updateOne(
        { name: 'John Doe' },
        { $set: { age: 31 } }
    )
        .then(result => {
            console.log('Document updated successfully:', result.modifiedCount);
        })
        .catch(err => {
            console.error('Error updating document:', err);
        });
}
// Update multiple documents

const deleteUser = () => {
    const userCollection = db.collection('users');

    // Delete a single document
    userCollection.deleteOne({ name: 'John Doe' })
        .then(result => {
            console.log('Document deleted successfully:', result.deletedCount);
        })
        .catch(err => {
            console.error('Error deleting document:', err);
        });
}