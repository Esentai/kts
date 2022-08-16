import React from 'react'
import '../style.css';
import '../animate.css';
import logo from '../assets/Logo/KTS_Logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	const [openModal, setOpenModal] = useState(false);

    return (
		<>
		<section id="footer"> 
			<div className="footer_overlay unselectable" itemProp="name">Кузет Technology System</div> 
				<div className="footer_m"> 
					<div className="footer_menu_m menu_page"> 
						<ul> 
							<li><a itemProp="url" href="">Охранная сигнализация</a></li> 
							<li><Link to='/about' itemProp="url" href="">О компании</Link></li> 
							<li><Link to='/contacts' itemProp="url" href="">Контакты</Link></li> 
							<li><Link to='/' itemProp="url" href="">Главная</Link></li> 
						</ul> 
					</div> 
					<div className="footer_title_m"> 
						<h3>Вся безопасность из одних рук</h3> 
					</div> 
				</div> 
				<div className="footer_row footer_t"> 
					<div className="left_content"> 	
						<img src={logo} alt="Кузет Technology System"/> 
					</div> 
					<div className="right_content"> 
						<div className="footer_menu menu_page"> 
							<ul>
								<li itemProp="name" className="nav_page current_page_item">
                                    <span className="link_open"></span>
                                    <Link to='/' itemProp="url" className="nav_link" aria-current="page"><span className="link_cross"></span>Главная</Link>
                                </li>
								<li itemProp="name" className="nav_page">
                                    <span className="link_open"></span>
                                    <Link to='/about' itemProp="url" className="nav_link" href=""><span className="link_cross"></span>О компании</Link>
                                </li>
								<li itemProp="name" className="nav_page">
                                    <span className="link_open"></span>
                                    <a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Новости</a>
                                </li>
								<li itemProp="name" className="nav_page">
                                    <span className="link_open"></span>
                                    <Link to='/contacts' itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Контакты</Link>
                                </li>
							</ul> 
						</div> 

						<div className="footer_title wow fadeInUpBig"> 
							<h3>Вся безопасность из одних рук</h3> 
						</div> 
						<div className="right_container"> 
							<div className="footer_phone"> 
								<span> <a href="tel:+77002001097" itemProp="telephone">+7 700 200 1097</a> </span> 
								<span> <a href="tel:+77002001097" itemProp="telephone">+7 700 200 1097</a> </span> 
								<span> <a href="tel:+77002001097" itemProp="telephone">+7 700 200 1097</a> </span> 
							</div> 
							<div className="footer_address"> 
								<address className="first_address"> <span>ул. Lorem, </span> <span>Almaty</span> <span>12345</span> </address> 
								<address className="first_address"> <span>ул. Ipsum, </span> <span>Astana</span> <span>12345</span> </address> 
								<div className="three_adress"> 
									<span>zhanik.pusyrmanov@gmail.com</span> 
								</div> 
							</div> 
							<div className="footer_menu menu_services"> 
								<ul> 
									<li> <a href=""> <span>Охрана Домов</span> </a> </li> 
									<li> <a href=""> <span>Охрана Квартиры</span> </a> </li> 
									<li> <a href=""> <span>Охрана предприятия</span> </a> </li> 
									<li> <a href=""> <span>Охрана офиса</span> </a> </li> 
									<li> <a href=""> <span>Физическая охрана</span> </a> </li> 
								</ul> 
							</div> 
						</div> 
					</div> 
				</div> 
				<div className="footer_row footer_c"> 
					<div className="left_line"> 
						<div className="phone">
							Круглосуточная линия связи 
							<a className="number" href="tel:+77002001097" itemProp="telephone">+7 700 200 1097</a> 
							<a className="button btn_w open-modal" onClick={() => {setOpenModal(true)}}> 
								Заказать звонок
							</a>
						</div> 
					</div> 
					<div className="center_line"> 
						<a className="btn_w open-modal" data-target="#myModal" id="myBtn" href="#myModal">Заказать звонок</a> 
					</div> 
					<div className="right_line"> 
						<div className="social"> 
							<div className="s_button wow fadeInUp animated animated animated animated animated"> 
								<a target="_blank" href=""> 
									 
								</a> 
							</div> 
						<div className="s_button wow fadeInUp animated animated animated animated animated"> 
							<a target="_blank" href=""> 
			
							</a> 
						</div> 
						<div className="s_button wow fadeInUp animated animated animated animated animated"> 
							<a target="_blank" href=""> 
								
							</a> 
						</div> 
						<div className="s_button wow fadeInUp animated animated animated animated animated"> 
							<a target="_blank" href="">
							 	
							 </a> 
						</div> 
						<div className="s_button wow fadeInUp animated animated animated animated animated"> 
							<a target="_blank" href=""> 
								
							</a> 
						</div> 
					</div> 
				</div> 
			</div> 
			<div className="dev"> 
				<span itemProp="copyrightYear" className="copyright">©2022 Kузет Technology System</span> 
			</div>	
		</section>
		
		</>
    )
}