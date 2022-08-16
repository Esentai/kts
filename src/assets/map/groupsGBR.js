import { Component } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import '../../style.css'

const mapState = {center: [43.278040, 76.918754], zoom: 11}; 
const style = {
	position: 'absolute',
	left: 0,
	top: 0,
	width: '100%',
	height: '70%'
};

{/* Метки на карте */}
const C_1= {
	geometry: [43.3024358, 77.0546261],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '1 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const C_2= {
	geometry: [43.2557626, 76.9622158],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '2 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const B_3= {
	geometry: [43.2624760, 76.9372111],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '3 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const C_4= {
	geometry: [43.2424643, 76.9306942],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '4 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const B_5= {
	geometry: [43.2463684, 76.9070837],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '5 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const B_6= {
	geometry: [43.2185906, 76.8974518],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '6 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const A_7= {
	geometry: [43.2383182, 76.8602703],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '7 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const A_8= {
	geometry: [43.2127473, 76.8762943],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '8 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}
const A_9= {
	geometry: [43.2314268, 76.8367375],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '9 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const A_10= {
	geometry: [43.1979966, 76.8424046],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '10 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const C_11= {
	geometry: [43.2223719, 76.9654482],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '11 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const C_12= {
	geometry: [43.1782151, 76.8975811],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '12 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const A_13= {
	geometry: [43.1754404, 76.7929751],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '13 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const A_14= {
	geometry: [43.2499294, 76.8036357],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '14 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const A_15= {
	geometry: [43.2667473, 76.8694737],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '15 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}	
}
const B_16= {
	geometry: [43.3565555, 76.8686831],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '16 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
}	
const B_17= {
	geometry: [43.3095801, 76.9447262],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '17 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const C_18= {
	geometry: [43.2863311, 76.9750543],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '18 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const C_19= {
	geometry: [43.3217086, 76.9738594],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '19 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}
const B_20= {
	geometry: [43.3547557, 76.9497839],
	modules: ['geoObject.addon.balloon', 'geoObject.addon.hint', 'templateLayoutFactory', 'layout.ImageWithContent'],
	properties: {
		hintContent: '20 группа',
	},
	options: {
		iconLayout: 'default#image',
		iconImageHref: require('./iconsMap/myCar.png'),
		iconImageSize: [75, 50]
	}
	
}

class MapContainer extends Component {
	render() {
		return(
			<YMaps query={{ apikey: '97713bea-50e0-42ce-bb61-3ca2dd3fa562&lang=ru_RU'}} version={"2.1"}>
				<Map defaultState={mapState} style={style}> 
			
					{/*C-1*/}  <Placemark {...C_1}  />
					{/*C-2*/}  <Placemark {...C_2}  />
					{/*B-3*/}  <Placemark {...B_3}  />
					{/*C-4*/}  <Placemark {...C_4}  />
					{/*B-5*/}  <Placemark {...B_5}  />
					{/*B-6*/}  <Placemark {...B_6}  />
					{/*A-7*/}  <Placemark {...A_7}  />
					{/*A-8*/}  <Placemark {...A_8}  />
					{/*A-9*/}  <Placemark {...A_9}  />
					{/*A-10*/} <Placemark {...A_10} />
					{/*C-12*/} <Placemark {...C_12} />
					{/*A-13*/} <Placemark {...A_13} />
					{/*A-14*/} <Placemark {...A_14} />
					{/*A-15*/} <Placemark {...A_15} />
					{/*B-16*/} <Placemark {...B_16} />
					{/*C-11*/} <Placemark {...C_11} />
					{/*B-17*/} <Placemark {...B_17} />
					{/*C-18*/} <Placemark {...C_18} />
					{/*C-19*/} <Placemark {...C_19} />
					{/*B-20*/} <Placemark {...B_20} />

				</Map>
			</YMaps>
		);
	}		
}
export default MapContainer;

			


