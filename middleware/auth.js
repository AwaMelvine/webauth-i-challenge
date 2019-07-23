const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports = {
    async restricted(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            return res.status(401).json({ message: 'You must login first' });
        }
    }
}
