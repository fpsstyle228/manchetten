import React, { Component } from 'react';
import './css/creative2.css';
import Slider from "react-slick";


import Logo from './logo.svg';
import ImageMoney from "./css/img/money.jpg";
import ImagePark from "./css/img/park.jpg";
import ImageTransport from "./css/img/transport.jpg";
import ImageHouse from './css/img/house_infrastructure.jpg';
import ImageBlock from './css/img/blok.jpg';
import Img10 from './css/img/10.png';
import Img20 from './css/img/20.png';
import Img30 from './css/img/30.png';
import Img40 from './css/img/40.png';
import Img50 from './css/img/50.png';
import ManMap from './css/img/manmap.jpg';
import ImgMan from './css/img/man.jpg';


// import Navbar from './Components/Navbar';

class App extends Component {
  constructor(props){
    super();
    this.props = props;
    this.state = {
      transform: -60,
      scrolling:false

     };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
};

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
};

handleScroll(event) {
  if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});
  }
  else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
  }
};
  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      swipe: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
			<div className="App">
        <nav className={this.state.scrolling ? "navbar nav-scrolled navbar-expand-lg navbar-light fixed-top" :"navbar navbar-expand-lg navbar-light fixed-top"} id="mainNav">
            <div className="container">
                  <a className="navbar-brand js-scroll-trigger" href="#page-top">
                  <h1 className="text-uppercase">

                  <div className="kingplace-logo">
                    <img src={Logo} alt=""/>
                          </div>
                  </h1>
                  </a>
                  <div className="top_nums">
                    <p className="text-black mb-4">
                      <a href="tel:+380503921260"
                      className={this.state.scrolling ? "top_nums_swow" : " " }> +38 (098) 211 98 58</a></p>
                    <p className="text-black mb-4">
                      <a href="tel:+380634868240"
                        className={this.state.scrolling ? "top_nums_swow" : " " }> +38 (066) 562 11 51</a></p>
                  </div>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarResponsive">

                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <a className={this.state.scrolling ? "nav-link nav-scrolled-links js-scroll-trigger" : "nav-link js-scroll-trigger" }  href="#okomp">О комплексе</a>
                  </li>
                  <li className="nav-item">
                  <a className={this.state.scrolling ? "nav-link nav-scrolled-links js-scroll-trigger" : "nav-link js-scroll-trigger" }  href="#preim">Преимущества</a>
                  </li>
                  <li className="nav-item">
                  <a className={this.state.scrolling ? "nav-link nav-scrolled-links js-scroll-trigger" : "nav-link js-scroll-trigger" }  href="#price">Цены</a>
                  </li>
                  <li className="nav-item">
                  <a className={this.state.scrolling ? "nav-link nav-scrolled-links js-scroll-trigger" : "nav-link js-scroll-trigger" }  href="#rassr">Рассрочка</a>
                  </li>
                  <li className="nav-item">
                  <a className={this.state.scrolling ? "nav-link nav-scrolled-links js-scroll-trigger" : "nav-link js-scroll-trigger" }  href="#plan">Планировки</a>
                  </li>
                  <li className="nav-item">
                  <a className={this.state.scrolling ? "nav-link nav-scrolled-links js-scroll-trigger" : "nav-link js-scroll-trigger" }  href="#contact">Контакты</a>
                  </li>
                  </ul>


                  </div>
            </div>
        </nav>
<header className="masthead text-center text-white d-flex">
<div className="cover">
<div className="container">
<div className="row">

<div className="col-lg-4 mx-auto">
<h2 onScroll= {(ev)=> this.handleScroll(ev)}>

Наш новый проект на площади Толбухина!
</h2>

<div className=" head_btn">

<a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Оставить заявку<i style={{margin: "0 0 0 10px"}} className="fa fa-phone"></i></a>
</div>
</div>
<div className="col-lg-8 mx-auto otdel prodazh">
<div className="op">
<div className="b-op">
<p className="text-faded mb-5">
Телефоны Отдела продаж

