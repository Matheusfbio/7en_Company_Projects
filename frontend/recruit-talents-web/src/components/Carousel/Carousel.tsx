import './Carousel.css'
import imagem15 from '../../assets/imagem15.svg';
import imagem14 from '../../assets/imagem14.png';
import Carousel from 'react-multi-carousel'
import {useMediaQuery} from 'react-responsive'

const carousel = () =>{

  const  Desktop  =  ( { children } )  =>  { 
    const  isDesktop  =  useMediaQuery ( {  minWidth : 1290  } ) 
    return  isDesktop ? children : null 
  } 
const  Mobile  =  ( { children } )  =>  { 
    const  isMobile  =  useMediaQuery ( {  maxWidth : 1250  } ) 
    return  isMobile ? children : null 
  } 

  const responsive = {
    desktop:{
      breakpoint: { max: 1320, min: 820 },
      items: 1,
    },
   
    tablet: {
        breakpoint: { max: 820, min: 480 },
        items: 1,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
        
  }
    
};

  return(
    <>
  <Desktop>
  <div className="alinhamento-parceiros">
          <h1 className="title-parceiros">NOSSOS PARCEIROS</h1>
          <div className="cards-parceiros">
            <div className="card-parceiro">
              <img src={imagem14} />
            </div>
            <div className="card-parceiro">
              <img src={imagem15} />
            </div>
            <div className="card-parceiro"></div>
            <div className="card-parceiro"></div>
          </div>
        </div>

  </Desktop>
        <Mobile>
        <div className='alinhamento-parceiros-mobile'>
                <h1 className="title-parceiros-mobile">NOSSOS PARCEIROS</h1>
                <Carousel responsive={responsive}
               swipeable={false}
               draggable={false}
               showDots={true}
             
               ssr={true} // means to render carousel on server-side.
               infinite={true}          
               autoPlaySpeed={1000}
               keyBoardControl={true}
               customTransition="all .5"
               transitionDuration={500}
               containerClass="carousel-container"
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
                >
                    <div className="card-parceiros-mobile">
                        <img  src={imagem14}/>
                    </div>
                    <div className="card-parceiros-mobile">
                        <img  src={imagem15}/>
                    </div>

                </Carousel>
            </div>
        </Mobile>
    </>
  )
      

}
export default carousel;