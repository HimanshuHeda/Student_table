**Student Table**

**Project Overview**
The Student Table project is a simple web-based application that displays student information in a tabular format using HTML and JavaScript. This project is designed to demonstrate basic web development skills, focusing on DOM manipulation, data rendering, and interactive table management.

**Features**
Dynamic Table Generation: Populate and display student data in an organized HTML table.
Responsive Design: Table layout adjusts to various screen sizes, making it accessible across devices.
Interactive Sorting and Filtering (optional): Sort or filter students by specific fields like name, age, or department.
Basic Add/Edit/Delete Functions (optional): Interact with student data directly in the browser.
Project Structure

**The project includes the following main files:**

index.html: Contains the HTML structure of the table.
style.css: Provides basic styling for a clean and readable table layout.
app.js: Contains JavaScript logic for handling data operations and updating the HTML table dynamically.
Table Data Structure
Each student has the following fields:

Student ID: Unique identifier for each student.
Name: Full name of the student.
Age: Age of the student.
Department: Department or major.
GPA: Grade Point Average, if applicable.
Code Overview
index.html
The HTML file includes a basic structure with a table element to display student data. Here’s a snippet:

**html**
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Student Table</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Student Information Table</h1>
    <table id="studentTable">
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>GPA</th>
            </tr>
        </thead>
        <tbody id="tableBody">
            <!-- Student rows will be added here dynamically -->
        </tbody>
    </table>
    <script src="app.js"></script>
</body>
</html>

**app.js**
JavaScript file to handle the logic for dynamically adding rows to the table. Here’s a basic example:

**javascript**
const students = [
    { studentID: 'S001', name: 'John Doe', age: 21, department: 'Computer Science', gpa: 3.8 },
    { studentID: 'S002', name: 'Jane Smith', age: 22, department: 'Mathematics', gpa: 3.6 },
    // Additional student objects
];

function loadStudentData() {
    const tableBody = document.getElementById('tableBody');
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.studentID}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.gpa}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load data on page load
window.onload = loadStudentData;
**style.css**
This file provides styling to improve the readability of the table.

**css**
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

table {
    margin: 20px auto;
    border-collapse: collapse;
    width: 80%;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
}

th {
    background-color: #f4f4f4;
}
