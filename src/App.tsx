import "./App.scss";
import { FC } from "react";
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CreateTestPage } from "./pages/CreateTestPage/CreateTestPage";
import { Background } from "./components/background/Background";

export const App: FC = () => {
  return (
    <>
    
      <Routes>
     
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/create-test" element={<CreateTestPage />} />
        </Route>
      </Routes>
     
    </>
  );
};
