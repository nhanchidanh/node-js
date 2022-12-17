let getHomePage = (req, res) => {
    //xu li logic tai day
    return res.render('index.ejs')
}

//Export function ra de su dung o nhung noi khac
module.exports = {
    getHomePage
}