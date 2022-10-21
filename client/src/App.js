import "./App.css";
import "./Constants/colors.css";
import { useEffect } from "react";
import { fireStore } from "./Firebase";
import { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutWithSearchbar } from "./Templates/Layouts";
//lazy

//Routes
import { PATH } from "./Constants/routePath";

//Pages
import MainPage from "./WebPages/MainPage";

function App() {
  useEffect(() => {
    console.log(fireStore);
  }, []);
  return (
    <>
      <div className="App">
        {/* {fireStore._databaseId.projectId} */}
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route element={<LayoutWithSearchbar />}>
              <Route path={PATH.MAIN} element={<MainPage />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
