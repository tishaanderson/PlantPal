const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
// const plantsData = require('./seeds/plants.json');
const plantsData = require('./plants.json');

// Configure Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set the views folder
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route
app.get('/', (req, res) => {
  // Render the 'homepage' template with the 'main' layout
  res.render('homepage', { title: 'PlantPals', plants: plantsData });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//commented out code below line 1  10:41

// const path = require('path');
// const express = require('express');
const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({  });

//commented out code above 10:41

const sess = {
  secret: 'Super secret secret',
  cookie: {
 // Maximum age of the session cookie in milliseconds (1 hour in this case)
 maxAge: 60 * 60 * 1000,
 // Restricts the access to the session cookie only through HTTP(S)
 httpOnly: true,
 // Indicates whether the cookie should only be sent over HTTPS (secure connection)
 secure: false,
 // This helps mitigate the risk of cross-site request forgery (CSRF) attacks
 sameSite: 'strict',  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);


//SCN
// app.engine('handlebars', hbs.engine({
//   layoutDir: `${__dirname}/views/layouts`
// }));


// commented out code below 10:39p
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
// });