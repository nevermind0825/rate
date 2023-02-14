import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';



const faq_titleList_QL = graphql`
query faq_titleList_QL {
    faqTitles: staticPagesJson {
      faqList {
        what_is {
          title
          id
        }
        should_refinance {
          title
          id
        }
        other_aspect {
          id
          title
        }
        home_rate {
          id
          title
        }
        find_low_rate {
          id
          title
        }
        How_refinance {
          id
          title
        }
      }
    }
  }

`;

const FAQ_refinance = () => {
    const {faqTitles:faqList} = useStaticQuery(faq_titleList_QL);
    // console.log(Object.values(faqList.faqList).map(el=>({title:el.title,id:el.id})),"faqTitles");
    // console.log(faqList.faqList,"faqTitles");
    
    return (
        <section>
          <h2>Mortgage refinancing FAQ</h2>
            {
                Object.values(faqList.faqList).map(el=>({title:el.title,id:el.id})).map(faq => <a className='linkSt d-block my-3 text-black' href={`#${faq.title}`} key={faq.id}>{faq.title}</a>)
            }
        </section>
    );
};

export default FAQ_refinance;