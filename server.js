// Import path, express, express-session, express-handlebars, and connect-session-sequelize
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Sequelize = require('connect-session-sequelize')(session.Store);
// Import routes and sequelize
const routes = require('./controllers');
const sequelize = require('./config/connection');
// Declare express app and port
const app = express();
const PORT = process.env.PORT || 3001;
// Set user session
const userSession = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new Sequelize({
    db: sequelize,
  }),
};
// Use session
app.use(session(userSession));
// Create handlebars
const hbs = exphbs.create({});
// Set engine for handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Use express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// Use routes
app.use(routes);
// Sync database and turn on server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});