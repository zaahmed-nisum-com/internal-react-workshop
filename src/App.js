import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import * as reactRouterDom from "react-router-dom";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import Home from "./pages/home";
import { PasswordlessAuth } from "supertokens-auth-react/recipe/passwordless";

SuperTokens.init({
  appInfo: {
    appName: "nisum-internal-workshop",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/login",
  },
  recipeList: [
    Passwordless.init({
      contactMethod: "EMAIL_OR_PHONE",
    }),
    Session.init(),
  ],
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
        <Route
          path="/dashboard"
          element={
            <PasswordlessAuth>
              <div>
                <p>Dashbaord</p>
              </div>
            </PasswordlessAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
