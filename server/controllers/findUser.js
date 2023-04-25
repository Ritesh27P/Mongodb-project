const User = require('../models/user.js')
    
const findUser = async (req, res) => {
    const {query} = req.body;
    
    try {
        let pipeline, user
        if(query === 'q1') {
            pipeline = [{$match: {$or: [{car: "BMW"}, {car: "Mercedes"}]} },
                        {$match:{$expr:{$gt:[{ $toDouble: { $substr: ["$income", 1, -1] } } , 5.0]}}}
                       ]
        }
        if(query === 'q2') {
            pipeline = [
                {$match: {$expr: {$gt: [{$toDouble: "$phone_price"}, 10000.0]}}}
            ]
        }
        if(query === 'q3'){
            pipeline = [
                { $match: { last_name: { $regex: "^M", $options: "i"} } },
                { $match: {$expr: {$gt: [{ $strLenBytes: "$quote" }, 14]}} },
                { $match: {
                      $expr: {
                        $regexMatch: {
                          input: "$email",
                          regex: "$last_name",
                          options: "i"
                        }}} }
            ]
        }
        if (query == 'q4') {
            pipeline = [
                { $match: {$or: [{car: "BMW"}, {car: "Mercedes"}, {car: "Audi"}]}},
                // { $match: { email: { $regex: ".*(0-9).*", $options: "i"}}},
                { $match: {$expr: {$not: {$regexMatch: {input: "$email", regex: ".*[0-9].*"}}}}}
            ]
        }
        if (query == 'q5') {
            pipeline = [
                { $group: {
                    _id: "$city",
                    income: {$avg: { $toDouble: { $substr: ["$income", 1, -1] } }},
                    user_count: {$sum: 1}
                }},
                {
                    $sort: {user_count: -1, income: -1}
                },
                {$limit: 10},

            ]
        }
        user = await User.aggregate(pipeline)
        console.log(user.length)
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json({message: err})
    }
}

module.exports = findUser;