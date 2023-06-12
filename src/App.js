import { lazy } from "react";
import { BrowserRouter,Switch,Routes} from "react-router-dom";
import "antd/dist/reset.css";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout exact path="/" Component = {Homepage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
