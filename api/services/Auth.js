const User = require("../models/Securities");


class AuthServices {

    static async register(data) {
        try {
            const user = await User.create(data)
            return {
                error: false
            }
        } catch (error) {
            return {
                error: true,
                response: error
            }
        }
    }
}

module.exports = AuthServices