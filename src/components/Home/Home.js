import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='bg-image'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    <div className="welcome-text">
                        <h1>
                            Welcome To<br/>RAIL-<span>GARI !!</span>
                        </h1>
                    </div>
                    </div>
                    <div className='col-6'>
                        <section>
                            <form>
                                <h1>Search Train</h1>
                                <div className='row'>
                                    <div className='col'>
                                        <table className='table table-responsive'>
                                            <tr>
                                                <th>From </th>
                                                <td><input type='text' className='form-control' placeholder='Bording From'></input></td>
                                            </tr>
                                            <tr>
                                                <th>To </th>
                                                <td><input type='text' className='form-control' placeholder='Bording To'></input></td>
                                            </tr>
                                            <tr>
                                                <th>Date :</th>
                                                <td><input type='date' className='form-control'></input></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <button className='btn btn-info '>Search </button>
                            </form> 
                        </section>                    
                    </div>
                </div>
            </div>
        </div>    
      </div>
    </>
  );
};

export default Home;
