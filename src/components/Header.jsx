import { header, about } from '../portifolio';
import Navbar from '../components/Navbar';

const Header = () => {
  const { homepage, title } = header;
  const { name, role, description } = about;

  return (

  <header className="h-screen flex items-center justify-between relative p-12 text-white overflow-hidden">
      
      {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-900 via-pink-500 to-pink-300 opacity-100"></div> */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 via-pink-500 to-pink-900 opacity-100"></div>

<div className="absolute z-10 flex-1 pl-12">
 
  <h1 className="text-5xl font-comforter font-bold">{name}</h1>
<h2 className="text-2xl font-bold transition-transform duration-300 hover:scale-105 hover:text-pink-400">{role}</h2>
  <p className="text-lg mt-4 max-w-xl">{description}</p>
</div>


  <div 
        className="absolute inset-0 bg-center bg-no-repeat bg-contain bg-transparent opacity-30" 
        style={{ backgroundImage: "url('/images/btfu.jpg')" }} 
      ></div>
      
      <h3 className="absolute bottom-12 left-12 text-xl hover:text-gray-300 transition">
        {homepage ? (
          <a href={homepage} className="hover:underline">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
    </header>
  );
};




export default Header;

