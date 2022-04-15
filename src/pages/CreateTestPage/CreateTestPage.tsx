import { FC } from "react";
import style from "./createTestPage.module.scss";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { createTestActionTypes } from "../../redux/reducers/createTestReducer/types";
import nextId from "react-id-generator";
import { QuestionItem } from "../../components/QuestionItem/QuestionItem";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { manageTestsActionTypes } from "../../redux/reducers/manageTestsReducer/types";

function getID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export const CreateTestPage: FC = () => {
  const navigate = useNavigate();
  const [testName, setTestName] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);
  const state = useTypedSelector((i) => i.createTestReducer.questions);
  const stateDep = useTypedSelector((i) => i.createTestReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const test = useTypedSelector(i => i)
  
  useEffect(() => {
  dispatch({type: createTestActionTypes.RELOAD})
},[])

  useEffect(() => {
    localStorage.setItem("createTest", JSON.stringify(state));
  }, [stateDep]);

  useEffect(() => {}, [stateDep]);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(event.target.value);
  };

  const onClickHandler = (): void => {
    if (testName) {
      dispatch({
        type: manageTestsActionTypes.GET_TEST,
        payload: { test: state, testName: value, id: getID() },
      });

      

      dispatch({ type: createTestActionTypes.RESET_STATE });

      setValue("");

      setTestName(false);


      dispatch({ type: manageTestsActionTypes.SEND_TEST_DATA, payload: { test: state, testName: value, id: getID() }});
    
      localStorage.setItem("createTest", JSON.stringify([]));
      navigate("/start-test");
      dispatch({ type: manageTestsActionTypes.GET_TESTS_DATA})

    } else {
      dispatch({
        type: createTestActionTypes.CREATE_QUESTION,
        payload: { value, id: getID() },
      });
      setValue("");
    }
  };
  const testNameHandler = () => {
    setTestName(true);
    ref.current?.focus();
  };
  const cancelSave = () => {
    setTestName(false);
  };

  const isCorrectvalue: boolean = value.trim() !== "";

  return (
    <>
      <Button
        className={style["create-button"]}
        onClick={testNameHandler}
        variant="outline-success"
      >
        Create
      </Button>

      {testName && (
        <Button
          className={style["back-button"]}
          onClick={cancelSave}
          variant="outline-secondary"
        >
          Back
        </Button>
      )}
      <div className={style.container}>
        <div className={style.form}>
          <input
            ref={ref}
            placeholder={!testName ? "enter a question" : "enter a testname"}
            onChange={onChangeHandler}
            value={value}
            className={style.input}
          />
          {isCorrectvalue && (
            <button onClick={onClickHandler} className={style.button}>
              &#10004;
            </button>
          )}
        </div>
        <ol className={testName ? style.hidden : ""}>
          {state.map((i) => (
            <li className={style.questionItem} key={i.id}>
              <QuestionItem
                itemId={i.id}
                answers={i.answers}
                question={i.question}
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
