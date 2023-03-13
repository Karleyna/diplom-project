import React, {useContext} from 'react';
import "./Header.css"
import icon from "../../ui/PicturesForUI/iwsd icon.png";
import MyLink from "../../ui/links/MyLink";
import {MAIN_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Navbar from "react-bootstrap/Navbar";


const Header = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar className="header">
                <div className="catalog-header">
                    <div className="catalog-navigation">
                        <div className="catalog-navigation-image">
                            <a className="catalog-brand-img" href={MAIN_ROUTE}>
                                <img src={icon} alt=""></img>
                            </a>
                        </div>
                        {user.isAuth ?
                            <nav className="catalog-navigation-buttons">
                                <MyLink to='/login'>Admin</MyLink>
                                <MyLink to='/'>Exit</MyLink>
                            </nav>
                            :
                            <nav className="catalog-navigation-buttons">
                                <MyLink to='/login' >Войти</MyLink>
                            </nav>
                        }
                    </div>
                </div>
        </Navbar>
    );
});

export default Header;



