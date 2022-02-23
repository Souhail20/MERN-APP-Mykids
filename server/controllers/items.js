const Item = require('../model/item') 
exports.getItems = async(req,res)=>{
    console.log('get items')
    try {
        const item =await Item.find()
       
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}
exports.createItem = async(req,res)=>{
    console.log('createitem',req.body)
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {        
    }
}
exports.deleteItems =('/:id',(req,res)=>{
    Item.findOneAndRemove({_id: req.params.id}, req.body, function(err,data)
{
    if(!err){
        res.send("Deleted");
    }
});
})