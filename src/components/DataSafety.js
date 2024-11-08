import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { RiUploadCloud2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMinusCircle } from "react-icons/lu";

function DataSafety() {
  return (
    <div className="max-w-2xl mx-auto text-left p-4">
      <h2 className="text-[15px] font-medium mb-2">Data Safety</h2>
      <p className="text-gray-600 pl-2 text-[12px]">
        Your data is safe with us. We ensure the highest standards of data
        privacy and security.
      </p>
      <div className="border-[1px] border-black rounded-md px-4 py-2 ml-2 text-[12px]">
        <div className="flex gap-4 px-4">
          <span className="text-[10px]">
            <IoShareSocial />
          </span>
          <div>
            <h6 className="text-[10px]">No data shared with third parties</h6>
            <p className="text-[8px]">
              Learn more about how developers declare sharing
            </p>
          </div>
        </div>
        <div className="flex gap-4 px-4">
          <span className="text-[10px]">
            <RiUploadCloud2Line />
          </span>
          <div>
            <h6 className="text-[10px]">No data collected</h6>
            <p className="text-[8px]">
              Leamn more about how developers declare collection
            </p>
          </div>
        </div>
        <div className="flex gap-4 px-4">
          <span className="text-[10px]">
            <RiDeleteBin6Line />
          </span>
          <div>
            <h6 className="text-[10px]">Data isn't encrypted</h6>
            {/* <p className="text-[8px]">
              Learn more about how developers declare sharing
            </p> */}
          </div>
        </div>
        <div className="flex gap-4 px-4">
          <span className="text-[10px]">
            <LuMinusCircle />
          </span>
          <div>
            <h6 className="text-[10px]">
              You can request that data be deleted
            </h6>
            {/* <p className="text-[8px]">
              Learn more about how developers declare sharing
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataSafety;
