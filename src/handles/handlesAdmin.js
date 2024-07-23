import api from "../apis/config";

const handlesAdmin = async () => {
  const product = document.getElementById("product");
  const url = "http://localhost:3000/products";

  try {
    const { data } = await api.get("/products");

    const contentHTML = /*html*/ `
      <div class="content">
        <button class="btn-add">Thêm sản phẩm</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Description</th>
              <th>Actions</th>
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
                    <td><img src="${item.thumbnail}" alt="Product Image"></td>
                    <td>${item.description}</td>
                    <td class="action-buttons">
                      <button class="btn-edit" data-id="${item.id}">Update</button>
                      <button class="btn-del" data-id="${item.id}">Delete</button>
                    </td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    product.innerHTML = contentHTML;

    // Delete product
    const btnDel = document.querySelectorAll(".btn-del");
    for (const btn of btnDel) {
      const id = btn.dataset.id;
      btn.addEventListener("click", async () => {
        if (confirm("Bạn muốn xóa không?")) {
          try {
            await fetch(`${url}/${id}`, {
              method: "DELETE",
            });
            alert("Đã xóa sản phẩm.");
            handlesAdmin(); // Refresh the product list
          } catch (error) {
            console.error("Error deleting product:", error);
          }
        }
      });
    }

    // Add new product
    const btnAdd = document.querySelector(".btn-add");
    const content = document.querySelector(".content");
    btnAdd.addEventListener("click", () => {
      content.innerHTML = /*html*/ `
        <form id="add-form">
          <input type="text" id="ten_sp" placeholder="Tên sản phẩm...">
          <input type="text" id="gia_sp" placeholder="Giá sản phẩm...">
          <input type="text" id="ghi_chu" placeholder="Ghi chú...">
          <input type="submit" value="Thêm mới" class="btn-submit">
        </form>
      `;

      const addForm = document.getElementById("add-form");
      addForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const ten_sp = document.getElementById("ten_sp").value;
        const gia_sp = document.getElementById("gia_sp").value;
        const ghi_chu = document.getElementById("ghi_chu").value;

        if (ten_sp === "") {
          alert("Nhập tên sản phẩm.");
          return;
        }
        if (gia_sp === "" || isNaN(gia_sp) || gia_sp <= 0) {
          alert("Giá sản phẩm phải là số và lớn hơn 0.");
          return;
        }
        if (ghi_chu === "") {
          alert("Nhập ghi chú.");
          return;
        }

        const newData = {
          title: ten_sp,
          price: gia_sp,
          description: ghi_chu,
        };

        try {
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          });
          alert("Thêm sản phẩm thành công.");
          handlesAdmin(); // Refresh the product list
        } catch (error) {
          console.error("Error adding product:", error);
        }
      });
    });

    // Update product
    const btnEdit = document.querySelectorAll(".btn-edit");
    for (const btn of btnEdit) {
      const id = btn.dataset.id;
      btn.addEventListener("click", async () => {
        try {
          const response = await fetch(`${url}/${id}`);
          const data = await response.json();

          content.innerHTML = /*html*/ `
            <form id="update-form">
              <input type="text" id="ten_sp" placeholder="Tên sản phẩm..." value="${data.title}">
              <input type="text" id="gia_sp" placeholder="Giá sản phẩm..." value="${data.price}">
              <input type="text" id="ghi_chu" placeholder="Ghi chú..." value="${data.description}">
              
              <input type="submit" value="Cập nhật sản phẩm" class="btn-submit">
              
            </form>
          `;

          const updateForm = document.getElementById("update-form");
          updateForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const ten_sp = document.getElementById("ten_sp").value;
            const gia_sp = document.getElementById("gia_sp").value;
            const ghi_chu = document.getElementById("ghi_chu").value;
            if (ten_sp === "" || gia_sp === "" || ghi_chu === "") {
              alert("Vui lòng điền đầy đủ thông tin.");
              return;
            }
            if (gia_sp === "" || isNaN(gia_sp) || gia_sp <= 0) {
              alert("Giá sản phẩm phải là số và lớn hơn 0.");
              return;
            }

            if (
              ten_sp === data.title &&
              gia_sp === data.price &&
              ghi_chu === data.description
            ) {
              alert("Bạn chưa thay đổi thông tin sản phẩm.");
              return;
            }
            try {
              await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(updateForm),
              });
              alert("Cập nhật sản phẩm thành công.");
              handlesAdmin(); // Refresh the product list
            } catch (error) {
              console.error("Error updating product:", error);
            }
          });
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default handlesAdmin;
