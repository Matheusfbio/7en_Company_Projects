import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../assets/Navbar-logo.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavBar = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1250 });
    return isDesktop ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1250 });
    return isMobile ? children : null;
  };
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <Desktop>
        <section>
          <nav className="menu">
            {/* <a href="/"><img className='logo' src={logo}/></a> */}
            <ul className="menu">
              <a href="/#quem-somos">
                <li>Quem somos</li>
              </a>
              <a href="/#como-funciona">
                <li> Como Funciona</li>
              </a>
              <a href="/#parceiros">
                <li> Parceiros</li>
              </a>
              <a href="/funciona-para-mim">
                <li className="funciona-para-mim-actived">
                  {" "}
                  Funciona para mim
                </li>
              </a>
              <a href="/login" className="color1">
                {" "}
                Entrar
              </a>
              <a href="/register">
                <li id="desejo-participar-btn">Desejo participar</li>
              </a>
            </ul>
          </nav>
        </section>
      </Desktop>

      <Mobile>
        <section>
          <nav className="menu-mobile">
            <a href="/">
              <img className="logo-mobile" src={logo} />
            </a>
          </nav>
          <div
            className={active ? "icon iconActive" : "icon"}
            onClick={toggleMode}
          >
            <div className="hamburguer hamburguerIcon"></div>
          </div>
          <ul
            className={
              active ? "menu-mobile-btn menuOpen" : "menu-mobile-btn menuClose"
            }
          >
            <a href="/#quem-somos">
              <li>Quem somos</li>
            </a>
            <a href="/#como-funciona-responsivo">
              <li> Como Funciona</li>
            </a>
            <a href="/#parceiros">
              <li> Parceiros</li>
            </a>
            <a href="/funciona-para-mim">
              <li className="funciona-para-mim-actived"> Funciona para mim</li>
            </a>
            <a href="/funciona-para-mim">
              <li className="button-entrar"> Entrar</li>
            </a>
            <a href="/cadastro">
              <li id="desejo-participar-mobile">Desejo participar</li>
            </a>
          </ul>
        </section>
      </Mobile>
    </>
  );
};
export default NavBar;
