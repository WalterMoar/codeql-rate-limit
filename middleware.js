import sqlite3 from "sqlite3";
import { open } from "sqlite";

const authorization = async (req, _res, next) => {
  try {
    open({
      filename: "/tmp/database.db",
      driver: sqlite3.Database,
    }).then((db) => {
      // do your thing
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authorization,
};
