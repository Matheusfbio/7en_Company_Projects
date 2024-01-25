import './index.css'
import btn from '../../assets/Vector (12).svg'
import { useEffect, useState } from 'react'
import api from '../../api/api'

import user2 from '../../assets/Vector (10).svg'

export default function Modal({ /* conteudo, */ close, id, setId }) {
  const [user, setUser] = useState<any>()
  useEffect(() => {
    async function getUsers() {
      await api.get(`/user/${id}`).then((response) => {
        console.log(response.data, 'modal aqui')
        setUser(response.data)
        console.log(user, 'usuario oficial')
      })
    }

    getUsers()
  }, [])
  return (
    <div className="modal">
      <div className="container-modal">
        <button className="close" onClick={close}>
          <img src={btn} alt="close" />
        </button>
        <div>
          <img
            className="foto-perfil-modal"
            src={user2}
            alt="foto-perfil-modal"
          />
        </div>
        <div className="row">
          <span className="dados">
            Nome: <span className="dados-user"> {user?.firstName}</span>
          </span>
        </div>
        <div className="row">
          <span className="dados">
            Email: <span className="dados-user">{user?.email}</span>
          </span>
        </div>
        <div className="row">
          <span className="dados">
            Data de Nascimento: <span className="dados-user">{user?.dob}</span>
          </span>
        </div>
        <div className="row">
          <span className="dados">
            Telefone: <span className="dados-user">{user?.phone}</span>
          </span>
        </div>
        <div className="row">
          <span className="dados">
            Atuação: <span className="dados-user">{user?.workingWith}</span>
          </span>
        </div>
        <div className="row">
          <span className="dados">
            Tecnologias: <span className="dados-user"> </span>
          </span>
        </div>
        <div className="row">
          <span className="dados">
            Sobre: <span className="dados-user">{user?.about}</span>
          </span>
        </div>
        <div className="alinhamento-btns">
          <button className="btn-modal-curriculo">Visualizar Curriculo</button>
        </div>
      </div>
    </div>
  )
}
