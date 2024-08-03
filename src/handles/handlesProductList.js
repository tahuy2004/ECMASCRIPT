import api from "../apis/config";

const handlesProductList = async () => {
  // Tạo một phần tử div cho danh sách sản phẩm
  const productList = document.getElementById("productList");
  // console.log(productList);
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
                   <a class="btn btn-primary" href="/products/${item.id}" id="productDetail">Mua ngay</a>
               
                 </div>
               </div>`;
      })
      .join("");
    productList.innerHTML = contentHTML;
  } catch (error) {
    console.log(error);
  }
};

export default handlesProductList;
