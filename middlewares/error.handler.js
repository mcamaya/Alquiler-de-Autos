export const logErrors = (error, req, res, next) => {
    console.log(error);
    next(error);
}

export const isBoomError = (error, req, res, next) => {
    if(error.isBoom){
        const {output} = error;
        return res.status(output.statusCode).json(output.payload);
    }
    next(error);
}

export const errorHandler = (error, req, res, next) => {
    res.status(500).json({
        error: error.message,
        stack: error.stack
    });
}