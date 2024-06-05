import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ShowResult() {
  const dataResult = useSelector((state) => state.inforUserReducer);
  console.log(dataResult);
  const { id } = useParams(); // Gọi useParams() để lấy tham số từ URL

  return (
    <>
      <div>
        <h1>Show Result for ID: {id}</h1>
        <div>{/* Hiển thị dữ liệu kết quả dựa trên ID và dataResult */}</div>
      </div>
    </>
  );
}

export default ShowResult;
