const jsonfiles = require("jsonfile");

function calculateData(sku){
var stock = jsonfiles.readFileSync("../db/stock.json");//stock.json
var transaction = jsonfiles.readFileSync("../db/transactions.json");//transactions.js
var totalStock,stockValue,finalStock;

//calculating stock volume
  stockValue = stock.find(element => element.sku == sku);
  totalStock = stockValue.stock;
  for (var i = 0; i < transaction.length - 1; i++) {
    transaction[i].sku ==  sku?(transaction[i].type == "refund"?(totalStock = totalStock + transaction[i].qty):(totalStock = totalStock - transaction[i].qty)):transaction[i].sku
    finalStock = totalStock;
  }
  stockValue.stock = finalStock;
  stockValue.stock < 0?(stockValue.stock = "empty"):stockValue.stock
  console.log(stockValue)
}


//Testing skus
//DTW874360/97/81
//LTV719449/39/39
calculateData("DTW874360/97/81")
