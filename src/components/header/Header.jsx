import React from 'react'
import HighlightIcon from "@material-ui/icons/Highlight";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HowToRegOutlinedIcon from '@material-ui/icons/HowToRegOutlined';
// import LoginSharpIcon from '@material-ui/icons/LoginSharp';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <div className="">
                    <div className="row">
                        <div className="col-lg-6 ms-6">
                            <NavLink to="/" style={{ textDecoration: 'none' }}>
                                <h1>
                                    <HighlightIcon />
                                    Google Keep
                                </h1>
                            </NavLink>
                        </div>
                        <div className="col-lg-6">
                            <NavLink to="/contact" className="btn btn-dark"><ContactMailIcon /></NavLink>
                            <NavLink to="/registration" className="btn btn-dark ms-3"><HowToRegOutlinedIcon /></NavLink>
                            <NavLink to="/login" className="btn btn-dark ms-3">Login</NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
