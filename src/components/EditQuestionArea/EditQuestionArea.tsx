import  { FC } from 'react'
import styles from './editQuestionArea.module.scss'
import { Form, Button } from 'react-bootstrap'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTestActionTypes} from '../../redux/reducers/createTestReducer/types'

interface EditQuestionAreaProps {
    
    handleCloseEditArea: () => void;
    question: string;
    itemId: string
}


export const EditQuestionArea: FC<EditQuestionAreaProps> = ({ handleCloseEditArea, question, itemId}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>(question)

    const onChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
      ): void => {
        setValue(event.target.value);
      };

      const saveQuestionEdit = () => {
          dispatch({type: createTestActionTypes.EDIT_QUESTION, payload: {value, itemId}})
          handleCloseEditArea()
      }

  return (
    <div className={styles.wrap}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Control
        as="textarea"
        rows={4}
        value={value}
        onChange={onChangeHandler}
      />
    </Form.Group>
    <Button onClick={saveQuestionEdit} className={styles.add}  variant='outline-success'>Save</Button>
    <Button onClick={handleCloseEditArea} className={styles.cancel} variant='outline-danger'>Cancel</Button>
  </div>
  )
}
