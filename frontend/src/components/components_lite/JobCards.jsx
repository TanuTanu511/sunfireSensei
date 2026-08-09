import React from "react";
import { Badge } from "../ui/badge";

const JobCards = () => {
  return (
    <div className="p-5 mt-10 rounded-md shadow-xl bg-white border border-gray-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div>
        <h1 className="text-lg font-medium text-left">Company Name</h1>
        <p className="font-sm text-gray-600 text-left">India</p>
      </div>
      
      <div>
        <h2 className="text-xl font-bold text-left my-2">Job Title</h2>
        <p className="font-sm text-gray-600 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          rerum dolorum odio culpa assumenda.
        </p>
      </div>
      <div className="mt-3">
        <Badge className={"text-[#5688c7] font-bold border border-gray-200"}>10 Position</Badge>
        <Badge className={"text-[#ef8275] font-bold border border-gray-200 ml-1.5"}>20 LPA</Badge>
        <Badge className={"text-[#7851a9] font-bold border border-gray-200 ml-1.5"}>Remote</Badge>
        <Badge className={"text-[#022bf8] font-bold border border-gray-200 ml-1.5"}>Full Time</Badge>
      </div>
    </div>
  );
};

export default JobCards;
