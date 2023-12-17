const router = require('express').Router();
const { Plant } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const plants = await Plant.findAll();
        res.render('homepage', { body: 'all', plants });
    } catch (error) {
        console.error('Error fetching and rendering plants:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

// const router = require('express').Router();
// const {Plant} = require('../../models')

// router.get('/', (req, res)=> {
//     Plant.findAll().then((data)=> {
//         res.json(data)

//         //res.render('all');
//     })
// })


// module.exports =  router