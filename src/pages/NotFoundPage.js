import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFoundPage = () => {
  return /*html*/ `
  ${Header()}
   <h1>Không tìm thấy</h1>
   <a href="/">Quay lại Home</a>
   ${Footer()}
   `;
};
export default NotFoundPage;
