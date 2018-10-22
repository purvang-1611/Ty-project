var db=require('../db.connection');

var stock={
    getAllStock:function(callback){
        return db.query("select * from stocktbl",callback);
    }
};

module.exports=stock;