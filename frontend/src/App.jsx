import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/public/Landing";

import StudentLayout from "./layouts/StudentLayout";
import FacultyLayout from "./layouts/FacultyLayout";
import AdminLayout from "./layouts/AdminLayout";


// Student
import Dashboard from "./pages/student/Dashboard";
import MyCourses from "./pages/student/MyCourses";
import ViewCourse from "./pages/student/ViewCourse";
import Assignments from "./pages/student/Assignments";
import UploadAssignment from "./pages/student/UploadAssignment";
import Grades from "./pages/student/Grades";
import Quizzes from "./pages/student/Quizzes";
import Profile from "./pages/student/Profile";


// Faculty
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import FacultyViewCourse from "./pages/faculty/ViewCourse";
import UploadLectureNotes from "./pages/faculty/UploadLectureNotes";
import CreateAssignment from "./pages/faculty/CreateAssignment";
import CreateQuiz from "./pages/faculty/CreateQuiz";
import Attendance from "./pages/faculty/Attendance";
import ViewSubmissions from "./pages/faculty/ViewSubmissions";
import FacultyProfile from "./pages/faculty/FacultyProfile";


// // Admin

import AdminDashboard from "./pages/admin/AdminDashboard";
import RegisterStudent from "./pages/admin/RegisterStudent";
import RegisterTeacher from "./pages/admin/RegisterTeacher";


function App() {

return (

<BrowserRouter>

<Routes>


{/* Landing */}

<Route 
path="/" 
element={<Landing />} 
/>





{/* ================= ADMIN =================


{/* ================= ADMIN ================= */}

<Route 
  path="/admin" 
  element={<AdminLayout />}
>

  <Route 
    index 
    element={<AdminDashboard />} 
  />

  <Route 
    path="dashboard" 
    element={<AdminDashboard />} 
  />

  <Route 
    path="register-student" 
    element={<RegisterStudent />} 
  />

  <Route 
    path="register-teacher" 
    element={<RegisterTeacher />} 
  />

</Route>






{/* ================= STUDENT ================= */}


<Route 
path="/student" 
element={<StudentLayout />}
>


<Route 
index 
element={<Dashboard />} 
/>


<Route 
path="dashboard" 
element={<Dashboard />} 
/>


<Route 
path="courses" 
element={<MyCourses />} 
/>


<Route 
path="course" 
element={<ViewCourse />} 
/>


<Route 
path="assignments" 
element={<Assignments />} 
/>


<Route 
path="submit-assignment" 
element={<UploadAssignment />} 
/>


<Route 
path="grades" 
element={<Grades />} 
/>


<Route 
path="quizzes" 
element={<Quizzes />} 
/>


<Route 
path="profile" 
element={<Profile />} 
/>


</Route>








{/* ================= FACULTY ================= */}



<Route 
path="/faculty" 
element={<FacultyLayout />}
>


<Route 
index 
element={<FacultyDashboard />} 
/>


<Route 
path="dashboard" 
element={<FacultyDashboard />} 
/>




<Route 
path="course/:id" 
element={<FacultyViewCourse />} 
/>




<Route 
path="course/:id/lectures" 
element={<UploadLectureNotes />} 
/>




<Route 
path="course/:id/assignments" 
element={<CreateAssignment />} 
/>




<Route 
path="course/:id/quizzes" 
element={<CreateQuiz />} 
/>




<Route 
path="course/:id/attendance" 
element={<Attendance />} 
/>




<Route 
path="course/:id/submissions" 
element={<ViewSubmissions />} 
/>




<Route 
path="profile" 
element={<FacultyProfile />} 
/>



</Route>





</Routes>


</BrowserRouter>


)

}


export default App;