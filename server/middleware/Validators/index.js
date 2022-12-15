const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

// Create a middleware that will be used to validate the request body

const userSchema = require("./user.validator");
const validateUser = ajv.compile(userSchema);

const validateUserBody = (req, res, next) => {
  const valid = validateUser(req.body);
  if (!valid) {
    return res.status(400).send(validateUser.errors);
  }
  next();
};

// Creating Middleware for validating bookmark body

// Export the Validator middleware
module.exports = {
  validateUserBody,
};
