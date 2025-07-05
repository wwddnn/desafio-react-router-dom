import "./styles.css";
import homeIcon from "../../assets/homeIcon.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="nav-header container">
        <nav>
          <NavLink to="/home" className={({isActive}) => isActive ? "menu-active " : " "} >
            Início
          </NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? " menu-active menu-item" : "menu-item"} >
            Produtos
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? " menu-active menu-item" : "menu-item"} >
            Sobre nós
          </NavLink>
        </nav>
        <Link to="/">
          <img src={homeIcon} alt="home-icon" />
        </Link>
      </div>
    </header>
  );
}
