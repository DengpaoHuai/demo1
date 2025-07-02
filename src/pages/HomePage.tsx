import { Link, useNavigate } from "react-router";

function HomePage() {
  /*
  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);*/

  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "500vh" }}>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        redirect
      </button>
    </div>
  );
}

export default HomePage;
