const { getUsers } = require('../../../controllers/userController');

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    return getUsers(req, res);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(200).json({ message: 'Unable to fetch users' });
  }
};