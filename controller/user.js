module.exports.signin = function(req,res){
    return res.render('signin',{
        page:'signin::'
    })
}

module.exports.signup = function(req,res){
    return res.render('signup',{
        page:'signup::'
    })
}