import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;