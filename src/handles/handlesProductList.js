import api from "../apis/config";

const handlesProductList = async () => {
  // Tạo một phần tử div cho danh sách sản phẩm
  const productList = document.getElementById("productList");

  try {
    const { data } = await api.get("/products");
    // console.log(data);
    // console.log(id);
    const contentHTML = data

      .map((item) => {
        // console.log(item);
        return /*html*/ `<div class="product-card">
                 <img src="${item.thumbnail}" alt="${item.title}">
                 <div class="product-info">
                   <h2>${item.title}</h2>
                   <span>Mô tả: ${item.description}</span>
                   <p>Giá: ${item.price}</p>
                   <a class="btn btn-primary" href="/products/${item.id}">Mua ngay</a>
               
                 </div>
               </div>`;
      })
      .join("");
    productList.innerHTML = contentHTML;
  } catch (error) {
    console.log(error);
  }
};
export const showDetail = async (id) => {
  console.log(`Hien thi chi tiet: ${id} `);

  /*  * 1. Lấy node Element #productDetail từ DOM
   * 2. Gọi API để lấy dữ liệu chi tiết sản phẩm
   * 3. Gắn lại dữ liệu vào DOM
   */
  try {
    const { data } = await instance.get("/", +id);
    const productDetail = document.getElementById("productDetail");
    productDetail.innerHTML = `
    <div>Tên sản phẩm: ${data.name}</div>
    <div>Gía: ${data.price}</div>
    <div>Mô tả: ${data.description}</div
      `;
  } catch (error) {
    console.log(error);
  }
};
export default handlesProductList;
