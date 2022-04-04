import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import {Background} from './components/background/Background'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Background/>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
