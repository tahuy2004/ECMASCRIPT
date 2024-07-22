import api from "../apis/config";

const ProductDetailPage = ({ id }) => {
  const product = api.find((product) => product.id === +id);
  console.log("product", product);
  if (!product) return null;
  return `<div>${product.name}</div>`;
};

export default ProductDetailPage;
