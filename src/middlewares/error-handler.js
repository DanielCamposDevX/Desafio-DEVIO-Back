
export default function errorHandler(error, req, res, next) {



    
    
    
    
    
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong ");
}










