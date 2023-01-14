import React, { Suspense } from "react";
import "./styles/reduction.scss";
import GAListener from "./components/GAListener";
import Sidebar from "./components/Layout/Sidebar";
import PageSpinner from "./components/PageSpinner";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Maintenance from "./pages/Maintenance";
import {ProSidebarProvider} from "react-pro-sidebar";
import {SidebarPro} from "./components/Layout/SidebarPro";
const Home = React.lazy(() => import("./pages/Home"));
const Companies = React.lazy(() => import("./pages/Companies"));
const School = React.lazy(() => import("./pages/School"));
const Main = React.lazy(() => import("./pages/main/main"));

const App = () => {
  const maint = import.meta.env.VITE_APP_MAINTENANCE;

  return (
    <BrowserRouter basename={"/"}>
      {maint === "false" ? (
        <GAListener>
          {/*<Switch>*/}
          {/*  <Sidebar>*/}
          {/*    <Suspense fallback={<PageSpinner />}>*/}
          {/*      <Route exact path="/" component={Main} />*/}
          {/*      <Route exact path="/Companies" component={Companies} />*/}
          {/*      <Route exact path="/Home" component={Home} />*/}
          {/*      <Route exact path="/School" component={School} />*/}
          {/*    </Suspense>*/}
          {/*  </Sidebar>*/}

            <ProSidebarProvider>
              <SidebarPro>
                  <Suspense fallback={<PageSpinner />}>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/Companies" component={Companies} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/School" component={School} />
                  </Suspense>
              </SidebarPro>
            </ProSidebarProvider>

            {/* <Redirect to="/" /> */}
          {/*</Switch>*/}
        </GAListener>
      ) : (
        <Maintenance />
      )}
    </BrowserRouter>
  );
};

export default App;
