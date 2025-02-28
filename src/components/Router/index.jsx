import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import ResponsiveRoutesPage from "../../pages/1-ResponsiveRoutes";
import PopupsRoutesPage from "../../pages/2-PopupsRoutes";
import CustomPromptPage from "../../pages/3-CustomPrompt";
import ClosePopupPage from "../../pages/ClosePopup";
import RestorePreventedRoutePage from "../../pages/RestorePreventedRoute";
import StepperPage from "../../pages/Stepper";
import TwoPopupsPage from "../../pages/TwoPopups";

import AppBar from "../AppBar";
import CustomPrompt from "../CustomPrompt";

const Router = () => {
  const userConfirmation = useCallback((message, callback) => {
    const node = document.getElementById("custom-prompt");

    const cleanUp = (answer) => {
      ReactDOM.unmountComponentAtNode(node);
      callback(answer);
    };

    ReactDOM.render(<CustomPrompt message={message} cleanUp={cleanUp} />, node);
  }, []);

  return (
    <BrowserRouter getUserConfirmation={userConfirmation}>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/responsive-routes">
          <ResponsiveRoutesPage />
        </Route>
        <Route path="/popups-routes">
          <PopupsRoutesPage />
        </Route>
        <Route path="/custom-prompt">
          <CustomPromptPage />
        </Route>
        <Route path="/close-popup">
          <ClosePopupPage />
        </Route>
        <Route path="/restore-prevented-route">
          <RestorePreventedRoutePage />
        </Route>
        <Route path="/stepper">
          <StepperPage />
        </Route>
        <Route path="/two-popups">
          <TwoPopupsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
