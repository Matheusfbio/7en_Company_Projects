import './formularioStepTwo.css';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { useForms, FormActions, State } from '../../contexts/FormContext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import api from '../../api/api';
import { Upload } from '../Upload/Upload';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const today = new Date();

export const FormStepTwo = ({ pageForm, setFormPage }) => {

    const { state, dispatch } = useForms();
    const [user, setUser] = useState<State>();
    const [selectedItems, setSelectedItems] = useState<any>();
    const [ skills, setSkills ] = useState<any>([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        async function getSkills() {
          await api.get('/skill').then(resp =>{
            
            setSkills(resp.data.map(e =>({
              code: e.id,
              name: e.description
            })));
          })
        }
          getSkills()
      }, []); 


    const handleChangeDob = (e: any) => {
        dispatch({
            type: FormActions.setDob,
            payload: e.target.value
        })
    }
    const handleChangePhone = (e: any) => {
        dispatch({
            type: FormActions.setPhone,
            payload: e.target.value
        })
    }

    const handleChangeWorkingWith = (e: any) => {
        dispatch({
            type: FormActions.setWorkingWith,
            payload: e.target.value
        })
    }

    function handleChangeSkills(e: any) {
        setSelectedItems(e.target.value);
        let novoArray: any = [];
        e.target.value.forEach((value) => novoArray.push({
            'skillId': value.code,
            'skill': { 'description': value.name }
        }));
        console.log(novoArray, 'array novo');
        dispatch({
            type: FormActions.setUserSkill,
            payload: novoArray
        })
    }

    function handleChangeAbout(e: any) {

        dispatch({
            type: FormActions.setAbout,
            payload: e.target.value
        })
    }

    async function createUser() {
        await api.post(`/user`, {
            firstName: state.firstName,
            lastName: state.lastName,
            dob: state.dob,
            email: state.email,
            phone: state.phone,
            workingWith: state.workingWith,
            userSkill: state.userSkill,
            password: state.password,
            about: state.about,
            level: 0
        }).then((response) => {
            setUser(response.data)
        })
    }

    const submitForm = (data, e) => {
        e.preventDefault();
        if (data) {
            setFormPage((currPage: number) => currPage + 1);
            localStorage.setItem("file", data.file);
            createUser();
        }
    }

    return (
        <div className="formularioContainer2">

            <form id='usrform' className="formularioInfosWrap" onSubmit={handleSubmit(submitForm)}>
                <div className="formsCenter">
                    <label htmlFor="" className='labelFormContinue'>Data de Nascimento</label>
                    <input type="date"
                        style={{ borderColor: errors.dob ? 'red' : ' #D5DAE1' }}
                        className="dob"
                        placeholder='xx/mm/yy'
                        value={state.dob}
                        {...register("dob", { required: true })}
                        onChange={handleChangeDob} 
                    />

                    {errors.dob && <p className='msgErros'>{errors.dob?.message?.toString()}</p>}
                </div>

                <div className="formsCenter celContainer">
                    <label htmlFor="" className='labelFormContinue'>Número de telefone</label>
                    <input className="cel"
                        type="tel"
                        placeholder='55 83 98888-8888'
                        {...register("phone")}
                        value={state.phone}
                        onChange={handleChangePhone} />

                    {errors.phone && <p className='msgErros msgErrosCel'>{errors.phone?.message?.toString()}</p>}
                </div>

                <label htmlFor="" className='labelFormContinue'>Em que você atua?</label>
                <input className="inputGeneralContinue"
                    type="text"
                    placeholder='o que você é?'
                    {...register("workingWith")}
                    value={state.workingWith}
                    onChange={handleChangeWorkingWith} />

                {errors.workingWith && <p className='msgErros msgErrosWorkingWith'>{errors.workingWith?.message?.toString()}</p>}

                <label htmlFor="" className='labelFormContinue'>Quais tecnologias você domina?</label>
                <MultiSelect
                    className="multiSelectInput"
                    display="chip"
                    optionLabel="name"
                    value={selectedItems}
                    options={skills}
                    onChange={(e) => handleChangeSkills(e)}
                    selectionLimit={5}
                />

                <div className="altText">No máximo 5 tecnologias</div>

                <label htmlFor="" className='labelFormContinue'>Conte sobre você</label>
                <textarea className="textArea"
                    form='usrform'
                    value={state.about}
                    onChange={handleChangeAbout} />

                <div className="anexarCurriculo">
                    <Upload />
                </div>

                <div className="centerBtnContinue">
                    <button style={{ background: state.dob && state.phone && state.workingWith ? '' : '#BDBCDB' }} type="submit" className='btnRegistrar'>Registrar</button>
                </div>
            </form>
        </div>
    )
}