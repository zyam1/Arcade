import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Test from './components/Test';
import SignInPage from './pages/Sign/SignInPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* 테스트 페이지 */}
          <Route path="/" element={<Test />}></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
