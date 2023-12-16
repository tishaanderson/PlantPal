const router = require('express').Router();
const {Plant} = require('../../models')

router.get('/', (req, res)=> {
    Plant.findAll().then((data)=> {
        res.json(data)
    })
})


module.exports =  router