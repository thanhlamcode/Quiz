import { useParams } from "react-router-dom";
import { getUserAnswer } from "../../service/getUserAnswer";
import { useEffect, useState } from "react";

function ShowResult() {
  const [dataResult, setDataResult] = useState([]);
  const [topic, setTopic] = useState("");
  const { id } = useParams(); // Gọi useParams() để lấy tham số từ URL
  const [numberTrue, setTrue] = useState(0);
  const [numberWrong, setFalse] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getUserAnswer().then((data) => {
      setDataResult(data);
    });
  }, []);
  const result = dataResult.find((item) => item.id == id);

  useEffect(() => {
    if (result) {
      switch (result.topicId) {
        case 1:
          setTopic("HTML");
          break;
        case 2:
          setTopic("CSS");
          break;
        case 3:
          setTopic("Javascripts");
          break;
        case 4:
          setTopic("ReactJS");
          break;
        default:
          setTopic("Unknown");
          break;
      }
    }
  }, [dataResult, id]);

  useEffect(() => {
    if (result) {
      let correct = 0;
      result.answers.forEach((item) => {
        if (item.answer === item.correctAnswer) {
          correct++;
        }
      });

      let wrong = result.answers.length - correct;
      setTrue(correct);
      setFalse(wrong);

      let percent = Math.round((correct / result.answers.length) * 100);
      setTotal(percent);
    }
  }, [result]);

  return (
    <>
      <div>
        <h1>Kết quả chủ đề: {topic}</h1>
        <div>
          <p>
            Đúng: <span>{numberTrue}</span> | Sai: <span>{numberWrong}</span>|
            Tổng số câu: <span>{result.answers.length}</span> | Tỷ lệ đúng:{" "}
            <span>{total}%</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ShowResult;
