const db = require('../data/dbConfig');

module.exports = {
    get() {
        return db("users");
    },


    async findById(id) {
        const users = await db("users").where({ id }).first();
        return users;
    },

    async add(user) {
        const [id] = await db("users").insert(user);
        return this.findById(id);
    },

};