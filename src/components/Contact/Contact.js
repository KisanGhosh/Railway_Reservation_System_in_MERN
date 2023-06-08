import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact'>
        <form>
            <h1 className='contact-heading'>Contact Us</h1>
            <div className='row'>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-6'>
                            <table className='table table-responsive'>
                                <tr>
                                    <th>Name</th>
                                    <td><input type='text' className='form-control' placeholder='Bording From'></input></td>
                                </tr>
                            </table>    
                        </div>
                        <div className='col-6'>
                            <table className='table table-responsive'>
                                <tr>
                                    <th>Mobile No.</th>
                                    <td><input type='text' className='form-control' placeholder='Bording To'></input></td>                            
                                </tr>
                            </table>    
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <table className='table table-responsive'>
                                <tr>
                                    <th>Email</th>
                                    <td><input type='mail' className='form-control' placeholder='Enter Your Mail'></input></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <table className='table table-responsive'>
                                <tr>
                                    <th>Subject</th>
                                    <td><input type='text' className='form-control' placeholder='Subject'></input></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <table className='table table-responsive'>
                                <tr>
                                    <th>Message</th>
                                    <td><input type='text' className='form-control' placeholder='Message'></input></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-success '>Submit</button>
        </form>
    </div>
  );
};

export default Contact;
