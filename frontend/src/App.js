import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import Login from "./Components/User/Login";
import Signin from "./Components/User/Signin";
import Navigator from "./Components/Navigator";
import Courses from "./Components/Courses";
import FreeCoursesProtection from "./Components/FreeCoursesProtection";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigator />}>
            <Route index element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/courses"
              element={<FreeCoursesProtection children={<Courses />} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
