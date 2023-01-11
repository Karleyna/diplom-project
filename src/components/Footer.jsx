import React from 'react';
import "../styles/Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="contacts">
                   <h1 className="title">Наши контакты</h1>
                    <span className="text">Телефоны:
                        <p>+79045746021 (Новосибирск)</p>
                        <p>+79139167647 (Академгородок)</p>
                        <p>Адреса:</p>
                        <p>г. Новосибирск ул. Где-нибудь, 58</p>
                        <p>Верхняя зона Академгородка м-н, Советский район, Новосибирск,
                        Пирогова 78</p>
                        </span>
                </div>
                <div className="mail">
                    <h1 className="title">Свяжитесь с нами</h1>
                    <input type="name" className="name" placeholder="ваше имя"/>
                    <input type="telephone" className="telephone"/>
                    <input type="message" className="message"/>
                </div>
            </div>

        </div>
    );
};

export default Footer;