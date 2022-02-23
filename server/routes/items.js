const express = require('express'); 
const { getItems,createItem,deleteItems }= require('../controllers/items')
const router = express.Router();
router.get('/',getItems)
router.post('/',createItem);
router.delete('/:id',deleteItems);
module.exports=router