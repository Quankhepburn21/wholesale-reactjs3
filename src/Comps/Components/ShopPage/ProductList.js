import { NavLink } from "react-router-dom";
import { convertNumberToString } from "../../Hooks/utils";
import classes from "./ProductList.module.css";

// Tiêu chí số 4
function ProductList(props) {
  let products = <p>No product found!</p>;
  console.log(props.items + 'Hope 😁')
  const items = props.items.filter((e) => {
    // Số 4: Hiện được danh sách sản phẩm (tối đa 8 phần tử)
    switch (props.category) {
      case "iphone":
        return e.category.includes("iphone");
      case "ipad":
        return e.category.includes("ipad");
      case "mac":
        return e.category.includes("macbook");
      case "airpods":
        return e.category.includes("airpod");
      case "watch":
        return e.category.includes("watch");
      case "mouse":
        return e.category.includes("mouse");
      case "keyboard"://  Không có sản phẩm khi lấy API từ productList
        return e.category.includes("keyboard");
      case "other":
        return e.category.includes("other");

      default:
        return e;
    }
  });

  // Dùng câu lệnh if: render ra đúng điều kiện- cái nào bấm vào hoặc hiện ra sản phẩm ('results') hoặc không
  let contents = (
    <div className={`${classes["page-load"]} position-absolute bottom-0 end-0`}>
      <button>{"<<"}</button>
      {items.length > 0 ? (
        <span className="text-bg-dark">{items.length}</span>
      ) : (
        ""
      )}
      <button>{">>"}</button>
      <p>Showing 1-9 of {items.length} results</p>
    </div>
  );

  if (items.length > 0) {
    products = (
      <div className="row justify-content-center justify-content-md-start">
        {items.map((e) => (
          <NavLink
            to={`/detail/${e._id.$oid}`}
            key={e._id.$oid}
            className={`text-center col-md-4 ${classes.product}`}
          >
            <img src={e.img1} alt="" className="img-fluid"></img>
            <div>
              <p className={classes.title}>{e.name}</p>
              <p className={classes.price}>
                {convertNumberToString(e.price)} VND
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    );
  }

  if (props.error) {
    products = "Something was wrong!";
  }

  if (props.loading) {
    products = "Loading...";
  }

  return (
    <div className={`${props.className} ${classes["products"]}`}>
      {/* Gói gọn vào 2 biến để hiện giao diện */}    {products} {contents}
    </div>
  );
}

export default ProductList;
