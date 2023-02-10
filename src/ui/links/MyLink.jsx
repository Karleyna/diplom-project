import React from 'react';
import {Link} from "react-router-dom";
import classes from "./MyLink.module.css";

const MyLink = ({children, ...props}) => {
    return (
           <Link {...props} className={classes.myLink}   >
               {children}
           </Link>
    );
};

export default MyLink;