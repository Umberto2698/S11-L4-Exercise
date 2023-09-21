import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./componets/MainPage";
import Details from "./componets/Details";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/details/:launch_id" element={<Details></Details>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
