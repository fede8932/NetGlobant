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
    const { email, password, isAdmin } = data;

    if (isAdmin) {
      try {
        const admin = await Admin.findOne({ where: {email: email} });
        const isPasswordValid = await verifyPassword(password, admin.password);
        if (isPasswordValid) {
          const jwt = creatingJWT(admin, isAdmin);
          return {
            error: false,
            response: {
              name: admin.name,
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
          const jwt = creatingJWT(security, isAdmin);
          return {
            error: false,
            response: {
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
