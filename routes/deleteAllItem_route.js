var item = require("../model/Item_model");
var express = require("express");
var router = express.Router();

router.post('',function(req,res,next){
    item.deleteAllItem(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;