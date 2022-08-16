import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

export default class MultipleItemse extends Component {
  render() {
    const settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      adaptiveHeight: true
    };
    return (
      <section>
        <div className="teh_device_slider">
          <h2 className="pt">Дополнительное оборудование</h2>
          <Slider {...settings}>
            <div className="teh_device_slide"> 
              <img data-lazy="" alt=""/> 
              <h3 className="tex_title">Lorem Ipsum</h3> 
              <p className="tex_text">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> 
              <span className="teh_device_price">Price: <span>0000</span> cur</span> 
              <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
            </div> 
            <div className="teh_device_slide"> 
                <img data-lazy="" alt=""/> 
                <h3 className="tex_title">Lorem Ipsum</h3> 
                <p className="tex_text">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> 
                <span className="teh_device_price">Price: <span>0001</span> cur</span> 
                <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
            </div>
            <div className="teh_device_slide"> 
                <img data-lazy="" alt=""/> 
                <h3 className="tex_title">Lorem Ipsum</h3> 
                <p className="tex_text">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> 
                <span className="teh_device_price">Price: <span>0002</span> cur</span> 
                <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
            </div>
            <div className="teh_device_slide"> 
                <img data-lazy="" alt=""/> 
                <h3 className="tex_title">Lorem Ipsum</h3> 
                <p className="tex_text">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> 
                <span className="teh_device_price">Price: <span>0002</span> cur</span> 
                <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
            </div>
            <div className="teh_device_slide"> 
                <img data-lazy="" alt=""/> 
                <h3 className="tex_title">Lorem Ipsum</h3> 
                <p className="tex_text">Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> 
                <span className="teh_device_price">Price: <span>0002</span> cur</span> 
                <a className="btn_gr js-open-modal" href="#" data-modal="1">Заказать</a> 
            </div>
        </Slider>
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

