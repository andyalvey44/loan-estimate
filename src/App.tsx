import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "@/pages/Course";
import CTCourse from "@/ct/CTCourse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Existing loan-estimate scroll course */}
        <Route path="/" element={<Course />} />
        {/* New full-screen slide-deck course */}
        <Route path="/ct" element={<CTCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
