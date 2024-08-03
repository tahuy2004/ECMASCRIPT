import api from "../apis/config";
import Header from "../components/Header";

const handlesAdmin = async () => {
  const app = document.getElementById("app");
  if (!app) {
    console.error("Element with ID 'app' not found.");
    return;
  }

  try {
    const { data } = await api.get("/products");
    const contentHTML = /*html*/ `
        ${Header}
        <div class="content">
            <h1>Quản lý sản phẩm</h1>
            <button class="btn btn-primary btn-add" id="btn-add">Thêm sản phẩm</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Images</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${data
                      .map((item) => {
                        return /*html*/ `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.title}</td>
                                <td>${item.price}</td>
                                <td><img src="${item.thumbnail}" alt="${item.title}" width="100"></td>
                                <td>${item.description}</td>
                                <td>
                                    <button class="btn btn-danger btn-delete" data-id="${item.id}">Xóa</button>
                                    <button class="btn btn-warning btn-update" data-id="${item.id}">Sửa</button>
                                </td>
                            </tr>
                        `;
                      })
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
    app.innerHTML = contentHTML;

    // Xóa
    const btnDelete = document.querySelectorAll(".btn-delete");
    btnDelete.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", async () => {
        if (confirm("Bạn có muốn xóa không")) {
          try {
            await api.delete(`/products/${id}`);
            alert("Đã xóa sản phẩm");
            handlesAdmin(); // Hoặc gọi HomePage() nếu đã định nghĩa
          } catch (error) {
            console.error("Lỗi khi xóa sản phẩm:", error);
          }
        }
      });
    });

    // Thêm sản phẩm
    const btnAdd = document.querySelector("#btn-add");
    btnAdd.addEventListener("click", () => {
      app.innerHTML = /*html*/ `
          <form id="add-form">
              <input type="text" id="title" placeholder="Tên sản phẩm...">
              <input type="number" id="price" placeholder="Giá sản phẩm..." min="0">
              <input type="text" id="thumbnail" placeholder="Link ảnh sản phẩm...">
              <textarea id="description" placeholder="Mô tả sản phẩm..."></textarea>
              <button type="submit" class="btn btn-success">Thêm mới</button>
              <a href="/admin" class="back-link">Quay lại</a>
          </form>
      `;

      document
        .getElementById("add-form")
        .addEventListener("submit", async (event) => {
          event.preventDefault();

          const title = document.getElementById("title").value;
          const price = document.getElementById("price").value;
          const thumbnailUrl = document.getElementById("thumbnail").value;
          const description = document.getElementById("description").value;

          if (
            !title ||
            isNaN(price) ||
            price <= 0 ||
            !thumbnailUrl ||
            !description
          ) {
            alert("Vui lòng điền đầy đủ thông tin hợp lệ.");
            return;
          }

          try {
            await api.post("/products", {
              title,
              price,
              thumbnail: thumbnailUrl,
              description,
            });
            alert("Đã thêm sản phẩm mới");
            handlesAdmin(); // Hoặc gọi HomePage() nếu đã định nghĩa
          } catch (error) {
            console.error("Lỗi khi thêm sản phẩm:", error);
          }
        });
    });

    // Sửa sản phẩm
    const btnUpdate = document.querySelectorAll(".btn-update");
    btnUpdate.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", async () => {
        try {
          const response = await api.get(`/products/${id}`);
          const data = response.data;
          app.innerHTML = /*html*/ `
              <form id="update-form">
                  <input type="text" id="title" value="${data.title}">
                  <input type="number" id="price" value="${data.price}">
                  <input type="text" id="thumbnail" value="${data.thumbnail}" placeholder="Link ảnh mới (nếu có)">
                  <textarea id="description">${data.description}</textarea>
                  <button type="submit" class="btn btn-success">Cập nhật</button>
                  <a href="/" class="back-link">Quay lại</a>
              </form>
          `;

          document
            .getElementById("update-form")
            .addEventListener("submit", async (event) => {
              event.preventDefault();

              const title = document.getElementById("title").value;
              const price = document.getElementById("price").value;
              const thumbnailUrl = document.getElementById("thumbnail").value;
              const description = document.getElementById("description").value;

              if (!title || isNaN(price) || price <= 0 || !description) {
                alert("Vui lòng điền đầy đủ thông tin hợp lệ.");
                return;
              }

              try {
                await api.put(`/products/${id}`, {
                  title,
                  price,
                  thumbnail: thumbnailUrl, // Gửi URL của ảnh mới nếu có
                  description,
                });
                alert("Đã cập nhật thông tin sản phẩm");
                handlesAdmin(); // Hoặc gọi HomePage() nếu đã định nghĩa
              } catch (error) {
                console.error("Lỗi khi cập nhật sản phẩm:", error);
              }
            });
        } catch (error) {
          console.error("Lỗi khi lấy thông tin sản phẩm:", error);
        }
      });
    });
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu sản phẩm:", error);
  }
};

export default handlesAdmin;
