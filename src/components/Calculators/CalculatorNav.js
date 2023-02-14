import React from 'react';
import {calc_nav,calc_nav_btn} from "./calculators.module.css";

const CalculatorNav = ({navList=[],activeNav,setActiveNav}) => {
    
    return (
        <nav className={`${calc_nav} d-flex justify-content-center`}>
            <div style={{position:"absolute", left:"50%",top:0, transform: "translateX(-50%)","WebkitTransform": "translateX(-50%)"}}>
                {
                    navList.map(navItem => <button 
                        className={calc_nav_btn} 
                        style={{
                            backgroundColor: activeNav === navItem ? "#fff":"",
                            borderBottom: activeNav === navItem ? "1px solid #fff":""
                        }} 
                        onClick={()=>setActiveNav(navItem)}
                        key={navItem}
                    >{navItem}</button>)
                }
            </div>
        </nav>
    );
};

export default CalculatorNav;