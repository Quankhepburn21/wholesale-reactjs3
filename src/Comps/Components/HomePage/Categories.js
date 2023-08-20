import { useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import classes from "./Categories.module.css";
import { category } from "../../../constants";

//  Tiêu chí số 4: Tạo giao diện Homepage giống như thiết kế
function Categories() {
  const navigate = useNavigate();
  return (
    <Container className={`${classes.categories} text-center`}>
      <div>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h4>Browse our categories</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-center gap-4">
        {category.map((e, index) => (
          // Dùng navigate điều hướng trang thay cho onclick: Chuyển từ category sang chi tiết sản phẩm
          <div onClick={() => navigate(`/shop/${e.category}`)} key={index.toString()}>
            <img src={e.img} alt="..." className="img-fluid" />
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Categories;
