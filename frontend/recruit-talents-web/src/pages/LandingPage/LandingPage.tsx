import Footer from "../../components/Layout/Footer/Footer"
import NavBar from "../../components/Layout/NavBar/NavBar"
import imagem1 from '../../assets/imagem1.svg';
import imagem2 from '../../assets/imagem2.svg';
import imagem3 from '../../assets/imagem3.svg';
import imagem4 from '../../assets/imagem4.svg';
 import imagem5 from '../../assets/imagem5.svg';
 import imagem6 from '../../assets/imagem6.svg';
 import imagem7 from '../../assets/imagem7.svg';
 import imagem8 from '../../assets/imagem8.svg';
 import imagem9 from '../../assets/imagem9.svg';
 import imagem10 from '../../assets/imagem10.svg';
 import imagem11 from '../../assets/imagem11.svg';
 import imagem12 from '../../assets/imagem12.svg';
 import imagem13 from '../../assets/imagem13.svg';
 import imagem14 from '../../assets/imagem14.png';
 import imagem15 from '../../assets/imagem15.svg';
import imagem16 from '../../assets/imagem16.svg';
import './LandingPage.css'
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import Carrousel from "../../components/Carousel/Carousel";
import { Tecnologias } from "../../components/Carousel/tecnologia";
import { Depoimento } from "../../components/Carousel/Depoimentos/depoimento";




function LandingPage() {
  return (
    <>
      <NavBar/>
      <div id="background">
        <section className=" container-section1">
          <div className=" alinhamento-image-conteudo">
            <div className="alinhamento-text-btn">
              <article className="text-main">
                <h1>Seu próximo passo para uma carreira <span className="destaque">internacional</span> de <span className="destaque">sucesso.</span> </h1>
              </article>
              <a id="desejo-participar-btn-main">Desejo participar</a>
            </div>
            <aside>
              <img className='hero' src={imagem1} />
            </aside>
          </div>

        </section>
        <section className=" container " id="quem-somos">
          <div className="alinhamento-image-conteudo">
            <article className="conteudo-quem-somos">
              <h1 className="title-quem-somos">QUEM SOMOS?</h1>
              <p className="text-box-quem-somos">Somos uma comunidade de apaixonados por tecnologias focados em te ajudar a dar o seu próximo passo em sua carreira na área de TI.
                <br /><br />
                Nosso objetivo é te fazer ingressar no mercado Nacional, e principalmente <span className="destaque">Internacional</span>, mesmo sem falar Inglês.
                <br /><br />
                Tudo isso focando em trabalho <span className="destaque">100% remoto</span>, prestação de serviço de <span className="destaque">alto nível</span>, <span className="destaque">metodologia ágil</span> e <span className="destaque">crescimento pessoal</span>.
              </p>
            </article>
            <aside>
              <div className="first-rectangle"></div>
              <img className='hero2' src={imagem2} />
              <div className="second-rectangle"></div>
            </aside>
          </div>
        </section>
      </div><div id="background2">
        <section className="container" id="funciona-para-mim">
          <div className="alinhamento-image-conteudo">
            <aside>
              <img className='hero3' src={imagem3} />
            </aside>
            <article className="conteudo-funciona-para-mim">
              <h1 className="title-funciona-para-mim"> A REMOTE LIFE FUNCIONA PRA MIM?</h1>
              <p className="text-funciona-para-mim">Se você responder sim pra qualquer uma dessas questões então a <span className="destaque">Remote life é pra você</span>.</p>
              <br />
              <ul className="list-funciona-para-mim">
                <li> Quero migrar para a área de tecnologia e aproveitar a <span className="destaque">alta demanda por profissionais</span>?</li>
                <br></br>
                <li> Tenho um certo conhecimento da área de TI mas não consigo entrar nas vagas por <span className="destaque">falta de experiência</span>?</li>
                <br></br>
                <li>Trabalho com TI, tenho interesse em ingressar no mercado internacional, <span className="destaque">mas não tenho inglês</span>.</li>
                <br></br>
                <li>Trabalho com TI, falo inglês, e quero encontrar propostas competitivas no exterior e <span className="destaque">ganhar em dólar</span>?</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="containerComoFunciona" id="como-funciona">
          <div className="alinhamento-image-conteudo-como-funciona">
            <article className="conteudo-como-funciona">
              <h1 className="title-como-funciona" id="como-funciona-responsivo">COMO FUNCIONA?</h1>
              <p className="text-como-funciona">Faça seu cadastro, identificamos em qual fase da sua carreira você está e um dos nossos consultores entrará em contato.</p>
              <Link to={"/#saibamais"} className="btn-saiba-mais">Saiba mais</Link>
            </article>
            <aside>
              <img className='hero4' src={imagem4} />
            </aside>
          </div>

        </section>
      </div><section className="container">

        <article>
         
          <h1 className="titulo-tecnologias">TECNOLOGIAS QUE DOMINAMOS</h1>
         
        
         <Tecnologias/>
        </article>


      </section>
      <section className="container" id="parceiros">
      
       <Carrousel/>
          

      </section><div id="background3">

      <section className="container vale-a-pena">
          <h1 className="title-vale-a-pena">A REMOTE LIFE VALE A PENA?</h1>
          <div className="alinhamento-vale-a-pena">
            <Depoimento/>
            {/* <article className='container-cards-mentorados'>
              <div className="card-mentorados">
                <div>
                  <img src={imagem16} className='foto' />
                </div>
                <div>
                  <h2 className="nome-mentorado">Nailton Simões</h2>
                  <h3 className="funcao-mentorado">Fullstack Dev</h3>
                  <p className="descricao-mentorado">“Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book.” .</p>
                </div>

              </div>
              <div className="card-mentorados">
                <div>
                  <img src={imagem16} className='foto' />
                </div>
                <div>
                  <h2 className="nome-mentorado">Nailton Simões</h2>
                  <h3 className="funcao-mentorado">Fullstack Dev</h3>
                  <p className="descricao-mentorado">“Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book.” .</p>
                </div>

              </div>
            </article> */}
          </div>
        </section>


        <section className="container junte-se-a-nos">
          <div className="alinhamento-junte-se">
            <div>
              <h1 className="title-junte-se">Junte-se a nós</h1>
              <p className="text-junte-se">e venha viver sua carreira internacional</p>
            </div>
            <Link to={"/register"} className="junte-se-a-nos-btn"><p>Desejo participar</p></Link>
          </div>
        </section>

      </div>
      <Footer /> *
  

    </>

  );
}

export default LandingPage
