import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import OneNew from "./components/OneNew";
import "./App.css";
const News = lazy(() => import("./components/News"));
// const OneNew = lazy(() => import("./components/OneNew"));
// const OneNew = lazy(() => import("./components/OneNew"));
// const Pagination = lazy(() => import("./components/Pagination"));
function App() {
  return (
    <div>
      {/* <Headers /> */}
      <Suspense fallback="Loading...">
        <News />
      </Suspense>
      {/* <Suspense fallback="Loading...">
        <Pagination />
      </Suspense> */}

      {/* <Suspense fallback="Loading...">
        <OneNew />
      </Suspense> */}
      <Routes>
        <Route path="/new" element={<OneNew />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
