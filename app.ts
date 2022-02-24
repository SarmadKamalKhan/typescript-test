//Input stock.json "sku" to find current stocks level of given "sku" after transactions.
//In background I sort all "SkUS" stocks level after transactions realtime. (*Additional feature)
const jsonfile = require("jsonfile");
const x = "stock.json";
const y = "transactions.json";

var stock = jsonfile.readFileSync(x);//stock.json
var transaction = jsonfile.readFileSync(y);//transactions.js
var totalStock;
var stockValue;
var finalStock;
var lengthX = stock.length;
var lengthy = transaction.length;


function calculateData(stock,transaction){
//calculating stock volume
for (var j = 0; j < lengthX; j++) {
  stockValue = stock[j].stock;
  totalStock = stockValue;
  for (var i = 0; i < lengthy - 1; i++) {
    transaction[i].sku ==  stock[j].sku?(transaction[i].type == "refund"?(totalStock = totalStock + transaction[i].qty):(totalStock = totalStock - transaction[i].qty)):transaction[i].sku
    finalStock = totalStock;
  }
   stock[j].stock = finalStock;
}
}


function emptyData(){
  //'empty' stock checking
for(var i=0; i<lengthX;i++){stock[i].stock < 0?(stock[i].stock = "empty"):stock[i].stock}
}


function stocks(sku){
  // console.log("All Inventory SKU Current level:",stock)
  for(var i=0; i<lengthX;i++)
  {
    if(sku == stock[i].sku){
      console.log("SKU Current Stock Level : ",stock[i])
      return
    }
    else sku
  }
  console.log("No SKU found")

}


function output(){
  calculateData(stock,transaction)
  emptyData()
  stocks("LTV719449/39/39")
}

output()
//function call, Passing SKU(from stocks.json) to find current stock level after transactions
