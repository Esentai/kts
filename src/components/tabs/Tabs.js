import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import "./tabs.css";

class Tabs extends Component {
	static propTypes = {
		children: PropTypes.instanceOf(Array).isRequired,
	}

  	constructor(props) {
    	super(props);

		this.state = {
		activeTab: this.props.children[0].props.label,
		};
	}

	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab });
	}

	render() {
		const {
		onClickTabItem,
		props: {
			children,
		},
		state: {
			activeTab,
		}
		} = this;

		return (
		<div className="slider-container tab-slider-2">
			<ul className="slider-container__tab-list">
			{children.map((child) => {
				const { label } = child.props;

				return (
				<Tab
					activeTab={activeTab}
					key={label}
					label={label}
					onClick={onClickTabItem}
				/>
				);
			})}
			</ul>

			<div className="slider-content tab_wrap">
				<div className="slider-container__slider2 tab-1 active">	
					<div className="tab_slide"> 
						{children.map((child) => {
							if (child.props.label !== activeTab) return undefined;
							return child.props.children;
						})}
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default Tabs;





  	{/*
 function Tabs() {
	return (
		<div className="alarm_acordion mb"> 
            <h2 className="pt">Готовые решения</h2> 
            <div className="slider-container tab-slider-2" data-tab-slider=".tab-slider-2"> 
              <ul className="slider-container__tab-list"> 
                <li className="slider-container__tab-item active wow fadeInLeft" data-tab=".tab-1"> 
                  <span>Tab1 </span>
                </li> 
                <li className="slider-container__tab-item wow fadeInRight" data-tab=".tab-2"> 
                  <span>Tab2</span>
                </li> 
              </ul>


              <div className="slider-content tab_wrap"> 
                <div className="slider-container__slider2 tab-1 active"> 
                  <div className="tab_slide"> 
                    <span className="tab_title">StarterKit Black</span> 
                    <a href=""> 
                      <img src="" alt="StarterKit Black"/> 
                    </a> 
                    <div className="tab_wrapper"> 
                      <div className="tab_left"> 
                      <ul> 
                        <li> 
                          <img src="" alt="Связь с клиентом 24/7"/> 
                          <span>Связь с клиентом 24/7</span> 
                        </li>  
                      </ul> 
                    </div> 
                    <div className="tab_right"> 
                      <img src="" alt="StarterKit Black"/> 
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
              <div className="slider-container__slider2 tab-2"> 
                <div className="tab_slide"> 
                  <h3 className="tab_title">MP WiFi S</h3> 
                  <a href=""> 
                    <img src="" alt=""/> 
                  </a> 
                  <div className="tab_wrapper"> 
                    <div className="tab_left"> 
                      <ul> 
                        <li> 
                          <img src="" alt="Связь с клиентом 24/7"/> 
                          <span>Связь с клиентом 24/7</span> 
                        </li> 
                      </ul> 
                    </div> 
                    <div className="tab_right"> 
                      <img data-lazy="" alt="MP WiFi S"/> 
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
          </div> 
        </div>
	);
	}

	*/}