import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useHttp from "../../Hooks/use-http";
import Container from "../../UI/Container";
import classes from "./MainShopPage.module.css";
import ProductList from "./ProductList";
import { category } from "../../../constants";

// Tiêu chí số 6
function MainShopPage() {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(123);
  const [data, setData] = useState([]);
  const { error, loading, requestAPI: product } = useHttp();

  useEffect(() => {
    const getProduct = (data) => {
      setData(data);
    };
    product(getProduct);
  }, [product]);

  function clickCategoryHandler(category) {
    navigate(`/shop/${category}`)
  }

  console.log(data)
  return (
    <Container>
      <div
        className={`${classes.header} d-flex justify-content-between align-items-center bg-light p-5`}
      >
        <h3>Shop</h3>
        <p>shop</p>
      </div>
      <div className={`${classes.subnav} row mt-5`}>
        <ul className="col-md-3">
          <h4>categories</h4>
          <li className={`${classes.titleCategory} bg-dark text-light`}>
            Apple
          </li>
          <li
            onClick={() => clickCategoryHandler("all")}
            className={`${params.category === "all" ? classes.active : ""}`}
          >
            All
          </li>
          {category.map((cate) => (
            <li
              onClick={() => clickCategoryHandler(cate.category)}
              className={`${params.category === cate.category ? classes.active : ""}`}
            >
              {cate.name}
            </li>
          ))}

        </ul>
        <ProductList
          items={data}
          error={error}
          loading={loading}
          className="col-md-9"
          category={params.category}
        />
      </div>
    </Container>
  );
}

export default MainShopPage;
