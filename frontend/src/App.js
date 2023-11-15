import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/User/Login";
import Signin from "./Pages/User/Signin";
import Navigator from "./Components/Navigator";
import Courses from "./Pages/Courses";
import FreeCoursesProtection from "./Components/FreeCoursesProtection";
import CoursesDetails from "./Pages/CoursesDetails";
import EnrollPage from "./Pages/EnrollCourses";

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
            <Route path="/courseDetails" element={<CoursesDetails />} />
            <Route path="/enroll" element={<EnrollPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
