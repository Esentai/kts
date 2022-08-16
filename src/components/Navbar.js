import React, { useState } from 'react'

import '../style.css';
import '../animate.css';
import house from '../assets/images/icons/house.png';
import flat from '../assets/images/icons/flat.png';
import office from '../assets/images/icons/office.png';
import shop from '../assets/images/icons/shop.png';
import people from '../assets/images/icons/people.png';
///import folder from '../assets/images/icons/folder.png';

import { 
    Link
} from "react-router-dom";

const Navbar = () => {
    const [navbar, setNavbar] = useState("");
    
    const fixPosition = () => {
        if (window.scrollY >= 200){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', fixPosition);
       
    return (
        <>
        {/*Навигационная панель, ряд кнопок */}
        <div id="btn_line" className={navbar ? "page_h fixed" : "page_h"}> 
            <div className="btn_line_overlay"></div> 
            <div className="content btn_fixed"> 
                <ul> 
                    <li> 
                        <Link to="/house">
                            <img src={house} alt="Охрана Домов" /> 
                            <span>Охрана Домов</span> 
                        </Link> 
                    </li> 
                    <li> 
                        <Link to="/flat">
                            <img src={flat} alt="Охрана Квартиры" /> 
                            <span>Охрана Квартиры</span> 
                        </Link> 
                    </li> 
                    <li> 
                        <Link to="/business">
                            <img src={shop} alt="Охрана предприятия" /> 
                            <span>Охрана предприятия</span> 
                        </Link> 
                    </li> 
                    <li> 
                        <Link to="/office"> 
                            <img src={office} alt="Охрана офиса" /> 
                            <span>Охрана офиса</span> 
                        </Link> 
                    </li> 
                    <li> 
                        <Link to="/physical">
                            <img src={people} alt="Физическая охрана" /> 
                            <span>Физическая охрана</span> 
                        </Link> 
                    </li>

                    {/*
                    <li> 
                        <a rel="nofollow" href="#"> 
                            <img src={folder} alt="Охрана предприятия" /> 
                            <span>Каталог</span> 
                        </a> 
                    </li>
                    */}
                </ul> 
            </div> 
        </div>
        </>
    )
}
export {Navbar}
