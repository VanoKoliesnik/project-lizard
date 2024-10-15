import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Loading, PageContainer, PrivateRoute } from "./components";
import { RoutesPaths } from "./common/enums";
import { RegistrationPage } from "./pages/Registration";
import { LoginPage } from "./pages/Login";
import { ProfilePage } from "./pages/Profile";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading fullscreen />}>
        <PageContainer>
          <Router>
            <Routes>
              <Route
                path={RoutesPaths.Registration}
                Component={RegistrationPage}
              />

              <Route path={RoutesPaths.Login} Component={LoginPage} />

              <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
              </Route>

              <Route
                path="*"
                element={<Navigate to={RoutesPaths.Login} replace />}
              />
            </Routes>
          </Router>
        </PageContainer>
      </Suspense>
    </Provider>
  );
}

export default App;
