import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import useGetSingleJob from "@/hooks/useGetSingleJob";
import { useSelector } from "react-redux";
import store from "@/redux/store";

const Description = () => {
  const params = useParams();
  const jobId = params.id;
  console.log(jobId);
  useGetSingleJob(jobId);
  const isApplied = false;

  const singleJob  = useSelector((store) => store.job?.singleJob || []);
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">{singleJob?.title}</h1>
            <div className="mt-4">
              <Badge
                className={"text-[#5688c7] font-bold border border-gray-200"}
              >
                {singleJob?.position}
              </Badge>
              <Badge
                className={
                  "text-[#ef8275] font-bold border border-gray-200 ml-2"
                }
              >
                {singleJob?.salary} LPA
              </Badge>
              <Badge
                className={
                  "text-[#7851a9] font-bold border border-gray-200 ml-2"
                }
              >
                {singleJob?.jobType}
              </Badge>
              <Badge
                className={
                  "text-[#022bf8] font-bold border border-gray-200 ml-2"
                }
              >
                {singleJob?.location}
              </Badge>
            </div>
          </div>
          <div>
            <Button
              className={`rounded-lg ${isApplied ? "bg-black text-white" : "bg-[#7851a9] text-white hover:bg-[#542390]"}`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>

        <div>
          <h1 className="border-b-2 border-b-gray-400 font-medium py-4">
            {singleJob?.description}
          </h1>

          <div className="my-4">
            <h1 className="font-bold my-2">
              Role:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.position}
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Location:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.location}
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Salary:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.salary} LPA
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Experience:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.experience}
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Job Type:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.jobType}
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Total Applicants:
              <span className="pl-4 font-normal text-gray-800">
                {singleJob?.application?.length}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
