
//wr: bariz - header and footer tailwind use please dont edit without  permission



import { Button, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <nav>
                <div className="row d-flex justify-content-between pt-3 pb-2 align-items-center" style={{ background: '#9b0067' }}>
                    <div className="col-6 col-md-3 text-start ps-4">
                        <h2 className="text-white mb-0">
                            Day<span style={{ color: '#ff1cb3' }}> Habit</span>
                        </h2>
                    </div>

                   
                    <div className="col-6 d-md-none text-end pe-4">
                        <Button variant="light" onClick={handleShow}>
                            ☰
                        </Button>
                    </div>

                   
                    <div className="col-md-6 d-none d-md-flex justify-content-around">
                        <h5 className="text-white m-0">Home</h5>
                        <h5 className="text-white m-0">Pages</h5>
                        <h5 className="text-white m-0">Profile</h5>
                    </div>

                    <div className="col-md-3 d-none d-md-flex justify-content-center">
                        <Button variant="outline-light" className="me-3 ps-4 pe-4 rounded" style={{ color: '#ff1cb3' }}>
                            Sign up
                        </Button>
                        <Button variant="outline-light" className="ps-4 pe-4 rounded" style={{ color: '#ff1cb3' }}>
                            Log In
                        </Button>
                    </div>
                </div>
            </nav>

            {/* cheriya screen response avan cheythu  */}

            <Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header style={{ background: '#ff1cb3' }} closeButton >
                    <Offcanvas.Title className='text-white'>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ background: '#9b0067' }}>
                    <div className="d-flex flex-column align-items-start">
                        <h5 className="mb-3 text-white">Home</h5>
                        <h5 className="mb-3 text-white">Pages</h5>
                        <h5 className="mb-3 text-white">Profile</h5>
                        <hr />
                        <Button variant="outline-light" className="mb-2 w-100" style={{ color: '#ff1cb3' }}>
                            Sign up
                        </Button>
                        <Button variant="outline-light" className="w-100" style={{ color: '#ff1cb3' }}>
                            Log In
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Header