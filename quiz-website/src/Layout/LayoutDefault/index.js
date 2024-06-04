import { Outlet } from "react-router-dom";
import "./layout.scss";
import LogOut from "../../components/LogOut";
import Login from "../../components/LogIn";
import { useSelector } from "react-redux";

function LayoutDefault() {
  const isLogin = useSelector((state) => state.loginReducer);
  // const [isLogin, setLogin] = useState(false);
  return (
    <>
      <div className="layout__header">
        <h1>QUIZ</h1>
        {isLogin ? <LogOut /> : <Login />}
      </div>
      <div className="layout__main">
        <Outlet />
      </div>
      <div className="layout__footer">Copy right @ 2024 by thanhlamcode</div>
    </>
  );
}

export default LayoutDefault;
