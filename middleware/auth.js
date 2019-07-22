const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports = {
    async restricted(req, res, next) {
        const { username, password } = req.headers;

        if (!username || !password) {
            return res.status(401).json({ message: 'You must login first' });
        }

        const user = await User.findByUsername(username);
        if (user && bcrypt.compareSync(password, user.password)) {
            req.user = user;
            next();
        } else {
            res.status(401).json({ message: "Unauthorized!" });
        }
    }
}
