import "./App.css";
import "./Constants/colors.css";
import { useState } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutMain, Layout, LayoutBase } from "./Templates/Layouts";
import Loading from "react-loading";
//lazy

//Routes
import { PATH } from "./Constants/routePath";

//Pages
import MainPage from "./WebPages/MainPage";
import LoginPage from "./WebPages/LoginPage";
import BoardPage from "./WebPages/BoardPage";
import PostPage from "./WebPages/PostPage";
import DetailPage from "./WebPages/DetailPage";
import FeaturePage from "./WebPages/FeaturePage";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="App">
        {/* {fireStore._databaseId.projectId} */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route path={PATH.MAIN} element={<MainPage />} />
            </Route>

            <Route element={<Layout />}>
              <Route
                path={PATH.LOGIN}
                element={<LoginPage />}
                loading={loading}
                setLoading={setLoading}
              />
              <Route path={PATH.BOARD} element={<BoardPage />} />
            </Route>

            <Route element={<LayoutBase />}>
              <Route path={PATH.CREATE} element={<PostPage mode="create" />} />
              <Route path={PATH.DETAIL} element={<DetailPage />} />
              <Route path={PATH.UPDATE} element={<PostPage />} />
              <Route path={PATH.FEAT} element={<FeaturePage />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
