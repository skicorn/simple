const User = require('../Models/user');

const getUserlist = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {getUserlist};