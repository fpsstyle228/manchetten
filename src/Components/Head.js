import React, { Component } from 'react';
import Logo from "../logo.svg";

class Head extends Component {
	render(){
	 return (
		<div className="navbar navbar-expand-lg navbar-light hidden fixed-top" id="mainNav">
		<div className="container">
		<a className="navbar-brand js-scroll-trigger" href="#page-top">
		<h1 className="text-uppercase">
		
		<div className="kingplace-logo">
							<img src={Logo} alt=""/>
						</div>
		</h1>
		</a>
		<div className="top_nums">
			<p className="text-black mb-4"><a href="tel:+380503921260"> +38 (098) 211 98 58</a></p>
			<p className="text-black mb-4"><a href="tel:+380634868240"> +38 (066) 562 11 51</a></p>
		</div>
		<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>
		
		<div className="collapse navbar-collapse" id="navbarResponsive">
		
		<ul className="navbar-nav ml-auto">
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
		
		
		</div>
		</div>
		</div>
	 );
	}
 }
 
 export default Head;