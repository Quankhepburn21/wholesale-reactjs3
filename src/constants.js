export const category = [
  {
    category: "iphone",
    img: `./Resource/product_1.png`,
    name: "Iphone"
  },
  {
    category: "mac",
    img: `./Resource/product_2.png`,
    name: "Macbook"
  },
  {
    category: "ipad",
    img: `./Resource/product_3.png`,
    name: "Ipad"
  },
  {
    category: "watch",
    img: `./Resource/product_4.png`,
    name: "Watch"
  },
  {
    category: "airpods",
    img: `./Resource/product_5.png`,
    name: "Airpods"
  },
];
// Tiêu chí số 11: Hiện lại thông tin của đơn hàng (sp, sl,t.tiền) cũng như giá trị đơn hàng
export const calculateTotal = (data) => {
  let totalPrice = 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += data[i].price * data[i].quantity;

  }
  return totalPrice
}