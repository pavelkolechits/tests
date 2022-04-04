import { FC } from "react";
import style from "./createTestPage.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTestActionTypes } from "../../redux/reducers/createTestReducer/types";
import nextId from "react-id-generator";
import { QuestionItem } from "../../components/QuestionItem/QuestionItem";
import {useTypedSelector} from '../../hooks/useTypesSelector'
 
export const CreateTestPage: FC = () => {
    const dispatch = useDispatch()
  const [value, setValue] = useState<string>("");

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
     
    setValue(event.target.value);
  };

  const onClickHandler = (): void => {
    dispatch({type: createTestActionTypes.CREATE_QUESTION, payload: {value, id: `question-${nextId()}`}})
    setValue('')
  };
  const state = useTypedSelector(i => i.createTestReducer.questions)
  

  const isCorrectvalue: boolean = value.trim() !== "";



  return (
    <div className={style.container}>
      <div className={style.form}>
        <input
          placeholder="enter a question"
          onChange={onChangeHandler}
          value={value}
          className={style.input}
        />
        {isCorrectvalue && 
          <button onClick={onClickHandler}  className={style.button}>&#10004;</button>}
      </div>
          <ol>
     {state.map(i => <li className={style.questionItem} key={i.id}><QuestionItem itemId={i.id}  answers={i.answers} question={i.question} /></li>)} 
     </ol>
    </div>
  );
};
