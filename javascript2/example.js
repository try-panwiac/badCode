const express = require('express')
const router = express.Router()

router.get('/greeting', (req, res) => {
    const name = req.query;
    res.send('<h1> Hello :'+ name +"</h1>")
})

router.get('/greet-template', (req,res) => {
    const name = req.query.name
    res.render('index', { user_name: name});
})

router.post("/list-users", (req, res) => {
    var obj = req.body.users;
    var someArr = [];
    someArr = obj.map(item => item);
    res.send(someArr.join(','));
});
