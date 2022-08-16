import React, { Component } from "react";
import Slider from "react-slick";
import "./clients.css";


export default class MultipleItemse extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
    }

  render() {
    const settings = {
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <section id="testimonials"> 
			<div  className="content"> 
				<h2  className="t_grey">
					<span>Отзывы клиентов</span>
				</h2> 
                
				<div className="testimonials_box mb">  
          <button className="prev slick-arrow" type="button" onClick={this.previous}></button>   
					<button className="next slick-arrow" type="button" onClick={this.next}></button>
					<div className="slick-list">
					
                        <Slider ref={c => (this.slider = c)} {...settings}>
                        <div  className="testimonials_slide" key={1}> 
                            <div  className="ts"> 
                                <span  className="testimonials_overlay">КУЗЕТ TECHNOLOGY SYSTEM</span> 
                                <div  className="testimonials_header"> 
                                    <img  className="person" src=""/> <span> <h3><span  className="name">Lorem Ipsum</span></h3> </span> <span> 
                                    <img  className="stars" src="" alt="rating"/> </span> 
                                </div> 
                                <div  className="reviewbody"> 
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                </div> 
                            </div> 
                        </div>
                        
                        <div  className="testimonials_slide" key={2}> 
                                <div  className="ts"> 
                                    <span  className="testimonials_overlay">КУЗЕТ TECHNOLOGY SYSTEM</span> 
                                    <div  className="testimonials_header"> 
                                        <img  className="person" src=""/> <span> <h3><span  className="name">Lorem Ipsum</span></h3> </span> <span> 
                                        <img  className="stars" src="" alt="rating"/> </span> 
                                    </div> 
                                    <div  className="reviewbody"> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div> 
                                </div> 
                        </div>
                        <div  className="testimonials_slide" key={3}> 
                                <div  className="ts"> 
                                    <span  className="testimonials_overlay">KУЗЕТ TECHNOLOGY SYSTEM</span> 
                                    <div  className="testimonials_header"> 
                                        <img  className="person" src=""/> <span> <h3><span  className="name">Lorem Ipsum</span></h3> </span> <span> 
                                        <img  className="stars" src="https://kaskad-s.com/wp-content/themes/kaskad-security/assets/images/stars_5.png" alt="rating"/> </span> 
                                    </div> 
                                    <div  className="reviewbody"> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div> 
                                </div> 
                        </div>
                        <div  className="testimonials_slide" key={4}> 
                                <div  className="ts"> 
                                    <span  className="testimonials_overlay">КУЗЕТ TECHNOLOGY SYSTEM</span> 
                                    <div  className="testimonials_header"> 
                                        <img  className="person" src=""/> <span> <h3><span  className="name">Lorem Ipsum</span></h3> </span> <span> 
                                        <img  className="stars" src="https://kaskad-s.com/wp-content/themes/kaskad-security/assets/images/stars_5.png" alt="rating"/> </span> 
                                    </div> 
                                    <div  className="reviewbody"> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div> 
                                </div> 
                        </div>
                        <div  className="testimonials_slide" key={5}> 
                                <div  className="ts"> 
                                    <span  className="testimonials_overlay">КУЗЕТ TECHNOLOGY SYSTEM</span> 
                                    <div  className="testimonials_header"> 
                                        <img  className="person" src=""/> <span> <h3><span  className="name">Lorem Ipsum</span></h3> </span> <span> 
                                        <img  className="stars" src="https://kaskad-s.com/wp-content/themes/kaskad-security/assets/images/stars_5.png" alt="rating"/> </span> 
                                    </div> 
                                    <div  className="reviewbody"> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div> 
                                </div> 
                        </div>
                        <div  className="testimonials_slide" key={6}>
                                <div  className="ts"> 
                                    <span  className="testimonials_overlay">КУЗЕТ TECHNOLOGY SYSTEM</span> 
                                    <div  className="testimonials_header"> 
                                        <img  className="person" src=""/> <span> <h3><span  className="name">Lorem Ipsum</span></h3> </span> <span> 
                                        <img  className="stars" src="https://kaskad-s.com/wp-content/themes/kaskad-security/assets/images/stars_5.png" alt="rating"/> </span> 
                                    </div> 
                                    <div  className="reviewbody"> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
                                    </div> 
                                </div> 
                        </div>

                        </Slider>
			 
					</div>
				</div>
				<div  className="testimonials_link"> 
					<a target="blank" rel="nofoliow" href="#"  className="btn_gr">Все отзывы</a> 
				</div>
			</div>
		</section>


    );
  }
}


{/*<section id="additional">
            <div className="teh_device mb"> 
              <h2 className="pt">Мы предлагаем техническую охрану</h2> 
              
                <li className="teh_device_slide"> 
                  <img data-lazy="" alt=""/> 
                  <h3 className="tex_title">ЛУНЬ 25Т</h3> 
                  <p className="tex_text">Проводной комплект охранной сигнализации с мобильным приложением</p> 
                  <span className="teh_device_price">Цена: <span>3499</span> грн.</span> 
                  <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
                </li> 
             
            </div>
          </section> */}

