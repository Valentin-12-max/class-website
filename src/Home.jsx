function Home({ schoolName, className, onNavigate }) {
  return (
    <div>
      <h1>{schoolName}</h1>
      <h2>{className}</h2>

      <h3>Welcome to Our Class Website!</h3>

      <p>
        Welcome to our class website. This website presents
        our students, subjects, skills, and school information.
      </p>

      <h3>Explore Our Website</h3>

      <button onClick={() => onNavigate("about")}>
        About Us
      </button>

      <button onClick={() => onNavigate("students")}>
        Students
      </button>

      <button onClick={() => onNavigate("contact")}>
        Contact Us
      </button>
    </div>
  );
}

export default Home;