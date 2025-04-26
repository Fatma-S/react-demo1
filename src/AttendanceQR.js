
import React, { useState, useEffect } from 'react'; // Importing React and hooks for state and lifecycle management
import QRCode from 'qrcode.react'; // Importing QRCode component to generate QR codes
import { useParams } from 'react-router-dom'; // Importing useParams to get URL parameters

function AttendanceQR() {
    const { courseId } = useParams(); // Get the courseId from the URL parameters
    const [attendanceLink, setAttendanceLink] = useState(''); // State to hold the attendance link

    useEffect(() => { // Fetch the attendance link from the server when the component mounts
        fetch(`http://localhost:3000/api/attendance/${courseId}`) 
            .then(response => response.json()) // Parse the JSON response
            .then(data => setAttendanceLink(data.attendanceLink)) // Set the attendance link in state
            .catch(error => console.error('Error fetching attendance link:', error)); // Handle any errors
    }, [courseId]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}> 
            <h1>Scan to Record Attendance</h1>
            {attendanceLink && (
                <>
                    <QRCode value={attendanceLink} size={256} />
                    <p style={{ fontSize: '20px', marginTop: '20px' }}>{attendanceLink}</p>
                </>
            )}
        </div>
    );
}

export default AttendanceQR; 
