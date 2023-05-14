import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex  flex-col">
      <div className=" w-full flex justify-between items-center">
        <div className="text-blue-700 ps-5 pt-2 text-xl font-extrabold ">
          Food Blog
        </div>
      </div>
      <div className="flex justify-center items-center md:flex-row flex-col mt-8">
        <div className="flex flex-col">
          <h1 className="m-2 ps-3 text-xl font-extrabold">Explore</h1>
          <div className="m-1 ps-4 text-gray-700">Register yourself</div>
          <input
            className=" text-lg p-1 m-2 border-black border-2 hover:border-blue-700"
            placeholder="name"
            type="text"
            name=""
            id=""
          />
          <input
            className=" bg-none text-lg p-1 m-2 border-black border-2 focus:border-blue-700 hover:border-blue-700 "
            placeholder="Email address"
            type="text"
            name=""
            id=""
          />
            <input
              className=" text-lg p-1 m-2 border-black border-2 hover:border-blue-700"
              placeholder="Password"
              type="password"
              name=""
              id=""
            />
          <div  className="">
          <input
            className=" text-lg p-1 m-2 border-black border-2 hover:border-blue-700"
            placeholder="confirm password"
            type={show ? "text" : "password"}
            name=""
            id=""
          />
            <img
              width={23}
              className="flex relative bottom-10 left-48"
              onClick={() => {
                setShow(!show);
              }}
              src={show ? "/images/hide.png" : "/images/eye.png"}
              alt=""
            />
          </div>
         
          <button className="m-4 bg-blue-700 text-white rounded-md w-1/3 p-3  ">
            Signup
          </button>
          <div className="text-black-700 pr-4">
            Already a user?{" "}
            <Link to="/" className="text-blue-600">
              {" "}
              Login
            </Link>{" "}
          </div>
        </div>
        <div className=" md:w-1/3  w-full ">
          <img className="flex md:w-full " src="/images/attachment2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
