import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTruck,
  faShop,
  faPercentage,
  faUser,
  faPhone,
  // faHeart,
  faBucket,
  faArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useAsyncRequest } from "../hooks/useAsyncRequest";
import { useSelector } from "react-redux";

import useRouter from "../hooks/useRouter";
import { getUser } from "../utils/authUtils";
import { getCurrentUser } from "../redux/selectors/auth.selector";
import { categoriesTypes } from "../utils/globals";

const logo: string = require("../assets/images/logo.svg").default;

const Navbar = () => {
  const { navigate, pathname } = useRouter();
  // const
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [categories] = useState(categoriesTypes);

  const current_user = useSelector((state) => getCurrentUser(state as any));

  const onAccountClick = useCallback(async () => {
    if (pathname === "/") {
      !current_user && navigate("auth/");
    }
    return;
  }, []);

  console.log(current_user);

  return (
    <Fragment>
      <div className="container-fullwidth border-bottom pb-15 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="nav-elements d-flex text-sm-center">
                <div className="nav-element d-flex align-items-center pe-2 after-border">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="mb-0">Find a Store</p>
                </div>
                <div className="nav-element d-flex align-items-center  pl-8 pe-2 after-border">
                  <FontAwesomeIcon icon={faTruck} />
                  <p className="mb-0">Customer Care</p>
                </div>
                <div className="nav-element d-flex align-items-center pl-8 after-el">
                  <FontAwesomeIcon icon={faShop} />
                  <p className="mb-0">Shop</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-md-block">
              <div className="nav-elements d-flex justify-content-end">
                <div className="nav-element d-flex me-3 align-items-center after-border pe-2">
                  <p className="mb-0">
                    Free shipping worldwide. Orders over $200
                  </p>
                </div>
                <div className="nav-element d-flex me-3 align-items-center">
                  <p className="mb-0">Customer Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row-flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-dropdowns">
            <div className="nav-dropdown">
              <h4>Home</h4>
              <ul className="nav-dropdown-list">
                <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
              </ul>
            </div>
            <div className="nav-dropdown">
              <h4>Shop</h4>
              <ul className="nav-dropdown-list">
                <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
              </ul>
            </div>
            <div className="nav-dropdown">
              <h4>Pages</h4>
              <ul className="nav-dropdown-list">
                <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
              </ul>
            </div>
            <div className="nav-dropdown">
              <h4>Blog</h4>
              <ul className="nav-dropdown-list">
                <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
              </ul>
            </div>
            <div className="nav-dropdown">
              <h4>Contact</h4>
              <ul className="nav-dropdown-list">
                <li>Home2</li>
                <li>Home3</li>
                <li>Home4</li>
              </ul>
            </div>
          </div>
          <div className="navs-groups">
            <div className="nav-group me-4">
              <div className="nav-group__badge">
                <FontAwesomeIcon icon={faPercentage} />
              </div>
              <div className="nav-group__item">
                <p className="item__sub-title">On this weekend</p>
                <h4 className="item__title">Amazing Deals</h4>
              </div>
            </div>
            <div className="nav-group">
              <div className="nav-group__badge">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="nav-group__item">
                <p className="item__sub-title">24/7</p>
                <h4 className="item__title">1-800-888-9999</h4>
              </div>
            </div>
          </div>
          <div className="nav-helpers">
            <div
              className="nav-helper me-3 cursor-pointer"
              onClick={onAccountClick}
            >
              <div className="nav-helper__badge">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="nav-helper me-3 cursor-pointer">
              <div className="nav-helper__badge">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <div className="nav-helper me-3 cursor-pointer">
              <div className="nav-helper__badge">
                <FontAwesomeIcon icon={faBucket} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fullwidth mt-3 bg-primary-blue">
        <div className="container-fluid">
          <div className="search-nav">
            <div className="search-nav-department">
              <div className="department-icon">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="search-nav-title">
                <h4>Shop By Department</h4>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
            <div className="search-nav-bar">
              <div className="search-nav-bar__options">
                <p
                  className="mb-0 cursor-pointer"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  All Category
                </p>
                <div
                  className={isOpen ? "inner-options active" : "inner-options"}
                >
                  {categories.map((item, index) => (
                    <div className="option" key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control border-less shadow-less"
                />
              </div>
              <div className="search-btn">
                <button className="btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
            <div className="end-nav">
              <div className="search-nav-title">
                <h4>Recently Viewed</h4>
                <FontAwesomeIcon icon={faArrowDown} />
              </div>
            </div>
          </div>
        </div>
        {/* {isOpen ? <PortalModal isOpen={false} /> : null} */}
      </div>
    </Fragment>
  );
};

export default Navbar;
