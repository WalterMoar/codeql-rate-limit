const sqlite3 = require("sqlite3");
const open = require("sqlite").open;

const _openDatabase = () => {
  return open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  });
};

const authorization = async (_req, _res, next) => {
  try {
    const db = await _openDatabase();
    db.exec("SELECT sqlite_version();");
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authorization,
};
