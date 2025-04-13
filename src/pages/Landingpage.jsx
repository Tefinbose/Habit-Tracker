import React from 'react'
import image1 from './images/1.jpg';
import image2 from './images/2.png';

import Button from 'react-bootstrap/Button';


function Landingpage() {
    return (
        <>

            <div className="w-100"
                style={{ backgroundImage: `url(${image1})`, minHeight: '400px', }}
            >
                <div className="container d-flex align-items-center justify-content-center" style={{ height: '600px' }}>

                    <div className="row w-100 align-items-center">

                        <div className="col-lg-6 text-center  mb-4  mb-lg-0">

                            <h1 className="text-white">Welcome to Habit</h1>
                            <h5 style={{ color: '#ff1cb3' }}>
                                Build Better Routines. Live Your Best Life.
                            </h5>
                            <div className="mt-4">
                                <Button
                                    variant="outline-light"
                                    className="me-3 px-4 py-2 rounded"
                                    style={{ color: '#ff1cb3' }}
                                >
                                    Sign Up
                                </Button>
                                <Button
                                    variant="outline-light"
                                    className="px-4 py-2 rounded"
                                    style={{ color: '#ff1cb3' }}
                                >
                                    Log In
                                </Button>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center">
                            <img src={image2} style={{ maxWidth: '400px', height: 'auto', maxHeight: '420px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landingpage