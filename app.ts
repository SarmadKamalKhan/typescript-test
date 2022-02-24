//Input stock.json "sku" to find current stocks level of given "sku" after transactions.
//In background I sort all "SkUS" stocks level after transactions realtime. (*Additional feature)

const jsonfile = require("jsonfile");
const stock = "stock.json";
const transactions = "transactions.json";

//function declaration
function stocks(sku){
  
  var x = jsonfile.readFileSync(stock);//stock.json
  var y = jsonfile.readFileSync(transactions);//transactions.js
  var totalStock;
  var stockValue;
  var finalStock;
  var lengthX = x.length;
  var lengthy = y.length;

  //calculating stock volume
  for (var j = 0; j < lengthX; j++) {
    stockValue = x[j].stock;
    totalStock = stockValue;
    for (var i = 0; i < lengthy - 1; i++) {
      y[i].sku ==  x[j].sku?(y[i].type == "refund"?(totalStock = totalStock + y[i].qty):(totalStock = totalStock - y[i].qty)):y[i].sku
      finalStock = totalStock;
    }
     x[j].stock = finalStock;
  }

  //'empty' stock checking
  for(var i=0; i<lengthX;i++)
  {
    x[i].stock < 0?(x[i].stock = "empty"):x[i].stock
  }

  //to watch all "SKUS-Current-Stock-Level" computed realtime by passing jsons, Enable following comment: "
  // console.log("All Inventory SKU Current level:",x)

  for(var i=0; i<lengthX;i++)
  {
    if(sku == x[i].sku){
      console.log("SKU Current Stock Level : ",x[i])
      return
    }
    else sku
  }
  console.log("No SKU found")

}


//function call, Passing SKU(from stocks.json) to find current stock level after transactions
stocks("EMN370166/29/48")