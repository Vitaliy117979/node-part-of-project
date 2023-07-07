const getCurrent = async( req, res, next) => {

const {email, subscription} = req.user  
console.log(subscription);  
res.json({
    email,
    subscription
})

}

module.exports = getCurrent