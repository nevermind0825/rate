import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { FBicon, InstagramIcon, LinkedINIcon, TwitterIcon, YoutubeIcon } from '../../../utils/icons/SocialIcons';
import FooterColumn from './FooterColumn';
import * as styles from "./footer.module.css"


const footerMortgage = [
    { name: "Sign in to your account", url: "" },
    { name: "Pay your mortgage", url: "/servicing" },
    { name: "Contact us", url: "/contact-us" },
]
const granteeData = [
    { name: "About us", url: "/about" },
    { name: "Careers", url: "/careers" },
    { name: "Press", url: "/news" },
    { name: "Insurance", url: "/insurance" },
    { name: "HELOC", url: "/heloc" },
]
const careerData = [
    { name: "Loan office", url: "/careers/loan-officers" },
    { name: "Operations", url: "/careers/operations" },
    { name: "Tech", url: "/careers/gr-tech" },
    { name: "All open positions", url: "/careers/open-positions" },
]
const websiteData = [
    { name: "Graunteed Rate Insurance", url: "/insurance" },
    { name: "Owning", url: "https://www.owning.com/" },
    { name: "Ravenswood Title", url: "https://www.ravenswoodtitle.com/" },
    { name: "Agent Advantage", url: "https://agents.rate.com/" },
]

const contactIcons = [
    { name: <YoutubeIcon width={60} height={60} />, url: "https://www.youtube.com/channel/UCc4dTfT3Eh1lU59jjsp4EuQ", },
    { name: <InstagramIcon width={60} height={60} />, url: "https://www.instagram.com/guaranteedrate/", },
    { name: <LinkedINIcon width={60} height={60} />, url: "https://www.linkedin.com/company/guaranteed-rate", },
    { name: <TwitterIcon width={60} height={60} />, url: "https://twitter.com/guaranteedrate", },
    { name: <FBicon width={60} height={60} />, url: "https://www.facebook.com/guaranteedRate", },
]

const footerData = [
    { title: "Your Mortgage", data: footerMortgage },
    { title: "Guaranteed Rate", data: granteeData },
    { title: "Careers", data: careerData },
    { title: "Websites", data: websiteData, },
]

const shortedLinks = [
    { name: "Accessibility", url: "/accessibility" },
    { name: "Licensing ", url: "/licensing" },
    { name: "Notice to Vendors", url: "/notice-to-vendor" },
    { name: "Privacy Policies", url: "/privacy" },
    { name: "SMS Terms", url: "/sms-terms" },
    { name: "Terms of Use", url: "/terms" },
    { name: "NMLS Consumer Access", url: "/" },
]

const Footer = () => {
    return (
        <div >
            <div className={styles.others} >
                {
                    footerData.map(footerItem => <div key={footerItem.title}>
                        <h5 style={{ margin: "10px" }}>{footerItem.title}</h5>
                        <div className={styles.sub_sub}>
                            {
                                footerItem.data.map((footerColumn, idx) => <FooterColumn footerColumn={footerColumn} key={idx}></FooterColumn>)
                            }
                        </div>
                    </div>)
                }
            </div>

            <div className={styles.contact}>
                <h5 style={{fontSize:"3rem",marginBottom:"1rem", fontWeight:"bold"}} >Connect with us</h5>
                <div className={styles.icons}>
                    {
                        contactIcons.map((footerColumn, idx) => <FooterColumn footerColumn={footerColumn} key={idx}></FooterColumn>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;


