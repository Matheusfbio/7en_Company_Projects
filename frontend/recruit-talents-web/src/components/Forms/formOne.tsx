import './formulario.css';

import { useForm } from 'react-hook-form';
import { useForms, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const FormOne = ({ pageForm, setFormPage }) => {

    const navigate = useNavigate();
    const [nextPage, setNextPage] = useState(false);
    const { state, dispatch } = useForms();

    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setFirstName,
            payload: e.target.value
        })
    }
    const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setLastName,
            payload: e.target.value
        })
    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }
    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setPassword,
            payload: e.target.value
        })
    }

    const handleChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }

    const handleNextStep = (data, e) => {
        e.preventDefault();
        if (data) {
            setFormPage((currPage: number) => currPage + 1);
            console.log(pageForm)
            console.log(data);
        }

    }

    console.log({errors})

    return (
        <div className="formularioContainer1">

            <div className="facaSeuCadastro">

                <h1 className='cadastroTitle'>Faça seu cadastro</h1>
                <div className="redesSociais">
                    {/* <div className="blocoRedes">
                        <img src={vetorGit} alt="Git" />
                        <small className='smallRedes'>Github</small>
                    </div> */}
                    {/* <div className="blocoRedes">
                        <img src={vetorGoogle} alt="Google" />
                        <small className='smallRedes'>Google</small>
                    </div> */}
                    {/* <div className="blocoRedes">
                        <img src={vetorLinkedin} alt="LinkedIn" />
                        <small className='smallRedes'>LinkedIn</small>
                    </div> */}
                </div>

            </div>

            {/* <div className="separar"> */}

            {/* <div className='line'></div>
                {/* <small className='smallOu'>ou</small> */}
            {/* <div className='line'></div> */}

            {/* </div> */}

            <form className="formularioInfosForm" onSubmit={handleSubmit(handleNextStep)}>
                <div className='centerNameAndLastName'>
                    <div className='centerName'>
                        <label htmlFor="">Nome</label>
                        <input type="text"
                            className="inputFirstName"
                            placeholder='Seu nome'
                            {...register("firstName", { required: true })}
                            onChange={handleChangeName} />

                        {errors.firstName && errors.firstName.type === "required" && <p className='msgErros'>Campo requerido</p>}
                    </div>


                    <div className="centerLastName">
                        <label htmlFor="">Sobrenome</label>
                        <input type="text"
                            className='inputLastName'
                            placeholder='Sobrenome'
                            {...register("lastName", { required: true })}
                            value={state.lastName}
                            onChange={handleChangeLastName} />

                        {errors.lastName && errors.lastName.type === "required" && <p className='msgErros'>Campo requerido</p>}

                    </div>
                </div>

                <label htmlFor="">Email</label>
                <input type="text"
                    className="inputGeneral"
                    placeholder='Email'
                    {...register("email", { required: true })}
                    value={state.email}
                    onChange={handleChangeEmail} />

                {errors.email && <p className='msgErros'>{errors.email?.message?.toString()}</p>}


                <label htmlFor="">Senha</label>
                <input type="password"
                    className="inputGeneral"
                    placeholder='Senha'
                    minLength={8}
                    max={15}
                    {...register("password", { required: true })}
                    value={state.password}
                    onChange={handleChangePassword} />

                {errors.password && <p className='msgErros'>{errors.password?.message?.toString()}</p>}

                <label htmlFor="">Confimar senha</label>
                <input type="password"
                    className="inputGeneral"
                    placeholder='Confirmar Senha'
                    {...register("passwordConfirm", { required: true })}
                    value={passwordConfirm}
                    onChange={handleChangePasswordConfirm} />

                {errors?.passwordConfirm && <p className='msgErros'>{errors.passwordConfirm?.message?.toString()}</p>}
                {/* {errors.email && <p className="error">{errors.email.message}</p>} */}


                <button style={{ background: state.firstName && state.lastName && state.email && state.password && passwordConfirm ? '' : '#BDBCDB' }} type="submit" className='btnContinuar'>Continuar</button>

                <div className='centerSmall'>
                    <p>Já possui conta?</p> <Link to="/login">Faça o Login</Link>
                </div>

            </form>
        </div>
    )
}