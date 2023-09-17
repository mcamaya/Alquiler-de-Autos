import boom from "@hapi/boom";

export default function joiValidator(schema, prop){
    return (req, res, next) => {
        const data = req[prop];
        const {error} = schema.validate(data, {abortEarly: false});
        if (error) {
            next(boom.badRequest(error));
        }
        next()
    }
}