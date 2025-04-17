// USER STORY #1: Two distinct login inputs for students and instructors
import React, { useState } from 'react';

function LoginPage() {
  const [studentID, setStudentID] = useState('');
  const [instructorID, setInstructorID] = useState('');
  const [error, setError] = useState('');

  // USER STORY #2: Handle student login
  const handleStudentLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/login/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: studentID })
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = '/student-dashboard';
    } else {
      setError(data.message);
    }
  };

  // USER STORY #2: Handle instructor login
  const handleInstructorLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/login/instructor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: instructorID })
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = '/instructor-dashboard';
    } else {
      setError(data.message);
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
