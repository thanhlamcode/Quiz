import "./style.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home">
        <p>Chúc mừng bạn đã đăng nhập thành công!</p>
        <div className="home__button">
          <Link to="/topic">
            <button>Danh sách chủ đề ôn luyện</button>
          </Link>
          <Link to="answer">
            <button>Danh sách bài đã luyện tập</button>
          </Link>
        </div>
        <p>
          Website trắc nghiệm online lập trình Frontend là một nền tảng trực
          tuyến cho phép các lập trình viên Frontend thực hiện các bài kiểm tra,
          trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập
          trình Frontend. Đối với các lập trình viên Frontend, website trắc
          nghiệm online cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức
          và kỹ năng của mình trong các công nghệ và công cụ lập trình như HTML,
          CSS, JavaScript, jQuery, Bootstrap, Angular, React, Vue,...
        </p>
      </div>
    </>
  );
}

export default Home;
