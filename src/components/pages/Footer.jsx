import React from 'react';
import "../../styles/Footer.css";
import iconYoutube from "../pageComponents/YouTube_full-color_icon.png";
import iconVK from "../pageComponents/VK.com-logo.svg.png";
import iconTelegram from "../pageComponents/Telegram_logo.png";
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
                        <div className="social">
                            <a className="social-youtube" href="../pageComponents/YouTube_full-color_icon.png">
                                <img src={iconYoutube} alt=""></img>
                            </a>
                            <a className="social-vk" href="../pageComponents/VK.com-logo.svg.png">
                                <img src={iconVK} alt=""></img>
                            </a>
                            <a className="social-telegram" href="../pageComponents/Telegram_logo.png">
                                <img src={iconTelegram} alt=""></img>
                            </a>
                        </div>
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