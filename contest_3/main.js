const btn = document.querySelector(`button`);
const table = document.querySelector(`table`);
const tBody = document.querySelector(`#tBody`);

let tableData = [
  {
    id: 1,
    student_name: "Avi",
    student_roll: "2020500",
    subject: "english",
    marks: 95,
    markedBy: "teacher",
  },
  {
    id: 2,
    student_name: "jhon",
    student_roll: "2020501",
    subject: "science",
    marks: 85,
    markedBy: "teacher",
  },
  {
    id: 3,
    student_name: "peter",
    student_roll: "2020503",
    subject: "computerScience",
    marks: 75,
    markedBy: "teacher",
  },
  {
    id: 4,
    student_name: "mike",
    student_roll: "2020504",
    subject: "maths",
    marks: 65,
    markedBy: "teacher",
  },
  {
    id: 5,
    student_name: "paul",
    student_roll: "2020505",
    subject: "environmentScience",
    marks: 96,
    markedBy: "teacher",
  },
  {
    id: 6,
    student_name: "tom",
    student_roll: "2020506",
    subject: "morealScience",
    marks: 90,
    markedBy: "teacher",
  },
];

btn.addEventListener(`click`, function (e) {
  e.preventDefault();

  let data = ``;

  tableData.map(function (person) {
    data += `<tr>
        <td></td>
        <td>${person.id}</td>
        <td>${person.student_name}</td>
        <td>${person.student_roll}</td>
        <td>${person.subject}</td>
        <td>${person.marks}</td>
        <td>${person.markedBy}</td>
        <td><button type="button">Save</button></td>
      </tr>`;
  });
  console.log(data);
  tBody.innerHTML = data;
});
