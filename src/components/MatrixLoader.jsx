import { useState, useEffect, useRef } from "react";
// import MatrixGif from "../assets/matrix.gif";

const MatrixLoader = () => {
  const [showLoader, setShowLoader] = useState(false);
  const timeoutRef = useRef(null); // Persistent reference for timeout

  useEffect(() => {
    const resetTimer = () => {
      clearTimeout(timeoutRef.current);
      setShowLoader(false);
      timeoutRef.current = setTimeout(() => setShowLoader(true), 20000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keypress", resetTimer);
    window.addEventListener("scroll", resetTimer);

    timeoutRef.current = setTimeout(() => setShowLoader(true), 5000);

    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keypress", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, []);

  return showLoader ? (
    // <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
//     <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
// <img
//   src={MatrixGif}
//   alt="Loading..."
//   className="w-full h-full object-cover"
// />

  <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
    <div className="absolute inset-0 bg-[url('/images/matrix.gif')] bg-no-repeat bg-center bg-contain"></div>
  </div>
) : null;


//   <div className="fixed inset-0 flex items-center justify-center bg-black">
//       <div className="w-full h-full bg-black bg-[url('/matrix.gif')] bg-no-repeat bg-center bg-contain"></div>
//     </div>
//   ) : null;



};

export default MatrixLoader;
