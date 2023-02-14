// import { graphql, Link, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
// import React from 'react';
// import { RightArrow } from '../../../utils/icons/Arrows';
// import SearchIcon from '../../../utils/icons/SearchIcon';

// import { nav_container, nav_middle, nav_middle_items, nav_middle_title, nav_childs_wrapper, nav_childs, nav_child_link, nav_sub, nav_right, get_start_btn, search_icon, nav_middle_item } from "./navbar.module.css";


// export const navMiddle = [
//     {
//         name: "Current rates",
//         url: "/mortgage-rates",
//     },
//     {
//         name: "Mortgages",
//         url: "/",
//         childs: [
//             {
//                 name: "Mortgage Overview", url: "/buying-a-house",
//                 sub_childs: [
//                     { name: "Mortgage news", url: "/resources/mortgage-news", },
//                     { name: "Mortgage rates today", url: "/mortgage-rates", },
//                     { name: "Mortgage pre-approval", url: "/powerbid", },
//                     { name: "Mortgage propcess", url: "/mortgage-process", },
//                     { name: "Mortgage calculator", url: "/mortgage-calculators", },
//                 ]
//             },
//             {
//                 name: "Refinance", url: "/refinance-mortgage",
//                 sub_childs: [
//                     { name: "Cash-out refinance", url: "/cash-out-refinance", },
//                 ]
//             },
//         ]
//     },

//     {
//         name: "Loan options",
//         url: "/",
//         childs: [
//             {
//                 name: "Fixed Loans", url: "/home-loans/fixed-rate-mortgage",
//                 sub_childs: [
//                     { name: "15-years fixed loans", url: "/mortgage-rates/assumptions/15-year_fixed_conforming", },
//                     { name: "30-years fixed loans", url: "/mortgage-rates/assumptions/30-year_fixed_conforming", },
//                 ]
//             },
//             {
//                 name: "ARM Loans", url: "/home-loans/adjustable-rate-mortgage-arm",
//                 sub_childs: [
//                     { name: "5-years ARM loans", url: "/mortgage-rates/assumptions/5-year_arm_conforming", },
//                     { name: "7-years ARM loans", url: "/mortgage-rates/assumptions/7-year_arm_conforming", },
//                     { name: "10-years ARM loans", url: "/mortgage-rates/assumptions/10-year_arm_conforming", },
//                 ]
//             },
//             { name: "FHA loans", url: "/mortgage-rates/assumptions/fha_30-year_fixed_conforming", },
//             { name: "Interest only loans", url: "/home-loans/interest-only-mortgage", },
//             { name: "VA loans", url: "/mortgage-rates/assumptions/va_30-year_fixed_conforming", },
//             { name: "Jumbo loans", url: "/home-loans/jumbo-mortgage", },
//             { name: "Personal loans", url: "/personal-loans", },
//             { name: "HELOC", url: "/heloc", },
//         ]
//     },
//     {
//         name: "Mortgage tools",
//         url: "/",
//         childs: [
//             {
//                 name: "Mortgage Calculators", url: "/mortgage-calculators",
//                 sub_childs: [
//                     { name: "Closing cost calculator", url: "/mortgage-calculators/closing-cost-calculator", },
//                     { name: "Refinance calculator", url: "/mortgage-calculators/should-i-refinance-calculator", },
//                     { name: "Affordability calculator", url: "/mortgage-calculators/how-much-home-can-i-buy-calculator", },
//                     { name: "Extra payment calculator", url: "/mortgage-calculators/should-i-make-extra-payments-calculator", },
//                     { name: "Points calculator", url: "/mortgage-calculators/when-to-pay-points-to-lower-rate-calculator", },
//                 ]
//             },
//             { name: "Home valuation tool", url: "/home-valuation", },
//             { name: "House market research", url: "/research", },
//         ]
//     },

// ]

// const navRight = [
//     // {name:"Get started", url:""},
//     { name: "1(886) 934-721", url: "" },
//     { name: "Espanol", url: "" },
//     { name: "Log in", url: "" },
// ]


// const navData_QL = graphql`
//     query navData_QL {
//         logo_img: file(name: {eq: "granteeIcon"}) {
//     childImageSharp {
//       gatsbyImageData(
//         width: 180
//           placeholder: BLURRED
//           formats: [AUTO, WEBP, AVIF]
//       )
//     }
//     name
//     relativePath
//     relativeDirectory
//   }

// } 
// `;



// const Navbar = () => {
//     const { logo_img } = useStaticQuery(navData_QL);

//     const [colorChange, setColorchange] = React.useState(false);

