import Header from "./Header";
import {Route} from  "react-router-dom"
import ScrollToTop from "react-scroll-up";
import "./styles.less";

export default function MainLayout(props) {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(routerProps) => {
        return (
          <>
             <Header {...routerProps} />
            <Component {...routerProps} />
            <ScrollToTop/> 
          </>
        );
      }}
    ></Route>
  );
}
