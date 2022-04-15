import { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { TestLink } from "../../components/TestLink/TestLink";
import { manageTestsActionTypes } from "../../redux/reducers/manageTestsReducer/types";
import { useDispatch } from "react-redux";
import style from "./startTestPage.module.scss";

export const StartTestPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: manageTestsActionTypes.GET_TESTS_DATA });
  }, []);
  const state = useTypedSelector((i) => i.manageTestsReducer);

  return (
    <ul className={style.testList}>
      {state.map((i) => (
        <li
          key={i.id}
          className={style.testItem}
          
        >
          <TestLink id={i.testName}>{i.testName}</TestLink>
        </li>
      ))}
    </ul>
  );
};
