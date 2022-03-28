const UserServices = require("../services/Auth");

class AuthController {
  static async register(req, res) {
    const { error, response } = await UserServices.register(req.body);

    if (error) return res.status(400).send(response);
    return res.sendStatus(201);
  }

  static async login(req, res){
    const { error, response } = await UserServices.login(req.body);

    if (error) return res.status(401).send("Email or password is wrong");
    return res.send(response);
  }

  static logout(req, res) {
    req.logout();
    return res.sendStatus(200);
  }
}

module.exports = AuthController