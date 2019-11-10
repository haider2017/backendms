const express   = require('express');
const router    = express.Router();

router.get('/instructor', function(req, res, next) {
    let instructorId = req.query.id;
    console.log(`received instructor id = `,instructorId)
    if(instructorId == "1") res.json({"firstName":"Haider","lastName":"Sarfraz"})
    if(instructorId == "2") res.json({"firstName":"Ali","lastName":"Kahoot"})
    else res.json({"name":"Not Found"});
});

module.exports = router;