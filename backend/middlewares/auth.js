module.exports = async (req, res, next) => {
    try {
        console.log(req.headers.authentication)
        if(!req.headers.authentication) {
            return res.send({error: "Token not found"})
        }
        next()
        
    } catch (error) {
        console.log(error)
    }
}