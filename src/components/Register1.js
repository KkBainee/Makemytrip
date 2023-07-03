import React, { useState } from 'react'
import {useForm} from 'react-hook-form'


function Register1() {
    const {register, handleSubmit,formState:{errors},reset}=useForm()
    const [successMsg,setsuccessMsg]=useState();
    const onFormSubmit =(userData)=>{
        console.log(userData);
        setsuccessMsg("Registration Successful");
        reset();
    }
   
    

    return (
        <div>
            <h1 class=" w-100 text-center">Register Now</h1>
            <hr/>
            <div className='row mt-5'>
                <div className='col-11 col-sm-8 col-md-6 mx-auto mt-3'>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                    {successMsg && <p className="lead text-center text-info shadow bg-dark">{successMsg}</p>}
                        <div className='mb-3'>
                            <label htmlFor='un'>Name</label>
                            <input type="text" id='un' className='form-control' {...register("username",{required:true,minLength:4})}/>
                            {errors.username?.type==='required' && <p className='text-danger'>* Username Required</p>}
                            {errors.username?.type==='minLength' && <p className='text-danger'>* Minimum length required is 4 characters</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" id='email' className='form-control' {...register("email",{required:true,pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})}/>
                            {errors.email?.type==='required' && <p className='text-danger'>* Email Required</p>}
                            {errors.email?.type==='pattern' && <p className='text-danger'>* Please Enter a valid Email Address</p>}

                        </div>  
                        <div className='mb-3'>
                            <label htmlFor='phone'>Phone Number</label>
                            <input type="number" id='phone' className='form-control'{...register("phone",{required:true,minLength:10})}/>
                            {errors.phone?.type==='phone' && <p className='text-danger'>Phone Number Required</p>}
                            {errors.phone?.type==='minLength'&& <p className='text-danger'>*Please Enter a valid Phone Number</p>}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='pwd1'>Password</label>
                            <input type="password" id='pwd1' className='form-control' {...register("pwd1",{required:true,validate: {checkLength: (value) => value.length >= 6,matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)}})}/>
                            {errors.pwd1?.type==='required' && <p className='text-danger'>* Password Required</p>}
                            {errors.pwd1?.type==='checkLength' && <p className='text-danger'>* Password Length should be atleast 6 characters</p>}
                            {errors.pwd1?.type==='matchPattern' && <p className='text-danger'>* Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol</p>}
                        </div>
                         <div className='mb-3'>
                            <label htmlFor='pwd2'>Confirm Password</label>
                            <input type="password" id='pwd2' className='form-control' {...register("pwd2",{required:true,minLength:6})}/>
                            {errors.pwd2?.type==='required' && <p className='text-danger'>* Password Required</p>}
                           
                            </div>        

                        <div className='mb-3 text-center'>
                            <button type="submit" className='btn btn-primary'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register1
