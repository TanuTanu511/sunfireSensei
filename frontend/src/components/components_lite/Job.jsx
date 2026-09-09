import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import sunfireLogo from "../assets/sunfire.jpg";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgo = (mongodbTime) => {
    console.log(mongodbTime);
    if (!mongodbTime) return 0;

    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();

    // 2. Fallback check if Date parsing failed
    if (isNaN(createdAt.getTime())) return 0;

    const timediff = currentTime - createdAt;

    // 3. Correct conversion: 1000ms * 60s * 60m * 24h
    const days = Math.floor(timediff / (1000 * 60 * 60 * 24));

    return days < 0 ? 0 : days;
  };
  return (
    <div className="p-5 mt-10 rounded-md shadow-xl bg-white border border-gray-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-200 hover:p-3">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-sm text-gray-600">
          {daysAgo(job?.createdAt) === 0
            ? "Today"
            : `${daysAgo(job?.createdAt)} days ago`}
        </h2>
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
          <h1 className="text-lg font-medium text-left">
            {job?.company?.name}
          </h1>
          <p className="font-sm text-gray-600 text-left">India</p>
        </div>
      </div>

      <div>
        <div>
          <h2 className="text-xl font-bold text-left my-2">{job?.title}</h2>
          <p className="font-sm text-gray-600 text-left">
            {job?.company?.description}
          </p>
        </div>
        <div className="mt-3">
          <Badge className={"text-[#5688c7] font-bold border border-gray-200"}>
            {job?.position}
          </Badge>
          <Badge
            className={"text-[#ef8275] font-bold border border-gray-200 ml-1.5"}
          >
            {job?.salary} LPA
          </Badge>
          <Badge
            className={"text-[#7851a9] font-bold border border-gray-200 ml-1.5"}
          >
            {job?.jobType}
          </Badge>
          <Badge
            className={"text-[#022bf8] font-bold border border-gray-200 ml-1.5"}
          >
            {job?.location}
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="rounded-sm"
        >
          Details
        </Button>
        <Button
          variant="outline"
          className="rounded-sm bg-[#6A38C2] text-white"
        >
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job;
