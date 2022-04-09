import { FC } from "react";
import { AnswerItem } from "../QuestionItem/QuestionItem";
import styles from "./answerItemList.module.scss";
import { Form, Button } from "react-bootstrap";
import { createTestActionTypes } from "../../redux/reducers/createTestReducer/types";
import { useDispatch } from "react-redux";
import { EditAnswerArea } from "../EditAnswerArea/EditAnswerArea";
import { useState } from "react";

interface AnswerItemListProps {
  item: AnswerItem;
  questionId: string;
}

export const AnswerItemList: FC<AnswerItemListProps> = ({
  item,
  questionId,
}) => {
  const dispatch = useDispatch();
  const [showEditArea, setShowEditArea] = useState<boolean>(false);
  
  const handleShowEditArea = () => {
    setShowEditArea(true);
  };
  const handleCloseEditArea = () => {
    setShowEditArea(false);
    
  };



  const handleCheck = () => {
   
    dispatch({
      type: createTestActionTypes.SELECT_ANSWER,
      payload: {  questionId, answerId: item.answerId },
    });
  
  
  };




  const handleDeleteAnswer = () => {
    dispatch({
      type: createTestActionTypes.DELETE_ANSWER,
      payload: { answerId: item.answerId, questionId },
    });
  };
  return (
    <div className={styles["answer-wrap"]}>
      {!showEditArea && (
        <Form.Check
          onChange={handleCheck}
          checked={item.isCorrect}
          type="checkbox"
          className={styles.checkbox}
        />
      )}
      <li className={styles.answer}>
        <div className={styles["answer-text"]}>
          {showEditArea ? (
            <EditAnswerArea
              questionId={questionId}
              answerId={item.answerId}
              answer={item.answer}
              handleCloseEditArea={handleCloseEditArea}
            />
          ) : (
            item.answer
          )}
        </div>
      </li>
      {!showEditArea && (
        <div className={styles["buttons-wrap"]}>
          <Button
            onClick={handleShowEditArea}
            className={styles.button}
            variant="outline-success"
          >
            Edit
          </Button>
          <Button
            className={styles.button}
            onClick={handleDeleteAnswer}
            variant="outline-danger"
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
