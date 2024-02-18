import "./Header.css";
import Counter from "./Counter";
const Header = () => {
  return (
    <div className="header-container mb-8 bg-cover  py-6 bg-center h-400px flex flex-col justify-center items-center mb-">
      <div className="mt-24 mx-4 md:mx-40 flex flex-col gap-5 items-center justify-center text-bold">
      <Counter/>
      <p className="text-4xl md:text:4xl md:mt-6 md:top-6 text-center mt-6 text-black font-bold font-sans animate-bounce animate-infinite animate-ease-in">
        Your next career move is just a click away....
        </p>
        
       
        
      </div> 
    </div>
  );
}

export default Header;
