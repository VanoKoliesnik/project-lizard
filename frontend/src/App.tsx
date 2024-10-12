import { Loading, PageContainer } from "@components";
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RoutesPaths } from "@enums";
import { Login, Profile, Registration } from "@pages";

function App() {
  return (
    <Suspense fallback={<Loading fullscreen />}>
      <PageContainer>
        <Router>
          <Routes>
            <Route path={RoutesPaths.Login} Component={Login} />
            <Route path={RoutesPaths.Registration} Component={Registration} />
            <Route path={RoutesPaths.Profile} Component={Profile} />

            <Route
              path="*"
              element={<Navigate to={RoutesPaths.Login} replace />}
            />
          </Routes>
        </Router>
      </PageContainer>
    </Suspense>
  );
}

export default App;
