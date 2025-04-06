import '../styles/auth.css';
import logo from '../images/eslint.config.png';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { postLogin } from '../utils/api';
import { useState } from 'react';


function LoginPage(){
    const navigate = useNavigate();
    const [email ,setEmail] = useState<string>("");
    const [password ,setPassword] = useState<string>("");

    const onSubmit = async () => {
        try {
            if(email == ""){
                toast.error("Required enter Email!", {
                    position: "top-center"
                  });
                  return;
            }else if(password == ""){
                toast.error("Required enter Password!", {
                    position: "top-center"
                  });
                  return
            }

           await postLogin({email,password});
            navigate('/');
            toast.success("Success login !", {
                position: "top-center"
            });
        } catch (err) {
            toast.error("Email or password incorrect!!!", {
                position: "top-center"
              });
        }
      };


    return (
        <div className="body-auth">
            <div className='d-flex-center w-[100%] pt-[100px] '>
                <div className='bg-white min-w-[30%] xl:min-w-[20%]  rounded-xl shadow-xl'>
                    <div className='d-flex-center w-[100%] '>
                            <Link to="/login" className='text-[15px] text-center font-semibold py-[5px] text-[#01aa85] rounded-xl bg-[#01aa8526] m-[15px] w-[50%]'> 
                                login
                            </Link> 
                            <Link to="/register" className='text-[15px] text-center font-semibold py-[5px] text-white rounded-xl bg-[#01aa85] m-[15px] w-[50%]'>
                                signup
                            </Link>
                    </div>
                </div>
            </div>
            <div className='d-flex-center w-[100%]'>
                <div className='h-[600px] bg-white min-w-[65%] xl:min-w-[45%] rounded-xl mt-[40px]' >
                    <div className='w-[100%] d-flex-center mt-[40px]'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='w-[100%] d-flex-center mt-[20px]'>
                        <div className='text-center'>
                            <h3 className='text-[20px] font-semibold'>Hello Everyone , We are chatzy </h3>
                            <p className='text-[13px] text-[#7f8384]'>Wellcome to chatzy please, login to your account.</p>
                        </div>
                    </div>
                    <div className='form w-[100%] mt-[35px]  d-flex-center'>
                        <div className='w-[80%]'>
                            <div className='input-field w-[100%] mt-[15px] mb-[10px]'>
                                <p className='w-[100%] mt-[5px] mb-[15px] font-semibold text-[15px]'>Email Address</p>
                                <input 
                                    className='w-[100%] text-[15px] boder_input_v1' 
                                    type="email" 
                                    name='email'
                                    placeholder='Enter your email' 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required />

                            </div>
                            <div className='input-field w-[100%] mt-[15px] mb-[10px]'>
                                <p className='w-[100%] mt-[5px] mb-[15px] font-semibold text-[15px]'>Password</p>
                                <input 
                                    className='w-[100%] text-[15px] boder_input_v1' 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required />
                            </div>
                           

                            <div className='w-[100%] d-flex-center-space-between mt-[20px]'>
                                    <div className='d-flex'>
                                        <input type='checkbox' /> <span className='text-[12px] m-[5px]'>Remember me</span>
                                    </div>
                                    <div className='lex'>
                                        <Link to="/">   
                                            <span className='text-[12px] m-[5px]'>Forgot password?</span>
                                        </Link>
                                    </div>
                            </div>
                            <div className='mt-[20px]'>
                                <button onClick={onSubmit} className='h-[50px] w-[150px] btn-primary rounded-xl'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default LoginPage;
