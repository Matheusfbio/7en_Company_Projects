import { useContext, useState } from "react";
import logoBranco from "../../assets/RemoteLife_horizontal-branco-sem-slogan 1.svg";
import vetorBlog from "../../assets/VectorBlog.svg";
import vetorSuporte from "../../assets/VectorSuporte.svg";
import "./menuUsuario.css";
import user from "../../assets/Vector (9).svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/AuthContext";

export const MenuUsuario = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="container-menu-usuario">
      <div>
        <Link to="/dashboard">
          <img className="container-menu-Logo" src={logoBranco} alt="Logo" />
        </Link>
      </div>
      <div className="menu-principal">
        <ul>
          <li>
            <Link to="/user-edit">
              <span className="material-symbols-outlined">account_circle</span>
              Editar Perfil
            </Link>
          </li>
          <li>
            <Link to="">
              <span className="material-symbols-outlined">rocket_launch</span>
              Oportunidades
            </Link>
          </li>
          <li>
            <Link to="">
              <img className="icone-menu-usuario" src={vetorBlog} alt="" />
              Blog
            </Link>
          </li>
          <li>
            <Link to="">
              <img className="icone-menu-usuario" src={vetorSuporte} alt="" />
              Suporte
            </Link>
          </li>
        </ul>
      </div>
      <div className="perfil-adm">
        <img src={user} alt="foto-perfil" className="foto-perfil" />
        <h2>{auth.user?.firstName}</h2>
        <p>{auth.user?.email}</p>
        {auth.user && (
          <a className="material-symbols-outlined logout" href="/login">
            Logout
          </a>
        )}
      </div>
    </div>
  );
};
