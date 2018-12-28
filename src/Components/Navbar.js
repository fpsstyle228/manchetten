import React, { Component } from 'react';
import Logo from "../logo.svg";

class Navbar extends Component {
 render(){
	return (
		<div className="NavbarMain">
			<div className="Navbar">
				<div className="logo">
					<img src={Logo} alt=""/>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#okomp">О комплексе</a>
					</li>
					<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#preim">Преимущества</a>
					</li>
					<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#price">Цены</a>
					</li>
					<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#rassr">Рассрочка</a>
					</li>
					<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#plan">Планировки</a>
					</li>
					<li className="nav-item">
					<a className="nav-link js-scroll-trigger" href="#contact">Контакты</a>
					</li>
					</ul>
					<button><span className="navbar-toggler-icon"></span></button>

			</div>

		</div>
	);
 }
}

export default Navbar;