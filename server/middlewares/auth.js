const { User } = require('./../models/userdata');

const authMiddleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    const user = await User.findOne({id: uid});
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    console.log(error)
    return res.sendStatus(401);
  }
};

module.exports = authMiddleware;