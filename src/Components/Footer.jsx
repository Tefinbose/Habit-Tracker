import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (

        <>
            <footer>
                <div
                    className='row d-flex justify-content-evenly p-4'style={{background: '#9b0067',width: '100%',margin: '0'}}
                >
                    <div className="col-md-3 text-center mt-4">
                        <h5 className='text-white mb-4'>Sign up or Log in </h5>
                        <div>
                            <Button variant="outline-light" className='btn me-3 ps-4 pe-4 rounded' style={{ color: '#ff1cb3' }}>Sign up</Button>
                            <Button variant="outline-light" className='btn ps-4 pe-4 rounded' style={{ color: '#ff1cb3' }}>Log In</Button>
                        </div>
                    </div>

                    <div className="col-md-3 text-center mt-4">
                        <h5 className='text-white'>Menu</h5>
                        <div className='d-flex justify-content-evenly mt-4' style={{ color: '#ff1cb3' }}>
                            <h6>Home</h6>
                            <h6>Pages</h6>
                            <h6>Profile</h6>
                        </div>
                    </div>

                    <div className="col-md-3 text-center mt-4">
                        <h5 className='text-white'>Social Media</h5>
                        <div className='d-flex justify-content-evenly mt-4' style={{ color: '#ff1cb3', fontSize: '30px' }}>
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faTelegram} />
                        </div>
                    </div>

                    <div className="col-md-3 text-center mt-4">
                        <h5 className='text-white'>Contact</h5>
                        <div className='d-flex mt-4'>
                            <Form.Control
                                aria-label="Default"
                                placeholder='Enter Email'
                            />
                            <button className='btn btn-rounded text-white ms-2' style={{ background: '#ff1cb3' }}>Submit</button>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer