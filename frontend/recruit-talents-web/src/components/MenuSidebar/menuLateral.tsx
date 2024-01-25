import logoBranco from '../../assets/RemoteLife_horizontal-branco-sem-slogan 1.svg'
import './menuLateral.css'
import vetorRocket from '../../assets/VectorRocket.svg'

export const MenuLateral = () => {
  return (
    <div className="menuContainer">
      <div className="menuContentUm">
        <img src={logoBranco} alt="logoMenuLateral" />
        <p className="menuContentPUm">
          A porta de entrada para sua carreira internacional em tecnologia.
        </p>
      </div>

      <div className="menuContentDois">
        <img src={vetorRocket} alt="rocket" />
        <p className="menuContentPDois">
          Preparamos você para encarar todos os desafios para se tornar um
          programador a nível internacional
        </p>
      </div>
    </div>
  )
}
