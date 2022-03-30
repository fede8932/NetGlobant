const { Securities, Admin } = require("../models");

const { verifyPassword } = require("../lib/passwordUtils");
const { creatingJWT } = require("../lib/JWTUtils");

class AuthServices {
  static async register(data) {
    const { admin } = data;
    if (admin) {
      try {
        await Admin.create(data);
        return {
          error: false,
        };
      } catch (error) {
        return {
          error: true,
          response: error,
        };
      }
    } else {
        try {
          await Securities.create(data);
          return {
            error: false,
          };
        } catch (error) {
          return {
            error: true,
            response: error,
          };
        }
    }
  }

  static async login(data) {
    const { email, password, admin } = data;

    if (admin) {
      try {
        const administrator = await Admin.findOne({ where: {email: email} });
        const isPasswordValid = await verifyPassword(password, administrator.password);
        if (isPasswordValid) {
          const jwt = creatingJWT(administrator, admin);
          return {
            error: false,
            response: {
              name: administrator.name,
              jwt,
            },
          };
        } else {
          return {
            error: true,
          };
        }
      } catch (error) {
        return {
          error: true,
        };
      }
    } else {
      try {
        const security = await Securities.findOne({ where: {email: email} });
        const isPasswordValid = await verifyPassword(password, security.password);
        if (isPasswordValid) {
          const jwt = creatingJWT(security, admin);
          return {
            error: false,
            response: {
              id: security.id,
              name: security.name,
              jwt,
            },
          };
        } else {
          return {
            error: true,
          };
        }
      } catch (error) {
        return {
          error: true,
        };
      }
    }
  }
}

module.exports = AuthServices;
