import { HeaderCadastro } from "../../components/HeaderRegister/headerCadastro";
import { MenuLateral } from "../../components/MenuSidebar/menuLateral";

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import './Login.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const schema = yup.object().shape({
    email: yup.string()
                .email("Formato de e-mail inválido!")
                .required("Campo obrigatório!")
                .matches(emailRegExp, 'E-mail inválido!'),

    password: yup.string()
                    .required("Campo obrigatório!"),
});


export const Login = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('')

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = async (data) => {
        console.log(data, 'data');
        console.log(email);

        if(email && password){
            const isLogged = await auth.signin(email, password);
            console.log(isLogged);

            if (isLogged) {
                console.log('Deu certo! -> user-edit!')
                navigate('/user-edit');
            } else {
                setLoginStatus("E-mail ou senha inválidos. Confira-os.")
            }
        }
    };

    


    return (
        <div className='containerLogin'>
            <HeaderCadastro/>
                <div className="contentLogin">
                    <MenuLateral />
                    <div className="formCenterLogin">
                        <div className="facaSeuLogin">

                            <h1 className='loginTitle'>Faça seu login</h1>
                            {/* <div className="redesSociais"> */}
                                {/* <div className="blocoRedes">
                                    <img src={vetorGit} alt="Git" />
                                    <small className='smallRedes'>Github</small>
                                </div>
                                <div className="blocoRedes">
                                    <img src={vetorGoogle} alt="Google" />
                                    <small className='smallRedes'>Google</small>
                                </div>
                                <div className="blocoRedes">
                                    <img src={vetorLinkedin} alt="LinkedIn" />
                                    <small className='smallRedes'>LinkedIn</small>
                                </div> */}
                            {/* </div> */}

                        </div>

                        {/* <div className="separar">

                            <div className='line'></div>
                            <small className='smallOu'>ou</small>
                            <div className='line'></div>

                        </div> */}

                        <form className="formularioInfosLogin" onSubmit={handleSubmit(submitForm)}>

                            <label htmlFor="">Email</label>
                            <input style={{borderColor: errors.email ? 'red' : ' #D5DAE1'}}
                            className="inputGeneral" 
                            {...register("email")} 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email"/>
                            <p className="msgErrors">{errors.email?.message?.toString()}</p>

                            <label htmlFor="">Senha</label>
                            <input style={{borderColor: errors.password ? 'red' : ' #D5DAE1'}}
                            className="inputGeneral password" 
                            {...register("password")} 
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password"/>
                            <p>{errors.password?.message?.toString()}</p>
                            
                            <p className="loginError">{loginStatus}</p>

                            <a href="#" className="changePassword">Esqueceu a senha?</a>
                            
                            <button type="submit" className='btnContinuarLogin'>Continuar</button>
                            <div className='centerSmall'>
                                Não possui conta?  <Link to="/register"> Faça seu cadastro</Link>
                            </div>

                        </form>
                    </div>
                </div>
        </div>
    );
};