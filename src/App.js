import './App.scss';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Main from './components/Main';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={Login} />
        <Route path="/main" element={Main} />
      </Routes>
    </div>
  );
}

export default App;
