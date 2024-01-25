import { useState } from 'react'
import logoBranco from '../../assets/RemoteLife_horizontal-branco-sem-slogan 1.svg'
import './index.css'
import user from '../../assets/Vector (9).svg'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export const MenuDashboard = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1250 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1250 })
    return isMobile ? children : null
  }
  const [active1, setActive1] = useState(false)

  const [active, setMode] = useState(false)
  const toggleMode = () => {
    setMode(!active)
  }

  return (
    <>
      <Desktop>
        <aside className="aside">
          <Link to="/dashboard">
            <img className="logo1" src={logoBranco} alt="Logo" />
          </Link>
          <div
            className={active ? 'icon1 iconActive1' : 'icon1'}
            onClick={toggleMode}
          >
            <div className="hamburguer1 hamburguerIcon1"></div>
          </div>
          <ul
            className={
              active
                ? 'menu-mobile-btn menuOpen1'
                : 'menu-mobile-btn menuClose1'
            }
          >
            <li>
              <Link
                onClick={() => setActive1(true)}
                to="/dashboard/usuarios-cadastrados"
                className={`${active1 ? 'active' : ''}`}
              >
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                Usuários cadastrados
              </Link>
            </li>

            <li>
              <Link className="vagas" to="/dashboard">
                <span className="material-symbols-outlined">rocket_launch</span>
                Vagas
              </Link>
            </li>

            <div className="nav-perfil">
              <img src={user} alt="foto-perfil" className="foto-perfil" />
              <h2>Thiago</h2>
              <p>Administrator</p>
              <button>
                <span className="material-symbols-outlined logout">logout</span>
              </button>
            </div>
          </ul>
        </aside>
      </Desktop>
      <Mobile>
        <aside className="aside">
          <Link to="/dashboard">
            <img className="logo1" src={logoBranco} alt="Logo" />
          </Link>
          <div
            className={active ? 'icon1 iconActive1' : 'icon1'}
            onClick={toggleMode}
          >
            <div className="hamburguer1 hamburguerIcon1"></div>
          </div>
          <ul
            className={
              active
                ? 'menu-mobile-btn menuOpen1'
                : 'menu-mobile-btn menuClose1'
            }
          >
            <li>
              <Link
                onClick={() => setActive1(true)}
                to="/dashboard/usuarios-cadastrados"
                className={`${active1 ? 'active' : ''}`}
              >
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                Usuários cadastrados
              </Link>
            </li>

            <li>
              <Link className="vagas" to="/dashboard">
                <span className="material-symbols-outlined">rocket_launch</span>
                Vagas
              </Link>
            </li>

            <div className={active ? 'nav-perfil-mobile' : 'nav-perfil'}>
              <img src={user} alt="foto-perfil" className="foto-perfil" />
              <h2>Thiago</h2>
              <p>Administrator</p>
              <button>
                <span className="material-symbols-outlined logout">logout</span>
              </button>
            </div>
          </ul>
        </aside>
      </Mobile>
    </>
  )
}

{
  /** <nav className={isMobile? "nav-menu-mobile" : "nav-menu"} 
            >
            <Link onClick={() => setActive1(true)} to='/dashboard/usuarios-cadastrados' className={`${active1 ? 'active' : ''}`} ><span className="material-symbols-outlined">account_circle</span>Usuários cadastrados</Link>

            <Link to='/dashboard'><span className="material-symbols-outlined">rocket_launch</span>Vagas</Link>
         
            <div className={isMobile? "nav-perfil-mobile" : "nav-perfil"} >
            <img src={user} alt="foto-perfil" className="foto-perfil" />
            <h2>Thiago</h2>
            <p>Administrator</p>
            <button><span className="material-symbols-outlined logout">logout</span></button>
            </div>
         
          </nav> */
}
