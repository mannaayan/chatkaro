import React from 'react'
import  '../pages/signup.css';
import Avter from "../asstes/image.png"

const Signup = () => {
  return (
    
    <div className="container">

            {/* heading-container */}
        <div className='header-container'>
                
                <div className="heading">

                    {/* for text */}
                    <div className='heading-text'>
                        <h3>
                            <a href="/" className='a'>

                                <i className='i'></i>
                                Doot
                            </a>
                        </h3>

                        <p className='description'>Responsive Bootstrap 5 Chat App</p>
                        

                    </div>
                    
                    {/* for image */}
                    <div className="head-img">
                         
                        <img src={Avter} alt="Avter" className='avter'  />
                         
                    </div>

                </div>

                
        </div>



            {/* main-Container */}
        <div className="main-container">

                <div className="auth-layout-container">
                    
                    <div className="main-head-container">

                        <div className="signup-container">
                                <div className="main-head">
                                    <h1>Register Account</h1>
                                    <p className='p'>Get your free account now.</p>
                                </div>

                                <form action=""  className='signup-from'>
                                    <div className='field'>
                                        <label htmlFor="email"> Email </label>
 
                                        <input type="text" name="email" id="email" className="imp" placeholder='********'/>
                                         
                                    </div>

                                    <div className="field">

                                        <label htmlFor="username"> Username </label>
                                        <br />

                                        <input type="text" name="username" id="username" placeholder='********'/>
                                        <br />
                                        <br />
                                    </div>

                                    <div className="field">

                                        <label htmlFor="password"> password </label>
                                        <br />

                                        <input type="text" name="password" id="password" placeholder='********'/>
                                        <br />
                                        <br />
                                    </div>
                                    <div className="field">

                                        <p>By registering you agree to the Chat karo Terms of Use</p>
                                    </div>

                                    <div className="submit">

                                    <button type="submit">Register</button>
                                    </div>

                                    <div className="auth-Container">

                                    </div>

                                    <div className="auth-items">
                                        <button type="submit">facebook</button>
                                        <button type="submit">Google</button>

                                    </div>


                                </form>

                                <div className="islogin">
                                    <p>Already have an account? Login</p>

                                </div>

                        </div>
                             
                    </div>

                </div>

        </div>
    
    </div> 
    
  )
}

export default Signup;