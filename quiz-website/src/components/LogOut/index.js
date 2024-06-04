import { Link } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../action/login";
import Swal from "sweetalert2";
function LogOut() {
  const dispatch = useDispatch();
  const handleClick = () => {
    Swal.fire({
      title: "Bạn có muốn đăng xuất?",
      showCancelButton: true,
      confirmButtonText: "Đăng Xuất",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Đăng xuất thành công!", "", "success");
        dispatch(login());
      }
    });
  };

  return (
    <>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="topic">
          <button>Topic</button>
        </Link>
        <Link to="answer">
          <button>Answer</button>
        </Link>
      </div>
      <button className="logout" onClick={handleClick}>
        LogOut
      </button>
    </>
  );
}

export default LogOut;
