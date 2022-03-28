const { sign } = require("jsonwebtoken");
const { readFileSync } = require("fs");
const { join } = require("path");

const pathToKey = join(__dirname, "../config", "id_rsa_priv.pem");
const PRIV_KEY = readFileSync(pathToKey, "utf8");


function creatingJWT(user, isAdmin) {
  const email = user.email;

  const expiresIn = "15d";

  const payload = {
    sub: email,
    start: Date.now(),
    admin: isAdmin ? true : false
  };

  const signedToken = sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}



module.exports = { creatingJWT }