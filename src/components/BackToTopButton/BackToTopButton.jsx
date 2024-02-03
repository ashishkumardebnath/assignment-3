import { useEffect, useState } from "react";
import plane from "../../assets/airplane-engines.svg";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    // Show the button when the user scrolls down, hide it otherwise
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 40);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`back-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img src={plane} alt="" />
    </div>
  );
};

export default BackToTopButton;
