const mongoose = require('mongoose')
const Test = require('../models/test.model')

const TestController = {}

TestController.get = function(req,res){
    Test.find()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in test: ' + e))
}

TestController.post = function(req,res){
    newTest = new Test(req.body)
    newTest.save()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in test: ' + e))
}

module.exports = TestController