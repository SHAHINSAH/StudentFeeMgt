// Display balance fee report
const balanceFeeTable = document.querySelector('table tbody');
// Assume we have an API that returns a list of students and their balance fees
fetch('/api/students/balance-fees')
  .then(response => response.json())
  .then(data => {
    data.forEach(student => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const idCell = document.createElement('td');
      const dateOfJoinCell = document.createElement('td');
      const teacherNameCell = document.createElement('td');
      const balanceFeeCell = document.createElement('td');
      nameCell.textContent = student.name;
      idCell.textContent = student.id;
      dateOfJoinCell.textContent = student.dateOfJoin;
      teacherNameCell.textContent = student.teacherName;
      balanceFeeCell.textContent = student.balanceFee;
      row.appendChild(nameCell);
      row.appendChild(idCell);
      row.appendChild(dateOfJoinCell);
      row.appendChild(teacherNameCell);
      row.appendChild(balanceFeeCell);
      balanceFeeTable.appendChild(row);
    });
  })
  .catch(error => {
    console.error(error);
  });
