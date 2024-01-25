import { Link } from 'react-router-dom';
import './Footer.css'
import NavLogo from '../../../assets/RemoteLife_horizontal-branco-sem-slogan 1.svg'


 const Footer = ()=> {
  return(
      
      <section className="container">
          <footer> 
              
              <div className="alinhamento-footer">
                  <Link to={'/'} ><img src={NavLogo} alt="remote life" className="logo-branco"/></Link>
                  <ul className="footer-menu">
                      <h2>MENU</h2>
                      <Link to="/#quem-somos"><li>Quem somos</li></Link>
                      <Link to="/funciona-para-mim"><li className='funciona-para-mim-actived'>Funciona para mim?</li></Link>
                      <Link to="/#como-funciona"><li>Como funciona?</li></Link>
                      <Link to="/#parceiros"><li>Parceiros</li></Link>
                  </ul>
                  <ul className="footer-contatos">

                      <h2>CONTATOS</h2>
                      <li>numero</li>
                      <li>email</li>

                      <div className="redes-sociais">
                          <Link to="#"><img alt="whatsapp"/></Link>
                          <Link to="#"><img  alt="instagram"/></Link>
                          <Link to="#"><img alt="linkedin"/></Link>

                      </div>
                      <Link to='/#'  ><img className='totop' /></Link>
                  </ul>
              
              </div>
          
              
          
              <hr className="hr-footer"/>
              <div className="copyright">
                      <p>RemoteLife@Copyright 2022</p>
              </div>  
          </footer>
      </section>

   
  );
};
export default Footer;

