const getCurrent = async( req, res, next) => {
const user = req.user  
res.json({
    user
})

}

module.exports = getCurrent