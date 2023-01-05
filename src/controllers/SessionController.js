const database = require("../models");

class SessionController {
  static async saveSession(session, userId) {
    try {
      await database.Sessions.create({
        session: session,
        userID: userId,
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = SessionController;
