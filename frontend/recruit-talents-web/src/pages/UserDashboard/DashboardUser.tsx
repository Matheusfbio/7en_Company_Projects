import { MenuUsuario } from '../../components/MenuUser/menuUsuario'
import './DashboardUser.css'
import Hero from '../../assets/Img - Hero.svg'
import { useContext } from 'react'
import { AuthContext } from '../../contexts'

export default function UsuarioLogado() {
  const auth = useContext(AuthContext)
  return (
    <div className="containerUsuarioLogado">
      <MenuUsuario />
      <div className="container-conteudo-inicial">
        <div className="conteudo-inicial">
          <h1 className="titulo-conteudo-inicial">
            Seja bem vindo {auth.user?.firstName} <br /> em breve entraremos em
            contato com <br /> você.
          </h1>
          <img src={Hero} alt="" />
        </div>
      </div>
    </div>
  )
}
