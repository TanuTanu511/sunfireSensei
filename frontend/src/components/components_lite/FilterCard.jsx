import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const FilterCard = () => {
  return <div>
    <h1 className="font-bold text-lg">Filter Jobs</h1>
    <hr className="mt-3"/>
    <RadioGroup>
      {
        filterData.map((data, index) => (
          <div className="mt-3">
            <h2 className="font-bold text-lg">{data.filterType}</h2>
            {
              data.array.map((item, index) => (
                <div className="flex items-center space-x-2 mt-2">
                  <RadioGroupItem value={item}></RadioGroupItem>
                  <label>{item}</label>
                </div>
              ))
            }
          </div>
        ))
      }
    </RadioGroup>
  </div>;
};

export default FilterCard;
