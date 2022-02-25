//Input stock.json "sku" to find current stocks level of given "sku" after transactions.
//In background I sort all "SkUS" stocks level after transactions realtime. (*Additional feature)
const jsonfile = require("jsonfile");
const x = "../db/stock.json";
const y = "../db/transactions.json";

var stock = jsonfile.readFileSync(x);//stock.json
var transaction = jsonfile.readFileSync(y);//transactions.js
var totalStock,stockValue,finalStock;


function calculateData(sku){
//calculating stock volume
  stockValue = stock.find(element => element.sku == sku);
  totalStock = stockValue.stock;
  for (var i = 0; i < transaction.length - 1; i++) {
    transaction[i].sku ==  sku?(transaction[i].type == "refund"?(totalStock = totalStock + transaction[i].qty):(totalStock = totalStock - transaction[i].qty)):transaction[i].sku
    finalStock = totalStock;
  }
  stockValue.stock = finalStock;
}

function emptyData(){
  //'empty' stock checking
stockValue.stock < 0?(stockValue.stock = "empty"):stockValue.stock
}



//Testing skus
//DTW874360/97/81
//LTV719449/39/39
function output(){
  calculateData("DTW874360/97/81")
  emptyData()
  console.log(stockValue)
}

output()