//     const changeNavbarColor = () => {
//         if (window.scrollY >= 60) {
//             setColorchange(true);
//         }
//         else {
//             setColorchange(false);
//         }
//     };
//     // console.log(logo_img);
//     return (
//         <nav className={`${nav_container} d-none d-lg-flex`}>
//             <div>
//                 <GatsbyImage image={getImage(logo_img.childImageSharp.gatsbyImageData)} alt={"banner"}></GatsbyImage>
//             </div>
//             <div className='d-block m-auto'>
//                 <div className={nav_middle}>
//                     {
//                         navMiddle.map(navItem =>
//                             <div className={nav_middle_items} key={navItem.name}>
//                                 {
//                                     navItem.url
//                                         ? <Link to={navItem.url} className={`text-decoration-none ${nav_middle_item}`}>
//                                             <span className={`${nav_middle_title} rotate_icon_parent position-relative`}>
//                                                 {navItem.name}
//                                                 {navItem.childs?.length && <span className='rotate_icon ms-2'> <RightArrow width={10} height={10} /> </span>}
//                                             </span>
//                                         </Link>
//                                         : <span className={`text-decoration-none ${nav_middle_item}`}>
//                                             <span className={`${nav_middle_title} rotate_icon_parent position-relative`}>
//                                                 {navItem.name}
//                                                 {navItem.childs?.length && <span className='rotate_icon ms-2'> <RightArrow width={10} height={10} /> </span>}
//                                             </span>
//                                         </span>
//                                 }

//                                 {
//                                     navItem.childs && <div className={nav_childs_wrapper}>
//                                         <div className={nav_childs}>
//                                             {
//                                                 navItem.childs && navItem.childs?.map(childNav =>
//                                                     <div className={"nav_child"} key={childNav.name}>
//                                                         <Link className={`${"link_style"} ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
//                                                         <div className={"nav_subs"}>
//                                                             {
//                                                                 childNav.sub_childs && childNav.sub_childs?.map(subChild => <Link className={`${"link_style"} ${nav_child_link} ${nav_sub}`} to={subChild.url} key={subChild.name}>{subChild.name}</Link>)
//                                                             }
//                                                         </div>
//                                                     </div>)
//                                             }
//                                         </div>
//                                     </div>
//                                 }

//                             </div>)
//                     }
//                 </div>

//             </div>


//             <div className={`${nav_middle} ${nav_right}`}>
//                 <Link className={`link_style ${get_start_btn}`} to={""}>Get started</Link>
//                 {
//                     navRight.map(navItem => <Link className={"link_style"} to={navItem.url} key={navItem.name}>{navItem.name}</Link>)
//                 }
//                 <Link className={`link_style ${search_icon}`} to={"/site-search"}><SearchIcon></SearchIcon></Link>
//             </div>

//         </nav>
//     );

//     /*
//     return (
//         <nav className={`${nav_container} d-none d-lg-flex`}>
//             <div>
//                 <GatsbyImage image={getImage(logo_img.childImageSharp.gatsbyImageData)}  alt={"banner"}></GatsbyImage>
//             </div>
//             <div className='d-block m-auto'>
//                 <div className={`${nav_middle}`}>
//                     {
//                         navMiddle.map(navItem => <div className={nav_middle_items} key={navItem.name}>
//                             <Link to={navItem.url} className={`text-decoration-none ${nav_middle_item}`}>
//                                 <span className={`${nav_middle_title} rotate_icon_parent position-relative`}>
//                                     {navItem.name} 
//                                     {navItem.childs?.length && <span className='rotate_icon ms-2'> <RightArrow width={10} height={10} /> </span>}
//                                 </span>
//                             </Link>
//                             {
//                                 navItem.childs && <div className={nav_childs_wrapper}>
//                                     <div className={nav_childs}>
//                                         {
//                                             navItem.childs && navItem.childs?.map(childNav => <div className={"nav_child"}  key={childNav.name}>
//                                                 <Link className={`${"link_style"} ${nav_child_link}`} to={childNav.url}>{childNav.name}</Link>
//                                                 <div className={"nav_subs"}>
//                                                     {
//                                                         childNav.sub_childs && childNav.sub_childs?.map(subChild =><Link className={`${"link_style"} ${nav_child_link} ${nav_sub}`} to={subChild.url} key={subChild.name}>{subChild.name}</Link>)
//                                                     }
//                                                 </div>
//                                             </div>)
//                                         }
//                                     </div>
//                                 </div>
//                             }
                            
//                         </div>)
//                     }
//                 </div> 

//             </div>


//             <div className={`${nav_middle} ${nav_right}`}>
//                 <Link className={`link_style ${get_start_btn}`} to={""}>Get started</Link>
//                 {
//                     navRight.map(navItem => <Link className={"link_style"} to={navItem.url} key={navItem.name}>{navItem.name}</Link>)
//                 }
//                 <Link className={`link_style ${search_icon}`} to={"/site-search"}><SearchIcon></SearchIcon></Link>
//             </div>

//         </nav>
//     );
//     */

// };

// export default Navbar;