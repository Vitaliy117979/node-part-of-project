const HttpError = require("../helpers/HttpError");


const validate = schema => {
    const func = (req, res, next)=> {
        const { error } = schema.validate(req.body);
        if (Object.keys(req.body).length === 0 || typeof req.body !== "object") {
                return res.status(400).json({ "message": "missing fields" })
              }

              if (error) {
                const errorField = error.details[0];
                const errorType = error.details[0].type;
                if (errorType === "any.required") {
                  return res.status(400).json({
                    "message": `missing required ${errorField.context.key} field`,
                  });
                }
              }
        if (error) {
            next(HttpError(400, error.message));
        }
        next()
    }

    return func;
}

module.exports = validate;
