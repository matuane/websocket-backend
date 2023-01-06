const database = require("../models");

class MessageController {
  static async saveMessage(req, res) {
    const body = req.body;

    try {
      const message = await database.Messages.create(body);

      res.status(200).json(message);
    } catch (error) {
      res.status(500).json({
        message: error.message,
        description: "Não foi possivel salvar a mesagem no banco",
      });
    }
  }
}

module.exports = MessageController;
