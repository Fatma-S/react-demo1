// USER STORY #1: Two distinct login inputs for students and instructors
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
  // Define state variables to hold student ID, instructor ID, navigation, and any error messages
  const [studentID, setStudentID] = useState('');
  const [instructorID, setInstructorID] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // initialize navigation

  // USER STORY #2: Handle student login
  const handleStudentLogin = async (e) => {
    e.preventDefault(); 
    setError(''); // Clear any previous error messages
    
      // Send a POST request to the server with the student ID
      try {
      const res = await fetch('http://localhost:3000/login/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: studentID })
    });
    const data = await res.json();

    if (data.success) {
      navigate('/student-dashboard');
    } else {
      setError(data.message);
    }
  
  } catch (err) {
    setError('Server error. Please try again.');
  }
}; 

  // USER STORY #2: Handle instructor login
  const handleInstructorLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages

    try {
    const res = await fetch('http://localhost:3000/login/instructor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: instructorID })
    });
    const data = await res.json();
    if (data.success) {
      navigate('/instructor-dashboard');
    } else {
      setError(data.message);
    }
  } catch (err) {
    setError('Server error. Please try again.');
  }

  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '40px' }}>
      <h1>Welcome to Attendance App</h1>

      {/* Show error if login fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* STUDENT LOGIN - USER STORY #1 */}
      <div>
        <h2>Student Login</h2>
        <form onSubmit={handleStudentLogin}>
          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <hr />

      {/* INSTRUCTOR LOGIN - USER STORY #1 */}
      <div>
        <h2>Instructor Login</h2>
        <form onSubmit={handleInstructorLogin}>
          <input
            type="text"
            placeholder="Enter Employee ID"
            value={instructorID}
            onChange={(e) => setInstructorID(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
