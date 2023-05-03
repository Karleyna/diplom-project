import React, {useContext} from 'react';
import "./Header.css"
import icon from "../../ui/PicturesForUI/iwsd icon.png";
import MyLink from "../../ui/links/MyLink";
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    MEDICAL_ROUTE,
    PERSONAL_ROUTE,
    TRAINER_ROUTE,
    USEFUL_ROUTE
} from "../../utils/consts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Navbar from "react-bootstrap/Navbar";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";


const Header = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);
    let token;
    if (localStorage.token){
        token = jwtDecode(localStorage.token)
    }
    // let token = jwtDecode(localStorage.token)
    const logOut = () =>{
        user.setUser(null);
        user.setIsAuth(false);
        alert("Всего доброго");
        localStorage.clear();
        token = null;
    }
    return (
        <Navbar className="header">
                <div className="catalog-header">
                    <div className="catalog-navigation">
                        <div className="catalog-navigation-image">
                            <a className="catalog-brand-img" href={MAIN_ROUTE}>
                                <img src={icon} alt=""></img>
                            </a>
                        </div>
                        {user.isAuth && token.role === 'admin'?
                            <nav className="catalog-navigation-buttons">
                                <MyLink to={ADMIN_ROUTE} >Admin</MyLink>
                                <MyLink to={USEFUL_ROUTE} >Useful page</MyLink>
                                <MyLink to={PERSONAL_ROUTE} >Personal cabinet</MyLink>
                                <MyLink onClick={()=>logOut()} to='/'>Exit</MyLink>
                            </nav>
                            : user.isAuth && token.role === 'trainer' ?
                            <nav className="catalog-navigation-buttons">
                                <MyLink to={TRAINER_ROUTE} >Trainer</MyLink>
                                <MyLink to={MEDICAL_ROUTE} >Medical</MyLink>
                                <MyLink to={USEFUL_ROUTE} >Useful page</MyLink>
                                <MyLink to={PERSONAL_ROUTE} >Personal cabinet</MyLink>
                                <MyLink onClick={()=>logOut()} to='/'>Exit</MyLink>
                            </nav>
                           :user.isAuth ?
                                <nav className="catalog-navigation-buttons">
                                    <MyLink to={MEDICAL_ROUTE} >Medical</MyLink>
                                    <MyLink to={USEFUL_ROUTE} >Useful page</MyLink>
                                    <MyLink to={PERSONAL_ROUTE} >Personal cabinet</MyLink>
                                    <MyLink onClick={()=>logOut()} to='/'>Exit</MyLink>
                                </nav>
                            :
                              <nav className="catalog-navigation-buttons">
                                <MyLink to={MEDICAL_ROUTE} >Medical</MyLink>
                                <MyLink to={LOGIN_ROUTE} >Войти</MyLink>
                              </nav>
                        }
                    </div>
                </div>
        </Navbar>
    );
});

export default Header;



