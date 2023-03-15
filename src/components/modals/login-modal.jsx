import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { actions as userLoginAction } from '../../store/user';


const customStyles = {
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '9000'
    }
}

Modal.setAppElement( 'body' );

function LoginModal (props) {
    const [ open, setOpen ] = useState( false );
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ userData, setUserData ] = useState({
        newName: '',
        newEmail: '',
        newPassword: '',        
    });
    const { newName, newEmail, newPassword } = userData;
    const [ newAvatar, setNewAvatar ] = useState('');
    const [ newAvatarPreview, setNewAvatarPreview ] = useState('/images/team/about-2/member-1.jpg');
    const user = props.user ? props.user.user : undefined;
    const error = props.error ? props.error : undefined;

    let timer;

    useEffect( () => {
        if (error && error.length > 0) {
            setOpen( true );
        } else {
            setOpen( false );
        }
        return () => {
            if ( timer ) clearTimeout( timer );
        }
    }, [error] );

    function closeModal () {
        document.getElementById( "login-modal" ).classList.remove( "ReactModal__Content--after-open" );

        if ( document.querySelector( ".ReactModal__Overlay" ) ) {
            document.querySelector( ".ReactModal__Overlay" ).style.opacity = '0';
        }

        timer = setTimeout( () => {
            setOpen( false );
        }, 350 );
    }

    function openModal ( e ) {
        e.preventDefault();
        setOpen( true );
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function onChange(e) {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setNewAvatarPreview(reader.result);
                    setNewAvatar(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setUserData({ ...userData, [e.target.name]: e.target.value})
        }
    }

    function onUserLogin (e) {
        e.preventDefault();        
        props.getLoginRequest(email, password);   
        if (!error) {
            setOpen( false );
        } else {
            setOpen( true );
        }
    }

    function onUserRegister (e) {
        e.preventDefault();

        props.getRegisterUserRequest({...userData, 'avatar': newAvatar});   
    }

    function onUserLogout (e) {
        e.preventDefault();        
        props.getLogoutRequest();
    }

    return (
        <li>
            {
                user ?   
                    <div className="header-dropdown">
                        <Link to="!#" className="btn" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            
                            <img src={user.avatar && user.avatar.url} alt={user && user.name} className="social-icon"/>   
                            <span>{user && user.name}</span>&nbsp;&nbsp;&nbsp;                        
                        </Link>
                        <div className="header-menu">
                            <ul>
                                { user && user.role !== 'admin' ? (
                                    <li><Link className='dropdown-item' to="/account/dashboard#orders">Orders</Link></li>
                                ) : (
                                    <li><Link className='dropdown-item' to="/account/dashboard">Dashboard</Link></li>
                                )}                                
                                <li><a href="/account/dashboard#orders">Profile</a></li>
                                <li><a href="/logout" onClick={ onUserLogout }>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    :             
                    <div className='with-gutter'><a href="/" onClick={ openModal }>Sign in / Sign up</a></div>
            }
            {
                error || open ?
                    <Modal
                        isOpen={ open }
                        style={ customStyles }
                        contentLabel="login Modal"
                        className="modal-dialog"
                        overlayClassName="d-flex align-items-center justify-content-center"
                        id="login-modal"
                        onRequestClose={ closeModal }
                        closeTimeoutMS={ 10 }
                    >
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" className="close" onClick={ closeModal }>
                                    <span aria-hidden="true"><i className="icon-close"></i></span>
                                </button>
                                <div className="form-box">
                                    <div className="form-tab">
                                        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                            <TabList className="nav nav-pills nav-fill">
                                                <Tab className="nav-item">
                                                    <span className="nav-link">Sign In</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <span className="nav-link">Register</span>
                                                </Tab>
                                            </TabList>

                                            <div className="tab-content">
                                                <TabPanel style={ { paddingTop: "2rem" } }>
                                                    <div>
                                                        <form action="#" onSubmit={ onUserLogin }>
                                                            <div className="form-group">
                                                                <label htmlFor="singin-email-2">Username or email address *</label>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    id="singin-email-2" 
                                                                    name="singin-email" 
                                                                    value={email}
                                                                    onChange={ handleEmailChange }
                                                                    required                                                                         
                                                                    />
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="singin-password-2">Password *</label>
                                                                <input 
                                                                    type="password" 
                                                                    className="form-control" 
                                                                    id="singin-password-2" 
                                                                    name="singin-password" 
                                                                    value={password}
                                                                    onChange={ handlePasswordChange }
                                                                    required />
                                                            </div>

                                                            { error && <div className='alert alert-danger'>{error}</div>}

                                                            <div className="form-footer">
                                                                <button type="submit" className="btn btn-outline-primary-2">
                                                                    <span>LOG IN</span>
                                                                    <i className="icon-long-arrow-right"></i>
                                                                </button>
                                                                
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="signin-remember-2" />
                                                                    <label className="custom-control-label" htmlFor="signin-remember-2">Remember Me</label>
                                                                </div>

                                                                <a href="/" className="forgot-link">Forgot Your Password?</a>
                                                            </div>
                                                        </form>
                                                        <div className="form-choice">
                                                            <p className="text-center">or sign in with</p>
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <a href="/" className="btn btn-login btn-g">
                                                                        <i className="icon-google"></i>
                                                                            Login With Google
                                                                    </a>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <a href="/" className="btn btn-login btn-f">
                                                                        <i className="icon-facebook-f"></i>
                                                                            Login With Facebook
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <form action="#" onSubmit={onUserRegister} encType='multipart/form-data'>
                                                        <div className="form-group">
                                                            <label htmlFor="register-name-2">Your full name *</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control" 
                                                                id="register-name-2" 
                                                                name="newName" 
                                                                value={newName}
                                                                onChange={onChange}
                                                                required                                                                 
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="register-email-2">Your email address *</label>
                                                            <input 
                                                                type="email" 
                                                                className="form-control" 
                                                                id="register-email-2" 
                                                                name="newEmail" 
                                                                value={newEmail}
                                                                onChange={onChange}
                                                                required                                                                 
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="register-password-2">Password *</label>
                                                            <input 
                                                                type="password" 
                                                                className="form-control" 
                                                                id="register-password-2" 
                                                                name="newPassword"
                                                                value={newPassword}
                                                                onChange={onChange} 
                                                                required />
                                                        </div>

                                                        <div className="form-group">
                                                            <label htmlFor="avatar_upload">Avatar *</label>
                                                            <div className='d-flex align-items-center'>
                                                                <div>
                                                                        <img 
                                                                            src={newAvatarPreview}
                                                                            className='social-icon'
                                                                            alt='Avatar Preview'
                                                                        />
                                                                </div>
                                                                <div className='custom-file'>
                                                                    <input
                                                                        type='file'
                                                                        name='avatar'
                                                                        className='custom-file-input'
                                                                        id='customFile'
                                                                        accept='images/all'
                                                                        onChange={onChange}
                                                                    />
                                                                    <label className='custom-file-label' htmlFor='customFile'>
                                                                        Choose Avatar
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="form-footer">
                                                            <button 
                                                                type="submit" 
                                                                className="btn btn-outline-primary-2"
                                                                // disabled={loading}
                                                            >
                                                                <span>SIGN UP</span>
                                                                <i className="icon-long-arrow-right"></i>
                                                            </button>

                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                                                <label className="custom-control-label" htmlFor="register-policy-2">I agree to the privacy policy *</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="form-choice">
                                                        <p className="text-center">or sign in with</p>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <a href="/" className="btn btn-login btn-g">
                                                                    <i className="icon-google"></i>
                                                                    Login With Google
                                                                </a>
                                                            </div>
                                                            <div className="col-md-6 mt-1 mt-md-0">
                                                                <a href="/" className="btn btn-login  btn-f">
                                                                    <i className="icon-facebook-f"></i>
                                                                    Login With Facebook
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            </div>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    : ''
            }
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user ? state.user.user.user : undefined,
        error: state.user.error ? state.user.error : undefined,
    }
}

export default connect(mapStateToProps, {...userLoginAction})(LoginModal);