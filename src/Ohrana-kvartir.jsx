import './style.css'
import './animate.css';
import Tabs from './components/tabs/Tabs';
import Carousel from './components/sliderEquipment/Carousel';
import { Navbar } from './components/Navbar';


const Flat = () => {
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
                      <h1>Охрана квартир</h1>
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
                <div className="utp_overlay">Охрана Жилья</div> 
                <div className="utp_slider"> 
                  <div className="utp_slide"> 
                    <span className="title">
                      <span className="utp_nm">01</span>
                      Пультовая охрана
                    </span> 
                    <div className="clar"> 
                      <h2>Под охрану за 1 день!</h2> 
                    </div> 
                    <span className="description">Берем под охрану за 1 день с временем реагирования от 2-х минут! Более 30 готовых групп</span> 
                    <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
                  </div> 
                </div> 
              </div>
              <div className="benefit_s mb"> 
                <ul className="benefit_wrapper"> 
                  <li className="fadeInRight animated animated animated animated animated"> 
                    <div className="benefit_box"> 
                      <div className="bne bne_s"> 
                        <div className="image"> 
                          <img src="" alt="Установка за 1 день"/> 
                        </div> 
                        <div className="title"> 
                          <span>Установка за 1 день</span> 
                        </div> 
                      </div> 
                    </div> 
                  </li> 
                  <li className="fadeInUp animated animated animated animated animated"> 
                    <div className="benefit_box"> 
                      <div className="bne bne_s"> 
                        <div className="image"> 
                          <img src="" alt="Установка за 1 день"/> 
                        </div> 
                        <div className="title"> 
                          <span>Установка за 1 день</span> 
                        </div> 
                      </div> 
                    </div> 
                  </li> 
                  <li className="fadeInLeft animated animated animated animated animated"> 
                    <div className="benefit_box"> 
                      <div className="bne bne_s"> 
                        <div className="image"> 
                          <img src="" alt="Установка за 1 день"/> 
                        </div> 
                        <div className="title"> 
                          <span>Установка за 1 день</span> 
                        </div> 
                      </div> 
                    </div> 
                  </li> 
                  <li className="fadeInDown animated animated animated animated animated"> 
                    <div className="benefit_box"> 
                      <div className="bne bne_s"> 
                        <div className="image"> 
                          <img src="" alt="Установка за 1 день"/> 
                        </div> 
                        <div className="title"> 
                          <span>Установка за 1 день</span> 
                        </div> 
                      </div> 
                    </div> 
                  </li> 
                </ul> 
              </div>
            </div>
          </section>
            
            
          <section id="actions"> 
            <div className="content"> 
              <h2 className="t_white">Готовые решения</h2> 
              
              <Tabs>
                <div label="Tab1">
                  <div className="tab_slide"> 
                    <span className="tab_title">Tab1 Commodity1</span>  
                      <div className="tab_wrapper"> 
                        <div className="tab_left"> 
                        <ul> 
                          <li> 
                            <span>Связь с клиентом 24/7</span> 
                          </li>  
                        </ul> 
                      </div> 
                      <div className="tab_right"> 
                        <img src="" alt=""/> 
                      </div> 
                    </div> 
                    <div className="tab_footer"> 
                      <div className="tab_price"> 
                        <span className="price_b">Стоимость комплекта: <span>price</span> currency </span> 
                        <span className="price_s">Абонплата: </span> 
                      </div>  
                      <div className="tab_button"> 
                        <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
                      </div> 
                    </div> 
                  </div> 
                </div>


                <div label="Tab2">
                  <div className="slider-container__slider2 tab-2"> 
                    <div className="tab_slide"> 
                      <h3 className="tab_title">Tab2 Commodity2</h3> 
                      <div className="tab_wrapper"> 
                        <div className="tab_left"> 
                          <ul> 
                            <li> 
                              <span>Связь с клиентом 24/7</span> 
                            </li> 
                          </ul> 
                        </div> 
                        <div className="tab_right"> 
                          <img data-lazy="" alt=""/> 
                        </div> 
                      </div> 
                      <div className="tab_footer"> 
                        <div className="tab_price"> 
                          <span className="price_b">Стоимость комплекта: <span>price</span> currency </span> 
                          <span className="price_s">Абонплата: </span> 
                        </div> 
                        <div className="tab_button"> 
                          <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
                        </div> 
                      </div> 
                    </div> 
                  </div> 
                </div>
              </Tabs>

            </div> 
          </section>


          <section className="page_text mb"> 
			      <div className="content"> 
				      <div className="seo_t"> 
               <h2>Охрана квартир: акутальные цены</h2>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               It has survived not only five centuries, but also the leap into electronic typesetting, 
               remaining essentially unchanged. 
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        
  			      </div> 
			      </div> 
		      </section>


          <section id="about">
            <div className="content"> 
              <ul className="page_pain"> 
                <li className="pain_box fadeInUp animated animated animated animated animated animated animated animated animated animated" style={{animationDelay: '100ms'}}> 
                  <div className="pain_wrapper"> 
                    <div className="pw" style={{backgroundImage:"url(/1.jpg)"}}> 
                      <h2 className="pain_title">Защита от <br></br> проникновения</h2> 
                      <span className="pain_desc">более 30 незаконных проникновений Происходит в Харькове ежедневно</span> 
                      <p>
                        Умные датчики движения и датчики открытия дверей/окон защищают ваш бизнес от воровства. 
                        Их работа помогает оператору Пульта Центрального Наблюдения и группе быстрого реагирования правильно действовать по тревоге.
                      </p> 
                    </div> 
                  </div> 
                </li>
                <li className="pain_box fadeInUp animated animated animated animated animated animated animated animated animated animated" style={{animationDelay: '200ms'}}> 
                  <div className="pain_wrapper"> 
                    <div className="pw" style={{backgroundImage:"url(/1.jpg)"}}> 
                      <h2 className="pain_title">Защита от <br></br> проникновения</h2> 
                      <span className="pain_desc">более 30 незаконных проникновений Происходит в Харькове ежедневно</span> 
                      <p>
                        Умные датчики движения и датчики открытия дверей/окон защищают ваш бизнес от воровства. 
                        Их работа помогает оператору Пульта Центрального Наблюдения и группе быстрого реагирования правильно действовать по тревоге.
                      </p> 
                    </div> 
                  </div> 
                </li>
                <li className="pain_box fadeInUp animated animated animated animated animated animated animated animated animated animated" style={{animationDelay: '300ms'}}> 
                  <div className="pain_wrapper"> 
                    <div className="pw" style={{backgroundImage:"url(/1.jpg)"}}> 
                      <h2 className="pain_title">Защита от <br></br> проникновения</h2> 
                      <span className="pain_desc">более 30 незаконных проникновений Происходит в Харькове ежедневно</span> 
                      <p>
                        Умные датчики движения и датчики открытия дверей/окон защищают ваш бизнес от воровства. 
                        Их работа помогает оператору Пульта Центрального Наблюдения и группе быстрого реагирования правильно действовать по тревоге.
                      </p> 
                    </div> 
                  </div> 
                </li>
                <br></br>
                <li className="pain_box fadeInUp animated animated animated animated animated animated animated animated animated animated" style={{animationDelay: '400ms'}}> 
                  <div className="pain_wrapper"> 
                    <div className="pw" style={{backgroundImage:"url(/1.jpg)"}}> 
                      <h2 className="pain_title">Защита от <br></br> проникновения</h2> 
                      <span className="pain_desc">более 30 незаконных проникновений Происходит в Харькове ежедневно</span> 
                      <p>
                        Умные датчики движения и датчики открытия дверей/окон защищают ваш бизнес от воровства. 
                        Их работа помогает оператору Пульта Центрального Наблюдения и группе быстрого реагирования правильно действовать по тревоге.
                      </p> 
                    </div> 
                  </div> 
                </li>
                <li className="pain_box fadeInUp animated animated animated animated animated animated animated animated animated animated" style={{animationDelay: '500ms'}}> 
                  <div className="pain_wrapper"> 
                    <div className="pw" style={{backgroundImage:"url(/1.jpg)"}}> 
                      <h2 className="pain_title">Защита от <br></br> проникновения</h2> 
                      <span className="pain_desc">более 30 незаконных проникновений Происходит в Харькове ежедневно</span> 
                      <p>
                        Умные датчики движения и датчики открытия дверей/окон защищают ваш бизнес от воровства. 
                        Их работа помогает оператору Пульта Центрального Наблюдения и группе быстрого реагирования правильно действовать по тревоге.
                      </p> 
                    </div> 
                  </div> 
                </li>
                <li className="pain_box fadeInUp animated animated animated animated animated animated animated animated animated animated" style={{animationDelay: '600ms'}}> 
                  <div className="pain_wrapper"> 
                    <div className="pw" style={{backgroundImage:"url(/1.jpg)"}}> 
                      <h2 className="pain_title">Защита от <br></br> проникновения</h2> 
                      <span className="pain_desc">более 30 незаконных проникновений Происходит в Харькове ежедневно</span> 
                      <p>
                        Умные датчики движения и датчики открытия дверей/окон защищают ваш бизнес от воровства. 
                        Их работа помогает оператору Пульта Центрального Наблюдения и группе быстрого реагирования правильно действовать по тревоге.
                      </p> 
                    </div> 
                  </div> 
                </li>
              </ul>  
            </div>    
          </section>


          <section>
            <div className="content">
              <Carousel/>
            </div>
          </section>


          <section className="page_text mb"> 
			      <div className="content"> 
				      <div className="seo_t"> 
               <h2>Охрана квартир: акутальные цены</h2>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
               It has survived not only five centuries, but also the leap into electronic typesetting, 
               remaining essentially unchanged. 
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.        
  			      </div> 
			      </div> 
		      </section>

        </>
      )
    }        
export {Flat}