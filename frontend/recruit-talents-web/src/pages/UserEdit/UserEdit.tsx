import { useState, useContext } from "react";
import { MenuUsuario } from "../../components/MenuUser/menuUsuario";
import { AuthContext, useForms, FormActions, State } from "../../contexts";
import "./UserEdit.css";

import api from "../../api/api";

export default function EditarUsuario(pageForm, setFormPage) {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState<State>();
  const { state, dispatch } = useForms();
  const [file, setFile] = useState<File | undefined>();

  const uploadPDF = async (event) => {
    // event.preventDefault();

    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append("file", file);
    formData.append("type", file.type);

    // console.log(formData);
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await api
      .post("/resume/file", formData, headers)
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log("Error");
      });
  };

  function handleChangeResume(e: any) {
    dispatch({
      type: FormActions.setResume,
      payload: e.target.value,
    });
  }

  async function createUser() {
    await api
      .post(`/user`, {
        resume: state.resume,
      })
      .then((response) => {
        setUser(response.data);
      });
  }

  const submitForm = (data) => {
    if (data) {
      uploadPDF(setFile);
      setFormPage((currPage: number) => currPage + 1);
      localStorage.setItem("file", data.file);
      createUser();
    }
  };
  return (
    <div className="container-edicao-usuario">
      <MenuUsuario />
      <div className="usuario-container">
        <form>
          <div className="informacoes-importantes">
            <div className="cabecalho">
              <h1>{auth.user?.firstName}</h1>
              <small>{auth.user?.email}</small>
              <h2>Informações importantes</h2>
            </div>
            <div className="inputs-container">
              <div className="inputs">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  id=""
                  className="input-width"
                  placeholder="Nome"
                />
                <label htmlFor="senha">Trocar senha:</label>
                <input
                  type="text"
                  name="senha"
                  id=""
                  className="input-width"
                  placeholder="Nova senha"
                />
              </div>
              <div className="inputs">
                <label htmlFor="nome">Email:</label>
                <input
                  type="text"
                  name="email"
                  id=""
                  className="input-width"
                  placeholder="Email"
                />
                <label htmlFor="senha">Confirmar senha:</label>
                <input
                  type="text"
                  name="senha"
                  id=""
                  className="input-width"
                  placeholder="Confirmar senha"
                />
              </div>
            </div>
            <div className="btn-container">
              <button>Salvar</button>
            </div>
          </div>

          <div className="informacoes-pessoais">
            <div className="titulo">
              <h1>Informações pessoais</h1>
            </div>
            <div className="inputs-container">
              <div className="inputs">
                <div className="inputs-alinhados">
                  <div className="inputs-coluna">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input
                      type="text"
                      name="dataNascimento"
                      className="data-nascimento-input"
                      placeholder="00/00/0000"
                    />
                  </div>
                  <div className="inputs-coluna">
                    <label htmlFor="telefone">Número de telefone</label>
                    <input
                      type="text"
                      name="telefone"
                      className="telefone-input"
                      placeholder="55 83 98888-8888"
                    />
                  </div>
                </div>
                <label htmlFor="workingWith">Em que você atua?:</label>
                <input
                  type="text"
                  name="workingWith"
                  id=""
                  className="input-width"
                  placeholder="o que você é?"
                />
                <label htmlFor="skill">Quais tecnologias você domina?</label>
                <input
                  type="text"
                  name="skill"
                  id=""
                  className="input-width"
                  placeholder="Tecnologias"
                />
              </div>
              <div className="inputs">
                <label htmlFor="nome">Conte sobre você</label>
                <textarea
                  name=""
                  id=""
                  className="text-area-usuario"
                ></textarea>
                <div className="anexarCurriculo">
                  {/* <input
                    id="file"
                    type="file"
                    name="_filename"
                    onChange={handleChangeResume}
                    value={state.resume}
                  /> */}
                  <div className="btn-container-resume">
                    <button type="submit">Anexar Curriculo</button>
                  </div>
                </div>
                <div className="btn-container-update">
                  <button>Salvar</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
