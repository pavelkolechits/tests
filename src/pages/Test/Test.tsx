import { FC, useState, useEffect } from "react";
import styles from "./test.module.scss";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useNavigate, useParams } from "react-router-dom";
import { AnswerItem } from "../../redux/reducers/createTestReducer/types";
import { Form, Button } from "react-bootstrap";
import { manageTestsActionTypes } from "../../redux/reducers/manageTestsReducer/types";
import { useDispatch } from "react-redux";

export const Test: FC = () => {
  const dispatch = useDispatch()
  const [countQuestion, setCountQuestion] = useState<number>(1);
  const state = useTypedSelector((i) => i.manageTestsReducer);
  const params = useParams();
  const testData = state.filter((i) => i.testName === params.id)[0];
  const nextQuestion = () => {
    if (countQuestion === testData?.test.length) {
      return;
    }
    setCountQuestion(() => countQuestion + 1);
  };
  if(!state.length ) {
    dispatch({type: manageTestsActionTypes.GET_TESTS_DATA})
  }


  return (
    <>
    { !state.length  ? 'Loading...':
    <div className={styles.container}>
     

      <h2>{testData?.testName}</h2>
      <h3>{`${countQuestion} out of ${testData?.test.length}`}</h3>
      <h3>
        {countQuestion}.&nbsp;{testData?.test[countQuestion - 1].question}
      </h3>
      <ol>
        {testData?.test[countQuestion - 1].answers.map((i) => (
          <Question key={i.answerId} answer={i.answer} />
        ))}
      </ol>
      <Button variant="outline-success" onClick={nextQuestion}>next</Button>
    </div>}
    </>
  );
};

interface QuestionProps {
  answer: string;
}

const Question: FC<QuestionProps> = ({ answer }) => {

  const [checked, setChecked] = useState<boolean>(false);
  const checkHandler = () => {
    setChecked(!checked);
  };

  return (
    <>
      <li>{answer}</li>

      <Form.Check
        onChange={checkHandler}
        checked={checked}
        type="checkbox"
        className={styles.checkbox}
      />
    </>
  );
};
