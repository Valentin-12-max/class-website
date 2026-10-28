function About({ schoolName }) {
  return (
    <div>
      <h1>About Our Class</h1>

      <p>
        Welcome to {schoolName}. This website helps people
        learn about our class, students, and subjects.
      </p>

      <h2>Software Development</h2>

      <p>
        Software Development is a trade that teaches students
        how to design, develop, test, and maintain software
        applications.
      </p>

      <h2>Subjects and Skills Learned</h2>

      <ul>
        <li>HTML and JavaScript</li>
        <li>ReactJS and Front-End Development</li>
        <li>SQL and Database Management</li>
        <li>Programming and Problem Solving</li>
      </ul>
    </div>
  );
}

export default About;