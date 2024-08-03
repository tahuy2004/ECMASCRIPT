import api from "../apis/config";
import Header from "../components/Header";

const showDetail = async (id) => {
  const productDetail = document.getElementById("productDetail");

  if (!productDetail) {
    console.error("Element with ID 'productDetail' not found in the DOM.");
    return;
  }

  try {
    console.log(`Fetching details for product ID: ${id}`);

    // Gọi API với ID của sản phẩm
    const { data } = await api.get(`/products/${id}`);
    console.log(data);

    const contentHTML = /*html*/ `
    ${Header}
      <div class="product-detail">
        <img src="${data.thumbnail}" alt="${data.title}" width="300">
        <div class="product-info">
          <h1>${data.title}</h1>
          <p><strong>Mô tả:</strong> ${data.description}</p>
          <p><strong>Giá:</strong> ${data.price}</p>
          <button class="btn btn-primary" id="buyNow">Mua ngay</button>
        </div>
      </div>
    `;
    console.log(contentHTML);

    productDetail.innerHTML = contentHTML;

    // Thêm sự kiện cho nút "Mua ngay" nếu cần
    document.getElementById("buyNow").addEventListener("click", () => {
      alert("Chức năng mua hàng chưa được triển khai.");
    });
  } catch (error) {
    console.log("Lỗi khi tải chi tiết sản phẩm:", error);
  }
};

export default showDetail;
