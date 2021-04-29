const { ObjectID } = require('bson');
var express = require('express');
var router = express.Router();


router.patch('/:id/reserve/:reservation_id', (req,res) => {
    req.db.updateOne({_id: parseInt(new ObjectID(req.params.id))}, 
    {$set: {'rental_details.$[re].number_of_days': parseInt(req.body.number_of_days), 
    'rental_details.$[re].end_mileage': parseInt(req.body.end_mileage),
    'rental_details.$[re].total_rent': parseInt(req.body.number_of_days) * 45}, 
    }, 
    {arrayFilters: [{'re._id': parseInt(req.params.reservation_id)}]})
    // req.db.find({}).toArray((err, data) => res.json({}))
})


router.delete('/:id/reserve/:reservation_id', (req,res) => {

})
module.exports = router


