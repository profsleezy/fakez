const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 80;
const botToken = '7387954378:AAGvBonVY0jzmdxiuBOKuy1LdC3Bqzft35k'; // Replace with your bot token

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

let users = {};

// Home route
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle Telegram OAuth
app.get('/auth/telegram', (req, res) => {
  const { hash, ...queryParams } = req.query;
  const checkString = Object.keys(queryParams).sort().map(k => (`${k}=${queryParams[k]}`)).join('\n');
  const secretKey = crypto.createHash('sha256').update(botToken).digest();
  const computedHash = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');

  if (computedHash !== hash) {
    return res.status(403).send('Forbidden');
  }

  const { id, first_name, last_name, username, photo_url } = queryParams;
  users[id] = { first_name, last_name, username, photo_url };

  res.redirect(`/profile/${id}`);
});

// Profile route
app.get('/profile/:id', (req, res) => {
  const user = users[req.params.id];
  if (user) {
    res.render('profile', { user, id: req.params.id });
  } else {
    res.send('User not found');
  }
});

// Logout route
app.get('/logout/:id', (req, res) => {
  const userId = req.params.id;
  if (users[userId]) {
    delete users[userId];
  }
  res.redirect('/');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
