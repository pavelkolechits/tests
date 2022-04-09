import { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { TestLink } from "../../components/TestLink/TestLink";




export const StartTestPage: FC = () => {


  const state = useTypedSelector((i) => i.manageTestsReducer.allTest);
  const stateDep = useTypedSelector(i => i.manageTestsReducer)

 
  console.log(state)


  return (
    <ul style={{ color: "#fff" }}>
      {state.map((i) => (
        <li style={{ listStyleType: 'none'}}><TestLink id={i.testName} >{i.testName}</TestLink></li>
      ))}
    </ul>
  );
};
