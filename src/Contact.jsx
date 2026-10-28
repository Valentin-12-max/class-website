function Contact({ schoolName, onNavigate }) {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>School Name: {schoolName}</p>
      <p>Location: Kigali, Rwanda</p>
      <p>Email: yourschool@example.com</p>

      <button onClick={() => onNavigate("home")}>
        Return to Home
      </button>
    </div>
  );
}

export default Contact;