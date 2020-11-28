const Validator = require('validator');
const isEmpty = require('is-empty');

validateResgisterInput = (data) => {
    let errors = {}; 

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // first and last name check
    if (Validator.isEmpty(data.firstName) || Validator.isEmpty(data.lastName)) {
        errors.name = "Full name is required";
    }

    // email check
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // password check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    } 

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};

module.exports = validateResgisterInput; 