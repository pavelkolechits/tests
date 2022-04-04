import { FC } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./editAnswerArea.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTestActionTypes } from "../../redux/reducers/createTestReducer/types";

interface EditAnswerAreaProps {
  handleCloseEditArea: () => void;
  answer: string;
  answerId: string;
  questionId: string;
}

export const EditAnswerArea: FC<EditAnswerAreaProps> = ({
  handleCloseEditArea,
  answer,
  answerId,
  questionId,
}) => {
  const dispatch = useDispatch();
  const [editAnswerValue, setEditAnswerValue] = useState<string>(answer);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEditAnswerValue(event.target.value);
  };

  const handleSaveChangeAnswer = () => {
    dispatch({
      type: createTestActionTypes.EDIT_ANSWER,
      payload: { value: editAnswerValue, answerId, questionId }
    });
    handleCloseEditArea()
  };

  return (
    <div className={styles.wrap}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={handleOnChange}
          as="textarea"
          rows={4}
          value={editAnswerValue}
        />
      </Form.Group>
      <Button onClick={handleSaveChangeAnswer} className={styles.add} variant="outline-success">
        Save
      </Button>
      <Button
        onClick={handleCloseEditArea}
        className={styles.cancel}
        variant="outline-danger"
      >
        Cancel
      </Button>
    </div>
  );
};
