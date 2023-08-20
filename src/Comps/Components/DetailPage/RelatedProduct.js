import { NavLink } from "react-router-dom";
import { convertNumberToString } from "../../Hooks/utils";
import classes from "./RelatedProduct.module.css";

function RelatedProduct(props) {
  const items = props.related;

  // Lây vị trí của sản phẩm đang hiển thị
  const index = items.findIndex((e) => e._id.$oid === props.id);// Định vị đúng loại sf mình muốn xóa: kiểm tra id trùng nhau, nếu trùng thì trả về index của item đó    
  if (index > -1) {
    // Xóa sản phẩm đang hiển thị: cắt chuỗi
    items.splice(index, 1);
  }

  let contents = "";

  return (
    <div className={`${classes.related} mt-5 mb-5`}>
      <h5>RELATIVE PRODUCTS</h5>
      {/* {contents} */}
      {items.length > 0 ? <div className="d-flex flex-wrap">
        {items.map((e) => (
          <NavLink
            to={`/detail/${e._id.$oid}`}
            key={e._id.$oid}
            className={`text-center col-md-4 ${classes.product}`}
          >
            <img src={e.img1} alt="" className="img-fluid"></img>
            <div>
              <p className={`text-dark ${classes.title}`}>{e.name}</p>
              <p className={classes.price}>
                {convertNumberToString(e.price)} VND
              </p>
            </div>
          </NavLink>
        ))}
      </div> : ''}
    </div>
  );
}

export default RelatedProduct;
