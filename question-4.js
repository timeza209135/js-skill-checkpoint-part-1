// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function lowQuantity(Qty) {
  let low = Qty[0].quantity;
  let lowName = Qty[0].name;
  for (let i=0; i< Qty.length; i++) {
    if (Qty[i].quantity < low) {
      low = Qty[i].quantity;
      lowName = Qty[i].name;
    }
  }
  return console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowName} ซึ่งมี ${low} ชิ้น`)
}
lowQuantity(inventory)
