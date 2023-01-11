import React from 'react';
import icon from "../pages/iwsd icon.png";


const Header = () => {
    return (
            <div className="header">
                <div className="catalog-header">
                    <div className="catalog-navigation">
                        <a className="catalog-brand-img" href="/">
                            <img src={icon} alt=""></img>
                        </a>
                        <div className="border">cerf</div>
                        <div className="border">cerf</div>
                        <div className="border">cerf</div>
                        <div className="border">cerf</div>

                    </div>
                </div>
            </div>
    );
};

export default Header;