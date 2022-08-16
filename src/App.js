import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Login } from "./Components/AuthComp/login/login";
import { Mastercomp } from "./Components/MasterComp/Mastercomp";
import Signup from "./Components/AuthComp/Signup/signup";
import { RequireAuth } from "./Context/RequireAuth/requireAuth";

function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Mastercomp />
            </RequireAuth>
          }
        />

        <Route path="/post" element={<Mastercomp />} />
      </Routes>
    </div>
  );
}

export default App;
