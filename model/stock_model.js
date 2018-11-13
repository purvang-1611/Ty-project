var db=require('../db.connection');

var stock={
    getAllStock:function(callback){
        return db.query("select * from stocktbl",callback);
    },
    getStockByIn:function(item,callback){
        
        return db.query("select * from stocktbl where stockID IN(?)",[item],callback);
    }
};

module.exports=stock;