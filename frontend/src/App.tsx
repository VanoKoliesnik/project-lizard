import { Loading, PageContainer, PrivateRoute } from "@components";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RoutesPaths } from "@enums";
import { RegistrationPage, ProfilePage } from "@pages";
import { Provider } from "react-redux";
import store from "src/store";
import { LoginPage } from "./pages/Login";

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
