import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { ModalContext } from "../contexts/ModalProvider";

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

  const { openModal, closeModal } = useContext(ModalContext)


  return (
    <div style={{ minHeight: "500vh" }}>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <button onClick={() => {
        openModal('title', "content")
      }}>
        openModal
      </button>
      <button onClick={() => {
        closeModal()
      }}>
        close
      </button>
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