</p>
<span>(098) 211 98 58</span><br/>
<span>(066) 562 11 51</span>
</div>
</div>
</div>


</div>

<div className="rel vid">

	<i className="fa fa-play first"></i>
</div>
</div>
</div>
</header>
<section id="okomp">
<div className="container">
<div className="row">
<div className="col-lg-12 text-center">
<h2 className="section-heading">О комплексе</h2>
<hr className="my-4"/>
</div>
</div>
</div>
<div className="container">
<div className="row">
<p className="o-komp">
Новый жилой комплекс «Манхеттен» расположен на персечении улиц Академика Филатова и Лютдорфской дорогию Комплекс состоит из пяти секцтй по 22 этажа каждая. Жк «Манхеттен» - идеально сочетает в себе современную архитектуру, экологические материалы и новейшие технологии строительства.
Планировки квартир создают максимально комфортное жилое пространство без лишних нефункциональных площадей. Это позволяет не переплачивать за неиспользуемые квардратные метры. Мы предлагаем квартиры на любой вкус - от уютной однокомнатной до просторной трехкомнатной с выходои на личную террасу. Благоустройство комплекса предусматривает озеленение территории с устройством газонов и высадкой новых деревьев, устройство пешеходных аллей и дорожек. Здесь есть все для активного и здорового образа жизни.
</p>
</div>
</div>
</section>
<div className="cover comptop">
<section className="bg-primary" id="preim">
<div className="container">
<div className="row">
<div className="mx-auto text-center preim">
<h2 className="section-heading text-white">5 преимуществ ЖК «Манхеттен»</h2>
<div className="flex compare">
<div className="flexy">
<span>
Доступная цена
</span>
<div className="img_cover"><img src={ImageMoney} /></div>
</div>
<div className="flexy">
<span>Соседство с парком</span>
<div className="img_cover"><img src={ImagePark} /></div>
</div>
<div className="flexy">
<span>Транспортная доступность</span>
<div className="img_cover"><img src={ImageTransport} /></div>
</div>
<div className="flexy">
<span>Собственная инфраструктура</span>
<div className="img_cover"><img src={ImageHouse} /></div>
</div>
<div className="flexy">
<span>Качественный материал</span>
<div className="img_cover"><img src={ImageBlock} /></div>
</div>

</div>

<blockquote>
</blockquote>

</div>
</div>
</div>
</section>
</div>

<section id="price">
<div className="container">
<div className="row">
<div className="col-lg-12 text-center">
<h2 className="section-heading">Цены на квартиры</h2>
<hr className="my-4"/>
</div>
</div>
</div>
<div className="container">
<div className="row ban in">
<div className="col-lg-4 col-md-6 text-center">
<div className="service-box mt-5 mx-auto">
<img src="img/sofa1.png" />
<h3 className="mb-3">1-комнатные</h3>
<p className="text-muted mb-0">от 38,9 кв.м.</p>
<span className="pr_bl fr">Цена от <br/><strong>31 300 у.е.</strong></span>
</div>
</div>
<div className="col-lg-4 col-md-6 text-center">
<div className="service-box mt-5 mx-auto">
<img src="img/sofa2.png" />
<h3 className="mb-3">2-комнатные</h3>
<p className="text-muted mb-0">от 55,6 кв.м.</p>
<span className="pr_bl">Цена от <br/><strong>43 300 у.е.</strong></span>
</div>
</div>
<div className="col-lg-4 col-md-6 text-center">
<div className="service-box mt-5 mx-auto">
<img src="img/sofa3.png" />
<h3 className="mb-3">3-комнатные</h3>
<p className="text-muted mb-0">от 72,2 кв.м.</p>
<span className="pr_bl">Цена от <br/><strong>53 200 у.е.</strong></span>
</div>
</div>
</div>
</div>
</section>
<section className="bg-primary" id="rassr">
<div className="container">
<div className="row">
<div className="col-lg-12 mx-auto text-center credit">
<h2 className="section-heading">Рассрочка от застройщика!</h2>
<p className="text-faded mb-4">Первоначальный взнос от 10%, период рассрочки до 24 месяцев</p>
<a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Узнать подробнее!</a>
</div>
</div>
</div>
</section>

