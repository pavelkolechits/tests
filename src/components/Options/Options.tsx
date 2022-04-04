import { FC } from "react";
import { NavDropdown } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import {createTestActionTypes} from '../../redux/reducers/createTestReducer/types'
import style from './options.module.scss'

interface OptionsProps {
   
    handleShowArea: () => void;
    handleShowEditArea: () => void;
    itemId: string
    
}



export const Options: FC<OptionsProps> = ({handleShowArea, itemId, handleShowEditArea}) => {
const dispatch = useDispatch()


const onClickDeleteItem = () => {
  dispatch({type: createTestActionTypes.DELETE_QUESTION, payload: itemId})
  
}

  return (
    <NavDropdown
      id="nav-dropdown-dark-example"
      title="Options"
      menuVariant="white"
    >
      <NavDropdown.Item className={style['delete-answer']} onClick={onClickDeleteItem}>Delete</NavDropdown.Item>
      <NavDropdown.Item className={style['edit-answer']} onClick={handleShowEditArea}>Edit</NavDropdown.Item>
      <NavDropdown.Item className={style['add-answer']} onClick={handleShowArea}>Add answer</NavDropdown.Item>
    </NavDropdown>
  );
};
