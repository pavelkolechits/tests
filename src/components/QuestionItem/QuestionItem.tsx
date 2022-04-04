import { FC } from "react";
import styles from "./questionItem.module.scss";
import { Options } from "../Options/Options";
import { AddAnswerArea } from "../AddAnswerArea/AddAnswerArea";
import { useState } from "react";
import { AnswerItemList } from "../AnswerItemList/AnswerItemList";
import { EditQuestionArea } from "../EditQuestionArea/EditQuestionArea";
interface QIProps {
  answers: AnswerItem[];
  question: string;
  itemId: string;
}
export interface AnswerItem {
  answer: string;
  isCorrect: boolean;
  answerId: string;
}

export const QuestionItem: FC<QIProps> = ({ answers, question, itemId }) => {
  const [showArea, setShowArea] = useState<boolean>(false);
  const [showEditArea, setShowEditArea] = useState<boolean>(false);

  const handleShowArea = () => {
    setShowArea(true);
  };
  const handleCloseArea = () => {
    setShowArea(false);
  };

  const handleShowEditArea = () => {
    setShowEditArea(true);
  };

  const handleCloseEditArea = () => {
    setShowEditArea(false);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.question}>
        {!showEditArea ? (
          <>{question}</>
        ) : (
          <EditQuestionArea

            itemId={itemId}
            question={question}
            handleCloseEditArea={handleCloseEditArea}
          />
        )}
      {!showEditArea &&   <Options
          handleShowEditArea={handleShowEditArea}
          itemId={itemId}
          handleShowArea={handleShowArea}
        /> }
    
      </div>
      <ol>
        {answers.map((i) => (
          <AnswerItemList questionId={itemId} key={i.answerId} item={i} />
        ))}
      </ol>
      {showArea && (
        <AddAnswerArea itemId={itemId} handleCloseArea={handleCloseArea} />
      )}
    </div>
  );
};
