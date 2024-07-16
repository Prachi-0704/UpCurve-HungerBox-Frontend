import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import img from '../../Assets/Cream and Brown Retro Streetwear Logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'red', height: '60px', marginBottom: '0px', paddingBottom: '0px', paddingTop: '0px' }}>
            <div className="container d-flex align-items-center p-0 m-0">
                <Link className="navbar-brand d-flex align-items-center me-0" to="/">
                    <img src={img} alt="Hungerbox" width="60" height="60" style={{ objectFit: 'contain' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="container-fluid d-flex align-items-center p-0 m-0">
                        <ul className="navbar-nav d-flex align-items-center mb-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active px-3 py-2" to="/" style={{ backgroundColor: 'white', border: '0.5px solid black', borderRadius: '4px' }}>Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active px-3 py-2" to="/about" style={{ backgroundColor: 'white', border: '0.5px solid black', borderRadius: '4px' }}>About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active px-3 py-2" to="/contact" style={{ backgroundColor: 'white', border: '0.5px solid black', borderRadius: '4px' }}>Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle px-3 py-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'white', border: '1px solid black', borderRadius: '4px' }}>
                                    Food
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/food/veg">Veg</Link></li>
                                    <li><Link className="dropdown-item" to="/food/non-veg">Non-Veg</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/food/vegan">Vegan</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <form className="d-flex mx-auto" role="search" style={{ borderRadius: '4px' }}>
                            <input
                                className="form-control me-1"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ width: '300px' }}
                            />
                            <button
                                className="btn btn-outline-dark black"
                                type="submit"
                                style={{ width: '80px' }}
                            >
                                Search
                            </button>
                        </form>

                        <Link to="/login" className="btn btn-primary ms-2">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
