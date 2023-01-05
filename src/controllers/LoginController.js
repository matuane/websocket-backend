const { uuid } = require("uuidv4");
const database = require("../models");
const SessionController = require("./SessionController");

class LoginController {
  static async CriaConta(req, res) {
    const userBody = req.body;
    try {
      const user = await database.Users.create(userBody);
      return res
        .status(200)
        .json({ message: "Usuário criado com sucesso", user });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        description: "Não foi possivel criar o usuário",
      });
    }
  }

  static async VerifyLogin(req, res) {
    const { user, password } = req.body;

    console.log(user);
    try {
      const isValidUser = await database.Users.findOne({
        where: {
          user: user,
          password: password,
        },
      });
      if (isValidUser !== null) {
        const session = uuid();
        console.log();
        const saveSession = await SessionController.saveSession(
          session,
          isValidUser.dataValues.id
        );
        if (saveSession) {
          return res.status(200).json({
            message: "Usuário encontrado",
            is_valid: true,
            session: session,
          });
        } else {
          return res.status(500).json({
            message: "Falha ao salvar a sessão",
            is_valid: false,
          });
        }
      } else {
        return res
          .status(200)
          .json({ message: "Usuário não encontrado", is_valid: false });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
        description: "Não foi possivel verificar as credenciais do usuário",
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
