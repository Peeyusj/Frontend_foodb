import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex  flex-col" >
   <div className=' w-full flex justify-between items-center'>
      <div className='text-blue-700 ps-5 pt-2 text-xl font-extrabold '>Food Blog</div>
      <div className='text-black-700 pr-4'>New user? <Link to='/signup'className='text-blue-600'>Register here</Link> </div>

   </div>
   <div className=' flex justify-center items-center md:flex-row flex-col '>
   <div className='w-1/3 '>
       <img className='flex w-full' src="/images/attachment.png" alt="" />
    </div>
    <div className="flex flex-col">
        <h1 className='m-2 text-lg font-bold'>Welcome Back</h1>
        <div className='m-2  text-gray-700'>Login to Continue</div>
        <input className=' bg-none text-lg p-1 m-2 w-full border-black border-2 focus:border-blue-700 hover:border-blue-700 ' placeholder='Email address' type="text" name="" id="" />
        <div  className="">
          <input
            className=" text-lg p-1 m-2 w-full border-black border-2 hover:border-blue-700"
            placeholder="password"
            type={show ? "text" : "password"}
            name=""
            id=""
          />
            <img
              width={23}
              className="flex relative bottom-10 left-52"
              onClick={() => {
                setShow(!show);
              }}
              src={show ? "/images/hide.png" : "/images/eye.png"}
              alt=""
            />
          </div>        <button className='m-4 bg-blue-700 text-white rounded-md w-1/3 p-3  '>Login</button>
    </div>
   </div>
    </div>
   
  )
}

export default Signin