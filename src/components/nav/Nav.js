import React, {useEffect, useState} from "react";
import "./Nav.css"
import Logo from "./logo/Logo";
import {Link} from "react-router-dom";
import {fetchCurrentUser, logoutUser} from "../../actions/currentUserActions";
import {useDispatch, useSelector} from "react-redux";
import {
    MDBCollapse,
    MDBContainer, MDBIcon, MDBInputGroup,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import Loader from "../calc/Loader";
import whiteSVG from "../whiteSVG.svg";
import Image from "react-bootstrap/Image";

const Nav = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.currentUser.currentUser);
    const userIsLoading = useSelector(state => state.currentUser.userIsLoading);
    useSelector(state => state.currentUser.userError);
    const allFilesForEffect = useSelector(state => state.files.allFiles);
    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [])

    useEffect(() => {
        setBasicActive(document.location.pathname);
    }, [document.location.pathname])

    const [showNav, setShowNav] = useState(false);
    const [basicActive, setBasicActive] = useState('/');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    let logout = (event) => {
        dispatch(logoutUser())
    }



    return (
        <MDBNavbar expand='lg' light bgColor='' style={{border: "solid 1px #cccabf", height: "7vh"}}>
            <MDBContainer fluid>
                <MDBNavbarBrand><Logo/></MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                >
                    Меню
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav} className="z-3">
                    <MDBNavbarNav className="z-3">
                        <MDBNavbarItem onClick={() => handleBasicClick('/')}>
                            <Link to="/">
                                <button className={basicActive === "/" ? 'btn btnm activeChose' : 'btn btnm'}>Home
                                </button>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem onClick={() => handleBasicClick('/files')}>
                            <Link to="/files">
                                <button
                                    className={basicActive === "/files" ? 'btn btnm activeChose' : 'btn btnm'}>Мої
                                    файли
                                </button>
                            </Link>
                        </MDBNavbarItem>
                        {currentUser ? (
                            <div>
                                {currentUser.role === "admin" ? (
                                    <div>
                                        <MDBNavbarItem>
                                            <Link to="/Products">
                                                <button
                                                    onClick={() => handleBasicClick('/Products')}
                                                    className={basicActive === "/Products" ? 'btn btnm activeChose' : 'btn btnm'}>Продукти
                                                </button>
                                            </Link>
                                            <Link to="/Orders">
                                                <button
                                                    onClick={() => handleBasicClick('/Orders')}
                                                    className={basicActive === "/Orders" ? 'btn btnm activeChose' : 'btn btnm'}>Замовлення
                                                </button>
                                            </Link>
                                            <Link to="/CashFull">
                                                <button
                                                    onClick={() => handleBasicClick('/CashFull')}
                                                    className={basicActive === "/CashFull" ? 'btn btnm activeChose' : 'btn btnm'}>Каса(Без привязки к заказу)
                                                </button>
                                            </Link>
                                        </MDBNavbarItem>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </MDBNavbarNav>
                </MDBCollapse>
                {currentUser ? (
                    <div>
                        {currentUser.role === "admin" ? (
                            <MDBInputGroup tag="form" className='d-flex w-auto'>
                                <Link disabled onClick={() => handleBasicClick('/admin')} to="/admin">
                                    <button className={basicActive === "/admin" ? 'btn btnm activeChose' : 'btn btnm'}>Адмін
                                        керування
                                    </button>
                                </Link>
                                <Link onClick={() => handleBasicClick('/currentUser')} to="/currentUser">
                                    <button className={basicActive === "/createOrder" ? 'btn btnm activeChose' : 'btn btnm'}>Налаштування: {currentUser.name}
                                        <Image className=""
                                               style={{width: "1.7vw", height: "1.7vw", marginLeft: "auto"}}
                                               src={whiteSVG} roundedCircle/>
                                    </button>
                                </Link>
                                <button onClick={logout} className="btn btnm">Вийти</button>
                            </MDBInputGroup>
                            ) : (
                        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                            <Link onClick={() => handleBasicClick('/currentUser')} to="/currentUser">
                                <button className={basicActive === "/createOrder" ? 'btn btnm activeChose' : 'btn btnm'}>Налаштування: {currentUser.name}
                                    <Image className=""
                                           style={{width: "1.7vw", height: "1.7vw", marginLeft: "auto"}}
                                           src={whiteSVG} roundedCircle/>
                                </button>
                            </Link>
                            <button onClick={logout} className="btn btnm">Вийти</button>
                        </MDBInputGroup>
                        )}
                    </div>
                ) : (
                <Link onClick={() => handleBasicClick('/login')} to="/login">
                    <button className={basicActive === "/login" ? 'btn btnm activeChose' : 'btn btnm'}>Логін</button>
                </Link>
                )}
            </MDBContainer>
        </MDBNavbar>
    )
};

export default Nav;