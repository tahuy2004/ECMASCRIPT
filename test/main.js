const tenham = () => "hello world";
console.log(tenham());

// cú pháp rút gọn (đối với hàm return trực tiếp kết quả)
//const tenHam = (params 1,params2, ... ) => biểu thức/ kết quả

//kiểm tra số trẵn lẻ bằng arrow function

const chanle = (n) => (n % 2 === 0 ? "chẵn" : "lẻ");

console.log(chanle(7));

//
let x = 10;
function test(a) {
  return a * x;
}

console.log(test(5));
