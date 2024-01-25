import './depoimento.css'
import imagem16 from '../../../assets/imagem16.svg'
import {useMediaQuery} from 'react-responsive'
import Carousel from 'react-multi-carousel'


export function Depoimento (){
  const  Desktop  =  ( { children } )  =>  { 
    const  isDesktop  =  useMediaQuery ( {  minWidth : 1230  } ) 
    return  isDesktop ? children : null 
  } 
const  Mobile  =  ( { children } )  =>  { 
    const  isMobile  =  useMediaQuery ( {  maxWidth : 1000  } ) 
    return  isMobile ? children : null 
  } 

  const responsive = {
   
   
    tablet: {
        breakpoint: { max: 820, min: 480 },
        items: 1,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
        
  }
    
};
  return (
    <>
      <Desktop>
          <article className='container-cards-mentorados'>
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
            </article> 
      </Desktop>
        
          <Mobile>
          <div className='alinhamento-depoimentos'>
              
                <Carousel responsive={responsive}
                
                infinite
                slidesToSlide={1}
                centerMode = {false}
                
                
                >
                    <div>
                        <div className="card-depoimentos">
                            <div>
                                <img  src={imagem16} className='foto-depoimento' alt='foto'/>
                            </div>
                            <div >
                                <h2 className="nome-depoimento">Nailton Simões</h2>
                                <h3 className="cargo-depoimento">Fullstack Dev</h3>
                                <p className="texto-depoimento">“Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book.” .</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card-depoimentos">
                            <div>
                                <img  src={imagem16} className='foto-depoimento' alt='foto'/>
                            </div>
                            <div >
                                <h2 className="nome-depoimento">Nailton Simões</h2>
                                <h3 className="cargo-depoimento">Fullstack Dev</h3>
                                <p className="texto-depoimento">“Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book.” .</p>
                            </div>
                        </div>
                    </div>   

                </Carousel>
            </div>
          </Mobile>
              

      </>
  )
}

