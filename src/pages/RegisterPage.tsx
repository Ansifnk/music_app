import React from 'react'
import { useNavigate } from 'react-router-dom'


const RegisterPage = () => {
  
  const navigate = useNavigate()

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center' >
      <form>
        <div className="form-outline mb-4">
          <label className="form-label" >Email address</label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" >Password</label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" >Confirm  Password</label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>
        
        <button type="button" className="btn btn-primary btn-block mb-4">Sign Up</button>


      </form>
    </div>
  )
}

export default RegisterPage