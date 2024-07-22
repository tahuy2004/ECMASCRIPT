import "./style.css";
import Navigo from "navigo";
import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoundPage";
import handlesProductList from "./src/handles/handlesProductList";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import Resgister from "./src/pages/Resgister";
import handlesResgister from "./src/handles/handlesResgister";
import AdminDashboard from "./src/pages/admin/AdminDashboard";
import handlesAdmin from "./src/handles/handlesAdmin";
import detailProduct from "./src/pages/DetailProduct";

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
  router.on("/register", () => render(app, Resgister), {
    after() {
      handlesResgister();
    },
  });
  router.on("/product/:id", ({ data }) =>
    render(() => ProductDetailPage(data), app)
  );
  router.on("/admin", () => render(app, AdminDashboard), {
    after() {
      handlesAdmin();
    },
  });
  router.notFound(() => render(app, NotFoundPage));
  router.resolve();
});
