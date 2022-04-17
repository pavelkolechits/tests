import { FC, useState, useEffect } from "react";
import styles from "./test.module.scss";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useNavigate, useParams } from "react-router-dom";
import { AnswerItem } from "../../redux/reducers/createTestReducer/types";
import { Form, Button } from "react-bootstrap";
import { manageTestsActionTypes } from "../../redux/reducers/manageTestsReducer/types";
import { useDispatch } from "react-redux";
import { getUserDataActionTypes } from "../../redux/reducers/getUserDataReducer/types";

export const Test: FC = () => {
  const dispatch = useDispatch();
  const [countQuestion, setCountQuestion] = useState<number>(1);
  const state = useTypedSelector((i) => i.manageTestsReducer);
  const params = useParams();
  const testData = state.filter((i) => i.testName === params.id)[0];

  const stateUserVariant = useTypedSelector((i) => i.getUserDataReducer);

  const nextQuestion = () => {
    if (countQuestion === testData?.test.length) {
      return;
    }
    setCountQuestion(() => countQuestion + 1);
  };

  if (!state.length) {
    dispatch({ type: manageTestsActionTypes.GET_TESTS_DATA });
  }
  const handleFinish = () => {
    dispatch({
      type: getUserDataActionTypes.COMPARE_RESULTS,
      payload: [state, stateUserVariant]
    });
  };

  return (
    <>
      {!state.length ? (
        "Loading..."
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapQuestion}>
            <h2 className={styles.testName}> {testData?.testName} </h2>
            <h3
              className={styles.countQuestion}
            >{`${countQuestion} out of ${testData?.test.length}`}</h3>
            <hr></hr>
            <h3>
              {countQuestion}.&nbsp;{testData?.test[countQuestion - 1].question}
            </h3>
            <ol>
              {testData?.test[countQuestion - 1].answers.map((i) => (
                <Question
                  key={i.answerId}
                  questionId={testData?.test[countQuestion - 1].id}
                  answerId={i.answerId}
                  answer={i.answer}
                />
              ))}
            </ol>
            <div
              className={
                countQuestion !== testData?.test.length
                  ? styles["button-wrap__next"]
                  : styles["button-wrap__finish"]
              }
            >
              {countQuestion !== testData?.test.length ? (
                <Button variant="outline-success" onClick={nextQuestion}>
                  Next&rarr;
                </Button>
              ) : (
                <Button onClick={handleFinish} variant="outline-success">
                  Finish
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface QuestionProps {
  answer: string;
  answerId: string;
  questionId: string;
}

const Question: FC<QuestionProps> = ({ answer, answerId, questionId }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const checkHandler = () => {
    setChecked(!checked);
    dispatch({
      type: getUserDataActionTypes.GET_ANSVER_FROM_USER,
      payload: { answerId, questionId, isCorrect: checked },
    });
  };

  return (
    <div className={styles.answer}>
      <Form.Check
        onChange={checkHandler}
        checked={checked}
        type="checkbox"
        className={styles.checkbox}
      />
      <li> {answer}</li>
    </div>
  );
};
