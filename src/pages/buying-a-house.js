import React from 'react';
import BannerByingHouse from '../components/Buying_A_House/BannerByingHouse';

import BuyingHouseToday from '../components/Buying_A_House/BuyingHouseToday';

import FAQ_HomeBuying from '../components/Buying_A_House/FAQ_HomeBuying';



import ToolsOptionsPricing from '../components/Buying_A_House/ToolsOptionsPricing';
import TopHomeBuyAtricle from '../components/Buying_A_House/TopHomeBuyAtricle/TopHomeBuyAtricle';

import Layout from '../components/Layout/layout';


const BuyingAhouse = () => {
    return (
        <Layout className='container'>
            <BannerByingHouse />
            <ToolsOptionsPricing />
            <hr className='horizontal' />
            <BuyingHouseToday />
            <FAQ_HomeBuying />
            
            <TopHomeBuyAtricle />
        </Layout>
    );
};

export default BuyingAhouse;


