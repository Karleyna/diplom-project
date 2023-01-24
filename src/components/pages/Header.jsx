import React from 'react';
import "../../styles/Header.css"
import icon from "../pageComponents/iwsd icon.png";


const Header = () => {
    return (
            <div className="header">
                <div className="catalog-header">
                    <div className="catalog-navigation">
                        <div className="catalog-navigation-image">
                            <a className="catalog-brand-img" href="/src/components/pages">
                                <img src={icon} alt=""></img>
                            </a>
                        </div>
                        <nav className="catalog-navigation-buttons">
                            <div className="border">cerf</div>
                            <div className="border">cerf</div>
                            <div className="border">cerf</div>
                            <div className="border">cerf</div>
                        </nav>


                    </div>
                </div>
            </div>
    );
};

export default Header;