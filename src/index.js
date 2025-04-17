import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'; // the path to LoginPage component

// Define a simple Student Dashboard component
const StudentDashboard = () => <h2>Student Dashboard</h2>; 
// Define a simple Instructor Dashboard component
const InstructorDashboard = () => <h2>Instructor Dashboard</h2>;

// Create the root for the React app and attach it to the div with id "root" in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

//Show the things I put inside here on the web page.
root.render(
  <BrowserRouter>
    <Routes> ///* If the user goes to http://localhost:3000/, show the LoginPage component.*/
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/student-dashboard" element={<StudentDashboard />} /> // If the user goes to http://localhost:3000/student-dashboard, show the StudentDashboard
      <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> // If the user goes to http://localhost:3000/instructor-dashboard, show the InstructorDashboard
    </Routes>
  </BrowserRouter>
);
