import React from 'react'
import image3 from './images/5.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Singup() {
    return (
        <>
            <div style={{ backgroundImage: `url(${image3})`, minHeight: '500px', width: '100%', backgroundSize: 'cover', }}>
                <div className='row'>
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-5 p-4">
                        <div className='text-center border rounded text-white d-flex justify-content-center '>
                            <div>
                                <h1 className='mt-3' style={{ color: '#ff1cb3' }}>Sing up</h1>
                                <Form.Control placeholder='User Name' style={{ width: '400px' }} className='text-center mt-4 ' />
                                <Form.Control type='password' placeholder='Password' style={{ width: '400px' }} className='text-center mt-4' />
                                <Form.Control type='Email' placeholder='Email' style={{ width: '400px' }} className='text-center mt-4' />

                                <Button variant="outline-light" className='btn m-3 ps-5 pe-5 rounded' style={{ color: '#ff1cb3' }}>Sing up</Button>

                                <h6 className='mb-4 '>forgot password? / <Link to={'/Login'} className='text-white text-decoration-none'>Login</Link></h6>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>

    )
}

export default Singup