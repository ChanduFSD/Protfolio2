import React,{useState} from "react";
import { MdError } from "react-icons/md";


const Contact = () => {

  const [error,setError]=useState(false)

  const handelChange = (val)=>{
    if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/)){
      setError(false)
    }else{
      setError(true)
    }
  }


  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/nadeeeeb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            required/>
         <>
         <input 
              onChange={(e)=>handelChange(e.target.value)}
              type="mail"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"required
            />
            {error? <p style={{color:"red"}} className="flex items-center "><MdError />Enter a valid Email</p>:''}
           </>


            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"required
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
