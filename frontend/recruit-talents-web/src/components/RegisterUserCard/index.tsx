import React, { useState, useEffect } from 'react'
import './index.css'
import api from '../../api/api'

import user2 from '../../assets/Vector (10).svg'
import Modal from '../Modal/index'

export default function CardUsuario() {
  const [showPostModal, setShowPostModal] = useState(false)
  const [userList, setUserList] = useState<any>([])
  const [id, setId] = useState()

  useEffect(() => {
    async function getUsers() {
      await api.get(`/user`).then((response) => {
        setUserList(response.data)
        console.log(userList, 'ta assim')
      })
    }

    getUsers()
  }, [])

  console.log(userList, 'fora do efeito')

  function togglePostModal(items, index) {
    console.log(items.id, 'testando')
    const idUser = items.id
    setId(idUser)
    console.log(id, 'Id no estado')
    setShowPostModal(!showPostModal)
  }

  console.log(id, 'fora de estado')

  return (
    <div className="container-card">
      {userList.map((items, index) => (
        // eslint-disable-next-line react/jsx-key
        <button
          onClick={() => togglePostModal(items, index)}
          className="button-background-usuarios"
        >
          <div className="cards" key={items.id}>
            <div className="name-icon-container">
              <img src={user2} alt="foto-perfil" className="foto-perfil-card" />
              <h2 className="card-nome">{items.firstName}</h2>
            </div>

            <h2 className="card-idade">22 anos</h2>
            <h2 className="card-telefone">{items.phone}</h2>
            <h2 className="card-tec">
              {items.userSkill.map((i) => (
                // eslint-disable-next-line react/jsx-key
                <p className="skills-list">{i.skill.description}</p>
              ))}{' '}
            </h2>
            <h2 className="card-atuacao">{items.workingWith}</h2>
          </div>
        </button>
      ))}

      {showPostModal && <Modal id={id} setId={setId} close={togglePostModal} />}
    </div>
  )
}
