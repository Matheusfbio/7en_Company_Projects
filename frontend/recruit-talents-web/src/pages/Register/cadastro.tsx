import { HeaderCadastro } from '../../components/HeaderRegister/headerCadastro';
import { MenuLateral } from '../../components/MenuSidebar/menuLateral';
// import { Formulario } from '../../components/Forms/formulario';
// import { FormularioStepTwo } from '../../components/FormsStep3/formularioStepTwo';
import { FormOne } from '../../components/Forms/formOne'
import { FormStepTwo } from '../../components/FormsStep3/formStepTwo';

import './cadastro.css';
import { useState } from 'react';
import { FormularioStepThree } from '../../components/FormsStep2/formularioStepThree';

export const Cadastro = () => {

  const [pageForm, setFormPage] = useState(1);

  /*const [formData, setFormData] = useState<DataStateForm>({
    name: '',
    email: "",
    password: "",
    passwordConfirm: "",
    dataNasc: "",
    cel: "",
    workingWith: ""
  });*/


  const PageDisplay = () =>{
    if(pageForm === 1){
      return <FormOne pageForm={pageForm} setFormPage={setFormPage}/>;
    } else if (pageForm === 2){
      return <FormStepTwo pageForm={pageForm} setFormPage={setFormPage}/>
    } else{
      return <FormularioStepThree/>
    }
  }


    return (
    <div className='containerCadastro'>
        <HeaderCadastro/>
        <div className="contentCadastro">
            <MenuLateral/>
            <div className="formCenter">
              {PageDisplay()}
            </div>
        </div>
      </div>
    );
  };