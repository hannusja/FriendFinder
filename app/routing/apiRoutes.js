var friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {
        var totalDifference=[]
        var differenceI=0
        for (var i=0; i<friends.length;i++){
            for (var k=0; k<req.body.scores.length; k++){
                var difference = Math.abs(parseFloat(friends[i].scores[k])-parseFloat(req.body.scores[k]))
                differenceI=differenceI+difference
            }
            totalDifference.push(differenceI)
        }
        var id = totalDifference.indexOf(Math.min(...totalDifference))
        var match = friends[id]
        friends.push(req.body)
        res.json(match)
    })
}