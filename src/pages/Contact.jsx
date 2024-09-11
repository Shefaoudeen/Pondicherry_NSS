import {
  faEnvelope,
  faLocation,
  faMapMarked,
  faMapMarker,
  faMobile,
  faMobileAlt,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="h-screen  flex justify-center items-center max-md:hidden">
        <div className="bg-white w-[60%] h-[70%] flex shadow-2xl shadow-black rounded-2xl">
          <div className="w-[40%] relative">
            <div className="absolute bg-blue-900 rounded-xl h-[80%] w-[100%] top-[10%] -left-[50px] flex flex-col gap-5 justify-center items-center">
              <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
              <div className="text-white/60 text-center flex flex-col gap-2">
                <h1>
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  Dr. Anzer R.N
                </h1>
                <h1>The State NSS Officer</h1>
                <h1>
                  <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
                  4th Floor, Vikas Bhavan
                </h1>
                <h1>Thiruvanthapuram</h1>
                <h1>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  071-2308687
                </h1>
                <h1>
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                  Mobile : 9447304366
                </h1>
                <h1>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  keralansscell@gmail.com
                </h1>
              </div>
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
              <div>
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-blue-900  text-sm py-10  w-[100%] flex flex-col gap-5 justify-center items-center">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="text-white/60 text-center flex flex-col gap-2">
            <h1>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Dr. Anzer R.N
            </h1>
            <h1>The State NSS Officer</h1>
            <h1>
              <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
              4th Floor, Vikas Bhavan
            </h1>
            <h1>Thiruvanthapuram</h1>
            <h1>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              071-2308687
            </h1>
            <h1>
              <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
              Mobile : 9447304366
            </h1>
            <h1>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              keralansscell@gmail.com
            </h1>
          </div>
        </div>
        <div className="w-full  flex justify-center items-center py-5">
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
            <div>
              <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
