import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
        <form>
            <div className='container col-sm-6'>
                <div className='row'>
                    <div className='col-12 '>
                        <h1>Log In</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <table className='table table-responsive'>
                            <tr>
                                <th>User Id :</th>
                                <td><input type='text' className='form-control' placeholder='Enter User Id'></input></td>
                            </tr>
                            <tr>
                                <th>Password :</th>
                                <td><input type='password' className='form-control' placeholder='Enter Your Password'></input></td>
                            </tr>
                            <tr>
                                <th>Captcha :</th>
                                <td><input type='captcha' className='form-control' placeholder='Enter Captcha Here'></input></td>
                            </tr>
                            <tr>
                                <th>Captcha</th>
                                <td>X35UfG</td>
                            </tr> 
                        </table>
                    </div>
                    <div className='btn'>
                        <input type='login' name="ok" value='Log In' className='btn btn-outline-success btn-lg'></input>
                        <input type='register' name="ok" value='Register' className='btn btn-outline-primary btn-lg'></input>
                    </div>
                </div>
            </div>
        </form>
    </div>
  );
};

export default Login;
