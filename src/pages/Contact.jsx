import React from "react";

const Contact = () => {
  return (
    <div className="h-screen  flex justify-center items-center bg-[#F7F7F7]">
      <div className="bg-white w-[60%] h-[70%] flex shadow-2xl shadow-black rounded-2xl">
        <div className="w-[40%] relative">
          <div className="absolute bg-blue-900 h-[80%] w-[100%] top-[10%] -left-[50px] flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          </div>
        </div>
        <div className="w-[60%]  flex justify-center items-center">
          <div className="w-full flex flex-col items-center gap-3">
            <div className="w-full flex justify-center">
              <div className="w-[75%]">
                <h1 className="text-3xl font-semibold">Get in Touch</h1>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-[75%]">
                <h1 className="text-xl text-black/90">
                  Feel free to drop us a line below!
                </h1>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <input
                type="Text"
                placeholder="Your Name"
                className="w-[75%] bg-gray-200 p-2 "
              />
            </div>
            <div className="w-full flex justify-center">
              <input
                type="Text"
                placeholder="Your Email"
                className="w-[75%] bg-gray-200 p-2"
              />
            </div>
            <div className="w-full flex justify-center">
              <textarea
                type="Text"
                placeholder="Type your message here"
                rows={7}
                className="w-[75%] bg-gray-200 p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
