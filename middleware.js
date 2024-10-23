const authorization = async (req, _res, next) => {
  try {
    let token;
    if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.substring(7);
    }

    console.log(token)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authorization,
};
