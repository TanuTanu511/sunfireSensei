import React from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const skills = [
  "Artificial Intelligence",
  "Machine Learning",
  "Python",
  "Java",
  "JavaScript",
  "C++",
  "React",
  "Angular",
  "Node.js",
  "SQL",
  "NoSQL",
  "Git",
];

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400 hover:shadow-amber-300">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1>Full Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <Button variant="outline" className="text-right mt-4">
            <Pen />
          </Button>
        </div>

        <div className="my-5 mx-3">
          <div className="flex items-center gap-3 my-3">
            <Mail />
            <span>govind@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-3">
            <Contact />
            <span>+919637283940</span>
          </div>
        </div>

        <div className="my-5 mx-3">
          <div>
            <h2 className="font-bold text-lg">Skills</h2>
            <div className="flex items-center gap-3 my-3">
              {skills.length !== 0 ? (
                skills.map((skill, index) => <Badge key={index}>{skill}</Badge>)
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
