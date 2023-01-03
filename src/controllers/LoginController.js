const database = require("../models");

class LoginController {
  static async CriaConta(req, res) {
    const userBody = req.body;
    console.log(userBody);
    try {
      const user = await database.Users.create(userBody);
      return res
        .status(200)
        .json({ message: "Usuário criado com sucesso", user });
    } catch (error) {
      res.status(500).json({
        message: error,
        description: "Não foi possivel criar o usuário",
      });
    }
  }

  static async GetUsers(req, res) {
    try {
      const users = await database.Users.findAll();
      res
        .status(200)
        .json({ message: "Todos os usuários Coletados com sucesso", users });
    } catch (error) {
      res.status(500).json({
        message: error,
        description: "Não foi possivel recuperar os usuários",
      });
    }
  }

  static async GetUser(req, res) {
    const { id } = req.params;
    try {
      const user = await database.Users.findOne({
        where: {
          id: id,
        },
      });
      res
        .status(200)
        .json({ message: "Todos os usuários Coletados com sucesso", user });
    } catch (error) {
      res.status(500).json({
        message: error,
        description: "Não foi possivel recuperar os usuários",
      });
    }
  }
}

module.exports = LoginController;
