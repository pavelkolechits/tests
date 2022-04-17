import { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { TestLink } from "../../components/TestLink/TestLink";
import { manageTestsActionTypes } from "../../redux/reducers/manageTestsReducer/types";
import { useDispatch } from "react-redux";
import style from "./startTestPage.module.scss";
import { getUserDataActionTypes } from "../../redux/reducers/getUserDataReducer/types";
export const StartTestPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: manageTestsActionTypes.GET_TESTS_DATA });
  }, []);
  const state = useTypedSelector((i) => i.manageTestsReducer);

  const getTestsData = (id: string) => {
    
    dispatch({type: getUserDataActionTypes.CHOOSE_TEST, payload: id})
    dispatch({type: getUserDataActionTypes.RESET_STATE })
  }
  return (
    <ul className={style.testList}>
      {state.map((i) => (
        <li
          key={i.id}
          className={style.testItem}
          
        >
          <TestLink onClick={() => getTestsData(i.id)} id={i.testName}>{i.testName}</TestLink>
        </li>
      ))}
    </ul>
  );
};
