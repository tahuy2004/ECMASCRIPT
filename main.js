import "./style.css";
import Navigo from "navigo";
import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoundPage";
import handlesProductList from "./src/handles/handlesProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Register from "./src/pages/Register";
import handlesRegister from "./src/handles/handlesRegister"; // Đảm bảo tệp này tồn tại
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import handlesAdmin from "./src/handles/handlesAdmin";
import ProductDetailPage from "./src/pages/DetailProduct";
import Login from "./src/pages/Login";
import handlesLogin from "./src/handles/handlesLogin";
import showDetail from "./src/pages/DetailProduct";

document.addEventListener("DOMContentLoaded", () => {
  const router = new Navigo("/", {
    linksSelector: "a",
  });

  const app = document.getElementById("app");

  const render = (position, content) => {
    position.innerHTML = content();
  };

  router.on("/", () => render(app, HomePage), {
    after() {
      handlesProductList();
    },
  });
  router.on("/home", () => router.navigate("/"));
  router.on("/about", () => render(app, AboutPage));
  router.on("/login", () => render(app, Login), {
    after() {
      handlesLogin();
    },
  });
  router.on("/register", () => render(app, Register), {
    after() {
      handlesRegister();
    },
  });
  router.on("/products/:id", ({ data }) => {
    render(app, () => '<div id="productDetail"></div>'); // Tạo phần tử productDetail
    showDetail(data.id); // Truyền id vào showDetail
  });
  router.on("/admin", () => render(app, AdminDashboard), {
    after() {
      handlesAdmin();
    },
  });
  router.notFound(() => render(app, NotFoundPage));
  router.resolve();
});
