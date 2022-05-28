const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();
const auth = require('../../middleware/auth');

const Message = require('../../models/Message');
const Conversation = require('../../models/Conversation');
const GlobalMessage = require('../../models/GlobalMessage');

// Get conversations list
router.get('/conversations', (req, res) => {
  let from = mongoose.Types.ObjectId(req.query.Id);
  Conversation.aggregate([
    {
      $lookup: {
        from: 'users',
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
  let user1 = mongoose.Types.ObjectId(req.query.fromId);
  let user2 = mongoose.Types.ObjectId(req.query.toId);
  Message.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'to',
        foreignField: '_id',
        as: 'toObj'
      }
    },
    {
      $lookup: {
        from: 'users',
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
  let from = mongoose.Types.ObjectId(req.body.from);
  let to = mongoose.Types.ObjectId(req.body.to);

  Conversation.findOneAndUpdate(
    {
      recipients: {
        $all: [{ $elemMatch: { $eq: from } }, { $elemMatch: { $eq: to } }]
      }
    },
    {
      recipients: [req.body.from, req.body.to],
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
          from: req.body.from,
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
