//Tạo mảng sản phẩm có id, name, price, quantity.
let productList = [
    {
        id: 1,
        name: 'Product01',
        price: 100,
        qty: 2
    },
    {
        id: 2,
        name: 'Product02',
        price: 200,
        qty: 1
    },
    {
        id: 3,
        name: 'Product03',
        price: 300,
        qty: 2
    }
]
// 1. Sử dung map, in ra name và price cua cac sản phẩm
productList.map(prodtuc=>{
    console.log(`Product name: ${prodtuc.name} - Price ${prodtuc.price}`)
})
// 2. Sử dụng map, tìm ra các  sản phẩm có giá > 100
productList.map(product=>{
    if(product.price > 100 ){
        console.log(product.name);
    }
})
// 3. Sử dụng filter, tìm ra các  sản phẩm có giá > 100
productList.filter(product=>{
    if(product.price > 100 ){
        console.log(product.name);
    }
})
// 4. Sử dụng map, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm (tổng giá*số lượng)
let priceTotal = 0;
productList.map(product=> priceTotal +=product.qty*product.price)
console.log(priceTotal);