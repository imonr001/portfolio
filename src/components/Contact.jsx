import React from "react";

function Contact() {
  return (
    <div name = 'contact' className=" w-full h-screen bg-gray-900 flex justify-center items-center p-4">
      <form
        method='POST'action="https://getform.io/f/c3456a86-2f73-4333-90bf-56868251ff47" className=" flex flex-col max-w-[600px] w-full">
        <div className='pb-8 md:text-center sm:text-left'>
        <p className=" text-4xl font-bold inline border-b-4 border-yellow-300 text-gray-300 "> Contact</p>
        <p className="text-gray-300 py-4"> Please complete the form to contact me! </p>
              </div>
              <input className = 'bg-zinc-200 p-2'type="text" placeholder="Name" name="name" id="" />
              <input className='my-4 p-2 bg-zinc-200' type="email" placeholder="Email" name="email"/>
              <textarea className="bg-zinc-200 p-2" placeholder="Message" name="message" id="" cols="30" rows="10"></textarea>
              <button className="text-white font-bold   border-2 border-yellow-400 hover:bg-yellow-400   hover:border-yellow-300 px-4 py-3 my-8 mx-auto flex items-center"> Let's Collaborate</button>
      </form>
    </div>
  );
}

export default Contact;
