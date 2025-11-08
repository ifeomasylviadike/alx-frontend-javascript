// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Ifeoma",
  lastName: "Dike",
  age: 28,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Michael",
  lastName: "Wyatt",
  age: 30,
  location: "Toronto",
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Loop through each student and create a row
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
