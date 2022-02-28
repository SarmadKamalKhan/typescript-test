import stock from "../db/stock.json"
import transaction from "../db/transactions.json"


function calculateData(sku: string): object {
    let totalStock: number, finalStock: number
    const stockValue = stock.find(function(element): boolean {
        return element.sku == sku;
    },[])
    if (stockValue == undefined) {
        return null
    }
    totalStock = stockValue.stock
    for (let i = 0; i < transaction.length - 1; i++) {
        transaction[i].sku == sku ? (transaction[i].type == "refund" ? (totalStock = totalStock + transaction[i].qty) : (totalStock = totalStock - transaction[i].qty)) : transaction[i].sku
        finalStock = totalStock
    }
    stockValue.stock = finalStock
    stockValue.stock < 0 ? (stockValue.stock = 0) : stockValue.stock
    return stockValue
    // console.log(stockValue)
}

export default calculateData