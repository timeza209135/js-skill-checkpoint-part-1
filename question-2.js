// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity = 200;
inventory.push({name: "Orange",price: 20, quantity: 300 })

function totalPrice(inven) {
  let total = 0;
  for (let i=0; i< inven.length; i++) {
    total = total+(inven[i].price * inven[i].quantity)
  }
  return total;
}

console.log("มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก "+totalPrice(inventory)+" บาท")
