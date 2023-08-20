import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Container from "../../UI/Container";
import classes from "./CartPage.module.css";
import CartTotal from "./CartTotal";
import ShoppingCart from "./ShoppingCart";

//  Tiêu chí số 10
function CartPage() {// Dùng khi muốn lấy giá trị của state đc lưu trong store
  const user = useSelector((state) => state.auth);

  return (
    <Container className={`${classes["cart-page"]} mb-5`}>
      <div
        className={`${classes.header} d-flex justify-content-between align-items-center bg-light p-5`}
      >
        <h3>Cart</h3>
        <p>Cart</p>
      </div>

      <h5>SHOPPING CART</h5>

      {/* Kiểm tra xem người dùng có đăng nhập hoặc k, thêm thử sản phẩm phải login vào trang */}
      {user.isLogin ? (
        <div className="row p-3">
          <ShoppingCart />
          <CartTotal />
        </div>
      ) : (
        <p>
          Đăng nhập để tạo giỏ hàng? <NavLink to="/login">Login</NavLink>
        </p>
      )}
    </Container>
  );
}

export default CartPage;
