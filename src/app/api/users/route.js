const { getUsers } = require('../../../controllers/userController');

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getUsers(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

module.exports = handler;
