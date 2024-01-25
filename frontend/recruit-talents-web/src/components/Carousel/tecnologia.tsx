import react from 'react'
import imagem5 from '../../assets/imagem5.svg';
 import imagem6 from '../../assets/imagem6.svg';
 import imagem7 from '../../assets/imagem7.svg'
 import imagem8 from '../../assets/imagem8.svg';
 import imagem9 from '../../assets/imagem9.svg';
 import imagem10 from '../../assets/imagem10.svg';
 import imagem11 from '../../assets/imagem11.svg';
 import imagem12 from '../../assets/imagem12.svg';
 import imagem13 from '../../assets/imagem13.svg';
import Carousel from 'react-multi-carousel'
import './tecnologia.css'
import {useMediaQuery} from 'react-responsive'
import { StyleClass } from 'primereact';

export function Tecnologias (){

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
            <div className="cards02" >
                  <div className="card-menor">
                    <img src={imagem5} />
                    <p>React</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem6} />
                    <p>PHP</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem7} />
                    <p className='java'>Java</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem8} />
                    <p>Nest JS</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem9} />
                    <p>JavaScript</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem10} />
                    <p className='heroku'>Heroku</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem11} />
                    <p>HTML 5</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem12} />
                    <p className='type'>Typescript</p>
                  </div>
                  <div className="card-menor">
                    <img src={imagem13} />
                    <p className='dotnet'>.NET</p>
                  </div>
                </div>
            </Desktop>
   
            <Mobile>
        <div className='alinhamento-tecnologias'>
                
                <Carousel responsive={responsive}
                itemClass = "carousel-item-padding-40-px" 
                infinite
                slidesToSlide={1}
                centerMode = {false}
                >
                  
                   <div className="card-tecnologias">
                        <img src={imagem5}/>
                        <p>React</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem6}/>
                        <p>PHP</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem7}/>
                        <p>Java</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem8}/>
                        <p>Nest JS</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem9}/>
                        <p>JavaScript</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem10}/>
                        <p>Heroku</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem11}/>
                        <p>HTML 5</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem12}/>
                        <p>Typescript</p>
                    </div>
                    <div className="card-tecnologias">
                        <img  src={imagem13}/>
                        <p>.NET</p>
                    </div>
                  

                </Carousel>
            </div>
        </Mobile>
              

      
       


    </>
  )
   
}