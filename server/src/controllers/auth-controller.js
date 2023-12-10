require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/user-service')

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await userService.login(username, password);
      const token = jwt.sign({ id: user.id, username: user.username, role: user.role, farmName: user.farmName }, process.env.JWT_KEY)
      res.json({ Token: token })
    } catch (err) {
      res.status(401).send('Invalid Credentials')
    }
  },
};

module.exports = authController;
