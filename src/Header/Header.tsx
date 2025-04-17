import NavBar from "../NabBar/NavBar";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="w-20">
        <img src="/images/logo.svg" alt="icono logo" />
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
