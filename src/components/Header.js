import React from "react";
import logo from "../logo.jpeg";
import { IoShareSocial } from "react-icons/io5";
import { BiBookmarkPlus } from "react-icons/bi";

function Header() {
  return (
    <div className="p-4 max-w-2xl mx-auto p-4 font-light">
      <div className="flex justify-around items-center p-2">
        <img
          src={logo}
          alt="Rummy Cafe Blast Logo"
          className="w-[150px] h-[150px]"
        />
        <div className="flex flex-col items-center justify-start text-[25px]">
          <p className="text-4xl">Adult Video</p>
          <p className="text-4xl">Call</p>
          {/* <p className="text-green-600">Free Cash Bonus ₹5,000</p> */}
        </div>
      </div>
      <div className="flex justify-between items-start mt-4 px-8">
        <div className="text-center">
          <span className="block text-[20px] font-semibold flex justify-center items-center">
            4.1 <span className="text-[10px]">★</span>
          </span>
          <span className="text-gray-600 text-[13px]">3.07L reviews</span>
        </div>
        |
        <div className="text-center">
          <span className="block text-[20px] font-semibold flex justify-center items-center">
            1Cr<span className="text-[10px]">+</span>
          </span>
          <span className="text-gray-600 text-[13px]">Downloads</span>
        </div>
        |
        <div className="text-center">
          <span className="block text-[20px] font-semibold flex justify-center items-center">
            18<span className="text-[10px]">+</span>
          </span>
          <span className="text-gray-600 text-[13px]">Rated for 18</span>
        </div>
      </div>
      <div className="mt-4">
        {/* Download the apk stored in public folder */}

        <a href="/VideoCalling.apk" download="Video Calling.apk">
          <button className="bg-green-500 text-white w-full py-2 rounded-lg">
            Install
          </button>
        </a>
      </div>
      <div className="mt-2 text-center">
        <a href="/VideoCalling.apk" download="Video Calling.apk">
          <button
            href="#"
            className=" border-green-500 border-[1px] text-green-500 w-full py-2 rounded-lg"
          >
            See in Play Store app
          </button>
        </a>
      </div>
      <div className="mt-2 text-center flex justify-around text-green-500">
        <a href="/VideoCalling.apk" download="Video Calling.apk">
          <button className=" py-2 px-4 rounded-lg flex justify-center items-center gap-1 text-[17px]">
            <IoShareSocial className=" text-[24px]" />
            <span className="text-[17px]">Share</span>
          </button>
        </a>
        <a href="/VideoCalling.apk" download="Video Calling.apk">
          <button className=" py-2 px-4 rounded-lg flex justify-center items-center gap-1 ">
            <BiBookmarkPlus className=" text-[24px]" />
            <span className="text-[17px]">Add to wishlist</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
