import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./layouts/Test";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route exact path="/" element = {<MainLayout/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
