import { graphql, Link, useStaticQuery, navigate } from 'gatsby';
import React from 'react';
import { TelephoneIcon, UserIcon } from '../../../utils/icons/DrawerNavIcons';
import {
    nav_container, color_change,
    nav_middle, nav_middle_items, nav_middle_title, nav_childs_wrapper, nav_child, nav_child_link,
    nav_sub, nav_title, burger, icon, sidebar, nav_drawer_middle_items, nav_drawer_item, sub_drawer
} from "./navbar.module.css";
import { CrossIcon, LeftArrow, DownArrow, MenuIcon, RightArrow } from '../../../utils/icons/Arrows';
import SearchIcon from '../../../utils/icons/SearchIcon';

export const navMiddle = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "About Us",
        childs: [
            { name: "Why DMV HLE?", url: "/about" },
            { name: "Testimonial", url: "/testimonial" }
        ]
    },
    {
        name: "Resource Center",
        childs: [
            { name: "Mortgage Basics", url: "/mortgageBasics", },
            { name: "Buying a Home", url: "/buyHome", },
            { name: "Refinance your Home", url: "/refinanceHome", },
            { name: "Loan Programs", url: "/loanPrograms", },
            { name: "Mortgage Process", url: "/mortgageProcess", },
            { name: "Mortgage News", url: "/resources/mortgage-news", },
            { name: "Today's Rates", url: "/mortgage-rates", },
        ]
    },
    {
        name: "Calculators",
        childs: [
            {
                name: "Mortgage Calculators", url: "/mortgage-calculators",
                sub_childs: [
                    { name: "Closing cost calculator", url: "/mortgage-calculators/closing-cost-calculator", },
                    { name: "Refinance calculator", url: "/mortgage-calculators/should-i-refinance-calculator", },
                    { name: "Affordability calculator", url: "/mortgage-calculators/how-much-home-can-i-buy-calculator", },
                    { name: "Extra payment calculator", url: "/mortgage-calculators/should-i-make-extra-payments-calculator", },
                    { name: "Points calculator", url: "/mortgage-calculators/when-to-pay-points-to-lower-rate-calculator", },
                ]
            },
            { name: "Home valuation tool", url: "/home-valuation", },
            { name: "House market research", url: "/research", },
        ]
    },
    {
        name: "Contact Us",
        url: "/contact-us",
    },

]

const navRight = [
    { name: "1(886) 934-721", url: "" },
    { name: "Espanol", url: "" },
    { name: "Log in", url: "" },
]



const NavbarStatic = () => {
    React.useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
    })

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [currentChilds, setCurrentChilds] = React.useState([]);
    const [colorChange, setColorchange] = React.useState(false);

    const onChildClick = (url) => {
        document.documentElement.style.setProperty("--full_page_height", `${document.documentElement.scrollHeight}px`)
        setIsDrawerOpen(false);
        navigate(url);
    }

    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    return (
        <>
            <nav className={colorChange ? `${nav_container} ${color_change}` : `${nav_container}`} >
                <div>
                    <h3 className={nav_title}>DMV Home Loan Experts</h3>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={`${nav_middle}`}>
                        {
                            navMiddle.map(navItem => <div className={nav_middle_items} key={navItem.name}>
                                {
                                    navItem.url
                                        ? <Link to={navItem.url} className={`text-decoration-none text-white ${nav_middle_items}`}>
                                            <span className={`${nav_middle_title} rotate_icon_parent position-relative`}>
                                                {navItem.name}
                                                {navItem.childs?.length && <span className='rotate_icon ms-2'> <RightArrow width={10} height={10} /> </span>}
                                            </span>
                                        </Link>
                                        : <span className={`text-decoration-none ${nav_middle_items}`}>
                                            <span className={`${nav_middle_title} rotate_icon_parent position-relative`}>
                                                {navItem.name}
                                                {navItem.childs?.length && <span className='rotate_icon ms-2'> <RightArrow width={10} height={10} /> </span>}
                                            </span>
                                        </span>
                                }

                                {
                                    navItem.childs && <div className={nav_childs_wrapper}>
                                        <div className={nav_child}>
                                            {
                                                navItem.childs && navItem.childs?.map(childNav => <div className={"nav_child"} key={childNav.name}>
                                                    <Link className={`${"link_style"} ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
                                                    <div className={"nav_subs"}>
                                                        {
                                                            childNav.sub_childs && childNav.sub_childs?.map(subChild =>
                                                                <Link className={`${"link_style"} ${nav_child_link} ${nav_sub}`} to={subChild.url} key={subChild.name}>
                                                                    {subChild.name}
                                                                </Link>)
                                                        }
                                                    </div>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                }
                            </div>)
                        }
                    </div>

                    {/*---------------------------------------------------small screens----------------------------------------------------*/}

                    <div className={burger}>
                        <span className={icon} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                            {
                                isDrawerOpen ?
                                    <CrossIcon fill='#000' width={25} height={25} /> : <MenuIcon width={25} height={25} fill='#fff' />
                            }</span>
                        {/* <span className={icon}><SearchIcon width={25} height={25} fill="#fff" /></span> */}
                    </div>
                    {
                        isDrawerOpen ? <div className={sidebar}>
                            <div className={burger}>
                                <span className={icon} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                                    {
                                        isDrawerOpen ?
                                            <CrossIcon fill='#fff' width={25} height={25} /> : <MenuIcon width={25} height={25} fill='#fff' />
                                    }</span>
                                {/* <span className={icon}><SearchIcon fill="#fff" /></span> */}
                            </div>
                            {
                                navMiddle.map((navItem, idx) =>
                                    <div className={nav_drawer_middle_items} key={idx}>

                                        <div className={nav_drawer_item} onClick={() => (!(navItem.childs == currentChilds) || !currentChilds.length) ? setCurrentChilds(navItem.childs) : setCurrentChilds([])}>
                                            {!navItem.url?<span>{navItem.name}</span>:<Link className={`text-decoration-none text-white ${nav_middle_items}`} to={navItem.url}>{navItem.name}</Link>}
                                            {navItem.childs?.length && <span style={{ marginLeft: "1rem" }}> <RightArrow fill="#fff" width={15} height={15} /></span>}
                                        </div>

                                        <div className={sub_drawer}>
                                            {
                                                currentChilds == navItem.childs && currentChilds.map(
                                                    (childNav, idx) =>
                                                        <div className={nav_child} key={idx}>
                                                            <Link className={`link_style ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
                                                        </div>
                                                )
                                            }
                                        </div>
                                    </div>)
                            }

                        </div> : null
                    }
                </div>
            </nav>
        </>
    );
};

export default NavbarStatic;