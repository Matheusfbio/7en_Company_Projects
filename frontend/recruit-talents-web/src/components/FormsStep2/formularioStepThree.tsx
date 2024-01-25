import { useContext } from 'react'
import heroone from '../../assets/Img - Hero.svg'
import { AuthContext } from '../../contexts'
import './formularioStepThree.css'

export const FormularioStepThree = () => {
  const auth = useContext(AuthContext)

  return (
    <div className="containerRegistro">
      <h1 className="titleRegistro">
        {auth.user?.firstName} Seu registro foi efetuado com sucesso, logo será
        direcionado ao dashboard
      </h1>
      <img src={heroone} alt="imagem" />
    </div>
  )
}
