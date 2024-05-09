//1. Viết 1 arrow function nhận vào 3 số, trả về số lớn nhất
let maxValue = (a,b,c) => Math.max(a,b,c);
console.log(maxValue(3,4,2));
//2. Sử dụng map in ra các số chia 3 dư 2 trong mảng
let myArr = [1,3,5,7,8,9]
let arrHandle = arr =>arr.map((item)=>{
    if(item%3==2){
        console.log(item);
    }
});
arrHandle(myArr);
//3. Sử dụng filter in ra các số chia 3 dư 2 trong mảng
let arrHandle2 = arr =>arr.filter((item)=>{
    if(item%3==2){
        console.log(item);
    }
});
arrHandle2(myArr);
//4. Sử dụng map, tính tổng các phần tử * 2
let sumArray = (arr,x) =>{
    arr.map((item)=>{
        x += item;
    });
    return x*2;
}
console.log('Tổng các phần tử * 2 = ',sumArray(myArr,0));
//5. Sử dụng reduce, tính tổng các phần tử * 2
let sumArray2 = arr =>arr.reduce((accumulation, currentVallue)=>{
    return accumulation + currentVallue;
},0);
let total = sumArray2(myArr)*2;
console.log('Tổng các phần tử * 2 = ',total);


// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
let f11 = (a) => {
    let flag = true;
    if (a < 2){
        flag = false;
    }
    else if (a == 2){
        flag = true;
    }
    else if (a % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < a-1; i+=2)
        {
            if (a % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        console.log(flag);
    }
    else{
        console.log(flag);
    }
}
f11(7);
// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
let f22 = (a) => {
    let flag = true;
    if (a < 2){
        flag = false;
    }
    else if (a == 2){
        flag = true;
    }
    else if (a % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < a-1; i+=2)
        {
            if (a % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        return flag;
    }
}
let f221 = (arr) =>{
    for (let index = 0; index < arr.length; index++) {
        if(f22(arr[index])==true){
            console.log(arr[index]);
        }
    }
}
f221([1,4,7]);
// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
let f33 = () => {
    
}
// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce
