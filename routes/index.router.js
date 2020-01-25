const express = require('express');
const router = express.Router();


const ctrlSearch = require('../controllers/search');

// router.get('/abc',function(req,res,next){
//     console.log("hi")
// })  

router.get('/twitter-search/:id',ctrlSearch.searchData);


module.exports = router;