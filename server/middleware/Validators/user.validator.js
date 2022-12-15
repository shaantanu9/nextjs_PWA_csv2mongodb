const Ajv = require("ajv");
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

// Create a schema that will be used to validate the request body

const userSchema = {
  type: "object",
  properties: {
    // name must have unique value
    name: {
      type: "string",
      minLength: 2,
      maxLength: 60,
      pattern: "^[a-zA-Z ]*$", // only letters and spaces
    },
    email: {
      type: "string",
      minLength: 10,
      maxLength: 50,
      // email must be a valid email string
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$",
    },
    password: {
      type: "string",
      minLength: 8,
      maxLength: 20,
      // must contain at least one number and one uppercase and lowercase letter and one special character
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
      // https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    },
    phone: {
      type: "string",
      minLength: 10,
      maxLength: 10,
      pattern: "^[0-9]*$", // only numbers
    },
  },
  required: ["name", "email", "password", "phone"],
  additionalProperties: false,
};

module.exports = userSchema;
// Create a middleware that will be used to validate the request body
