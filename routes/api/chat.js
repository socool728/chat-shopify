const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../../middleware/auth');
// bring in normaize to give us a proper url, regardless of what user entered
// const normalize = require('normalize-url');
// const checkObjectId = require('../../middleware/checkObjectId');

const Message = require('../../models/Message');
const Conversation = require('../../models/Conversation');
const GlobalMessage = require('../../models/GlobalMessage');

let jwtUser = null;

// Token verfication middleware similar as auth
router.use(function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        jwtUser = decoded.user;
        console.log(jwtUser);
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Get global messages
router.get('/global', (req, res) => {
  GlobalMessage.aggregate([
    {
      $lookup: {
        from: 'user',
        localField: 'from',
        foreignField: '_id',
        as: 'fromObj'
      }
    }
  ])
    .project({
      'fromObj.password': 0,
      'fromObj.__v': 0,
      'fromObj.date': 0
    })
    .exec((err, messages) => {
      if (err) {
        console.log(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Failure' }));
        res.sendStatus(500);
      } else {
        res.send(messages);
      }
    });
});

// Post global message
router.post('/global', (req, res) => {
  let message = new GlobalMessage({
    from: jwtUser.id,
    body: req.body.body
  });

  req.io.sockets.emit('messages', req.body.body);

  message.save((err) => {
    if (err) {
      console.log(err);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Failure' }));
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ message: 'Success' }));
    }
  });
});

// Get conversations list
router.get('/conversations', (req, res) => {
  let from = mongoose.Types.ObjectId(jwtUser.id);
  Conversation.aggregate([
    {
      $lookup: {
        from: 'user',
        localField: 'recipients',
        foreignField: '_id',
        as: 'recipientObj'
      }
    }
  ])
    .match({ recipients: { $all: [{ $elemMatch: { $eq: from } }] } })
    .project({
      'recipientObj.password': 0,
      'recipientObj.__v': 0,
      'recipientObj.date': 0
    })
    .exec((err, conversations) => {
      if (err) {
        console.log(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Failure' }));
        res.sendStatus(500);
      } else {
        res.send(conversations);
      }
    });
});

// Get messages from conversation
// based on to & from
router.get('/conversations/query', (req, res) => {
  let user1 = mongoose.Types.ObjectId(jwtUser.id);
  let user2 = mongoose.Types.ObjectId(req.query.userId);
  Message.aggregate([
    {
      $lookup: {
        from: 'user',
        localField: 'to',
        foreignField: '_id',
        as: 'toObj'
      }
    },
    {
      $lookup: {
        from: 'user',
        localField: 'from',
        foreignField: '_id',
        as: 'fromObj'
      }
    }
  ])
    .match({
      $or: [
        { $and: [{ to: user1 }, { from: user2 }] },
        { $and: [{ to: user2 }, { from: user1 }] }
      ]
    })
    .project({
      'toObj.password': 0,
      'toObj.__v': 0,
      'toObj.date': 0,
      'fromObj.password': 0,
      'fromObj.__v': 0,
      'fromObj.date': 0
    })
    .exec((err, messages) => {
      if (err) {
        console.log(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Failure' }));
        res.sendStatus(500);
      } else {
        res.send(messages);
      }
    });
});

// Post private message
router.post('/', auth, (req, res) => {
  let from = mongoose.Types.ObjectId(jwtUser.id);
  let to = mongoose.Types.ObjectId(req.body.to);

  Conversation.findOneAndUpdate(
    {
      recipients: {
        $all: [{ $elemMatch: { $eq: from } }, { $elemMatch: { $eq: to } }]
      }
    },
    {
      recipients: [jwtUser.id, req.body.to],
      lastMessage: req.body.body,
      date: Date.now()
    },
    { upsert: true, new: true, setDefaultsOnInsert: true },
    function (err, conversation) {
      if (err) {
        console.log(err);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Failure' }));
        res.sendStatus(500);
      } else {
        let message = new Message({
          conversation: conversation._id,
          to: req.body.to,
          from: jwtUser.id,
          body: req.body.body
        });

        req.io.sockets.emit('messages', req.body.body);

        message.save((err) => {
          if (err) {
            console.log(err);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Failure' }));
            res.sendStatus(500);
          } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                message: 'Success',
                conversationId: conversation._id
              })
            );
          }
        });
      }
    }
  );
});

module.exports = router;
