import  stock from "../db/stock.json"
import transaction from "../db/transactions.json"

function calculateData (sku: string)  {
var totalStock:number, stockValue: { stock: number; sku: string; }, finalStock: number;
stockValue = stock.find(function (element) { return element.sku == sku; });
if(stockValue== undefined){return "No Records" }
totalStock = stockValue.stock;
for (var i = 0; i < transaction.length - 1; i++) {
      transaction[i].sku == sku ? (transaction[i].type == "refund" ? (totalStock = totalStock + transaction[i].qty) : (totalStock = totalStock - transaction[i].qty)) : transaction[i].sku;
      finalStock = totalStock;
  }
  stockValue.stock = finalStock;
  stockValue.stock < 0 ? (stockValue.stock = 0) : stockValue.stock;
  return stockValue
  // console.log(stockValue);
}

export default calculateData
