import './style.css'
import './animate.css';
import Tabs from './components/tabs/Tabs';
import Carousel from './components/sliderEquipment/Carousel';
import { Navbar } from './components/Navbar';


export const Contacts = () => {
    return (
      <>
          <div id="service_slider"> 
            <div id="slider_overlay" className="unselectable">
              Кузет
            </div> 
            <div className="slider slick-slider"> 
              <div className="slick-list draggable">
                <div className="slick-track">
                  <div className="item"> 
                    <div className="slide_content"> 
                      <h1>Контакты</h1>
                    </div>
                  </div>
                </div>
              </div> 
            </div> 
          </div>

          <Navbar />
          
          <section id="page">
            <div className='content'>
              <div className="utp mb" style={{backgroundImage: "url(/utp.jpg)"}}> 
              </div>
            </div> 
          </section>








        </>
      )
    }        
