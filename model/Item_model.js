var db=require('../db.connection');

var item={

    getAllItems:function(callback){
        return db.query("select i.*,c.categoryNAME from itemtbl i,categorytbl c where i.fkCategoryID=categoryID",callback);
    },
    addItems:function(item,filename,callback){
        return db.query("insert into itemtbl(itemNAME,itemPRICE,itemINGREDIENTS,itemIMG,fkCategoryID,itemPREPARETIME,itemTYPE) values(?,?,?,?,?,?,?)",[item.itemNAME,item.itemPRICE,item.itemINGREDIENTS,filename,item.fkCategoryID,item.itemPREPARETIME,item.itemTYPE],callback);
    },
    deleteAllItem:function(item,callback){
        var id=[];
        console.log(item);
        for(let i=0;i<item.length;i++){
            id[i]=item[i].itemID;
        }
        console.log(id);
        return db.query("delete from itemtbl where itemID in (?)",[id],callback);
    },
    deleteItem(id,callback){
        return db.query("delete from itemtbl where itemID=?",[id],callback);
    },
    getItemByName(name,callback){
        return db.query("select * from itemtbl where itemNAME=?",[name],callback);
    }
};

module.exports=item;