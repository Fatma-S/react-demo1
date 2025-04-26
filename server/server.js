// Import required modules
const express = require('express');  // Web framework for building server-side routes and APIs
const cors = require('cors');        // Middleware to enable Cross-Origin Resource Sharing (CORS)
const connection = require('./db'); // Import database connection info from a separate file (db.js)

// Setup express app
const app = express(); // Create an Express application instance

// Allow requests from different origins (e.g., your frontend React app)
// You can later configure it to allow only specific origins
app.use(cors());

// Middleware to parse incoming JSON data in request bodies
// This allows you to access values like req.body.id
app.use(express.json());

// Route for student login
app.post('/login/student', (req, res) => {
  const { id } = req.body; // Destructure the 'id' from the request body (the student typed it in the login form)
  const query = 'SELECT * FROM students WHERE student_id = ?'; // SQL query to check if the student ID exists in the database
  // The '?' is a placeholder for the actual value to prevent SQL injection attacks
  connection.query(query, [id], (err, results) => { // Execute the query
    // 'results' will contain the rows returned by the query
    if (err) return res.json({ success: false, message: 'Error checking ID' }); // If there's an error, send a JSON response with success: false and an error message
    // If the query was successful, check if any results were returned
    if (results.length > 0) {
      res.json({ success: true }); // If the student ID exists, send a JSON response with success: true
    } else {
      res.json({ success: false, message: 'Student ID not found' }); // If the student ID does not exist, send a JSON response with success: false and an error message
    }
  });
});

// Route for instructor login
app.post('/login/instructor', (req, res) => {
  const { id } = req.body;
  const query = 'SELECT * FROM instructors WHERE instructor_id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) return res.json({ success: false, message: 'Error checking ID' });
    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Instructor ID not found' });
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Route to generate attendance URL (for instructor's QR view)
app.get('/api/attendance/:courseId', (req, res) => {
  const courseId = req.params.courseId;
  const attendanceLink = `https://attendance-app.com/course/${courseId}`;
  res.json({ attendanceLink });
});

// Optional: Close database connection when the server is shut down
process.on('SIGINT', () => {
  console.log('Server shutting down...');
  connection.end(err => {
    if (err) {
      console.error('Error closing connection:', err.stack);
    }
    console.log('MySQL connection closed');
    process.exit();
  });
});
