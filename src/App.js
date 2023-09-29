import Body from './components/Body';
import './App.css';

import appStore from "./utils/appStore";
import { Provider } from "react-redux";


function App() {
  return (
  <Provider  className="" store={appStore}>
      <Body />
    </Provider>  
  );
}

export default App;
