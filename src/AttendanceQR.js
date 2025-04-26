// src/AttendanceQR.js

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';

function AttendanceQR() {
    const { courseId } = useParams();
    const [attendanceLink, setAttendanceLink] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3000/api/attendance/${courseId}`)
            .then(response => response.json())
            .then(data => setAttendanceLink(data.attendanceLink))
            .catch(error => console.error('Error fetching attendance link:', error));
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
