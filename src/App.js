import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Login from "./Components/Login";
import Home from "./Components/Home";
function App() {
  return (
<>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
</>
  );
}
export default App;
