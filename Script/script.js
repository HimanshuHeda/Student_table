// Create a JS object containing the records of 5 students
var students = [
    {
        "firstName": "Himanshu",
        "lastName": "Heda",
        "course": "Computer Science",
        "address": {
            "city": "Bangalore",
            "state": "Karnataka",
            "postalCode": "560001"
        },
        "phoneNo": "+91 98450 12345",
        "emailID": "HimanshuHeda@example.com"
    },
    {
        "firstName": "Alok",
        "lastName": "Vyas",
        "course": "Electronics Engineering",
        "address": {
            "city": "Delhi",
            "state": "Delhi",
            "postalCode": "110001"
        },
        "phoneNo": "+91 98110 56789",
        "emailID": "AlokVyas@example.com"
    },
    {
        "firstName": "Sangram",
        "lastName": "Bhati",
        "course": "Mechanical Engineering",
        "address": {
            "city": "Mumbai",
            "state": "Maharashtra",
            "postalCode": "400001"
        },
        "phoneNo": "+91 98765 43210",
        "emailID": "kunalBhati@example.com"
    },
    {
        "firstName": "Sania",
        "lastName": "Khan",
        "course": "Biotechnology",
        "address": {
            "city": "Hyderabad",
            "state": "Telangana",
            "postalCode": "500001"
        },
        "phoneNo": "+91 99450 67890",
        "emailID": "saniakhan@example.com"
    },
    {
        "firstName": "Rohan",
        "lastName": "Singh",
        "course": "Civil Engineering",
        "address": {
            "city": "Chennai",
            "state": "Tamil Nadu",
            "postalCode": "600001"
        },
        "phoneNo": "+91 97110 23456",
        "emailID": "rohansingh@example.com"
    }
];

// Function to display the student records in HTML
function displayStudents() {
    var studentTable = document.getElementById("student-table");
    var studentRecords = document.getElementById("student-records");

    // Loop through each student record
    students.forEach(function(student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        var lastNameCell = document.createElement("td");
        var courseCell = document.createElement("td");
        var addressCell = document.createElement("td");
        var phoneNoCell = document.createElement("td");
        var emailIDCell = document.createElement("td");

        // Set the cell values
        firstNameCell.innerHTML = student.firstName;
        lastNameCell.innerHTML = student.lastName;
        courseCell.innerHTML = student.course;
        addressCell.innerHTML = `${student.address.city}, ${student.address.state} ${student.address.postalCode}`;
        phoneNoCell.innerHTML = student.phoneNo;
        emailIDCell.innerHTML = student.emailID;

        // Append the cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(courseCell);
        row.appendChild(addressCell);
        row.appendChild(phoneNoCell);
        row.appendChild(emailIDCell);

        // Append the row to the table
        studentRecords.appendChild(row);
    });
}

// Call the displayStudents function
displayStudents();