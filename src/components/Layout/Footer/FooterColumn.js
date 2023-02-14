import { Link } from 'gatsby';
import React from 'react';

const FooterColumn = ({footerColumn}) => {
    return (
        <div style={{margin:"10px",}}>
            <Link className='text-black text-decoration-none' style={{fontWeight:400}} to={footerColumn.url}>{footerColumn.name}</Link>
        </div>
    );
};

export default FooterColumn;