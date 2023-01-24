import React from 'react';
import "../../styles/Footer.css";
import icon_youtube from "../pageComponents/youtube-play.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="contacts">
                   <h1 className="title">Наши контакты</h1>
                    <div className="text">
                        <p>Телефоны:</p>
                        <p>+79045746021 (Новосибирск)</p>
                        <p>+79139167647 (Академгородок)</p>
                        <p>Адреса:</p>
                        <p>Новосибирск ул. Где-нибудь, 58 </p>
                        <p>Верхняя зона Академгородка м-н, Советский район, Новосибирск,
                        Пирогова 78</p>
                    </div>
                    <div className="social">
                        <a className="social-youtube" href="../pageComponents/youtube-play.png">
                            <img src={icon_youtube} alt=""></img>
                        </a>
                    </div>
                </div>
                <div className="mail">
                    <h1 className="title">Свяжитесь с нами</h1>
                    <div className="inputs">
                            <input type="name" className="name" placeholder=" Ваше имя"/>
                            <input type="telephone" className="telephone" placeholder=" Ваш телефон"/>
                            <textarea type="message" className="message" placeholder=" Ваше сообщение"></textarea>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;