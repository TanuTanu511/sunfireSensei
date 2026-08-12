import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Description = () => {
  const isApplied = false;
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">Title</h1>
            <div className="mt-4">
              <Badge
                className={"text-[#5688c7] font-bold border border-gray-200"}
              >
                10 Position
              </Badge>
              <Badge
                className={
                  "text-[#ef8275] font-bold border border-gray-200 ml-2"
                }
              >
                20 LPA
              </Badge>
              <Badge
                className={
                  "text-[#7851a9] font-bold border border-gray-200 ml-2"
                }
              >
                Remote
              </Badge>
              <Badge
                className={
                  "text-[#022bf8] font-bold border border-gray-200 ml-2"
                }
              >
                Full Time
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
            Job Description
          </h1>

          <div className="my-4">
            <h1 className="font-bold my-2">
              Role:
              <span className="pl-4 font-normal text-gray-800">
                Software Engineer
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Location:
              <span className="pl-4 font-normal text-gray-800">
                Remote
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Salary:
              <span className="pl-4 font-normal text-gray-800">
                $50,000 - $80, 000
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Experience:
              <span className="pl-4 font-normal text-gray-800">
                3 years
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Job Type:
              <span className="pl-4 font-normal text-gray-800">
                Full Time
              </span>
            </h1>
            <h1 className="font-bold my-2">
              Total Applicants:
              <span className="pl-4 font-normal text-gray-800">
                12
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
