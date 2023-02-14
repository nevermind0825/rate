import { Link } from 'gatsby';
import React from 'react';
import { IconContext } from 'react-icons';
import {btn_common,link_btn_animt} from "./common.module.css";



export const ReactIcon = ({children, size=20,color="blue"}) => {
    return (
        <IconContext.Provider value={{ color, size, className: "global-class-name" }}>
        {children}
      </IconContext.Provider>
    );
};

export const LinkRegular = ({label,url="",style={}, className=""}) => {
    return (
        <Link 
            className={`${link_btn_animt} d-inline-block text-decoration-none text-danger px-5 py-2  ${className}`} style={{...style}}
            to={url}
        >{label}</Link>
    );
};

const ButtonRegular = ({label,style={}, className="",rounded=true}) => {
    return (
        <button className={`${btn_common} bg-danger ${rounded ? "rounded":""}  ${className}`} style={{...style}}>{label}</button>
    );
};

export default ButtonRegular;