import "./App.scss";
import { FC , useEffect} from "react";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CreateTestPage } from "./pages/CreateTestPage/CreateTestPage";
import { Background } from "./components/background/Background";
import { StartTestPage } from "./pages/StartTestPage/StartTestPage";
import  {useDispatch} from 'react-redux'
import {createTestActionTypes} from './redux/reducers/createTestReducer/types'
import { manageTestsActionTypes } from "./redux/reducers/manageTestsReducer/types";
import { Test } from "./pages/Test/Test";

export const App: FC = () => {
  const dispatch = useDispatch()
    useEffect(() => {
    dispatch({type: createTestActionTypes.RELOAD})
    dispatch({type: manageTestsActionTypes.RELOAD})
  },[])
  return (
    <>
    
      <Routes>
     
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/test/:id" element={<Test/>}/>
          <Route path="/create-test" element={<CreateTestPage />} />
          <Route path="/start-test" element={<StartTestPage />} />
        </Route>
      </Routes>
     
    </>
  );
};
