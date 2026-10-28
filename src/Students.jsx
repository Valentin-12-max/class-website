const students = [
  { id: "SD001", name: "Student One", trade: "Software Development" },
  { id: "SD002", name: "Student Two", trade: "Software Development" },
  { id: "SD003", name: "Student Three", trade: "Software Development" },
  { id: "SD004", name: "Student Four", trade: "Software Development" },
  { id: "SD005", name: "Student Five", trade: "Software Development" },
];

function Students() {
  return (
    <div>
      <h1>Our Students</h1>

      <p>Meet the students in our class.</p>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Student ID: {student.id}</p>
          <p>Trade: {student.trade}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Students;