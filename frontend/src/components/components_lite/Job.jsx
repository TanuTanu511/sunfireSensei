import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import sunfireLogo from "../assets/sunfire.jpg";
import { Badge } from "../ui/badge";

const Job = () => {
  return (
    <div className="p-5 mt-10 rounded-md shadow-xl bg-white border border-gray-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-sm text-gray-600">3 days ago</h2>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-5 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={sunfireLogo}></AvatarImage>
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium text-left">Company Name</h1>
          <p className="font-sm text-gray-600 text-left">India</p>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-xl font-bold text-left my-2">Job Title</h2>
          <p className="font-sm text-gray-600 text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            rerum dolorum odio culpa assumenda.
          </p>
        </div>
        <div className="mt-3">
          <Badge className={"text-[#5688c7] font-bold border border-gray-200"}>
            10 Position
          </Badge>
          <Badge
            className={"text-[#ef8275] font-bold border border-gray-200 ml-1.5"}
          >
            20 LPA
          </Badge>
          <Badge
            className={"text-[#7851a9] font-bold border border-gray-200 ml-1.5"}
          >
            Remote
          </Badge>
          <Badge
            className={"text-[#022bf8] font-bold border border-gray-200 ml-1.5"}
          >
            Full Time
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <Button variant="outline" className="rounded-sm">Details</Button>
        <Button variant="outline" className="rounded-sm bg-[#5688c7] text-white">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
