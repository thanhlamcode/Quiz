import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { getQuestion } from "../../service/getQuestions";
import { useEffect, useState } from "react";
import { infoTopic } from "../../action/setTopic";
import { answerUser, inforUserName } from "../../action/infor";

function Excercise() {
  const topic = useSelector((state) => state.topicReducer);
  const [questionData, setQuestionData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const inforUser = useSelector((state) => state.inforUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inforUserName());
  }, []);

  const handleChange = (questionId, answerIndex) => {
    setAnswers((prevAnswers) => {
      // Lọc ra tất cả các câu trả lời cũ cho questionId hiện tại
      const filteredAnswers = prevAnswers.filter(
        (answer) => answer.questionId !== questionId
      );

      // Thêm câu trả lời mới vào mảng đã lọc
      return [
        ...filteredAnswers,
        {
          questionId: questionId,
          answer: answerIndex,
        },
      ];
    });
  };

  useEffect(() => {
    console.log(answers);
    // Dispatch hành động khi answers thay đổi
    dispatch(answerUser(answers));
  }, [answers, dispatch]);

  console.log(inforUser);

  useEffect(() => {
    let topicId;
    switch (topic) {
      case "HTML5":
        topicId = 1;
        break;
      case "CSS3":
        topicId = 2;
        break;
      case "Javascript":
        topicId = 3;
        break;
      case "ReactJS":
        topicId = 4;
        break;
      default:
        topicId = null;
    }
    if (topicId !== null) {
      getQuestion().then((data) => {
        const questions = data.filter((item) => item.topicId === topicId);
        setQuestionData(questions);
        console.log(questions);
      });
    }

    // dispatch infoTopic chỉ khi topicId thay đổi
    dispatch(infoTopic(topicId));
  }, [topic, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // post()
  };

  return (
    <>
      <div className="excercise">
        <h1>Chủ đề luyện tập {topic}</h1>
        <br />
        <form onSubmit={handleSubmit}>
          {questionData.map((item, index) => (
            <div key={index}>
              <p className="number_question">
                Câu {index + 1}: {item.question}
              </p>
              {item.answers.map((question, index_answers) => (
                <div key={index_answers}>
                  <label>
                    <input
                      type="radio"
                      name={`question_${item.id}`}
                      value={`option${index_answers}`}
                      required
                      onChange={() => {
                        handleChange(item.id, index_answers);
                      }}
                    />
                    <span> {question}</span>
                  </label>
                  <br />
                </div>
              ))}
            </div>
          ))}
          <button>Nộp bài</button>
        </form>
      </div>
    </>
  );
}

export default Excercise;
