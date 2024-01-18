import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 테스트 페이지 */}
          <Route path="/" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
