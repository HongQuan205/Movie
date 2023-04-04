import { Suspense,lazy } from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";


const MainLayout = lazy(() => import("./layouts/MainLayout"))
function App() {
  return (
    <BrowserRouter>
      <Suspense >
          <Switch>
            <Route exact path={["/","/phim/:maPhim", "/taikhoan"]}>
              <MainLayout>
                  
              </MainLayout>
            </Route>
          </Switch>
      </Suspense>
    
    </BrowserRouter>
  );
}

export default App;