<section id="plan" className="bg-dark text-white plan" style= {{backgroundepeat:"no-repeat",backgroundSize:"cover"}}>
<div className="container text-center">
<h2 className="mb-4">Планировки квартир</h2>
<hr className="my-4"/>
<div className="container">
  <Slider {...settings}>
          <div>
            <div className="slidess"><img src={Img10}/></div>
          </div>
          <div>
              <div className="slidess"><img src={Img20}/></div>
          </div>
          <div>
              <div className="slidess"><img src={Img30}/></div>
          </div>
          <div>
            <div className="slidess"><img src={Img40}/></div>
          </div>
          <div>
            <div className="slidess"><img src={Img50}/></div>
          </div>
        </Slider>
<a className="btn btn-light btn-xl sr-button">Забронировать!</a>
</div>
</div>
</section>
<section id="contact">
<div className="container">
<div className="row">
<div className="col-lg-4 mx-auto text-center rasp">
<h2 className="section-heading">Расположение</h2>
<hr className="my-4"/>

<p className="text-black mb-4">Комплекс расположен в сердце динамично развивающегося района на пересечении улиц Академика Филатова и Люстдорфской дороги. Уникальность идеи состоит в эффективном обустройстве эксклюзивного пространства, удачно сочетающего в себе идеальное месторасположение, просторную благоустроенную придомовую территорию и развитую инфраструктуру.</p>
<a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">Узнать подробнее!</a>
</div>
<div className="col-lg-8 mx-auto text-center ">
<img src={ManMap} />
</div>
</div>
</div>
</section>
<section id="zapis">
<h2 className="section-heading text-center">Записаться на показ</h2>
<hr className="my-4"/>
<div className="flex cform">
<div className="form-group">
<input className="form-control" id="name" type="text" placeholder="Ваше имя *" required="" data-validation-required-message="Please enter your name."/>
<p className="help-block text-danger"></p>
</div>
<div className="form-group">
<input className="form-control" id="phone" type="tel" placeholder="Ваш телефон *" required="" data-validation-required-message="Please enter your phone number."/>
<p className="helpblock text-danger"></p>
</div>



<button id="sendMessageButton" className="btn btn-light js-scroll-trigger grad" type="submit">Отправить</button>
</div>

</section>




<section id="contact">
<div className="container">
<div className="row">
<div className="col-lg-8 mx-auto text-center ">
<img src={ImgMan}/>
</div>

<div className="col-lg-4 mx-auto text-center ">
<h2 className="section-heading">Контакты</h2>
<hr className="my-4"/>
<hr className="light my-4"/>
<p className="text-black mb-4">Одесса, Академика Филатова, 2</p>
<p className="text-black mb-4 phs"><a href="tel:+380503921260"> +38 (098) 211 98 58</a></p>
<p className="text-black mb-4 phs"><a href="tel:+380634868240"> +38 (066) 562 11 51</a></p>
</div>
<a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">Связаться с нами!</a>
</div>

</div>
</section>
<footer className="footer">
  <div className="container">
    <div className="row">
    <div className="kingplace-logo">
      <img src={Logo} alt=""/>

        </div>
  <div className="top_nums bot_nums">
  <div className="bn">
    <p className="text-black mb-4"><a href="tel:+380503921260"> +38 (098) 211 98 58</a></p>
    <p className="text-black mb-4"><a href="tel:+380634868240"> +38 (066) 562 11 51</a></p>
    </div>
  </div>
    <p>
      Жк Манхеттен 2018
    </p>
  </div>


</div>
</footer>

</div>
    );
  }
}

export default App;
