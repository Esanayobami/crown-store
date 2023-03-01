import { Outlet  , Link } from "react-router-dom";
import { Fragment } from "react";

const Nav = () => {
    return(
      <Fragment>
        <div className="navigation">
            <Link className="Logo-container" to="/">
                <div>Logo</div>
            </Link>
            <div className="links-container">
                <Link className="link" to="/shop">
                    Shop
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Nav;