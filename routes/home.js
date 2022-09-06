const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    res.send("HI");
})
router.get('/demo',(req, res)=>{
    res.send('Demo Page');
})
module.exports = router;