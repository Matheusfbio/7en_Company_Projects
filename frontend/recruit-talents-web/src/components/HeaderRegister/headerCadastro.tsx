import logo from '../../assets/Navbar logo.svg'
import './headerCadastro.css'

export const HeaderCadastro = () => {
  return (
    <header className="headerCadastro">
      <nav className="navbarCadastro">
        <img src={logo} alt="Logo" />
        <div></div>
      </nav>
    </header>
  )
}
