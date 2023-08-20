import Container from "../../UI/Container";
import classes from "./TopProducts.module.css";
import { useState, useEffect } from "react";
import useHttp from "../../Hooks/use-http";
import AProduct from "./AProduct";

// Tiêu chí số 5: Hiện popup chi tiết sản phẩm
function TopProducts() {
  const [data, setData] = useState([]);
  const { error, loading, requestAPI: product } = useHttp();

  // Chọn ra danh sách sản phẩm
  useEffect(() => {
    const getProduct = (data) => {
      setData(data);
    };
    product(getProduct);
  }, [product]);

  return (
    <Container className={`${classes["top-product"]} mt-5`}>
      <div>
        <p>Make it a quick way</p>
        <h4>Top trending products</h4>
      </div>

      <AProduct items={data} loading={loading} error={error} />
    </Container>
  );
}

export default TopProducts;
