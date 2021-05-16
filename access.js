const jwt = require("jsonwebtoken");
const uuidv4 = require("uuid/v4");

const payload = {
  access_key: "pIFImTNuXkXVsHRYo7df2xptFA8YKiapZ9ONLTdG",
  nonce: uuidv4(),
};

const jwtToken = jwt.sign(payload, "BXV5vwa8xcTZzIhXbZxAXO5SJzNDGLVBQlD7arEF");
const authorizationToken = `Bearer ${jwtToken}`;

console.log(authorizationToken);

module.exports = authorizationToken
//export default authorizationToken;

