import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
  ${Header()}
 <div class="container" >
   <h1>Sản Phẩm</h1>
   <div id="productList"></div>
   </div>
   

   ${Footer()}
    `;
};
export default HomePage;
