const { getUsers } = require('../../../controllers/userController');

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    return getUsers(req, res);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};