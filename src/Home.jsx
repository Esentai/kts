import React, {useState} from 'react';
import Slider from "react-slick";
import './style.css';
import './animate.css';

import MapContainer from './assets/map/groupsGBR';
import Clients from './components/sliderClients/Clients';
import {Navbar} from './components/Navbar';
import FormModal from './components/FormModal';


const Home = () => {
	const [openModal, setOpenModal] = useState(false);
    const settings = {
        infinite: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        cssEase: "linear"
    };
    
    return (
        <>
        <div id="home_slider">
            <div id="slider_overlay" className="unselectable" data-aos="fade-down">
                Кузет
            </div>
            <div   className="slider slick-slider">
                <div   className="slick-list draggable">
                    <div   className="slick-track">
                        <div   className="item">
                            <div   className="slide_content">
                                <h2>Техническая охрана</h2>
                                <h3>Возьмем жилье под охрану за 1 день!</h3>
                                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                                <div   className="btn_gr open-modal" onClick={() => {setOpenModal(true)}}>Заказать</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

		<Navbar />

        {/* О компании */}
        <section id="about"> 
            <div className="border"></div> 
            <div id="btn_trigger"></div> 
            <div className="about_overlay fadeInDownBig animated animated animated animated animated animated animated animated animated animated">
                <span>2012</span>
            </div> 
            
            <div   className="content bd"> 
                <h1   className="pt">ОХРАННОЕ АГЕНТСТВО “KTS” УСЛУГИ ОХРАНЫ</h1> 
                <div   className="about_blt page_text"> 
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p> 
                </div> 

                <div   className="advantages"> 
                    <h2   className="t_grey">Наши<br></br>преимущества</h2> 
                    <div   className="advantages_block"> 
                        <ul> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="100ms">
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Покупайте у производителя</span> 
                                        <h3>Покупайте у производителя</h3> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/> 
                                    </div> 
                                </div> 
                            </li> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="200ms"> 
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Работаем без выходных!</span> 
                                        <h3>Работаем без выходных!</h3> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/> 
                                    </div> 
                                </div> 
                            </li> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="300ms"> 
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Партнерская программа</span> 
                                        <h3>Партнерская программа</h3> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/>
                                    </div> 
                                </div> 
                            </li> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="400ms"> 
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Высокя надежность техники!</span> 
                                        <h3>Высокая надежность техники!</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/> 
                                    </div> 
                                </div> 
                            </li> 
                        </ul>       
                    </div> 
                    <br></br>
                    <div   className="advantages_block"> 
                        <ul> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="100ms">
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Покупайте у производителя</span> 
                                        <h3>Покупайте у производителя</h3> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/> 
                                    </div> 
                                </div> 
                            </li> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="200ms"> 
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Работаем без выходных!</span> 
                                        <h3>Работаем без выходных!</h3> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/> 
                                    </div> 
                                </div> 
                            </li> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="300ms"> 
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Партнерская программа</span> 
                                        <h3>Партнерская программа</h3> 
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/>
                                    </div> 
                                </div> 
                            </li> 
                            <li   className="advantages_bl advantages_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated" data-wow-delay="400ms"> 
                                <div   className="advantage"> 
                                    <div   className="advantages_box"> 
                                        <span   className="adv_overlay">Высокя надежность техники!</span> 
                                        <h3>Высокая надежность техники!</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
                                        <img src=""/> 
                                    </div> 
                                </div> 
                            </li> 
                        </ul>       
                    </div> 
                </div> 
            </div> 
        </section>

        {/* Клиенты */}
        <section id="clients">
            <div className="content"> 
				<h2>Наши клиенты</h2>   
                <div   className="slick-carousel" id="slider_logo"></div>
                <Slider {...settings}>
                    <div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/trajgon.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/ukrtelekom.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/budmaks.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/turbogaz.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/turboatom.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/deltabank.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/trajgon.png"/>
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/radiologi.png"/> 
					</div>
					<div   className="slider-logo"> 
						<img src="https://kaskad-s.com/wp-content/uploads/2020/06/rejkards.png"/> 
					</div>
                </Slider>
            </div>
        </section>

        {/* Акции и скидки */}
		<section id="actions"> 
			<div   className="content"> 
				<h2   className="t_white">Акции и скидки</h2> 
				<div   className="action_content"> 
					<ul> 
						<li   className="ac_box_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated" data-wow-delay="100ms"> 
							<div   className="action_box"> 
								<a href=""   className="action_img"></a> 
								<div   className="action_title"> 
									<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3> 
								</div> 
								<span   className="price"></span> 
								<a href=""   className="cross_click"></a> 
							</div> 
							<div   className="order_action"> 
								<a   className="btn_gr open-modal" href="#myModal">Заказать</a> 
							</div> 
						</li> 
						<li   className="ac_box_1 wow fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated" data-wow-delay="200ms"> 
							<div   className="action_box"> 
								<a href=""   className="action_img"></a> 
								<div   className="action_title"> 
									<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3> 
								</div> 
								<span   className="price"></span> 
								<a href=""   className="cross_click"></a> 
							</div> 
							<div   className="order_action"> 
								<a   className="btn_gr open-modal" href="#myModal">Заказать</a> 
							</div> 
						</li> 
						<li   className="ac_box_1 wow fadeInUp" data-wow-delay="300ms"> 
							<div   className="action_box"> 
								<a href=""   className="action_img"></a> 
								<div   className="action_title"> 
									<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3> 
								</div> 
								<span   className="price"></span> 
								<a href=""   className="cross_click"></a> 
							</div> 
							<div   className="order_action"> 
								<a   className="btn_gr open-modal" href="#myModal">Заказать</a> 
							</div> 
						</li> 
					</ul> 
				</div> 
			</div> 
		</section>

        {/* Карта */}
	    <section id="gbr"> 
	    	<div className="content"> 
	    		<h2 className="pt map_title">Ваше жилье или бизнес рядом с нашими группами ?</h2> 
	    		<div id="map">
                    <MapContainer />
				</div> 
	    		<div className="page_text mt"> 
	    			<p>
	    				Из соображений безопасности мы не можем показать точное местоположение групп, однако мы можем показать их приблизительное место дислокации. Чтобы получить максимальное точное время реагирования проконсультируйтесь с менеджером компании KTS по телефону, или оставляйте заявку на сайте
	    			</p> 
	    		</div> 
	    		<div className="gbr_form fadeInUp animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated animated">
	    			<div role="form" lang="ru-RU">
	    				<div className="screen-reader-response"></div>
					
	    				<form action="mail.php" method="post" noValidate="novalidate">
							<p>
								<span>
									<input 
                                        type="text" 
                                        name="clientName" 
                                        maxLength="30"
                                        placeholder="Ваше имя"
                                        required
                                    />
								</span>
								<br></br>
								<span>
									<input 
                                        type="tel" 
                                        name="clientPhone" 
                                        placeholder="Ваш номер"
                                        required
                                    />
								</span>
								<br></br>
								<span   className="agree"></span>
							</p>
							<p>
								<input type="submit" value="Отправить" className="btn_gr"/>
							</p>
						</form>
	    			</div> 
	    		</div> 
	    	</div> 
	    </section>


        {/* Отзывы клиентов */}
		<Clients />

        {/* СЕО блок */}
		<section  className="page_text mb"> 
			<div  className="content"> 
				<div  className="seo_t"> 
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</div> 
			</div> 
		</section>        

        </>
    );
}

export {Home}
