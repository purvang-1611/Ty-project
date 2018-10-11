var category=require('../model/category_model');
var express=require('express');
var router=express.Router();

router.get('',function(req,res,next){
    category.getAllCategory(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.post('',function(req,res,next){
    category.addCategory(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.put('',function(req,res,next){
    category.updateCategory(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

router.delete('/:id',function(req,res,next){
    category.deleteCategory(req.params.id,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;