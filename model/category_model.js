var db=require('../db.connection');

var category={
    getAllCategory:function(callback){
        return db.query("select * from categorytbl",callback);
    },
    addCategory:function(item,callback){
        return db.query("insert into categorytbl(CategoryNAME) values(?)",[item.CategoryNAME],callback);
    },
    updateCategory:function(item,callback){
        return db.query("update categorytbl set CategoryNAME=? where CategoryID=?",[item.CategoryNAME,item.CategoryID],callback);
    },
    deleteCategory:function(item,callback){
        var idarr=[];
        for(let i=0;i<item.length;i++){
            idarr[i]=item[i].CategoryID;
        }
        console.log(idarr);
        return db.query("delete from categorytbl where CategoryID IN (?)",[idarr],callback);
    }
};

module.exports=category;