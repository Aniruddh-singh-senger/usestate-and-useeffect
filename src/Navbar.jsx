import { Route, Switch, Link } from "react-router-dom";
import React, { useState } from 'react'
import Home from './Home';
import Services from './Services'
import Contact from './Contact';
import About from './About'


const Navbar = () => {
    const [show, setShow] = useState();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" as={Link} to={'/Home'}>Web development</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                        <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" as={Link} to={'/Home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={Link} to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={Link} to={"/Services"}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={Link} to={"/Contact"}>Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-success" type="submit">Login</button>
                            <button className="btn btn-outline-success" type="submit">Signup</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
                <Route path="/Services">
                    <Services />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        
        </>
    )
}

export default Navbar