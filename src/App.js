import Mainpage from "./component/Mainpage";
import Frotend from "./Pages/Frotend";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frotend />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
