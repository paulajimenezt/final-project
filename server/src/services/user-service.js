const { Users } = require("../db/");
const bcrypt = require('bcrypt');

async function login(username, password) {
    try {
        const user = await Users.findOne({
            where: {
                username,
            }
        });
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!user || !passwordMatch) {
            throw new Error('Wrong username or password');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function getUsers() {
    const users = await Users.findAll();
    return users;
}

async function getUser(userId) {
    const user = await Users.findByPk(userId);
    return user;
}

async function saveNewUser(body) {
    body.password = await bcrypt.hash(body.password, 10);
    const userCreated = await Users.create(body);
    delete userCreated.dataValues.password;
    return userCreated.dataValues;
}

async function updateUser(userId, username, password) {
    const user = await Users.findByPk(userId)
    if (!user) {
        throw new Error("User not found");
    }
    await user.update({
        username,
        password,
    });
}

async function deleteUser(userId) {
    const userToDelete = await Users.findByPk(userId);
    userToDelete.destroy();
}

module.exports = {
    login,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    saveNewUser
}