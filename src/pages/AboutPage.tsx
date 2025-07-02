import { Link } from "react-router";

function AboutPage() {
  return (
    <div style={{ minHeight: "500vh" }}>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default AboutPage;
