require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
const errorHandler = require('./handlers/error')
const authRoutes = require('./routes/auth');
const messageRoute = require('./routes/message');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');
const db = require('./models');
app.use(cors());
app.use(bodyParser.json())

app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, messageRoute);
app.use('/api/users', async function(req, res, next){
  let users = await db.User.find();
  return res.status(200).json(users);  
})
app.get('/api/messages', loginRequired, async function (req, res, next) {
  try {
    let messages = await db.Message.find()
      .sort({ creatAt: 'desc' })
      .populate('user', {
        username: true,
        profileImageUrl: true
      });
      return res.status(200).json(messages);
  }
  catch (e) {
    next(e);
  }
});
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, HOST, function () {
  console.log(`Running on http://${HOST}:${PORT}`);
});
