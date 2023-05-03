import React from 'react';
import "./Footer.css";
import iconYoutube from "../../ui/PicturesForUI/YouTube_full-color_icon.png";
import iconVK from "../../ui/PicturesForUI/VK.com-logo.svg.png";
import iconTelegram from "../../ui/PicturesForUI/Telegram_logo.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <div className="contacts">
                   <h1>Наши контакты</h1>
                    <div className="text">
                        <p>Телефоны:</p>
                        <p>+79045746021 (Новосибирск)</p>
                        <p>+79139167647 (Академгородок)</p>
                        <p>Адреса:</p>
                        <p>«Академпарк», ул. Николаева, 12 </p>
                        <p>Академгорок, Советский район, Новосибирск</p>
                        <div className="social">
                            <a className="social-youtube" href="../../ui/PicturesForUI/YouTube_full-color_icon.png">
                                <img src={iconYoutube} alt=""></img>
                            </a>
                            <a className="social-vk" href="../../ui/PicturesForUI/VK.com-logo.svg.png">
                                <img src={iconVK} alt=""></img>
                            </a>
                            <a className="social-telegram" href="../../ui/PicturesForUI/Telegram_logo.png">
                                <img src={iconTelegram} alt=""></img>
                            </a>
                        </div>
                    </div>
                </div>
                {/*<div className="mail">*/}
                {/*    <h1>Свяжитесь с нами</h1>*/}
                {/*    <div className="inputs">*/}
                {/*        <input type="name"  placeholder=" Ваше имя"/>*/}
                {/*        <input type="telephone" placeholder=" Ваш телефон"/>*/}
                {/*        <textarea type="message" placeholder=" Ваше сообщение"></textarea>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default Footer;