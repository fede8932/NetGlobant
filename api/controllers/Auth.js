const AuthServices = require("../services/Auth");
const UserServices = require("../services/Auth");
const { recovery, validator } = require("../lib/JWTUtils");
const { genHash } = require("../lib/passwordUtils");
const { transporter } = require("../config/nodemailer");

class AuthController {
  static async register(req, res) {
    const { error, response } = await UserServices.register(req.body);

    if (error) return res.status(400).send(response);
    return res.sendStatus(201);
  }

  static async login(req, res) {
    const { error, response } = await UserServices.login(req.body);

    if (error) return res.status(401).send("Email or password is wrong");
    return res.send(response);
  }

  static async forgotPasswordAdmin(req, res) {
    const { email } = req.body;

    const message = "Email or Password is wrong";
    let verificationLink;

    const { administrator, error } = await AuthServices.getAdmin(email);

    if (error) return res.send(message);

    const token = recovery(administrator.id);
    verificationLink = `http://localhost:3001/newAdminPassword/${token}`;

    await AuthServices.updateAdminToken(administrator.id, token);

    await transporter.sendMail({
      from: "'Forgot password' <seorlando33@gmail.com>",
      to: administrator.email,
      subject: "Forgot password",
      html: `
          <b>Please click on the following link</b>
          <a href=${verificationLink}>${verificationLink}</a>
          `,
    });

    return res.send(verificationLink);
  }

  static async forgotPasswordSecurity(req, res) {
    const { email } = req.body;

    const message = "Email or Password is wrong";
    let verificationLink;

    const { security, error } = await AuthServices.getSecurity(email);

    if (error) return res.send(message);

    const token = recovery(security.id);
    verificationLink = `http://localhost:3001/api/auth/newSecurityPassword/${token}`;

    await AuthServices.updateSecurityToken(security.id, token);

    await transporter.sendMail({
      from: "'Forgot password' <seorlando33@gmail.com>",
      to: security.email,
      subject: "Forgot password",
      html: `
          <b>Please click on the following link</b>
          <a href=${verificationLink}>${verificationLink}</a>
          `,
    });

    return res.send(verificationLink);
  }

  static async updateAdminPassword(req, res) {
    const { newPassword, email } = req.body;
    const { token } = req.params;
    const message = "something goes wrong!";

    let { administrator, error } = await AuthServices.getAdmin(email);

    if (error) return res.send(message);
    if (token !== administrator.resetToken) return res.send(message);

    await AuthServices.updateAdminToken(security.id, "");

    const { hash } = await genHash(newPassword);

    await AuthServices.updateAdminPassword(administrator.id, hash);

    return res.sendStatus(202);
  }

  static async updateSecurityPassword(req, res) {
    const { newPassword, email } = req.body;
    const { token } = req.params;

    const message = "something goes wrong!";

    let { security, error } = await AuthServices.getSecurity(email);

    if (error) return res.send(message);
    if (token !== security.recoveryToken) return res.send(message);

    await AuthServices.updateSecurityToken(security.id, "");

    const { hash } = await genHash(newPassword);

    await AuthServices.updateSecurityPassword(security.id, hash);

    return res.sendStatus(202);
  }
}

module.exports = AuthController;
