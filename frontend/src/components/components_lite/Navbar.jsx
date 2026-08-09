import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "@/redux/store";

function Navbar() {
  const {user} = useSelector((store) => store.auth);

  return (
    <div>
      <div className="flex items-center justify-between mx-12 max-w-7xl h-16 bg-white">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#022bf8]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium gap-6 text-black">
            <li className="hover:text-blue-500"><Link to="/">Home</Link></li>
            <li className="hover:text-blue-500"><Link to="/Browse">Browse</Link></li>
            <li className="hover:text-blue-500"><Link to="/Jobs">Jobs</Link></li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Link to={"/login"}>
                <Button variant="outline" className="text-blue-500">Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button className="bg-blue-300">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger
                render={
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                }
              ></PopoverTrigger>
              <PopoverContent>
                <div className="flex items-center gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Tannu Siwach</h3>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="text-gray-700">
                  <div className="flex w-fit items-center cursor-pointer gap-2">
                    <User2></User2>
                    <Button variant="link"><Link to="/Profile">Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center cursor-pointer gap-2">
                    <LogOut></LogOut>
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
