import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='register'>
      <form>
      <div className='container'>
        <div className='row'>
            <div className='col-12 form'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='form-area'>
                            <h4>Individual Registration</h4>
                            <hr/>

                            <div className='row'>
                                <div className='col-12 personal-data-area'>
                                    <div className='row'>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>User Id<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='firstname' placeholder='Enter User Id' required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Password<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='password' className='form-control' name='middlename' placeholder='Enter Password'></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Confirm Password<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='password' className='form-control' name='surname' placeholder='Again Enter Password'></input></td>
                                                </tr>
                                            </table>
                                        </div>  
                                    </div>
                                    <div className='row'>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Security Question<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='phone' placeholder='Enter Security Question' required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Security Answer</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='email' placeholder='Enter Security Answer'></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Preferrence Language<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control'  required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <hr/>

                            <div className='row'>
                                <div className='col-12 personal-data-area'>
                                    <h6 className='heading'>Personal Data Form</h6>
                                    <div className='row'>
                                        <div className='col-12 sub-heading-personal' >
                                            <h6>Enter Your Personal Details</h6>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>First Name<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='firstname' placeholder='Enter First Name' required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Middle Name</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='middlename' placeholder='Enter Middle Name'></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Sur Name</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='surname' placeholder='Enter Sur Name'></input></td>
                                                </tr>
                                            </table>
                                        </div>  
                                    </div>
                                    <div className='row'>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Mobile Number<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='number' className='form-control' name='phone' placeholder='Enter Mobile Number' required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Email Id</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='email' className='form-control' name='email' placeholder='Enter Email Id'></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Date of Birth<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='date' className='form-control' name='date' required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Religion<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' className='form-control' name='religion' placeholder='Enter Religion' required></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Age</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='number' className='form-control' name='age' placeholder='Enter Your Age'></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Maritial Status<span>*</span></th>
                                                </tr>
                                                <tr>
                                                    <td><input type='radio' name='status' value="Married" required></input>Married</td>
                                                    <td><input type='radio' name='status' value="Single" required></input>Single</td>
                                                    <td><input type='radio' name='status' value="Divorced" required></input>Divorced</td>
                                                    <td><input type='radio' name='status' value="Widowed" required></input>Widowed</td>
                                                    <td><input type='radio' name='status' value="Separated" required></input>Separated</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-4 form-panel'>
                                            <table className='table table-responsive'>
                                                <tr>
                                                    <th>Birth Place</th>
                                                </tr>
                                                <tr>
                                                    <td><input type='text' name='birth' className='form-control' placeholder='Enter Birth Place'></input></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            <div className='row'>
                               <div className='col-12'>
                                     <div className='row'>
                                        <div className='col-12 present-add-area'>
                                             <h6 className='heading-present-add'>Present Address</h6>
                                            <div className='row'>
                                                 <div className='col-6 sub-heading-present-add' >
                                                    <h6>Enter Your Address</h6>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-6 form-panel'>
                                                    <table className='table table-responsive'>
                                                        <tr>
                                                            <th>Present Address</th>
                                                        </tr>
                                                        <tr><textarea className='form-control' name='presentadd' placeholder='Enter Present Address'></textarea></tr>
                                                    </table>
                                                </div>
                                            
                                                <div className='col-6 form-panel'>
                                                    <table className='table table-responsive'>
                                                        <tr>
                                                            <th>Police Station</th>
                                                        </tr>
                                                        <tr><input type='text' className='form-control' name='presentpolicestation' placeholder='Enter Police Station'></input></tr>
                                                    </table>
                                                </div>
                                                </div>    
                                            <div className='row'>
                                                <div className='col-6 form-panel'>
                                                    <table className='table table-responsive'>
                                                        <tr>
                                                            <th>Pin Code</th>
                                                        </tr>
                                                        <tr><input type='number' className='form-control' name='presentpin' placeholder='Enter Pin'></input></tr>
                                                    </table>
                                                </div>
                                                <div className='col-6 form-panel'>
                                                    <table className='table table-responsive'>
                                                        <tr>
                                                            <th>City</th>
                                                        </tr>
                                                        <tr><input type='text' className='form-control' name='presentpin' placeholder='Enter Pin'></input></tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-6 form-panel'>
                                                    <table className='table table-responsive'>
                                                        <tr>
                                                            <th>State</th>
                                                        </tr>
                                                        <tr><input type='text' className='form-control' name='presentpin' placeholder='Enter Pin'></input></tr>
                                                    </table>
                                                </div>
                                                <div className='col-6 form-panel'>
                                                    <table className='table table-responsive'>
                                                        <tr>
                                                            <th>Country</th>
                                                        </tr>
                                                        <tr><input type='text' className='form-control' name='presentpin' placeholder='Enter Pin'></input></tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                            
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='btn'>
                                        <table>
                                            <tr>
                                                <td> 
                                                    <input type='back' name="Back" value='Back' className='btn btn-outline-danger btn-lg'></input>
                                                </td>
                                                <td>
                                                  <input type='register' name="ok" value='Register' className='btn btn-outline-success btn-lg'></input>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
    </div>
  );
};

export default Register;
