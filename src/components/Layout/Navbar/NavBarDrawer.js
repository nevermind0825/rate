import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';
import {nav_container,nav_middle, nav_child_link, nav_sub, nav_right,get_start_btn,

    nav_drawer_container, nav_toggle, nav_drawer_middle,nav_drawer_middle_wrapper,child_close_btn, nav_drawer_search_wraper, nav_drawer_search, nav_drawer_middle_items, nav_drawer_item, nav_drawer_right

} from "./navbar.module.css";
import { LogoIcon, TelephoneIcon, UserIcon } from '../../../utils/icons/DrawerNavIcons';
import { CrossIcon, LeftArrow, MenuIcon, RightArrow } from '../../../utils/icons/Arrows';
import SearchIcon from '../../../utils/icons/SearchIcon';
import { navMiddle } from './Navbar';



const navRightDrawer = [
    {name: <TelephoneIcon />, url:""},
    {name: <UserIcon />, url:""},
]


const NavBarDrawer = () => {
        
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const [currentChilds,setCurrentChilds] = useState([]);

    const onChildClick = (url) =>{
        document.documentElement.style.setProperty("--full_page_height",`${document.documentElement.scrollHeight}px`)
        setIsDrawerOpen(false);
        navigate(url);
    }
    
    
    return (
        <nav className={`${nav_container} ${nav_drawer_container} d-lg-none`}>
            <div className={nav_toggle}>
                <span onClick={()=>setIsDrawerOpen(!isDrawerOpen)}>{ isDrawerOpen ?  <CrossIcon /> : <MenuIcon  /> }</span>
            </div>
            <div>
                <LogoIcon width={40} height={40} />
            </div>
            
            {
                // isDrawerOpen && <div className={nav_drawer_middle} style={{"--drawer_open_shade":"rgba(0,0,0,0.3)",}}>
                isDrawerOpen && <div className={nav_drawer_middle} style={{"--drawer_open_shade":"rgba(0,0,0,0.3)",}}>
                    <div className={nav_drawer_middle_wrapper}>

                        {/* alternate the close button and search field  */}
                        <div>
                            {
                                currentChilds.length 
                                ?  <div className={child_close_btn} onClick={()=>setCurrentChilds([])} > <LeftArrow width={13} height={13} fill="rgb(57, 179, 228)" /> Back</div>
                                :  <div className={nav_drawer_search_wraper}>
                                        <input className={nav_drawer_search} type="search" placeholder='Search..' />
                                        <SearchIcon  />
                                    </div>
                            }
                        </div>
                        
                        {/* show all the nav parent items  */}
                        <div>
                            {
                                !currentChilds.length && navMiddle.map((navItem,idx) => <div className={nav_drawer_middle_items} key={idx}>
                                    <div className={nav_drawer_item} onClick={()=>setCurrentChilds(navItem.childs ?? [])}>
                                        <span>{navItem.name}</span> 
                                        {navItem.childs?.length && <span> <RightArrow width={15} height={15} /></span>}
                                    </div>
                                </div>)
                            }
                        </div>

                        {/* show child when chick on the nav item  */}
                        <div>
                            {
                                !!currentChilds.length && currentChilds.map((childNav,idx) => <div className={"nav_child"}  key={idx}>
                                    <Link className={`link_style ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
                                    <div className='nav_subs'>
                                        {
                                            childNav.sub_childs && childNav.sub_childs?.map((subChild,idx) =><span  onClick={()=>onChildClick(subChild.url)} className={`link_style ${nav_child_link} ${nav_sub}`} to={subChild.url} key={idx}>{subChild.name}</span>)
                                        }
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            }
            
 
            <div className={`${nav_middle} ${nav_right} ${nav_drawer_right}`}>
                <Link className={`link_style ${get_start_btn}`} to={""}>Get started</Link>
                {
                    navRightDrawer.map((navItem,idx) => <Link className={"link_style"} to={navItem.url} key={idx}>{navItem.name}</Link>)
                }
            </div>
            
        </nav>
    );

    
};

export default NavBarDrawer;






    // return (
    //     <nav className={`${nav_container} ${nav_drawer_container} d-lg-none`}>
    //         <div className={nav_toggle}>
    //             <span onClick={()=>setIsDrawerOpen(!isDrawerOpen)}>{ isDrawerOpen ?  <CrossIcon /> : <MenuIcon  /> }</span>
    //         </div>
    //         <div>
    //             <LogoIcon width={40} height={40} />
    //         </div>
            
    //         {
    //             isDrawerOpen && <div className={nav_drawer_middle} style={{"--drawer_open_shade":"rgba(0,0,0,0.3)"}}>
    //                 <div className={nav_drawer_middle_wrapper}>

                    
    //                     <div>
    //                         {
    //                             currentChilds.length 
    //                             ?  <div className={child_close_btn} onClick={()=>setCurrentChilds([])} > <LeftArrow width={13} height={13} fill="rgb(57, 179, 228)" /> Back</div>
    //                             :  <div className={nav_drawer_search_wraper}>
    //                                     <input className={nav_drawer_search} type="search" placeholder='Search..' />
    //                                     <SearchIcon  />
    //                                 </div>
    //                         }
    //                     </div>
                        
                        
    //                     <div>
    //                         {
    //                             !currentChilds.length && navMiddle.map((navItem,idx) => <div className={nav_drawer_middle_items} key={idx}>
    //                                 <div className={nav_drawer_item} onClick={()=>setCurrentChilds(navItem.childs ?? [])}>
    //                                     <span>{navItem.name}</span> 
    //                                     {navItem.childs?.length && <span> <RightArrow width={15} height={15} /></span>}
    //                                 </div>
    //                             </div>)
    //                         }
    //                     </div>

                        
    //                     <div>
    //                         {
    //                             !!currentChilds.length && currentChilds.map((childNav,idx) => <div className={"nav_child"}  key={idx}>
    //                                 <Link className={`link_style ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
    //                                 <div className='nav_subs'>
    //                                     {
    //                                         childNav.sub_childs && childNav.sub_childs?.map((subChild,idx) =><span  onClick={()=>onChildClick(subChild.url)} className={`link_style ${nav_child_link} ${nav_sub}`} to={subChild.url} key={idx}>{subChild.name}</span>)
    //                                     }
    //                                 </div>
    //                             </div>)
    //                         }
    //                     </div>

    //                 </div>
    //             </div>
    //         }
            
 
    //         <div className={`${nav_middle} ${nav_right} ${nav_drawer_right}`}>
    //             <Link className={`link_style ${get_start_btn}`} to={""}>Get started</Link>
    //             {
    //                 navRightDrawer.map((navItem,idx) => <Link className={"link_style"} to={navItem.url} key={idx}>{navItem.name}</Link>)
    //             }
    //         </div>
            
    //     </nav>
    // );

    

