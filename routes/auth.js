const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = new Router();

router.post('/register', async (req, res) => {
    try {
        let user = req.body;
        const newUser = await User.add(user);

        res.status(201).json({ data: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        console.log(user);

        if (user && bcrypt.compareSync(password, user.password)) {
            res.status(201).json({ message: `Welcome, ${user.username}` });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
});

module.exports = router;