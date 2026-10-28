import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Students from "./Students";
import Contact from "./Contact";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [clickCount, setClickCount] = useState(0);

  const schoolName = "Your School Name";
  const className = "TVET Certificate IV - Software Development";

  function navigateTo(view) {
    setCurrentView(view);
  }

  return (
    <div>
      <nav>
        <button onClick={() => navigateTo("home")}>Home</button>
        <button onClick={() => navigateTo("about")}>About</button>
        <button onClick={() => navigateTo("students")}>Students</button>
        <button onClick={() => navigateTo("contact")}>Contact</button>
      </nav>

      <hr />

      {currentView === "home" && (
        <Home
          schoolName={schoolName}
          className={className}
          onNavigate={navigateTo}
        />
      )}

      {currentView === "about" && (
        <About schoolName={schoolName} />
      )}

      {currentView === "students" && <Students />}

      {currentView === "contact" && (
        <Contact
          schoolName={schoolName}
          onNavigate={navigateTo}
        />
      )}

      <hr />

      <h2>React Click Counter</h2>

      <p>You clicked the button {clickCount} times.</p>

      <button onClick={() => setClickCount(clickCount + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;