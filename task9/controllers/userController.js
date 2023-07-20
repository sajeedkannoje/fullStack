const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// Sample data for demonstration purposes
userModel.addUser('John Doe', 'john@example.com');
userModel.addUser('Alice Smith', 'alice@example.com');

router.get('/', (req, res) => {
  const users = userModel.getUsers();
  res.render('index', { users });
});

module.exports = router;
