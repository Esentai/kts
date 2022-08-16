import React, { useState } from 'react'
import '../style.css';
import '../animate.css';
import logo from '../assets/Logo/KTS_Logo.png';
import telegram from '../assets/images/icons/telegram.png';
import whatsapp from '../assets/images/icons/whatsapp.png';
import { Flat } from '../Ohrana-kvartir';
import FormModal from './FormModal';

import { 
	Link,
} from "react-router-dom"; 

export default function Header() {
	const [isActive, setActive] = useState("");
	const [menu_top, setMenuTop] = useState("");

	const [isShown, setIsShown] = useState(false);
	const handleClick = event => {
		// 👇️ toggle shown state
		setIsShown(current => !current);
	};
	


	const handleToggle = () => {
		setActive(!isActive);
	};

	const changeBackground = () => {
		if (window.scrollY >= 20){
			setMenuTop(true);
		} else {
			setMenuTop(false);
		}
		
	};

	window.addEventListener('scroll', changeBackground);
  	
	return (
		<>
		<div id="menu_top" className={menu_top ? "show" : ""}>
			<div className="menu_overlay"></div>
			<div className="logo_small">
				<Link to="/">
					<img src={logo} alt="KTS" />
				</Link>		
			</div>
			<div className="left_line">
				<div className="phone">
					Круглосуточная линия связи
					<a className="number" href="tel:+77002001097" itemProp="telephone">+7 700 200 10 97</a>
				</div>
				<div className="button btn_w open-modal" onClick={handleClick}> 
					Заказать звонок
				</div>
			</div>
			<div className="right_line">
				<div className="social">
					<div className="s_button">
						<a target="_blank" href="">
							<img src={telegram} alt="telegram"/>
						</a>
					</div>
					<div className="s_button">
						<a target="_blank" href="https://api.whatsapp.com/send/?phone=77772465933">
							<img src={whatsapp} alt="whatsapp"/>
						</a>
					</div>
				</div>

				<div className="menu">
					<div onClick={handleToggle} className={`toggle-button ${isActive ? "button-open" : ""}`}>
						<div className="menu-bar menu-bar-top"></div>
						<div className="menu-bar menu-bar-middle"></div>
						<div className="menu-bar menu-bar-bottom"></div>
					</div>
					<div className={`menu-wrap ${isActive ? "menu-show" : ""}`}>
						<div className="menu-sidebar ru">
							<ul itemScope="" className="menu_second">
								<li itemProp="name" className="nav_page current_page_item">
									<span className="link_open"></span>
									<Link itemProp="url" to="/" onClick={handleToggle} className="nav_link" aria-current="page">
										<span className="link_cross"></span>Главная</Link>
								</li>
				
								<li itemProp="name" className="nav_page child">
									<span className="link_open"></span>
									<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Технические средства охраны</a>
									<ul className="nav_sub_menu nav_sub_menu_1">
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охранная сигнализация</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Тревожная кнопка</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Пожарная сигнализация</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Тревожная кнопка</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана дронами</a>
										</li>
									</ul>
								</li>

								<li itemProp="name" className="nav_page">
									<span className="link_open"></span>
									<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Видеонаблюдение</a>
								</li>

								<li itemProp="name" className="nav_page child"><span className="link_open"></span>
									<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана предприятия</a>
									<ul className="nav_sub_menu nav_sub_menu_1">
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана автостоянок и АЗС</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана кафе и ресторанов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана кофейни</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана ломабардов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана обменников</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана периметра</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана складов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана территорий</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Пропускной режим</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана полей и садов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана банкоматов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана бутиков</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана киоска</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана коттеджных поселков</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана магазина и ТРЦ</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана ночных клубов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Служба безопасности</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана офиса</a>
										</li>
									</ul>
								</li>

								<li itemProp="name" className="nav_page child">
									<span className="link_open"></span>
									<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Физическая охрана</a>
									<ul className="nav_sub_menu nav_sub_menu_1">
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Личная охрана</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Вахтовая охрана</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Постовая охрана</a>
										</li>
									</ul>
								</li>

								<li itemProp="name" className="nav_page child">
									<span className="link_open"></span>
									<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана Жилья</a>
									<ul className="nav_sub_menu nav_sub_menu_1">
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана Домов</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<Link to="/flat">
												<span className="link_cross"></span>Охрана Квартиры
											</Link>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана Гаража</a>
										</li>
										<li itemProp="name" className="nav_page">
											<span className="link_open"></span>
											<a itemProp="url" className="nav_link" href=""><span className="link_cross"></span>Охрана Дач</a>
										</li>
									</ul>
								</li>


								<li itemProp="name" className="nav_page">
									<span className="link_open"></span>
									<Link itemProp="url"  to="/about" className="nav_link" onClick={handleToggle}  href=""><span className="link_cross"></span>О компании</Link>
								</li>

								<li itemProp="name" className="nav_page">
									<span className="link_open"></span>
									<Link itemProp="url" to="/contacts" onClick={handleToggle}  className="nav_link">  <span className="link_cross"></span>Контакты</Link>
								</li>
							</ul>
							<div id="mn">
								<ul itemScope="" itemType="http://schema.org/SiteNavigationElement" id="nav" className="list">
									<li itemProp="name" className="item item-menu item_page current_page_item">
										<a itemProp="url" className="item_link" aria-current="page">Главная</a>
									</li>
									
									<li itemProp="name" className="item item-menu item_page child">
										<a itemProp="url" className="item_link" href="">Технические средства охраны</a>
										<div className="container-item"><span></span></div>
										<ul className="sub-menu sub-menu-1">
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охранная сигнализация</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Тревожная кнопка</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Пожарная сигнализация</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Тревожная кнопка</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана дронами</a>
											</li>
										</ul>
									</li>

									<li itemProp="name" className="item item-menu item_page">
										<a itemProp="url" className="item_link" href="">Видеонаблюдение</a>
									</li>

									<li itemProp="name" className="item item-menu item_page child">
										<a itemProp="url" className="item_link" href="">Охрана предприятия</a>
										<div className="container-item"><span></span></div>
										<ul className="sub-menu sub-menu-1">
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана автостоянок и АЗС</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана кафе и ресторанов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана кофейни</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана ломабардов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана обменников</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана периметра</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана складов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана территорий</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Пропускной режим</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана полей и садов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана банкоматов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана бутиков</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана киоска</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана коттеджных поселков</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана магазина и ТРЦ</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана ночных клубов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Служба безопасности</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана офиса</a>
											</li>
										</ul>
									</li>

									<li itemProp="name" className="item item-menu item_page child">
										<a itemProp="url" className="item_link" href="">Физическая охрана</a>
										<div className="container-item"><span></span></div>
										<ul className="sub-menu sub-menu-1">
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Личная охрана</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Вахтовая охрана</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Постовая охрана</a>
											</li>
										</ul>
									</li>

									<li itemProp="name" className="item item-menu item_page child">
										<a itemProp="url" className="item_link" href="">Охрана Жилья</a>
										<div className="container-item"><span></span></div>
										<ul className="sub-menu sub-menu-1">
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана Домов</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана Квартиры</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана Гаража</a>
											</li>
											<li itemProp="name" className="item item-menu item_page">
												<a itemProp="url" className="item_link" href="">Охрана Дач</a>
											</li>
										</ul>
									</li>


									<li itemProp="name" className="item item-menu item_page">
										<a itemProp="url" className="item_link" href="">О компании</a>
									</li>

									<li itemProp="name" className="item item-menu item_page">
										<a itemProp="url" className="item_link" href="">Контакты</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>	

		{isShown && <FormModal />}
		</>
	)
}
