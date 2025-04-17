CREATE DATABASE attendance_db;

USE attendance_db;

-- Create students table
CREATE TABLE students (
  student_id VARCHAR(20) PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL
);

-- Create instructors table
CREATE TABLE instructors (
  instructor_id VARCHAR(20) PRIMARY KEY,
  instructor_name VARCHAR(100) NOT NULL
);

-- Insert example student data
INSERT INTO students (student_id, student_name) VALUES 
('S12345', 'John Doe'),
('S12346', 'Jane Smith'),
('S12347', 'Alice Johnson'),
('S12348', 'Bob Brown'),
('S12349', 'Charlie Davis'),
('S12350', 'Emily Harris'),
('S12351', 'David Wilson'),
('S12352', 'Sophia Moore'),
('S12353', 'Daniel Taylor'),
('S12354', 'Olivia White');

-- Insert example instructor data
INSERT INTO instructors (instructor_id, instructor_name) VALUES 
('I12345', 'Dr. Smith'),
('I12346', 'Dr. Johnson'),
('I12347', 'Prof. Williams'),
('I12348', 'Dr. Martinez'),
('I12349', 'Dr. Lee'),
('I12350', 'Prof. Clark');

select * from students;
select * from instructors;