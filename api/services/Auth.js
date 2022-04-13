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
          administrator.password = null
          return {
            error: false,
            response: {
              administrator: administrator,
              jwt: jwt,
            },
          };
        } else {
          return {
            error: true,
          };
        }
      } catch (error) {
        return {
          error: error,
        };
      }
    } else {
      try {
        const security = await Securities.findOne({ where: {email: email} });
        const isPasswordValid = await verifyPassword(password, security.password);
        if (isPasswordValid) {
          const jwt = creatingJWT(security, admin);
          security.password = null
          return {
            error: false,
            response: {
              security: security,
              jwt: jwt,
            },
          };
        } else {
          return {
            error: true,
          };
        }
      } catch (error) {
        return {
          error: error,
        };
      }
    }
  }

  static async getSecurity(email) {
    let security
    try {
      security = await Securities.findOne({ where: { email } })
      return {
        security,
        error: false
      }
    } catch (error) {
      return {
        error: error
      }
    }
  }
  static async getAdmin(email) {
    let administrator
    try {
      administrator = await Admin.findOne({ where: { email } })
      return {
        administrator,
        error: false
      }
    } catch (error) {
      return {
        error: error
      }
    }
  }

  static async updateAdminPassword(adminID, password){

    try {
      await Admin.update(password, { where: { id: adminID }})
      return {
        error: false
      }
    } catch (error) {
      return {
        error: error
      }
    }
  }

  static async updateSecurityPassword(securityID, password){

    try {
      await Securities.update({password:password}, { where: { id: securityID }})
      return {
        error: false
      }
    } catch (error) {
      return {
        error: error
      }
    }
  }

  static async updateSecurityToken(securityID, token){

    try {
      await Securities.update({recoveryToken: token}, {
        where: { id: securityID }
      })
      return {
        error: false
      }
    } catch (error) {
      return {
        error: error
      }
    }
  }

  static async updateAdminToken(adminID, token){

    try {
      await Securities.update({recoveryToken: token}, {
        where: { id: adminID }
      })
      return {
        error: false
      }
    } catch (error) {
      return {
        error: error
      }
    }
  }
}

module.exports = AuthServices;
