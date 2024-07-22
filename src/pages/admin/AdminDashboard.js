import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AdminDashboard = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
  <h2>Quản lý sản phẩm</h2>
    <div id="product"></div>
  </div>
  ${Footer()}
  `;
};
export default AdminDashboard;
