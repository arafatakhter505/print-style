import Navbar from "./navbar";
import Topbar from "./topbar";

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <Topbar />
      <Navbar />
    </header>
  );
};

export default Header;
