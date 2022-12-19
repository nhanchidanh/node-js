import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    //xu li logic tai day
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address
                })
            })
            // console.log(data);
            return res.render('index.ejs', { dataUser: data, test: 'abc' })

        }
    );

}

//Export function ra de su dung o nhung noi khac
module.exports = {
    getHomePage
}