import { useDispatch } from "react-redux";
import Banner from "../Comps/Components/HomePage/Banner";
import Categories from "../Comps/Components/HomePage/Categories";
import OtherInfo from "../Comps/Components/HomePage/OtherInfo";
import TopProducts from "../Comps/Components/HomePage/TopProducts";
import { popupActions } from "../store/index";
import { useEffect } from "react";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(popupActions.hide());
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Trang chủ bao gồm components bên trong Router home */}
      <Banner />
      <Categories />
      <TopProducts />
      <OtherInfo />
    </div>
  );
}

export default Home;
