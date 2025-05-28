import { header, about } from '../portifolio';
import btfu from "/images/btfu.jpg";
import shanna_image from "/images/shanna_image.jpg";

const Header = () => {
  const { homepage, title } = header;
  const { name, role, description } = about;

  return (
    <>
      <header className="h-screen flex items-center justify-between relative p-12 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 via-pink-500 to-pink-900 opacity-50"></div>

    
    {/* <div className="absolute z-10 flex flex-col justify-center pr-[6%] max-w-3xl">
    <h1 style={{ fontFamily: "Comforter, cursive", fontSize: "120px"}} className="text-9xl font-bold leading-none">{name}</h1>
          <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105 hover:text-pink-400">{role}</h2>
      
       <p className="absolute text-xl mt-6 left-[35%]">{description}</p>
    
        </div> */}
        {/* <div className="absolute z-10 flex flex-col justify-center pr-[6%] max-w-3xl">
  <h1 style={{ fontFamily: "Comforter, cursive", fontSize: "120px" }} className="text-9xl font-bold leading-none">{name}</h1>
  <p className="text-xl mt-4">{description}</p> 
  <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105 hover:text-pink-400">{role}</h2>
</div> */}
<div className="absolute z-10 flex flex-col justify-center left-20 max-w-3xl">
  <h1 style={{ fontFamily: "Comforter, cursive", fontSize: "120px" }} className="text-pink-700 text-9xl font-bold leading-none">{name}</h1>
  <h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105 hover:text-pink-400">{role}</h2>
  <p className="mt-9 text-4xl font-oregano text-pink-100">{description}</p> {/* Moves description under the name */}
</div>
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-50"
          style={{ backgroundImage: `url(${shanna_image})` }}

        ></div>

      


      </header>
    </>
  );
};




export default Header;

