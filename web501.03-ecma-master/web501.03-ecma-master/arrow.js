//hàm tính tổng: 
//C1: function declaration
// function sum(a,b) {
//     return a+b;
// }

//C2: cú pháp của arrow function
//cú pháp đầy đủ
//const tenHam = (params1, params2, ...) => {
//     code
// }

// cú pháp rút gọn (đối với hàm return trực tiếp kết quả)
//const tenHam = (params1, params2, ...) => biểu thức/kết quả muốn trả về
const sum = (a,b) => a+b; //hàm có nhiều tham số
const tinhBinhPhuong = n => n*n; //hàm có 1 tham số, có thể bỏ cặp ()
const showMessage = () => console.log('Hello'); //hàm không có tham số truyền vào

//kiểm tra số chẵn lẻ
//viết thường function declaration
// function kiemTraChanLe(number) {
//     if (number % 2 == 0) {
//         return "chẵn";
//     } else {
//         return "lẻ";
//     }
// }

//viết dưới dạng arrow function
// const kiemTraChanLe = number => {
//     if (number % 2 == 0) {
//         return "chẵn";
//     } else {
//         return "lẻ";
//     }
// }

//arrow function + toán tử 3 ngôi: ĐK ? nếu true : nếu false
const kiemTraChanLe = number => number%2==0 ? "chẵn" : "lẻ";

//lưu ý sử dụng con trỏ this trong arrow function
let x = {
    value: 10,
    function1: function (a) {console.log(a * this.value)},
    function2: a => console.log(a * this.value),
}

x.function2(3);