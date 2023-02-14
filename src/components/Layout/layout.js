
import * as React from "react";
import "../../styles/global.css";
import "../../styles/common.css";
import BottomFooter from "./Footer/BottomFooter";
import Footer from "./Footer/Footer";
import Header from "./Header";
import {margin} from "./layout.module.css";

const Layout = ({ className = "", children, nav }) => {

  React.useEffect(() => {
    // set the page full height vass value (for navbar drawer)
    document.documentElement.style.setProperty("--full_page_height", `${document.documentElement.scrollHeight}px`)
  }, [])

  return (
    <>
      <Header nav={nav} />
      <div className={margin}>
        <main className={className}>
          {children}
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default Layout;
