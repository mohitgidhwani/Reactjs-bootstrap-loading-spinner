import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    let storeTheme = localStorage.getItem('theme')
    const [theme, setTheme] = useState(storeTheme)

    useEffect(() => {
        document.body.className = theme
      localStorage.setItem('theme' , theme)
    },[theme])





    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/products'} className="nav-link" href="#">Products</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <select className="form-select" onChange={(e) => { setTheme(e.target.value) }}>
                                <option selected >Theme</option>
                                <option value={"light"}>Light</option>
                                <option value={"dark"}>Dark</option>
                            </select>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header