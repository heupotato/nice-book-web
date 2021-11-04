import React from "react";
import {useHistory} from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '700px',
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
    },
};

function Header() {
    const history = useHistory();
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleDirectToHomepage = () => {
        history.push({
            pathname: '/',
        });
    }

    const handleDirectToLogin = () => {
        history.push({
            pathname: '/login',
        });
    }

    const handleDirectToSignup = () => {
        history.push({
            pathname: '/signup',
        });
    }

    const handleClickSearch = () => {
        openModal();
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <header>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h1>Warning</h1>
                <div className="line"></div>
                <div style={{marginBottom: '30px', marginTop: '30px', fontFamily: 'Montserrat', fontSize: '22px'}}>You have to login to use this service.</div>
                <div className="line"></div>
                <button className="btn btn-primary btn-lg button-center" onClick={closeModal}>OK</button>
            </Modal>
            <div className="header-style">
                <div className="header-component">
                    <div>
                        <img className="logo-header" src='../images/Logo.png' onClick={handleDirectToHomepage}></img>
                    </div>
                    <div className="header-component">
                        <select className="select-filter">
                            <option>Author</option>
                            <option>Title</option>
                        </select>
                        <input className="search-input form-control input-field-search"  style={{borderRadius: '0rem 0.25rem 0.25rem 0rem'}} placeholder="Search any book..." name="search" type="text"/>
                        <i className="fa fa-search icon-search fa-lg" onClick={handleClickSearch}></i>
                    </div>
                    <div className="header-component left-component">
                        <button type="button" className="btn-login-header" onClick={handleDirectToLogin}>Login</button>
                        <button type="button" className="btn-signup-header" onClick={handleDirectToSignup}>Sign up</button>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;