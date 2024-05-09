let arr = [1, 3, 5, 2, 4, 5, 10];
arr.map(x => {
    console.log(x)
})
console.log('-------------------------------')
arr.map((x, y) => {
    console.log(x + ' tai vi tri '+y)
})

// Dùng map, in ra các phần tử chẵn trong mảng
arr.map(x => {
    if ( x%2 == 0 ){
        console.log(x)
    }
})
// Dùng map, tính tích các phần tử trong mảng
let t = 1;
arr.map(x =>{
    t += x;
})
console.log(t);
// 1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
let maxValue = (a,b,c) =>Math.max(a,b,c);
console.log(maxValue(2,9,6));
// 2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
arr.map((item)=>{
    if(item%3==2){
        console.log(item);
    }
});
// 3. Sử dụng filter in ra các số chia het cho 3 trong mảng
arr.filter(item=>{
    if(item%3==0){
        console.log(item);
    }
});
// 4. Sử dụng map, tính tổng các phần tử * 2
let t =0;
arr.map(item=>{
    t += item*2;
});
console.log(t);
// 5. Sử dụng reduce, tính tổng các phần tử * 2
let t =arr.reduce((accumulation,currentValue)=>accumulation + currentValue*2,0);
console.log(t);
// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
let f11 = (x)=>{
    let flag = true;
    if(x<2){
        flag= false;
        console.log('1',flag);
    }
    else if(x==2){
        flag= true;
        console.log('2',flag);
    }
    else{
        for (let index = 2; index < x; index++) {
            if(x%index==0){
                flag=false;
                break;
            }
        }
        console.log('3',flag);
    }
}
f11(3);
// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
let isP = (x)=>{
    let flag = true;
    if(x<2){
        flag= false;
    }
    else if(x==2){
        flag= true;
    }
    else{
        for (let index = 2; index < x; index++) {
            if(x%index==0){
                flag=false;
                break;
            }
        }
    }
    return flag;
}
// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
let arrP =arr=>{
    arr.map(item=>{
        if(isP(item)){
            console.log(item);
        }
    });
}
arrP(arr);
// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
let arrP2 =arr=>arr.filter(item=>{
    if(isP(item)){
        return item;
    }
});
console.log(arrP2(arr));
// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce
let sumArr = arr =>arr.reduce((accumulation, currentVallue)=>accumulation + currentVallue*2,0)
console.log(sumArr(arr));
// Tạo mảng sản phẩm có id, name, price, quantity.
let products = [
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
products.map(prodtuc=>{
    console.log(`Product name: ${prodtuc.name} - Price ${prodtuc.price}`)
})
// 2. Sử dụng map, tìm ra các  sản phẩm có giá > 100
products.map(product=>{
    if(product.price > 100 ){
        console.log(product.name);
    }
})
// 3. Sử dụng filter, tìm ra các  sản phẩm có giá > 100
products.filter(product=>{
    if(product.price > 100 ){
        console.log(product.name);
    }
})
// 4. Sử dụng map, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm (tổng giá*số lượng)
let priceTotal = 0;
products.map(product=>priceTotal +=product.qty*product.price)
console.log(priceTotal);