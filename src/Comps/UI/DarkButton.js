import { NavLink } from "react-router-dom";
import classUI from "./DarkButton.module.css";

//25.3.23: Chỉ thay thế điều hướng trang dùng 'to', truyền props thay thế giữa (Home-Shop-Cart-Login)
function DarkButton(props) {
  return (
    <NavLink
      className={`${classUI["btn-dark"]} ${props.className}`}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  );
}

export default DarkButton;
