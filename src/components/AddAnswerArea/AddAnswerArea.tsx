import { FC } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./addAnsverArea.module.scss";
import {useState} from 'react'
import {createTestActionTypes} from '../../redux/reducers/createTestReducer/types'
import {useDispatch} from 'react-redux'
// import nextId from "react-id-generator";



interface AddAnswerAreaProps {
  handleCloseArea: () => void;
  itemId: string;
  
}
function getID() {
	return '_' + Math.random().toString(36).substr(2, 9);
}


export const AddAnswerArea: FC<AddAnswerAreaProps> = ({handleCloseArea, itemId}) => {
  const dispatch = useDispatch()
 

  const [value, setValue] = useState<string>('')
const handleClose = () => {
  handleCloseArea()
}
const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  setValue(event.target.value)
}
const handleAddAnswer = () => {
  dispatch({type: createTestActionTypes.CREATE_ANSWER, payload: {answer: value, id: itemId, answerId: getID()}})
  handleCloseArea()
}

  return (
    <div className={styles.wrap}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          onChange={handleOnChange}
          value={value}
          as="textarea"
          rows={4}
          placeholder="enter a answer"
        />
      </Form.Group>
      <Button onClick={handleAddAnswer} className={styles.add}  variant='outline-success'>Add</Button>
      <Button onClick={handleClose} className={styles.cancel} variant='outline-danger'>Cancel</Button>
    </div>
  );
};
