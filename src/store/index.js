import { createSlice, configureStore } from "@reduxjs/toolkit";   // 25.3 Định nghĩa tạo ra trạng thái action

// Quản lý trạng thái hiển thị popup () nhờ vào redux
const popupState = { popupShow: false, data: {} };
const popupSlice = createSlice({
  name: "popup",
  initialState: popupState,
  reducers: {
    show(state, action) {
      state.popupShow = true;
      state.data = action.payload;
    },
    hide(state) {
      state.popupShow = false;
    },
  },
});

// Quản lý trạng thái đăng nhập = redux
const authState = { isLogin: false, name: "" };
const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.name = action.payload.name;
      localStorage.setItem("USER", JSON.stringify(action.payload));
    },
    logout(state) {
      state.isLogin = false;
      localStorage.setItem("USER", JSON.stringify({}));
    },
  },
});

// Redux quản lý giỏ hàng 'cart'
const cartState = { data: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addCart(state, action) {
      const { newData } = action.payload;
      state.data.push(newData);
      localStorage.setItem("cartArr", JSON.stringify(state.data));
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      state.data = state.data.map((item) => JSON.stringify(item._id) === JSON.stringify(id) ? ({ ...item, quantity: item.quantity + quantity }) : item);
      localStorage.setItem("cartArr", JSON.stringify(state.data));
    },
    removeCart(state, action) {
      state.data = state.data.filter((item) => item._id.$oid !== action.payload.$oid);
      console.log("dataa", state.data)
      localStorage.setItem("cartArr", JSON.stringify(state.data));
    },
    loadCart(state) {
      const cartArrData = localStorage.getItem("cartArr")
        ? JSON.parse(localStorage.getItem("cartArr"))
        : [];
      state.data = cartArrData;
    },
  },
});

const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const popupActions = popupSlice.actions;
export const authActions = authSlice.actions;
export const cartActions = cartSlice.actions;
export default store;