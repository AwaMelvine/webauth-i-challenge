const express = require('express');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session)
const auth = require('./routes/auth');
const app = express();

const { PORT, SESS_SECRET = 'secretsecretsecretsecretsecret' } = process.env;

app.use(express.json())
app.use(session({
    name: 'sessionId',
    secret: SESS_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
}));

app.use('/api/', auth)

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found' });
});

const port = PORT || 8000;
app.listen(port, console.log(`Server running on localhost:${port}`));