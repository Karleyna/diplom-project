import React from 'react';
import "./Header.css"
import icon from "../../ui/PicturesForUI/iwsd icon.png";
import {Link} from "react-router-dom";
import MyLink from "../../ui/links/MyLink";

const Header = () => {
    return (
            <div className="header">
                <div className="catalog-header">
                    <div className="catalog-navigation">
                        <div className="catalog-navigation-image">
                            <a className="catalog-brand-img" href="/">
                                <img src={icon} alt=""></img>
                            </a>
                        </div>
                        <nav className="catalog-navigation-buttons">
                            <MyLink to='/login'>Войти</MyLink>
                            <MyLink to='/login'>Войти</MyLink>
                            <MyLink to='/login'>Войти</MyLink>
                            <MyLink to='/'>Назад</MyLink>
                        </nav>


                    </div>
                </div>
            </div>
    );
};

export default Header;