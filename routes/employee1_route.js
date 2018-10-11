var employee1=require('../model/Employee_Model');
var express=require('express');
var router=express.Router();

router.post('',function(req,res,next){
    employee1.deleteAllEmployee(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;