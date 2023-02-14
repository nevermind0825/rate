import { Link } from 'gatsby';
import React from 'react';
import { useState } from 'react';
import {BiSearch,BiDotsHorizontal} from 'react-icons/bi';
import { ReactIcon } from '../../common/ButtonRegular';
import {sub_nesNav_container,sub_nav_items,navLink,sub_nav_search,sub_nav_items_wrapper,newsNav_input_container,newsNav_dot_icon} from "./mortgageNews.module.css";


const sub_nav_news = [
    {
        name:"Buying a Home",
        url:"/resources/home-buying-advice"
    },
    {
        name:"Mortgage Process & Options",
        url:"/resources/mortgage-process-resources"
    },
    {
        name:"Refinance",
        url:"/resources/home-refinancing-tips"
    },
    {
        name:"Mortgage News",
        url:"/resources/mortgage-news"
    },
];


const SubNavNews = () => {
    const [isSubNavOpen,setIsSubNavOpen] = useState(false);

    return (
        <nav className={sub_nesNav_container}>
                <div className={`${sub_nav_items_wrapper}`} style={{display: isSubNavOpen ? "block":"none"}}>
                    <div className={sub_nav_items}>
                        {
                            sub_nav_news.map(navItem => <div key={navItem.name}>
                                <Link className={`${navLink}`} to={navItem.url} >{navItem.name}</Link>
                            </div>)
                        }
                    </div>
                </div>
                <div className={newsNav_input_container}>
                    <div className={`${sub_nav_search} `}>
                        <input type="search" placeholder='Search Knowledge Center' />
                        <ReactIcon size={20} color='black'><BiSearch /></ReactIcon>
                    </div>
                    <div className={newsNav_dot_icon} onClick={()=>setIsSubNavOpen(!isSubNavOpen)}>
                        <ReactIcon size={30} color='grey'><BiDotsHorizontal /> </ReactIcon>
                    </div>
                </div>
            </nav>
    );
};

export default SubNavNews;


/*
<nav className='d-flex border-top border-bottom py-3'>
    <div className={`${sub_nav_items_wrapper} flex-grow-1`}>
        <div className='d-md-flex justify-content-between'>
            {
                sub_nav_news.map(navItem => <div key={navItem.name}>
                    <Link className={`${navLink} text-decoration-none fw-normal`} to={navItem.url} >{navItem.name}</Link>
                </div>)
            }
        </div>
    </div>
    <div className='inline-block ms-1 ms-lg-5'>
        <div className={`${sub_nav_search} d-flex justify-content-center align-items-center`}>
            <input type="search" placeholder='Search Knowledge Center' />
            <ReactIcon size={20} color='black'><BiSearch /></ReactIcon>
        </div>
    </div>
</nav>



*/