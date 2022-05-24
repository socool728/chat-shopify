const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const socketIO = require('socket.io');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
const io = socketIO.listen(server);

// Assign socket object to every request
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/chats', require('./routes/api/chat'));
